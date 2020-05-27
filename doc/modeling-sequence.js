/**
 * @name Modeling Sequence Diagram
 * @module
 * @category Diagrams
 *
 * @description Getting the JSON of the contract to be created.
 * @mermaid
 * sequenceDiagram
 *   User->>gContract: createContract()
 *   activate gContract
 *   gContract->>ContractModel Factory: createContractModel()
 *   activate ContractModel Factory
 *   ContractModel Factory->>ContractModel: create()
 *   activate ContractModel
 *   ContractModel Factory-->>gContract: ContractModel
 *   deactivate ContractModel Factory
 *   User->>gContract: generateJSON()
 *   gContract->>ContractModel: generateJSON()
 *   ContractModel-->>gContract: {json}
 *   gContract-->>User: {json}
 *   deactivate gContract
 *   deactivate ContractModel
 */
