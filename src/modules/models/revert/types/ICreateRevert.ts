export interface ICreateRevert {
  message?: string;
  customErrorCall?: {
    customErrorName: string;
    args?: Array<string>;
  };
}
