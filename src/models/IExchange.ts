import {IData} from "./IData";

export interface IExchange {
    name: string;
    tag: string;
    status: "Low" | "High";
    values: IData[];
}
