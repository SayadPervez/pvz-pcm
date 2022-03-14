import {WaveType, Wave, Op} from './Wave.js'

export class SideBands extends Wave {
    constructor(am, ac, fc, fm, freq, amp) {
        super(WaveType.SIDEBANDS);
        this.am = am;
        this.ac = ac;
        this.fm = fm;
        this.fc = fc;
        this.freq = freq;
        this.amp = amp;
    }

    getExpression() {
        return `(${this.amp} * \\cos(2 * \\pi * ${this.freq} * x))`;
    }
}