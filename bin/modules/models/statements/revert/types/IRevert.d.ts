export interface IRevert {
    statement: "revert";
    message?: string;
    customErrorCall?: {
        customErrorName: string;
        args: Array<string>;
    };
}
