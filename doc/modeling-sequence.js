/**
 * @name Modeling Sequence Diagram
 * @module
 * @category Diagrams
 *
 * @description Getting the JSON of the contract to be created.
 * @mermaid
 * sequenceDiagram
 *   Coder->>gContract: createContract()
 *   activate gContract
 *   gContract-->>Coder: gContract
 *   gContract->>ContractModel Factory: createContractModel()
 *   activate ContractModel Factory
 *   ContractModel Factory->>ContractModel: create()
 *   activate ContractModel
 *   ContractModel-->>ContractModel Factory: ContractModel
 *   ContractModel Factory-->>gContract: ContractModel
 *   deactivate ContractModel Factory
 *
 *   Coder->>gContract: gContract.json()
 *   gContract->>ContractModel: json()
 *   ContractModel-->>gContract: {json}
 *   gContract-->>Coder: {json}
 *
 *   deactivate gContract
 *   deactivate ContractModel
 */
