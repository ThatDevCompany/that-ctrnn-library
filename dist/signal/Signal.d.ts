import { Transmitter } from './Transmitter';
/**
 * The amplified signal from a Transmitter
 */
export declare class Signal {
    /**
     * The transmitter sending a value
     */
    transmitter: Transmitter;
    /**
     * The amplification weight applied to the signal from the transmitter
     */
    private _weight;
    /**
     *	The current state / value of the transmission
     */
    readonly value: number;
}
