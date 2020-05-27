/**
 * @name Modeling Sequence Diagram
 * @module
 * @category Diagrams
 *
 * @description Getting the JSON of the contract to be created.
 * @mermaid
 * sequenceDiagram
 *   User->>ContractModel Factory: createContractModel()
 *   activate ContractModel Factory
 *   ContractModel Factory->>ContractModel: create()
 *   activate ContractModel
 *   ContractModel Factory-->>User: ContractModel
 *   deactivate ContractModel Factory
 *   User->>ContractModel: generateJSON()
 *   ContractModel-->>User: {json}
 *   deactivate ContractModel
 */
