import { Transmitter } from '../signal/Transmitter';
import { Receiver } from '../signal/Receiver';
import { Signal } from '../signal/Signal';
/**
 * A Neuron receives any number of transmissions
 * and a transmits its output accordingly
 */
export declare class Neuron implements Transmitter, Receiver {
    /**
     * The current value being transmitted by the neuron
     */
    readonly output: number;
    /**
     * The current state of the neuron
     */
    private _value;
    /**
     * The next state of the neuron
     */
    private _next;
    /**
     * The bias value of the neuron
     */
    private _bias;
    /**
     * The time constant for the neuron
     */
    private _tao;
    /**
     * The activation function for the neuron
     */
    private activationFunction(x);
    /**
     * The signals being listened to
     * @type {Signal[]}
     * @private
     */
    private _listeningTo;
    /**
     * Listen to a signal
     * @param signal		the signal to listen to
     */
    listenTo(signal: Signal): void;
    /**
     * Randomise the neuron
     */
    randomise(): void;
    /**
     * Determine the next value
     * See http://users.sussex.ac.uk/~inmanh/easy/alife10/ga_exercise2.html for equation
     */
    tick(timestep: number): void;
    /**
     * Apply the next value
     */
    tock(): void;
}
