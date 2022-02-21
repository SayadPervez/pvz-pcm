let encodedWaveCanvas = document.getElementById('encodedWaveCanvas');
let encodedWaveCtx = encodedWaveCanvas.getContext('2d');

let canvas_width = encodedWaveCanvas.parentElement.clientWidth || 1100;
let canvas_height = 250;
let orgx = 50;
let orgy = canvas_height / 2;

encodedWaveCanvas.width = canvas_width;
encodedWaveCanvas.height = canvas_height;

const wave_amplitude_element = document.getElementById("swamplitude");
const wave_frequency_element = document.getElementById("swfrequency");
const sampling_frequency_element = document.getElementById("safrequency")
const vertical_scale_element = document.getElementById("encodedwave_vertical_scale_factor");
const horizontal_scale_element = document.getElementById("encodedwave_horizontal_scale_factor");
const bl_scale_element = document.getElementById("bit_length_factor");
const check_quantized_points = document.getElementById("quantized_points");

// Draws the axes for the graph
function drawAxes(ctx, orgx, orgy, line_start, line_end) {
    ctx.beginPath();
    // Vertical line
    ctx.moveTo(orgx, line_start);
    ctx.lineTo(orgx, line_end);
    ctx.strokeStyle = "black";
    ctx.stroke();

    // Horizontal line
    ctx.moveTo(orgx, line_end);
    ctx.lineTo(canvas_width - 50, line_end);
    ctx.strokeStyle = "black";
    ctx.stroke();

    // Base line
    ctx.moveTo(orgx, (line_start + line_end) / 2);
    ctx.lineTo(canvas_width - 50, (line_start + line_end) / 2);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Amplitude", orgx + 10, line_start + 10, 90);
    ctx.fillText("Time", canvas_width - 100, line_end + 20, 70);
    ctx.closePath();
}

/*
 * Returns an array of values starting with value *start* ending
 * at value *stop* and with an increment of *step*.
 * xrange(1, 3, 0.5) will return [1, 1.5, 2, 2.5, 3]
 */
function xrange(start, stop, step) {
    var res = [];
    var i = start;
    while (i <= stop) {
        res.push(i);
        i += step;
    }
    return res;
}

function d2b(x,bitLength=8)
{
    var result = "0000000000000000000000000"+(x >>> 0).toString(2);
    return(result.substr(result.length-bitLength));
}

function customBinaryFunc(x,amplitude,bitLength=8)
{
    var n=2;
    while(1)
    {
        if(Math.pow(2,n)>amplitude+1)
            break;
        else
            n+=1;
    }
    var quantizedAmpList=[]
    var equivalentBinList=[]
    var i=0;
    while(i<=Math.pow(2,n))
    {
        //quantizedAmpList.push(i);
        equivalentBinList.push(d2b(i,bitLength));
        i+=1;
    }
    var i = -1*Math.pow(2,n)/2;
    while(i<=Math.pow(2,n)/2)
    {
        quantizedAmpList.push(i);
        i+=1;
    }
    return(equivalentBinList[quantizedAmpList.indexOf(x)]);
}

