export const WaveType = {
    FGWAVE: 0,
    DSBSC: 1,
    DSBFC: 2,
    SSB: 3,
    SIDEBANDS: 4,
}

export const Operation = {
    ADD: 0,
    MULT: 1
}

export const Op = ['+', '*'];

export class Wave {
    construct (type) {
        this.type = type;
    }
}