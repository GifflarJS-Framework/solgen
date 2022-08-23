export interface ICreateRevertDTO {
  message?: string;
  customErrorCall?: {
    customErrorName: string;
    args?: Array<string>;
  };
}
