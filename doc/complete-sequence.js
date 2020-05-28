/**
 * @name Complete Sequence Diagram
 * @module
 * @category Diagrams
 *
 * @description Getting the JSON of the contract to be created.
 * @mermaid
 * sequenceDiagram
 *   Coder->>gContract: createContract()
 *   activate gContract
 *
 *   gContract->>ContractModel Factory: createContractModel()
 *   activate ContractModel Factory
 *   ContractModel Factory->>ContractModel: create()
 *   activate ContractModel
 *   ContractModel Factory-->>gContract: ContractModel
 *   deactivate ContractModel Factory
 *
 *   gContract->>ContractWriter Factory: createContractWriter()
 *   activate ContractWriter Factory
 *   ContractWriter Factory->>ContractWriter: create()
 *   activate ContractWriter
 *   ContractWriter Factory-->>gContract: ContractWriter
 *   deactivate ContractWriter Factory
 *
 *   gContract->>Compiler Factory: createCompiler()
 *   activate Compiler Factory
 *   Compiler Factory->>Compiler: create()
 *   activate Compiler
 *   Compiler Factory-->>gContract: Compiler
 *   deactivate Compiler Factory
 *
 *   gContract->>Deployer Factory: createDeployer()
 *   activate Deployer Factory
 *   Deployer Factory->>Deployer: create()
 *   activate Deployer
 *   Deployer Factory-->>gContract: Deployer
 *   deactivate Deployer Factory
 *
 *   Coder->>gContract: gContract.toString()
 *   gContract->>ContractModel: generateJSON()
 *   ContractModel-->>gContract: {json}
 *
 *   Coder->>gContract: gContract.write()
 *   gContract->>ContractWriter: write({json})
 *   ContractWriter-->>gContract: "code.sol"
 *
 *   Coder->>gContract: gContract.compile()
 *   gContract->>Compiler: compile("code.sol")
 *   Compiler-->>gContract: abi & bytecode
 *
 *   Coder->>gContract: gContract.deploy()
 *   gContract->>Deployer: deploy(abi, bytecode)
 *   Deployer-->>gContract: Contract API
 *
 *   deactivate ContractModel
 *   deactivate ContractWriter
 *   deactivate Compiler
 *   deactivate Deployer
 *   deactivate gContract
 */
