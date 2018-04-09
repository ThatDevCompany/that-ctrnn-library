import {CTRNNConnectee} from './CTRNNConnectee';

export class CTRNNConnection {

	// From Connectee
	from: CTRNNConnectee;

	// To Connectee
    to: CTRNNConnectee;

    // Weight
    weight: number;

    // Constructor
	constructor(from: CTRNNConnectee, to: CTRNNConnectee) {
		this.from = from;
		this.to = to;
		this.weight = Math.random();
	}
}
