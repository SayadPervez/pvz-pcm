import { activeTool, currMouseAction } from "./menutools.js"
import { MouseAction } from "./circuit_components/Enums.js"
import { WireManager } from "./circuit_components/Wire.js";
import { FG } from "./circuit_components/FG.js";
import { Modulator } from "./circuit_components/Modulator.js";
import { DSBSCdet } from "./circuit_components/DSBSCdetector.js";
import { SSB } from "./circuit_components/SSBdetector.js";
import { Filter } from "./circuit_components/Filter.js";
import { Adder } from "./circuit_components/Adder.js";
import { DSBFC_Output } from "./circuit_components/DSBFC-Output.js";
import { DSBSC_Output } from "./circuit_components/DSBSC-Output.js";
import { SSB_Output } from "./circuit_components/SSB-Output.js";
import { Envelop } from "./circuit_components/envelope.js";
import { DSBFC } from "./circuit_components/DSBFC.js";
import { FGWave } from "./circuit_components/FGWave.js";
import { WaveType } from "./circuit_components/Wave.js";
import { DSBSC } from "./circuit_components/DSBSC.js";
import { SideBands } from "./circuit_components/SideBands.js";

export let Images = []; // gates images
export let functionGenerators = [];
export let adders = [];
export let filters = [];
export let modulators = [];
export let outputs = [];
export let envelops = [];
export let Demodulators = [];
export let wireMng;
export let colorMouseOver = [0, 0x7B, 0xFF];

const audioCtx = null;

export let canvasHeight;
export let canvasWidth;

let calculator2 = null;

let lastDoubleClicked = null;
let lastSingleClicked = null;
let lastDoubleClickedIndex = -1;
let externalInput = null;
let sidebarWidth = 0;
let externalInputShown = false;

export function preload() {
    Images.push(loadImage('images/FG.png'));
    Images.push(loadImage('images/Filter.png'));
    Images.push(loadImage('images/Adder.png'));
    Images.push(loadImage('images/Modulator.png'));
    Images.push(loadImage('images/DSBFC-Output.png'));
    Images.push(loadImage('images/DSBSC-Output.png'));
    Images.push(loadImage('images/SSB-Output.png'));
    Images.push(loadImage('images/Envelope.png'));
    Images.push(loadImage('images/DSBSCdetector.png'));
    Images.push(loadImage('images/SSBdetector.png'));
}

export function setup() {
    sidebarWidth = 225;

    canvasHeight = windowHeight - 90;
    canvasWidth = windowWidth - sidebarWidth;

    let canvas = createCanvas(canvasWidth, canvasHeight, P2D);

    canvas.parent('canvas-sim');
    document.getElementsByClassName("tools")[0].style.height = canvasHeight;
    var elt2 = document.getElementById('calculator2');
    calculator2 = Desmos.Calculator(elt2, { "keypad": false });


    externalInput = document.getElementById("externalInput");

    wireMng = new WireManager();

    let setbtn = document.getElementById("setbtn");
    setbtn.onclick = generateGraph2;
}

function showExternalInput(show) {
    if (show == false) {
        externalInput.setAttribute("style", "display: none");
        return;
    }
    externalInput.setAttribute("style", "display: inline");
}

function resizeWindow() {
    resizeCanvas(windowWidth - sidebarWidth, canvasHeight);
    document.getElementsByClassName("tools")[0].style.height = canvasHeight;
}

export function windowResized() {
    resizeWindow();
}

export function draw() {
    background(0xFF);
    stroke(0);
    strokeWeight(4);
    fill(0xFF)
    rect(0, 0, width, height);

    wireMng.draw();

    for (let i = 0; i < functionGenerators.length; i++)
        functionGenerators[i].draw();

    for (let i = 0; i < filters.length; i++)
        filters[i].draw();

    for (let i = 0; i < adders.length; i++)
        adders[i].draw();

    for (let i = 0; i < modulators.length; i++)
        modulators[i].draw();

    for (let i = 0; i < outputs.length; i++)
        outputs[i].draw();

    for (let i = 0; i < envelops.length; i++)
        envelops[i].draw();

    for (let i = 0; i < Demodulators.length; i++)
        Demodulators[i].draw();

    generateGraph();
    showInput();
}

