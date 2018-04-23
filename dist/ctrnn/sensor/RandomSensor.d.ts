import { Sensor } from './Sensor';
/**
 * A random sensor randomises its value every X seconds
 */
export declare class RandomSensor extends Sensor {
    /**
     * How often (time in milliseconds) should the sensor
     * value change
     */
    frequency: number;
    /**
     * How long since the last value change took place
     */
    protected _currentInterval: number;
    /**
     * Determine the next value
     */
    tick(dt: number): void;
}
