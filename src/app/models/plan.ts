import { DataType } from "./dataType";

export interface Plan extends DataType
{
    name: string;
    price: number;
    color: string;
    annuelPrice: number;
    capture: boolean;
    preview: boolean;
    quickCapture: boolean;
    history: boolean;
    translation: boolean;
    hidden: boolean;
}