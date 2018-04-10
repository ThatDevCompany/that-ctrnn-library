import {Neuron} from './Neuron';

export class Network {

    // See http://users.sussex.ac.uk/~inmanh/easy/alife10/ga_exercise2.html

    // The neurons in the Network
    neurons: Array<Neuron>;

    // The number of neurons
	size: number;

	// Constructor
	constructor(size: number = 3) {
		this.size = size;
		this.randomise();
	}

	// Randomise
	randomise() {
		this.neurons = [];
		for (let i = 0; i < this.size; i++ ) {
			this.neurons.push(new Neuron());
		}
		for (let i = 0; i < this.size; i++ ) {
			for (let j = 0; j < this.size; j++ ) {
				this.neurons[j].addOutputTo(this.neurons[i]);
			}
		}
	}

}
