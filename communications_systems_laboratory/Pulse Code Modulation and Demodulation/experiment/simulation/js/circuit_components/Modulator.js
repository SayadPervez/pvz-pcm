import { currMouseAction, backToEdit } from "../menutools.js"
import { colorMouseOver, Images } from "../simulator.js";
import { ModelType, MouseAction } from "./Enums.js"
import { Node } from "./Node.js";
import { ComplexWave } from './ComplexWave.js';
import { Operation } from './Wave.js';
import { DSBSC } from './DSBSC.js';

export class Modulator {
    constructor() {
        this.type = ModelType.MODULATOR;
        this.width = Images[this.type].width;
        this.height = Images[this.type].height;
        this.posX = mouseX - (this.width / 2);
        this.posY = mouseY - (this.height / 2);
        this.isSpawned = false;
        this.offsetMouseX = 0;
        this.offsetMouseY = 0;
        this.isMoving = false;

        // this.input = []
        // this.input.push(new Node(this.posX, this.posY + 15));
        this.input = [];
        this.input.push(new Node(this.posX, this.posY + 15));
        this.input.push(new Node(this.posX, this.posY + this.height - 15));
        this.input[0].setBrother(this.input[1]);
        this.input[1].setBrother(this.input[0]);

        this.output = new Node(this.posX + this.width, this.posY + this.height / 2, true);
        this.nodeStartID = this.input[0].id;
    }

    destroy() {
        for (let i = 0; i < this.input.length; i++) {
            this.input[i].destroy();
            delete this.input[i];
        }
        this.output.destroy();
        delete this.output;
    }

    draw() {
        if (!this.isSpawned) {
            this.posX = mouseX - (this.width / 2);
            this.posY = mouseY - (this.height / 2);
        }
        if (this.isMoving) {
            this.posX = mouseX + this.offsetMouseX;
            this.posY = mouseY + this.offsetMouseY;
        }

        this.input[0].updatePosition(this.posX, this.posY + 15);
        this.input[1].updatePosition(this.posX, this.posY + this.height - 15);

        this.output.updatePosition(this.posX + this.width, this.posY + this.height / 2);

        if (this.isMouseOver()) {
            noFill();
            strokeWeight(2);
            stroke(colorMouseOver[0], colorMouseOver[1], colorMouseOver[2]);
            rect(this.posX, this.posY, this.width, this.height);
        }

        image(Images[this.type], this.posX, this.posY);

        for (let i = 0; i < this.input.length; i++)
            this.input[i].draw();

        this.generateOutput();
        this.output.draw();
    }

    refreshNodes()
    {
        let currentID = this.nodeStartID;
        this.input[0].setID(currentID);
        currentID++;
        this.input[1].setID(currentID);
        currentID++;
        this.output.setID(currentID);
    }

    generateOutput() {
        let wave1 = this.input[0].getValue();
        let wave2 = this.input[1].getValue();
        let wave3 = new DSBSC(wave1, wave2, Operation.MULT);
        this.output.setValue(wave3);
    }

    isMouseOver() {
        if (mouseX > this.posX && mouseX < (this.posX + this.width)
            && mouseY > this.posY && mouseY < (this.posY + this.height))
            return true;
        return false;
    }

    mousePressed() {
        if (!this.isSpawned) {
            this.posX = mouseX - (this.width / 2);
            this.posY = mouseY - (this.height / 2);
            this.isSpawned = true;
            backToEdit();
            return;
        }
        

        if (this.isMouseOver() || currMouseAction == MouseAction.MOVE) {
            this.isMoving = true;
            this.offsetMouseX = this.posX - mouseX;
            this.offsetMouseY = this.posY - mouseY;
        }
    }

    mouseReleased() {
        this.isMoving = false;
    }

    mouseClicked() {
        let result = this.isMouseOver();

        for (let i = 0; i < this.input.length; i++)
            result |= this.input[i].mouseClicked();

        result |= this.output.mouseClicked();
        return result;
    }

    doubleClicked() {
        let result = this.isMouseOver();

        for (let i = 0; i < this.input.length; i++)
            result |= this.input[i].mouseClicked();

        result |= this.output.mouseClicked();
        return result;
    }

    getOutput(){
        return this.output.getValue();
    }
}