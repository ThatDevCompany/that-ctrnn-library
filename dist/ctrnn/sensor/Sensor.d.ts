import { Transmitter } from '../../signal';
/**
 * A sensor is a type of leaf-node transmitter. In transmits an output
 * based on a real-world value (such as light or proximity)
 */
export declare abstract class Sensor implements Transmitter {
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
    readonly output: number;
    /**
     * Randomise the sensor value
     */
    randomise(): void;
    /**
     * Determine the next value
     * @param {number} dt		the timestep
     */
    tick(dt: number): void;
    /**
     *	Apply the next value
     */
    tock(): void;
}
