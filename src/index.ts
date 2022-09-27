import "reflect-metadata";
import "./modules";
import { container } from "tsyringe";
import { IGifflarContract } from "@managing/gifflarContract/types/IGifflarContract";
import { IGifflarContractModel } from "@managing/gifflarContract/types/IGifflarContractModel";
import { IGifflarManager } from "@managing/gifflarManager/types/IGifflarManager";
import { IGifflarLibrary } from "@managing/gifflarLibrary/types/IGifflarLibrary";
import { IGifflarLibraryModel } from "@managing/gifflarLibrary/types/IGifflarLibraryModel";
import { IGifflarInterface } from "@managing/GifflarInterface/types/IGifflarInterface";
import { IGifflarInterfaceModel } from "@managing/GifflarInterface/types/IGifflarInterfaceModel";

/**
 * Creates a new Gifflar Contract
 * @param name The name of the smart contract.
 * @returns A new Gifflar Contract
 * @example
 * import { createGifflarContract } from "gifflar-library";
 *
 * const gContract = createGifflarContract("MyContract");
 */
const createGifflarContract = (name: string): IGifflarContract => {
  const gifflarContractModel: IGifflarContractModel = container.resolve(
    "GifflarContractModel"
  );
  return gifflarContractModel.execute(name);
};

/**
 * Creates a new Gifflar Library
 * @param name The name of the smart contract library.
 * @returns A new Gifflar Library
 * @example
 * import { createGifflarLibrary } from "gifflar-library";
 *
 * const gLibrary = createGifflarLibrary("MyLibrary");
 */
const createGifflarLibrary = (name: string): IGifflarLibrary => {
  const gifflarContractModel: IGifflarLibraryModel = container.resolve(
    "GifflarLibraryModel"
  );
  return gifflarContractModel.execute(name);
};

/**
 * Creates a new Gifflar Interface
 * @param name The name of the smart contract interface.
 * @returns A new Gifflar Interface
 * @example
 * import { createGifflarInterface } from "gifflar-library";
 *
 * const gInterface = createGifflarInterface("MyInterface");
 */
const createGifflarInterface = (name: string): IGifflarInterface => {
  const gifflarContractModel: IGifflarInterfaceModel = container.resolve(
    "GifflarInterfaceModel"
  );
  return gifflarContractModel.execute(name);
};

/**
 * Creates a new Gifflar Manager to manage many Gifflar Components (Contracts, Libraries and Interfaces).
 * @returns A new Gifflar Manager
 * @example
 * import { createGifflarManager } from "gifflar-library";
 *
 * const gManager = createGifflarManager();
 */
const createGifflarManager = (): IGifflarManager => {
  return container.resolve("GifflarManager");
};

export {
  createGifflarContract,
  createGifflarLibrary,
  createGifflarInterface,
  createGifflarManager,
};
