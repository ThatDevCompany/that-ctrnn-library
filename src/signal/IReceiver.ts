import { Signal } from '../signal/Signal'

/**
 * A receiver is a node which receives a input value via a connection
 */
export interface IReceiver {
	/**
	 * Listen to a transmission from a transmitter
	 * @param {Signal} c
	 */
	listenTo(c: Signal): void

	/**
	 * During the TICK phase, the receiver calculates what its next value will be
	 * @param {number} dt        the amount of time that has passed since the last tick
	 */
	tick(dt: number): void

	/**
	 * During the TOCK phase, the receiver applies the next value
	 */
	tock(): void
}

/**
 * Abstract implementation of IReceived
 */
export abstract class AbstractReceiver implements IReceiver {
	listenTo(c: Signal) {}

	tick(dt: number) {}

	tock() {}
}
