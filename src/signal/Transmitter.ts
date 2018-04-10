import {Receiver} from './Receiver';

export interface Transmitter {
	/**
	 * The current value being transmitted
	 */
	output: number;

	/**
	 * During the TICK phase, the transmitter calculates what its next value will be
	 * @param {number} dt		the amount of time that has passed since the last tick
	 */
	tick(dt: number): void;

	/**
	 * During the TOCK phase, the transmitter applies its new output value
	 */
	tock(): void;
}
