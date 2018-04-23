import { Receiver, Signal } from '../../signal';
/**
 * An actuator is a leaf-node receiver. It receives an input
 * and actually effects some device with it (e.g. turns a wheel)
 */
export declare abstract class Actuator implements Receiver {
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
     * @param signal	the transmission the Actuator should listen to
     */
    listenTo(signal: Signal): void;
    /**
     * Randomise the actuator value
     */
    randomise(): void;
    /**
     * Determine the next value
     */
    tick(dt: number): void;
    /**
     * Apply the next value
     */
    tock(): void;
}
