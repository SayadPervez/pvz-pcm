import {WaveType, Wave, Op} from './Wave.js'

export class ComplexWave extends Wave {
    constructor(wave1, wave2, operation) {
        super(WaveType.COMPLEXWAVE);
        this.waves = [wave1, wave2];
        this.operation = operation;
    }

    getExpression() {
        let wave1 = this.waves[0];
        let wave2 = this.waves[1];
        let exp1 = wave1.getExpression();
        let exp2 = wave2.getExpression();
        let op = Op[this.operation];
        return '(' + exp1 + op + exp2 + ')';
    }
}