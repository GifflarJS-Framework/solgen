/**
 * @name Writing Sequence Diagram
 * @module
 * @category Diagrams
 *
 * @description Getting the Solidity code of the contract from the {json} created in Modeling stage.
 * Getting the JSON of the contract to be created.
 * @mermaid
 * sequenceDiagram
 *   System->>Contract: createContract()
 *   activate Contract
 *   Contract-->>System: Contract
 *   Contract->>ContractWriter Factory: createContractWriter()
 *   activate ContractWriter Factory
 *   ContractWriter Factory->>ContractWriter: create()
 *   activate ContractWriter
 *   ContractWriter-->>ContractWriter Factory: ContractWriter
 *   ContractWriter Factory-->>Contract: ContractWriter
 *   deactivate ContractWriter Factory
 *
 *   System->>Contract: Contract.write()
 *   Contract->>ContractWriter: write({json})
 *   ContractWriter-->>Contract: "code.sol"
 *   Contract-->>System: "code.sol"
 *
 *   deactivate gContract
 *   deactivate ContractWriter
 *
 * @mermaid
 * sequenceDiagram
 *   Sistema->>Contrato: criarContrato()
 *   activate Contrato
 *   Contrato->>Fábrica Escritor: criarEscritor()
 *   activate Fábrica Escritor
 *   Fábrica Escritor->>Escritor: criar()
 *   activate Escritor
 *   Escritor-->>Fábrica Escritor: Escritor
 *   Fábrica Escritor-->>Contrato: Escritor
 *   Contrato-->>Sistema: Contrato
 *   deactivate Fábrica Escritor
 *
 *   Sistema->>Contrato: Contrato.escrever()
 *   Contrato->>Escritor: escrever({json})
 *   Escritor-->>Contrato: "code.sol"
 *   Contrato-->>Sistema: "code.sol"
 *
 *   deactivate Contrato
 *   deactivate Escritor
 */
