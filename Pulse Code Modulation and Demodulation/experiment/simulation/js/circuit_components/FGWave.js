import {WaveType, Wave} from './Wave.js'

export class FGWave extends Wave {
    constructor(freq, amp) {
        super(WaveType.FGWAVE);
        this.freq = freq;
        this.amp = amp;
    }

    getExpression() {
        return `${this.amp}\\sin(2 * \\pi * ${this.freq} * x)`;
    }
}