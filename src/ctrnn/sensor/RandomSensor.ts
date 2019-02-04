import { Sensor } from './Sensor'

/**
 * A random sensor randomises its value every X seconds
 */
export class RandomSensor extends Sensor {
	/**
	 * How often (time in milliseconds) should the sensor
	 * value change
	 */
	frequency: number

	/**
	 * How long since the last value change took place
	 */
	protected _currentInterval: number

	/**
	 * Determine the next value
	 */
	tick(dt: number) {
		this._currentInterval += dt

		// Time to change
		if (this._currentInterval >= this.frequency) {
			this._next = Math.random()
			this._currentInterval = this._currentInterval - this.frequency
		}
	}
}
