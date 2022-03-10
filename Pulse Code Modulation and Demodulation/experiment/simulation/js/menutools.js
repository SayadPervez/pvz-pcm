import { Adder } from "./circuit_components/Adder.js";
import { Filter } from "./circuit_components/Filter.js";
import { FG } from "./circuit_components/FG.js";
import { SSB } from "./circuit_components/SSBdetector.js";
import { DSBSCdet } from "./circuit_components/DSBSCdetector.js";
import { Modulator } from "./circuit_components/Modulator.js";
import { Envelop } from "./circuit_components/envelope.js"
import { DSBFC_Output } from "./circuit_components/DSBFC-Output.js";
import { DSBSC_Output } from "./circuit_components/DSBSC-Output.js";
import { SSB_Output } from "./circuit_components/SSB-Output.js";
import { Demodulator } from "./circuit_components/demod.js"
import { MouseAction } from "./circuit_components/Enums.js"
import { adders, modulators, filters, functionGenerators, outputs, envelops, Demodulators } from "./simulator.js"

export let currMouseAction = MouseAction.EDIT;

export function activeTool(elTool) {
    resetElements();

    switch (elTool.getAttribute("tool")) {
        case "Edit":
            resetElements();
            break;

        case "Move":
            currMouseAction = MouseAction.MOVE;
            document.getElementById("canvas-sim").style.cursor = "move";
            break;

        case "Delete":
            currMouseAction = MouseAction.DELETE;
            break;

        case "FG":
            let freq = document.getElementById("freq1").value;
            let amplitude = document.getElementById("ampl1").value;
            functionGenerators.push(new FG(freq, amplitude));
            break;

        case "Adder":
            adders.push(new Adder());
            break;

        case "Filter":
            filters.push(new Filter());
            break;

        case "Modulator":
            modulators.push(new Modulator());
            break;

        case "DSBFC-Output":
            outputs.push(new DSBFC_Output());
            break;

        case "DSBSC-Output":
            outputs.push(new DSBSC_Output());
            break;

        case "SSB-Output":
            outputs.push(new SSB_Output());
            break;

        case "Envelope":
            envelops.push(new Envelop());
            
            break;
        case "DSBSC":
            envelops.push(new DSBSCdet());
            
            break;
        case "SSB":
            envelops.push(new SSB());
            
            break;

        case "Demodulator":
            Demodulators.push(new Demodulator());
            break;

    }

    elTool.classList.add('active');
}

/**
 * @todo this doc
 */
function resetElements() {
    currMouseAction = MouseAction.EDIT;
    let activeElements = document.getElementsByClassName("active");

    for (let i = 0; i < activeElements.length; i++) {
        activeElements[i].classList.remove('active')
    }
    document.getElementById("canvas-sim").style.cursor = "default";
}

/**
 * Reset Element
 * then set current action to EDIT 
 */
export function backToEdit() {
    resetElements();
    document.getElementsByClassName("Edit")[0].classList.add("active");
    currMouseAction = MouseAction.EDIT;
}
