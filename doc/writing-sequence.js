/**
 * @name Writing Sequence Diagram
 * @module
 * @category Diagrams
 *
 * @description Getting the Solidity code of the contract from the {json} created in Modeling stage.
 * Getting the JSON of the contract to be created.
 * @mermaid
 * sequenceDiagram
 *   Coder->>gContract: createContract()
 *   activate gContract
 *   gContract-->>Coder: gContract
 *   gContract->>ContractWriter Factory: createContractWriter()
 *   activate ContractWriter Factory
 *   ContractWriter Factory->>ContractWriter: create()
 *   activate ContractWriter
 *   ContractWriter-->>ContractWriter Factory: ContractWriter
 *   ContractWriter Factory-->>gContract: ContractWriter
 *   deactivate ContractWriter Factory
 *
 *   Coder->>gContract: gContract.write()
 *   gContract->>ContractWriter: write({json})
 *   ContractWriter-->>gContract: "code.sol"
 *   gContract-->>Coder: "code.sol"
 *
 *   deactivate gContract
 *   deactivate ContractWriter
 */
