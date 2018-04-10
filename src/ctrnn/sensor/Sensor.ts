import {Transmitter} from '../../signal';

/**
 * A sensor is a type of leaf-node transmitter. In transmits an output
 * based on a real-world value (such as light or proximity)
 */
export abstract class Sensor implements Transmitter {

	/**
	 * The current state of the sensor
	 */
	protected _value: number;

	/**
	 * The next state of the sensor
	 */
	protected _next: number;

	/**
	 * The output value of the sensor
	 * @returns {number}
	 */
	get output() {
		return this._value;
	}

	/**
	 * Randomise the sensor value
	 */
	randomise() {
		this._value = Math.random();
	}

	/**
	 * Determine the next value
	 * @param {number} dt		the timestep
	 */
	tick(dt: number) {
		// THIS METHOD SHOULD BE OVERRIDDEN
		this._next = this._value;
	}

	/**
	 *	Apply the next value
	 */
	tock() {
		this._value = this._next;
	}
}
