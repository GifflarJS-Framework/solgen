import { IFixedBytes } from "./IFixedBytes";
import { ISignedIntegerType } from "./ISignedIntegerType";
import { IUnsignedIntegerType } from "./IUnsignedIntegerType";

export type IElementaryTypeName =
  | "address"
  | "address payable"
  | "bool"
  | "string"
  | "bytes"
  | ISignedIntegerType
  | IUnsignedIntegerType
  | IFixedBytes
  | "fixed"
  | "unfixed";
