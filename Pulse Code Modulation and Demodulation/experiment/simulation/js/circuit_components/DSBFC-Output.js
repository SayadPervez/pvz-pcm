import { currMouseAction, backToEdit } from "../menutools.js"
import { colorMouseOver, Images } from "../simulator.js";
import { ModelType, MouseAction } from "./Enums.js"
import { FGWave } from "./FGWave.js";
import { Node } from "./Node.js"

export class DSBFC_Output {
    constructor() {
        this.type = ModelType.DSBFCOUTPUT;
        this.width = Images[this.type].width;
        this.height = Images[this.type].height;
        this.value = false;
        this.posX = mouseX;
        this.posY = mouseY;
        this.isSpawned = false;
        this.isMoving = false;
        this.offsetMouseX = 0;
        this.offsetMouseY = 0;
        this.input = new Node(this.posX - 30, this.posY, false, this.value);
        this.nodeStartID = this.input.id;
    }

    destroy() {
        this.input.destroy();
        delete this.input;
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

        this.input.updatePosition(this.posX, this.posY + this.height / 2);

        if(this.isMouseOver()) {
            noFill();
            strokeWeight(2);
            stroke(colorMouseOver[0], colorMouseOver[1], colorMouseOver[2]);
            rect(this.posX, this.posY, this.width, this.height);
        }

        image(Images[this.type], this.posX, this.posY);

        this.input.draw();
    }

    refreshNodes()
    {
        let currentID = this.nodeStartID;
        this.input.setID(currentID);
    }

    generateOutput() {
        let wave1 = this.input.getValue();
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
        if (this.isMouseOver() || this.input.isMouseOver()) {
            this.input.mouseClicked();
            return true;
        }
        return false;
    }
    doubleClicked() {
        let result = this.isMouseOver();

        for (let i = 0; i < this.input.length; i++)
            result |= this.input[i].mouseClicked();

        return result;
    }
    getOutput() {
        if (this.input.getValue() == false) {
            return new FGWave(0, 0);
        }
        return this.input.getValue();
    }
};