function plotPcmWave(ctx, t, x, wave_amplitude, xOffset, yOffset, vertical_scaling_factor, horizontal_scaling_factor)
{
    var bitLength=bl_scale_element.value;
    console.log('bitlength: ', bitLength, ' wave_amplitude: ', wave_amplitude);
    ctx.beginPath();
    ctx.strokeStyle = "darkgreen";
    ctx.stroke();
    ctx.moveTo(orgx, orgy);
    
    var binList=[]  // contains all of the binary coded words
    var quantizedList=[];
    var entireBinaryString = "";
    x.forEach((item)=>{
        quantizedList.push(Math.round(item));
        /////////////// EXPERIMENTAL ////////////////////
        if(check_quantized_points.checked)
            var temp=customBinaryFunc(Math.round(item),wave_amplitude*2,bitLength);
        else
            var temp=d2b(item,bitLength);
        /////////////////////////////////////////////////
        binList.push(temp);
        entireBinaryString+=temp;
    });
    var binNumbList=[];
    for(var i=0;i<entireBinaryString.length;i++)
    {
        binNumbList.push(Number(entireBinaryString[i]));
    }
    if(dFlag)
    {
        console.log(quantizedList);
        console.log("bitLength=>",bitLength);
        console.log("binList=>",binList);
        console.log("binString=>",entireBinaryString);
        console.log("binNumbList=>",binNumbList);
        console.log("------------------------");
        dFlag=!dFlag;
    }
    var totalDivisions = x.length*bitLength;
    var idx = 0;
    while (idx < totalDivisions) {
        var bcx=binNumbList[idx];
        if(idx>0)
        {
            if((bcx==1)&&(binNumbList[idx-1]==0))
            {
                ctx.lineTo(xOffset + (idx) * horizontal_scaling_factor/bitLength, yOffset - 40 *0);
                ctx.stroke();
            }
        }
        if(idx>0)
        {
            if((bcx==0)&&(binNumbList[idx-1]==1))
            {
                ctx.lineTo(xOffset + (idx) * horizontal_scaling_factor/bitLength, yOffset - 40 *3);
                ctx.stroke();
            }
        }
        ctx.lineTo(xOffset + idx * horizontal_scaling_factor/bitLength, yOffset - 40 *3* bcx);
        ctx.stroke();
        idx++;
    }
    ///////////////////////
    ctx.closePath();
}

// Will draw the sine wave starting from loc xOffset, yOffset
function plotSine(ctx, amplitude, frequency, xOffset, yOffset, vertical_scaling_factor, horizontal_scaling_factor) {
    var width = 1000;
    // Gets the wave's amplitude, frequency and sampling freq value.
    var Fs = document.getElementById('safrequency').value;

    // Generates the values for the sine wave.
    var StopTime = 1;
    var dt = 1 / Fs;
    var t = xrange(0, StopTime + dt, dt);
    var x = [];
    t.forEach((val) => {
        x.push(amplitude * Math.sin(2 * Math.PI * frequency * val));
    });

    plotPcmWave(ctx, t, x, amplitude, xOffset, yOffset, vertical_scaling_factor, horizontal_scaling_factor);
}

let size_set = false;

export function getQuantizationLevels() {
    var Fs = sampling_frequency_element.value;
    var StopTime = 1;
    var dt = 1 / Fs; // sampling interval
    var t = xrange(0, StopTime + dt, dt); // generates a list of t values seperated by sampling interval
    return t.length;
}

export function drawEncodedWave() {
    const wave_amplitude = wave_amplitude_element.value;
    const wave_frequency = wave_frequency_element.value;
    const vertical_scaling_factor = vertical_scale_element.value;
    const horizontal_scaling_factor = horizontal_scale_element.value;

    canvas_height = encodedWaveCanvas.parentElement.clientHeight;
    canvas_width = encodedWaveCanvas.parentElement.clientWidth;
    if (canvas_height > 100 && !size_set) {
        canvas_height = encodedWaveCanvas.parentElement.clientHeight;
        canvas_width = encodedWaveCanvas.parentElement.clientWidth;
        encodedWaveCtx.canvas.width = canvas_width;
        encodedWaveCtx.canvas.height = canvas_height;
        size_set = true;
    }

    // Clear the screen
    encodedWaveCtx.fillStyle = "white";
    encodedWaveCtx.fillRect(0, 0, canvas_width, canvas_height);

    // Vertical line start and end
    const line_start = 20;
    const line_end = canvas_height - 50;
    const mid_of_line = (line_start + line_end) / 2;

    drawAxes(encodedWaveCtx, orgx, orgy, line_start, line_end);
    plotSine(encodedWaveCtx, wave_amplitude, wave_frequency, orgx, mid_of_line, vertical_scaling_factor, horizontal_scaling_factor);
    requestAnimationFrame(drawEncodedWave);
}