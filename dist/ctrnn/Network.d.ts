import { Neuron } from './Neuron';
export declare class Network {
    neurons: Array<Neuron>;
    size: number;
    constructor(size?: number);
    randomise(): void;
}
