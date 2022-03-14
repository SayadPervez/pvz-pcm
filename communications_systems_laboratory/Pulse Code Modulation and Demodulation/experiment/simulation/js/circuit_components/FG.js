import { currMouseAction, backToEdit } from "../menutools.js"
import { colorMouseOver, Images } from "../simulator.js";
import { ModelType, MouseAction } from "./Enums.js"
import { Node, fillValue } from "./Node.js"
import { FGWave } from "./FGWave.js";

export class FG {
    constructor(freq, amplitude) {
        this.type = ModelType.FG;
        this.width = Images[this.type].width;
        this.height = Images[this.type].height;
        this.posX = mouseX - (this.width / 2);
        this.posY = mouseY - (this.height / 2);
        this.isSpawned = false;
        this.offsetMouseX = 0;
        this.offsetMouseY = 0;
        this.isMoving = false;
        this.freq = freq;
        this.amplitude = amplitude;

        this.output = new Node(this.posX - 30, this.posY, true, this.value);
        this.nodeStartID = this.output.id;
    }

    destroy() {
        this.output.destroy();
        delete this.output;
    }

    /**
     * @todo TODO
     */
    draw() {
        if (!this.isSpawned) {
            this.posX = mouseX;
            this.posY = mouseY;
        }

        if (this.isMoving) {
            this.posX = mouseX + this.offsetMouseX;
            this.posY = mouseY + this.offsetMouseY;
        }

        this.output.updatePosition(this.posX + this.width, this.posY + this.height / 2);

        this.value = this.output.getValue();

        fillValue(this.value);
        
        if(this.isMouseOver()) {
            noFill();
            strokeWeight(2);
            stroke(colorMouseOver[0], colorMouseOver[1], colorMouseOver[2]);
            rect(this.posX, this.posY, this.width, this.height);
        }
        else
            stroke(0);
    
        image(Images[this.type], this.posX, this.posY);

        this.generateOutput();

        this.output.draw();
    }

    generateOutput()
    {
        let wave = new FGWave(this.freq, this.amplitude);
        this.output.setValue(wave);
    }

    /**
     * @todo TODO
     */
    refreshNodes()
    {
        let currentID = this.nodeStartID;
        this.output.setID(currentID);
    }

    /**
     * @todo TODO
     */
    isMouseOver() {
        if (mouseX > this.posX && mouseX < (this.posX + this.width)
            && mouseY > this.posY && mouseY < (this.posY + this.height))
            return true;
        return false;
        // if (dist(mouseX, mouseY, this.posX, this.posY) < this.diameter / 2)
        //     return true;
        // return false;
    }

    /**
     * @todo TODO
     */
    mousePressed() {
        if (!this.isSpawned) {
            this.posX = mouseX;
            this.posY = mouseY;
            this.isSpawned = true;
            backToEdit();
            return;
        }

        if (this.isMouseOver() || currMouseAction == MouseAction.MOVE) {
            this.isMoving = true;
            this.offsetMouseX = this.posX - mouseX;
            this.offsetMouseY = this.posY - mouseY;
            return true;
        }
        return false;
    }

    /**
     * @todo TODO
     */
    mouseReleased() {
        if (this.isMoving) {
            this.isMoving = false;
        }

    }

    /**
     * @todo TODO
     */
    mouseClicked() {
        if (this.isMouseOver() || this.output.isMouseOver()) {
            this.output.mouseClicked();
            return true;
        }
        return false;
    }

    doubleClicked() {
        if (this.isMouseOver() || this.output.isMouseOver()) {
            this.output.mouseClicked();
            return true;
        }
        return false;
    }

    getOutput() {
        return this.output.getValue();
    }
}