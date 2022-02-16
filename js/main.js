import { SineGenerator, Sampler, Quantizer, ReconstructionFilter } from './Block.js'
import { Encoder, Decoder } from './Block.js';
import { Line } from './Line.js';

let myblocks = new Map();

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    myblocks.forEach((block) => {
        block.update_pos();
    });
}

function setup_modulation() {
    myblocks.set('generator', new SineGenerator(240-79, 112.5, 200, 100));
    myblocks.set('sampler', new Sampler(646.6-79, 112.5, 200, 100));
    myblocks.set('quantizer', new Quantizer(1053.32-79, 112.5, 220, 100));
    myblocks.set('encoder', new Encoder(1460-79, 112.5, 220, 100));

    /* FIXME: Find a new way to make the elements responsive to resize */
    
    myblocks.set('line0', new Line((val) => {
        const generator = myblocks.get('generator');
        const sampler = myblocks.get('sampler');

        val.x1 = generator.cx + generator.cw;
        val.y1 = generator.cy + generator.ch / 2;
        val.x2 = sampler.cx;
        val.y2 = sampler.cy + sampler.ch / 2;
    }, 0, 'x(t)'));
    
    myblocks.set('line1', new Line((val) => {
        const sampler = myblocks.get('sampler');
        const quantizer = myblocks.get('quantizer');

        val.x1 = sampler.cx + sampler.cw;
        val.y1 = sampler.cy + sampler.ch / 2;
        val.x2 = quantizer.cx;
        val.y2 = quantizer.cy + quantizer.ch / 2;
    }, 0, 'x(nTs)'));
    
    myblocks.set('line8', new Line((val) => {
        const quantizer = myblocks.get('quantizer');
        const encoder = myblocks.get('encoder');

        val.x1 = quantizer.cx+quantizer.cw;
        val.y1 = quantizer.cy + quantizer.ch / 2;
        val.x2 = encoder.cx;
        val.y2 = encoder.cy + encoder.ch / 2;
    }, 0, 'xq(nTs)'));
    
    myblocks.set('line9', new Line((val) => {
        const encoder = myblocks.get('encoder');

        val.x1 = encoder.cx+encoder.cw;
        val.y1 = encoder.cy + encoder.ch / 2;
        val.x2 = encoder.cx+encoder.cw+120;
        val.y2 = encoder.cy + encoder.ch / 2;
    }, 0 , "PCM\noutput"));
    
}

// Get DOM Elements
const modal = document.getElementById('my-modal');
const modalBtn = document.querySelector('#modal_btn');
// const closeBtn = document.querySelector('.close');
const closeBtn = document.querySelector('.close');

// Events
// modalBtn.onclick
// closeBtn.addEventListener(onclick, closeModal);
// window.addEventListener(onclick, outsideClick);

function setup_demodulation() {
    myblocks.set('decoder', new Decoder(450+145, 587.6-170, 200, 100));
    myblocks.set('reconstructionfilter', new ReconstructionFilter(950+145, 587.6-170, 200, 100));

    myblocks.set('line1dm', new Line((val) => {
        const decoder = myblocks.get('decoder');
        val.x1 = decoder.cx -220;
        val.y1 = decoder.cy + (decoder.ch / 2);
        val.x2 = decoder.cx;
        val.y2 = decoder.cy + (decoder.ch / 2);
    }, 0, 'Encoder Output'));

    myblocks.set('line2dm', new Line((val) => {
        const decoder = myblocks.get('decoder');
        const reconstructionfilter = myblocks.get('reconstructionfilter');
        val.x1 = decoder.cx + decoder.cw;
        val.y1 = decoder.cy + (decoder.ch / 2);
        val.x2 = reconstructionfilter.cx;
        val.y2 = reconstructionfilter.cy + (reconstructionfilter.ch / 2);
    }, 0, 'Decoded Output'));

    myblocks.set('line3dm', new Line((val) => {
        const reconstructionfilter = myblocks.get('reconstructionfilter');
        val.x1 = reconstructionfilter.cx + reconstructionfilter.cw;
        val.y1 = reconstructionfilter.cy + (reconstructionfilter.ch / 2);
        val.x2 = reconstructionfilter.cx + reconstructionfilter.cw + 220;
        val.y2 = reconstructionfilter.cy + (reconstructionfilter.ch / 2);
    }, 0, 'Reconstructed\nMessage Signal'));

    /*
    myblocks.set('line2dm', new Line((val) => {
        const decoder = myblocks.get('decoder');
        const filter = myblocks.get('predictionfilter');
        val.x1 = decoder.cx + (filter.cx - decoder.cx) * 0.5;
        val.y1 = decoder.cy + (decoder.ch / 2);
        val.x2 = filter.cx;
        val.y2 = decoder.cy + (decoder.ch / 2);
        console.log(val);
    }, 0, 'Decoded Signal'));

    myblocks.set('line3dm', new Line((val) => {
        const filter = myblocks.get('predictionfilter');
        const lpf = myblocks.get('lowpassfilter');
        val.x1 = filter.cx + (lpf.cx - filter.cx) * 0.5;
        val.y1 = filter.cy + (filter.ch / 2);
        val.x2 = lpf.cx;
        val.y2 = filter.cy + (filter.ch / 2);
        console.log(val);
    }, 0, 'Predicted Signal'));

    myblocks.set('line4dm', new Line((val) => {
        const lpf = myblocks.get('lowpassfilter');
        val.x1 = lpf.cx + lpf.cw;
        val.y1 = lpf.cy + (lpf.ch / 2);
        val.x2 = windowWidth * 0.9;
        val.y2 = val.y1;
        console.log(val);
    }, 0, 'Reconstructed \n Message Signal'));
    */
}


let currentModal = null;

// Events
closeBtn.addEventListener('onclick', () => {
    console.log('close modal');
    modal.style.display = 'none';
});

export function draw() {
    clear();

    myblocks.forEach((val, key) => {
        val.draw();
    });
}

function singleClicked(event) {
    console.log(mouseX, mouseY);
}

function doubleClicked() {
    console.log('double');
    if (currentModal) {
        currentModal.style.display = 'none';
        currentModal = null;
    }
}

let numClicks = 0;
let singleClickTimer;
const handleClick = (event) => {
    console.log(event);
    numClicks++;
    if (numClicks === 1) {
        singleClickTimer = setTimeout(() => {
            numClicks = 0;
            singleClicked();
        }, 250);
    } else if (numClicks === 2) {
        clearTimeout(singleClickTimer);
        numClicks = 0;
        doubleClicked();
    }
};


function mousePressed(e) {
    let clicked = false;
    myblocks.forEach((val) => {
        if (val.clicked(mouseX, mouseY)) {
            clicked = true;
            modal.style.display = 'block';
            currentModal = modal;
        }
    });
}

export function setup() {
    createCanvas(windowWidth, windowHeight);

    setup_modulation();
    setup_demodulation();
}

window.setup = setup;
window.draw = draw;
window.windowResized = windowResized;
window.onclick = singleClicked;
window.ondblclick = doubleClicked;

// document.addEventListener("click", handleClick);