import {IReceiver, Signal} from '../../signal';

/**
 * An actuator is a leaf-node receiver. It receives an input
 * and actually effects some device with it (e.g. turns a wheel)
 */
export abstract class Actuator implements IReceiver {

	/**
	 * The current state / value of the actuator
	 */
	protected _value: number;

	/**
	 * The next state / value of the transmitter
	 */
	protected _next: number;

	/**
	 * The transmission which feeds the actuator
	 */
	protected _listeningTo: Signal;

	/**
	 * Attach the actuator to a transmission
	 * @param signal    the transmission the Actuator should listen to
	 */
	listenTo(signal: Signal) {
		this._listeningTo = signal;
	}

	/**
	 * Randomise the actuator value
	 */
	randomise() {
		this._value = Math.random();
	}

	/**
	 * Determine the next value
	 */
	tick(dt: number) {
		this._next = this._listeningTo.value;
	}

	/**
	 * Apply the next value
	 */
	tock() {
		this._value = this._next;
	}
}
