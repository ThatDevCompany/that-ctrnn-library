import {Transmitter} from './Transmitter';
import {Receiver} from './Receiver';
import {Transmission} from './Transmission';

/**
 * A Neuron receives any number of transmissions
 * and a transmits its output accordingly
 */
export class Neuron implements Transmitter, Receiver {

	/**
	 * The current value being transmitted by the neuron
	 */
	get output() {
		return this.activationFunction( this._value + this._bias );
	}

	/**
	 * The current state of the neuron
	 */
	private _value: number;

	/**
	 * The next state of the neuron
	 */
	private _next: number;

	/**
	 * The bias value of the neuron
	 */
	private _bias: number;

	/**
	 * The time constant for the neuron
	 */
	private _tao: number;

	/**
	 * The activation function for the neuron
	 */
	private activationFunction(x: number) {
		return 1 / (1 + Math.pow(Math.E, -x));
	}

	/**
	 * The transmissions being listened to
	 * @type {Transmission[]}
	 * @private
	 */
	private _listeningTo: Array<Transmission> = [];

	/**
	 * Listen to a transmission
	 * @param transmission		the transmission to listen to
	 */
	listenTo(transmission: Transmission) {
		this._listeningTo.push(transmission);
	}

	/**
	 * Randomise the neuron
	 */
	randomise() {
		this._value = Math.random();
		this._tao = Math.random();
		this._bias = Math.random();
	}

	/**
	 * Determine the next value
	 * See http://users.sussex.ac.uk/~inmanh/easy/alife10/ga_exercise2.html for equation
	 */
	tick(timestep: number) {

		let inputSignal = 0;
		this._listeningTo.forEach(t => {
			inputSignal += t.value;
		});

		let changeInValue = ( inputSignal - this._value ) / this._tao;

		this._next = this._value + (timestep * changeInValue);
	}

	/**
	 * Apply the next value
	 */
	tock() {
		this._value = this._next;
	}
}