function showInput() {
    if (lastSingleClicked == null && externalInputShown == true) {
        showExternalInput(false);
        resizeWindow();
        externalInputShown = false;
    } else if (lastSingleClicked != null) {
        if (externalInputShown == false) {
            resizeWindow();
            externalInputShown = true;
        }
        showExternalInput(true);
    }
}

export function generateGraph2() {
    if (lastSingleClicked == null) return;
    if (lastSingleClicked instanceof FG) {
        let inputtedfreq = document.getElementById("freqExt").value;
        let inputtedAmp = document.getElementById("amplExt").value;
        lastSingleClicked.freq = inputtedfreq;
        lastSingleClicked.amplitude = inputtedAmp;
        document.getElementById("cont").innerHTML = "<h4>" + "Frequency :" + inputtedfreq + " Hz" + "<br>" + "Amplitude :" + inputtedAmp + " V" + "</h4>";
        alert("FG Input has been changed !");
    }
}

function generateGraph() {
    if (lastDoubleClicked == null) return;
    document.getElementById("cont").setAttribute("style", "display:none");
    document.getElementById("cont1").setAttribute("style", "display:none");
    document.getElementById("shad").setAttribute("style", "display:auto");
    let subtitle = document.getElementById("Sub-title");
    let title = "";

    if (lastDoubleClicked instanceof FG) {
        // Returns a simple wave
        let wave = lastDoubleClicked.getOutput();

        let freq = float(wave.freq);
        let amp = float(wave.amp);
        let s = 'y(x) = ' + wave.getExpression();

        calculator2.setExpressions([
            { id: '3', latex: s, color: Desmos.Colors.GREEN, keypad: false }
        ]);
        // TODO: Try to fix scale in desmos rather than dividing the frequency using scale
        document.getElementById("cont").setAttribute("style", "display:inline");
        document.getElementById("cont").innerHTML = "<h4>" + "Frequency :" + freq + " Hz" + "&nbsp" + "&nbsp" +
            "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" +
            "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "Amplitude :" + amp + " V" + "</h4>";
        title = `FG ${lastDoubleClickedIndex + 1}`;
    }
    else if (lastDoubleClicked instanceof Modulator) {
        let wave = lastDoubleClicked.getOutput(); // DSBSC wave

        // Make sure wave1 and wave2 are simple waves
        // This means only FG can be connected to modulator directly 
        let Am = float(wave.am);
        let Ac = float(wave.ac);

        let yt = wave.getExpression();

        calculator2.setExpressions([
            { id: '3', latex: yt, color: Desmos.Colors.RED }
        ]);
        var mi = (Am / Ac);
        let r = 1;
        var powc = ((Ac * Ac) / 2 * r);
        var powtdsbsc = (powc * (1 + ((mi * mi) / 2)));
        document.getElementById("cont").setAttribute("style", "display:inline");
        document.getElementById("cont").innerHTML = "<h4>" + "Modulation Index : " + mi + "<br>" + "<br>" + "Total Power of DSB-SC : " + powtdsbsc + " Watts" + "</h4>" + "<br>";

        let html = "Over Modulation";
        if (mi < 1) {
            html = "Under Modulation";
        } else if (mi == 1) {
            html = "Ideal Modulation";
        }
        document.getElementById("cont1").setAttribute("style", "display:inline-block");
        document.getElementById("cont1").innerHTML = "<h5>" + "Type of Modulation is <b>" + html + "</b> </h5>";
        title = `Balanced Modulator ${lastDoubleClickedIndex + 1}`;
    }
    else if (lastDoubleClicked instanceof Filter) {
        let wave = lastDoubleClicked.getOutput();
        let yt = wave.getExpression();

        calculator2.setExpressions([
            { id: '3', latex: yt, color: Desmos.Colors.YELLOW }
        ]);
        // var mi = (Am / Ac);
        // let r = 1;
        // var powc = ((Ac * Ac) / 2 * r);
        // var powtdsbsc = (powc * (mi * mi) / 2);
        // var powtssbsc = (powc * (mi * mi) / 4);
        // document.getElementById("cont").innerHTML = "<h4>" + "Total Power of DSB-SC : " + powtdsbsc + "<br>" + "Total Power of SSB : " + powtssbsc + "</h4>";
        document.getElementById("shad").setAttribute("style", "display:none");
        title = `LSB ${lastDoubleClickedIndex + 1}`;
    }
    else if (lastDoubleClicked instanceof Adder) {
        let wave = lastDoubleClicked.getOutput();

        let yt = 'y(x)=' + wave.getExpression();

        calculator2.setExpressions([
            { id: '3', latex: yt, color: Desmos.Colors.ORANGE }
        ]);
        document.getElementById("shad").setAttribute("style", "display:none");
        title = `Adder ${lastDoubleClickedIndex + 1}`;
    }
    else if (lastDoubleClicked instanceof DSBFC_Output ||
             lastDoubleClicked instanceof DSBSC_Output ||
             lastDoubleClicked instanceof SSB_Output ) {
        let wave = lastDoubleClicked.getOutput();
        let val = new FGWave(0, 0);
        let gname = '';
        let Ac = 0;
        let Am = 0;
        if (wave instanceof DSBFC) {
            val = wave.dsbsc.message;
            let Ac = float(wave.dsbsc.ac);
            let Am = float(wave.dsbsc.am);
            var mi = (Am / Ac);
            let r = 1;
            var powc = ((Ac * Ac) / 2 * r);
            var powtdsbfc = (powc * (1 + ((mi * mi) / 2)));
            var dsbfceff = (mi*mi)/(2+(mi*mi));

            document.getElementById("cont").setAttribute("style", "display:inline");

            document.getElementById("cont").innerHTML = "<h4>" + "Modulation Index : " + mi + "<br>" +
                "<br>" + "Total Power of DSB-FC : " + powtdsbfc.toFixed(3) + " Watts" + "<br>" +
                "Effeciency of DSB-FC :" + ((dsbfceff*100).toFixed(3)) + "%" + "</h4>";

        } else if (wave instanceof DSBSC) {
            val = wave.message;
            Ac = float(wave.ac);
            Am = float(wave.am);

            var mi = (Am / Ac);
            let r = 1;
            var powc = ((Ac * Ac) / 2 * r);
            var powtdsbsc = (powc * (mi * mi) / 2);
            let dsbssceff = (2/(2+(mi*mi)));
            document.getElementById("cont").setAttribute("style", "display:inline");

            document.getElementById("cont").innerHTML = "<h4>" + "Total Power of DSB-SC : " + powtdsbsc.toFixed(3) + " Watts" + "<br>" +
                "Effeciency of DSB-SC :" + ((dsbssceff*100).toFixed(3)) + "%" + "</h4>";

        } else if (wave instanceof SideBands) {
            val = new FGWave(wave.fm, 1);

            Ac = wave.ac;
            Am = wave.am;
            var mi = (Am / Ac);
            let r = 1;
            var powc = ((Ac * Ac) / 2 * r);
            var powtssbsc = (powc * (mi * mi) / 4);
            let ssbeff = (4+(mi*mi))/(4+2*(mi*mi));
            document.getElementById("cont").setAttribute("style", "display:inline");

            document.getElementById("cont").innerHTML = "<h4>" + "Total Power of SSB : " + powtssbsc.toFixed(3) + " Watts" + "<br>" +
                "Effeciency of SSB :" + ((ssbeff*100).toFixed(3)) + "%" + "</h4>";
        }

        let wc = val.getExpression();
        calculator2.setExpressions([
            { id: '3', latex: wc, color: Desmos.Colors.PURPLE }
        ]);
        console.log(wave);

        if (wave instanceof DSBFC) {
            gname = 'DSB-FC Demodulated';
        } else if (wave instanceof DSBSC) {
            gname = 'DSB-SC Demodulated';
        } else if (wave instanceof SideBands) {
            gname = 'SSB Demodulated';

        }
        title = `${gname}`;
    }
    else if (lastDoubleClicked instanceof Envelop || lastDoubleClicked instanceof SSB || lastDoubleClicked instanceof DSBSCdet) {
        // Envelop detector
        let wave = lastDoubleClicked.getOutput();

        let wc = '';
        if (wave instanceof DSBFC) {
            var am = wave.dsbsc.am;
            var fm = wave.dsbsc.fm;
            var ac = wave.dsbsc.ac;
            var fc = wave.dsbsc.fc;
            // Ka modulation index;
            // DSB-FC demodulation formula
            // m(t) = Am sin ( 2 pi fm t);
            // s(t) = Ac[1 + ka m(t)] cos2pifct
            // Demod = 1/Ka ( (s(t) / Ac cos 2pifct) - 1)
            var ka = 1 / ac;

            var msg = `(${am} * \\sin( 2 * \\pi * ${fm} * x))`;
            var st = `(${ac} * (1 + ${ka} * ${msg}) * \\cos (2 * \\pi * ${fc} * x))`;
            wc = `(1 / ${ka}) *((${st} / (${ac} * \\cos (2 * \\pi * ${fc} * x))) - 1)`;
        } else if (wave instanceof DSBSC) {
            var am = wave.am;
            var fm = wave.fm;
            var ac = wave.ac;
            var fc = wave.fc;

            var st = `((${am} * ${ac}) * \\cos(2 * \\pi * ${fc} * x) * \\cos(2 * \\pi * ${fm} * x))`;
            var vt = `(${st} * (${ac} * \\cos(2 * \\pi * ${fc} * x)))`;
            var m1 = `(\\cos(2 * \\pi * (${fm} + 2*${fc})*x))`;
            var m2 = `(\\cos(2 * \\pi * (${fm} - 2*${fc})*x))`;
            wc = `(${vt} - ((0.25 * ${ac} * ${ac} * ${am}) * (${m1} + ${m2})))`;
        } else if (wave instanceof SideBands) {
            var am = wave.am;
            var fm = wave.fm;
            var ac = wave.ac;
            var fc = wave.fc;

            var st = `((${am} * ${ac})/2 * (\\cos(2 * \\pi * (${fc} - ${fm}) * x)))`;
            var vt = `(${st}*(${ac}*(\\cos(2*\\pi*${fc}*x))))`;
            wc = `(${vt} - ((${am} * ${ac} * ${ac}/4) * \\cos( 2 * \\pi * (2 * ${fc} - ${fm}) * x)))`;
        }

        calculator2.setExpressions([
            { id: '3', latex: wc, color: Desmos.Colors.PURPLE }
        ]);
        let mod = '';
        if (lastDoubleClicked instanceof Envelop) {
            mod = 'Envelope Detector';
            setTimeout(() => {

                var button1 = document.getElementById("opt2");
                button1.click();

            }, 2000)


        } else if (lastDoubleClicked instanceof SSB) {
            mod = 'SSB Demodulator';
            setTimeout(() => {
                var button1 = document.getElementById("opt4");
                button1.click();

            }, 2000)
        } else if (lastDoubleClicked instanceof DSBSCdet) {
            mod = 'DSB-SC Demodulator';
            setTimeout(() => {
                var button1 = document.getElementById("opt3");
                button1.click();

            }, 2000)
        }
        title = `${mod} ${lastDoubleClickedIndex + 1}`;
        document.getElementById("shad").setAttribute("style", "display:none");
    }

    // FIXME: Fix this hack
    var button = document.getElementById("opt1");
    button.click();




    subtitle.innerHTML = title;
}

