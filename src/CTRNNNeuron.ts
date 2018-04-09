import {CTRNNConnectee} from './CTRNNConnectee';
import {CTRNNConnection} from './CTRNNConnection';

export class CTRNNNeuron implements CTRNNConnectee {

	// The current state / value of the neuron
	value: number;

	// TAO, the Time constant
    tao: number;

    // The Bias Term
    bias: number;

	// Incoming Connections
    inputs: Array<CTRNNConnection> = [];

    // Outgoing Connections
    outputs: Array<CTRNNConnection> = [];

    // Activation Function
    activate(x: number) {
    	return 1 / (1 + Math.pow(Math.E, -x));
	}

	// Randomise Function
	randomise() {
		this.value = Math.random();
		this.tao = Math.random();
		this.bias = Math.random();
	}

	// Add Incoming Connection
	addInputConnection(c: CTRNNConnection) {
		this.inputs.push(c);
	}

	// Add Outgoing Connection
	addOutputTo(to: CTRNNConnectee) {
    	const c: CTRNNConnection = new CTRNNConnection(this, to);
		this.outputs.push(c);

	}
}
