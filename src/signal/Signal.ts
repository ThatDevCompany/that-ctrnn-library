import {Transmitter} from './Transmitter';

/**
 * The amplified signal from a Transmitter
 */
export class Signal {

	/**
	 * The transmitter sending a value
	 */
	transmitter: Transmitter;

	/**
	 * The amplification weight applied to the signal from the transmitter
	 */
	private _weight: number;

	/**
	 *	The current state / value of the transmission
	 */
	get value() {
		return this.transmitter.output * this._weight;
	}
}
