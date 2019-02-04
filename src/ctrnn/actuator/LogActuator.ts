import { Actuator } from './Actuator'

/**
 * The Log Actuator sends its value to the console log
 * every tock()
 */
export class LogActuator extends Actuator {
	/**
	 * Apply the next value
	 */
	tock() {
		super.tock()
		console.log('Value:', this._value)
	}
}