function updateExternalInput() {
    let freq = document.getElementById("freqExt");
    let amp = document.getElementById("amplExt");
    freq.value = lastSingleClicked.freq;
    amp.value = lastSingleClicked.amplitude;
}

export function mousePressed() {
    /** Check gate[] mousePressed funtion*/
    for (let i = 0; i < functionGenerators.length; i++)
        if (functionGenerators[i].mousePressed()) {
            lastSingleClicked = functionGenerators[i];
            lastDoubleClicked = null;
            lastDoubleClickedIndex = -1;
            updateExternalInput();
            return;
        }

    for (let i = 0; i < filters.length; i++)
        filters[i].mousePressed();

    for (let i = 0; i < adders.length; i++)
        adders[i].mousePressed();

    for (let i = 0; i < modulators.length; i++)
        modulators[i].mousePressed();

    for (let i = 0; i < outputs.length; i++)
        outputs[i].mousePressed();

    for (let i = 0; i < envelops.length; i++)
        envelops[i].mousePressed();

    for (let i = 0; i < Demodulators.length; i++)
        Demodulators[i].mousePressed();

    lastDoubleClicked = null;
    lastDoubleClickedIndex = -1;

    // Make sure singleclicked is set to null only when the click is
    // inside the canvas bounds
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < width)
        lastSingleClicked = null;
}

