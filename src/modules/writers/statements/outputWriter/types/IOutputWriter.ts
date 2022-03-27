export interface IOutputWriter {
  write(
    outputs: Array<string>,
    callback: (object: IOutputWriterCallbackObject) => void
  ): string;
}
