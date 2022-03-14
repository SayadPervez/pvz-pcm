import {WaveType, Wave, Op} from './Wave.js'
import { SideBands } from './SideBands.js'

export class DSBSC extends Wave {
    constructor(carrier, message) {
        super(WaveType.DSBSC);
        this.carrier = carrier;
        this.message = message;

        this.fc = int(carrier.freq);
        this.ac = carrier.amp;
        this.fm = int(message.freq);
        this.am = message.amp;

        let m1 = new SideBands(this.am, this.ac, this.fc, this.fm, this.fc - this.fm, 1);
        let m2 = new SideBands(this.am, this.ac, this.fc, this.fm, this.fc + this.fm, 1);
        this.sidebands = [m1, m2];
    }

    getExpression() {
        let Ac = this.ac;
        let Am = this.am;
        let m1 = this.sidebands[0].getExpression();
        let m2 = this.sidebands[1].getExpression();
        return `(${Ac} * ${Am}/2) * (${m1} - ${m2})`;
    }
}