export function mouseReleased() {
    for (let i = 0; i < functionGenerators.length; i++)
        functionGenerators[i].mouseReleased();

    for (let i = 0; i < filters.length; i++)
        filters[i].mouseReleased();

    for (let i = 0; i < adders.length; i++)
        adders[i].mouseReleased();

    for (let i = 0; i < modulators.length; i++)
        modulators[i].mouseReleased();

    for (let i = 0; i < outputs.length; i++)
        outputs[i].mouseReleased();

    for (let i = 0; i < envelops.length; i++)
        envelops[i].mouseReleased();

    for (let i = 0; i < Demodulators.length; i++)
        Demodulators[i].mouseReleased();

    lastDoubleClicked = null;
    lastDoubleClickedIndex = -1;
}

export function doubleClicked() {
    for (let i = 0; i < filters.length; i++)
        if (filters[i].doubleClicked()) {
            lastDoubleClicked = filters[i];
            lastDoubleClickedIndex = i;
            return;
        }
    for (let i = 0; i < functionGenerators.length; i++)
        if (functionGenerators[i].doubleClicked()) {
            lastDoubleClicked = functionGenerators[i];
            lastDoubleClickedIndex = i;
            return;
        }
    for (let i = 0; i < modulators.length; i++)
        if (modulators[i].doubleClicked()) {
            lastDoubleClicked = modulators[i];
            lastDoubleClickedIndex = i;
            return;
        }
    for (let i = 0; i < adders.length; i++)
        if (adders[i].doubleClicked()) {
            lastDoubleClicked = adders[i];
            lastDoubleClickedIndex = i;
            return;
        }
    for (let i = 0; i < outputs.length; i++)
        if (outputs[i].doubleClicked()) {
            lastDoubleClicked = outputs[i];
            lastDoubleClickedIndex = i;
            return;
        }
    for (let i = 0; i < envelops.length; i++)
        if (envelops[i].doubleClicked()) {
            lastDoubleClicked = envelops[i];
            lastDoubleClickedIndex = i;
            return;
        }
}

