class Block {
    constructor(x, y, w, h, name = null, onclick = null, selectable = false) {
        this.name = name;
        this.xo = x;
        this.yo = y;
        this.wo = w;
        this.ho = h;

        this.cx = x;
        this.cy = y;
        this.cw = w;
        this.ch = h;

        this.selectable = selectable;

        this.onclick = onclick
        this.update_pos();
    }

    populate_modal() {}

    update_pos() {
        const width = windowWidth;
        const height = windowHeight;

        this.cx = this.xo * (width / 1920);
        this.cy = this.yo * (height / 1080);
        this.cw = this.wo * (width / 1920);
        this.ch = this.ho * (height / 1080);
    }

    mouseOver() {
        // mouseX and mouseY are p5.js provided global variables
        const x = mouseX;
        const y = mouseY;
        return this.selectable && x >= this.cx && x <= this.cx + this.cw &&
               y >= this.cy && y <= this.cy + this.ch;
    }

    draw(highlight = false) {
        const cx = this.cx;
        const cy = this.cy;
        const cw = this.cw;
        const ch = this.ch;

        const font_size = 25 * Math.min(windowWidth / 1920, windowHeight / 1080);

        fill("white");
        push();
        if (this.selectable && highlight) {
            stroke(255, 0, 0);
        } else {
            stroke(0, 0, 0);
        }
        strokeWeight(3);
        rect(cx, cy, cw, ch, 12);
        strokeWeight(2);
        pop();
        if (this.name) {
            textSize(font_size);
            textStyle('bold');
            textAlign(CENTER, CENTER);
            fill("black");
            text(this.name, cx + cw / 2, cy + ch / 2);
        }
    }

    singleClickModal() { return null; }

    doubleClickModal() { return null; }
}

export class SineGenerator extends Block {
    constructor (x, y, w, h) {
        super(x, y, w, h, 'SINE WAVE\nGENERATOR', null, true);
        this.amp_slider = createSlider(0, 5000, 500);
        this.amp_slider.onchange = (evt) => {
            this.amplitude = int(evt.target.value);
        };
        this.freq_slider = createSlider(0, 5000, 500);
        this.freq_slider.onchange = (evt) => {
            this.frequency = int(evt.target.value);
        };
        this.amplitude = this.amp_slider.value;
        this.frequency = this.freq_slider.value;
    }

    populate_modal(modal) {
        const label1 = document.createElement("h5");
        label1.innerText = "Amplitude: ";
        label1.style = "display: block;"
        modal.appendChild(label1);
        modal.appendChild(this.amp_slider);

        const label = document.createElement("h5");
        label.innerText = "Frequency: ";
        label.style = "display: block;"
        modal.appendChild(label);
        modal.appendChild(this.freq_slider);
    }


    doubleClickModal() {
        return 'sourceWaveGraph';
    }
}

export class Sampler extends Block {
    constructor (x, y, w, h) {
        super(x, y, w, h, 'SAMPLER', null, true);
        this.sampling_frequency = 0;
        this.sampling_slider = createSlider(0, 5000, 500);
        this.sampling_slider.onchange = this.sampling_slider_change;
    }

    sampling_slider_change() {
        let amp = this.value;
    }

    doubleClickModal() {
        return 'sampledWaveGraph';
    }
}

export class Quantizer extends Block {
    constructor (x, y, w, h) {
        super(x, y, w, h, 'QUANTIZER', null, true);
    }

    doubleClickModal() { return 'quantizerOutput'; }
}

export class LowPassFilter extends Block {
    constructor (x, y, w, h) {
        super(x, y, w, h, 'LOW PASS\nFILTER', null, true);
    }
}

export class PredictionFilter extends Block {
    constructor (x, y, w, h) {
        super(x, y, w, h, 'PREDICTION\nFILTER', null, true);
    }
}

export class ReconstructionFilter extends Block {
    constructor (x, y, w, h) {
        super(x, y, w, h, 'Reconstruction\nFILTER', null, true);
    }
    doubleClickModal() { return 'reconWaveGraph'; }
}

export class Encoder extends Block {
    constructor (x, y, w, h) {
        super(x, y, w, h, 'ENCODER', null, true);
    }

    doubleClickModal() { return 'encodedWaveGraph'; }
}

export class Decoder extends Block {
    constructor (x, y, w, h) {
        super(x, y, w, h, 'DECODER', null, true);
    }
    doubleClickModal() {
        return 'decoderWaveGraph';
    }
}