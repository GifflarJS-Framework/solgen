/**
 * @name Complete Sequence Diagram
 * @module
 * @category Diagrams
 *
 * @description Getting the JSON of the contract to be created.
 * @mermaid
 * sequenceDiagram
 *   Coder->>ContractManager Factory: createContractManager()
 *   activate ContractManager Factory
 *   ContractManager Factory->>ContractManager: create()
 *   activate ContractManager
 *   ContractManager Factory-->>Coder: ContractManager
 *   deactivate ContractManager Factory
 *
 *   ContractManager->>ContractWriter Factory: createContractWriter()
 *   activate ContractWriter Factory
 *   ContractWriter Factory->>ContractWriter: create()
 *   activate ContractWriter
 *   ContractWriter Factory-->>ContractManager: ContractWriter
 *   deactivate ContractWriter Factory
 *
 *   ContractManager->>Compiler Factory: createCompiler()
 *   activate Compiler Factory
 *   Compiler Factory->>Compiler: create()
 *   activate Compiler
 *   Compiler Factory-->>ContractManager: Compiler
 *   deactivate Compiler Factory
 *
 *   ContractManager->>Deployer Factory: createDeployer()
 *   activate Deployer Factory
 *   Deployer Factory->>Deployer: create()
 *   activate Deployer
 *   Deployer Factory-->>ContractManager: Deployer
 *   deactivate Deployer Factory
 *
 *   Coder->>ContractManager: manager.createContract()
 *   ContractManager->>ContractModel Factory: createContractModel()
 *   activate ContractModel Factory
 *   ContractModel Factory->>ContractModel: create()
 *   activate ContractModel
 *   ContractModel Factory-->>ContractManager: ContractModel
 *   deactivate ContractModel Factory
 *   ContractManager-->>Coder: ContractModel
 *
 *   Coder->>ContractModel: ContractModel.toString()
 *   ContractModel->>ContractModel: generateJSON()
 *   ContractModel-->>Coder: {json}
 *
 *   Coder->>ContractManager: manager.write()
 *   ContractManager->>ContractWriter: write({json})
 *   ContractWriter-->>ContractManager: "code.sol"
 *
 *   Coder->>ContractManager: manager.compile()
 *   ContractManager->>Compiler: compile("code.sol")
 *   Compiler-->>ContractManager: abi & bytecode
 *
 *   Coder->>ContractManager: manager.deploy()
 *   ContractManager->>Deployer: deploy(abi, bytecode)
 *   Deployer-->>ContractManager: Contract API
 *
 *   deactivate ContractModel
 *   deactivate ContractWriter
 *   deactivate Compiler
 *   deactivate Deployer
 *   deactivate gContract
 */