/**
 * Override mouseClicked Function
 * 
 */
export function mouseClicked() {
    //Check current selected option
    if (currMouseAction == MouseAction.EDIT) {
        //If action is EDIT, check every class. 
        for (let i = 0; i < functionGenerators.length; i++)
            functionGenerators[i].mouseClicked();

        for (let i = 0; i < filters.length; i++)
            filters[i].mouseClicked();

        for (let i = 0; i < adders.length; i++)
            adders[i].mouseClicked();

        for (let i = 0; i < modulators.length; i++)
            modulators[i].mouseClicked();

        for (let i = 0; i < outputs.length; i++)
            outputs[i].mouseClicked();

        for (let i = 0; i < envelops.length; i++)
            envelops[i].mouseClicked();

        for (let i = 0; i < Demodulators.length; i++)
            Demodulators[i].mouseClicked();


    } else if (currMouseAction == MouseAction.DELETE) {
        //
        for (let i = 0; i < functionGenerators.length; i++) {
            if (functionGenerators[i].mouseClicked()) {
                functionGenerators[i].destroy();
                if (lastSingleClicked == functionGenerators[i])
                    lastSingleClicked = null;
                delete functionGenerators[i];
                functionGenerators.splice(i, 1);
            }
        }

        for (let i = 0; i < filters.length; i++) {
            if (filters[i].mouseClicked()) {
                filters[i].destroy();
                delete filters[i];
                filters.splice(i, 1);
            }
        }

        for (let i = 0; i < adders.length; i++) {
            if (adders[i].mouseClicked()) {
                adders[i].destroy();
                delete adders[i];
                adders.splice(i, 1);
            }
        }

        for (let i = 0; i < modulators.length; i++) {
            if (modulators[i].mouseClicked()) {
                modulators[i].destroy();
                delete modulators[i];
                modulators.splice(i, 1);
            }
        }

        for (let i = 0; i < outputs.length; i++) {
            if (outputs[i].mouseClicked()) {
                outputs[i].destroy();
                delete outputs[i];
                outputs.splice(i, 1);
            }
        }

        for (let i = 0; i < envelops.length; i++) {
            if (envelops[i].mouseClicked()) {
                envelops[i].destroy();
                delete envelops[i];
                envelops.splice(i, 1);
            }
        }
    }
    wireMng.mouseClicked();
    lastDoubleClicked = null;
    lastDoubleClickedIndex = -1;
}

window.preload = preload;
window.setup = setup;
window.draw = draw;
window.windowResized = windowResized;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
window.doubleClicked = doubleClicked;
window.mouseClicked = mouseClicked;

window.activeTool = activeTool;
