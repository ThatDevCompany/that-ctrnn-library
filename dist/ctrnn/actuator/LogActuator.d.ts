import { Actuator } from './Actuator';
/**
 * The Log Actuator sends its value to the console log
 * every tock()
 */
export declare class LogActuator extends Actuator {
    /**
     * Apply the next value
     */
    tock(): void;
}
