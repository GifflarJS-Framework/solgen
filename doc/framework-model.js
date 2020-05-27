/**
 * @name Framework model
 * @module
 * @category Diagrams
 *
 * @mermaid
 * graph TD;
 * contractWriter-->|uses|json((JSON))
 * deployer-->|deploys|abi
 * compiler-->|compiles|sol_code
 *
 * subgraph deploying
 * deployer-->|generates|api((ContractAPI))
 * end
 *
 * subgraph compiling
 * compiler-->|generates|abi((abi & bytecode))
 * end
 *
 *
 * subgraph writing
 * contractWriter-->Writers
 * contractWriter-->|generates|sol_code((.sol code))
 * end
 *
 * subgraph modeling
 * contractModel-->Models
 * contractModel-->|generates|json
 * end
 */
