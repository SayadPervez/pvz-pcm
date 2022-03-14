import {WaveType, Wave, Op} from './Wave.js'

export class DSBFC extends Wave{
    constructor(dsbsc, carrier) {
        super(WaveType.DSBFC);
        this.dsbsc = dsbsc;
        this.carrier = carrier;
    }

    getExpression() {
        let Ac = this.dsbsc.ac;
        let car = this.carrier.getExpression();
        let wave = this.dsbsc.getExpression();
        return `((${car}) + ((${wave})/${Ac}))`;
    }
}