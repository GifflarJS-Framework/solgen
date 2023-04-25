import "reflect-metadata";
import "./modules";
import { IGifflarContract } from "./modules/managing/gifflarContract/types/IGifflarContract";
import { IGifflarManager } from "./modules/managing/gifflarManager/types/IGifflarManager";
import { IGifflarLibrary } from "./modules/managing/gifflarLibrary/types/IGifflarLibrary";
import { IGifflarInterface } from "./modules/managing/GifflarInterface/types/IGifflarInterface";
/**
 * Creates a new Gifflar Contract
 * @param name The name of the smart contract.
 * @returns A new Gifflar Contract
 * @example
 * import { createGifflarContract } from "@gifflar/solgen";
 *
 * const gContract = createGifflarContract("MyContract");
 */
declare const createGifflarContract: (name: string) => IGifflarContract;
/**
 * Creates a new Gifflar Library
 * @param name The name of the smart contract library.
 * @returns A new Gifflar Library
 * @example
 * import { createGifflarLibrary } from "@gifflar/solgen";
 *
 * const gLibrary = createGifflarLibrary("MyLibrary");
 */
declare const createGifflarLibrary: (name: string) => IGifflarLibrary;
/**
 * Creates a new Gifflar Interface
 * @param name The name of the smart contract interface.
 * @returns A new Gifflar Interface
 * @example
 * import { createGifflarInterface } from "@gifflar/solgen";
 *
 * const gInterface = createGifflarInterface("MyInterface");
 */
declare const createGifflarInterface: (name: string) => IGifflarInterface;
/**
 * Creates a new Gifflar Manager to manage many Gifflar Components (Contracts, Libraries and Interfaces).
 * @returns A new Gifflar Manager
 * @example
 * import { createGifflarManager } from "@gifflar/solgen";
 *
 * const gManager = createGifflarManager();
 */
declare const createGifflarManager: () => IGifflarManager;
export { createGifflarContract, createGifflarLibrary, createGifflarInterface, createGifflarManager, };
