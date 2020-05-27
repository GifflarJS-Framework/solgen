/**
 * @name Writing Sequence Diagram
 * @module
 * @category Diagrams
 *
 * @description Getting the Solidity code of the contract from the {json} created in Modeling stage.
 * Getting the JSON of the contract to be created.
 * @mermaid
 * sequenceDiagram
 *   User->>ContractWriter Factory: createContractWriter()
 *   activate ContractWriter Factory
 *   ContractWriter Factory-->>ContractWriter: create()
 *   activate ContractWriter
 *   ContractWriter Factory-->>User: ContractWriter
 *   deactivate ContractWriter Factory
 *   User->>ContractWriter: write({json})
 *   ContractWriter-->>User: .sol_code
 *   deactivate ContractWriter
 */
