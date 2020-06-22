pragma solidity ^0.4.23;

contract DHT11{
//VARIABLES
address public manager;
string public name;
uint256 public value1;
uint256 public max_value1;
uint256 public min_value1;


//EVENTS
event temperatureOverflow(uint256 value1, uint256 max_value1);
event temperatureUnderflow(uint256 value1, uint256 min_value1);


//FUNCTIONS
constructor(address _owner) public{
manager = _owner;
name = "DHT11";
}

function setValue(uint256 _val, uint256 _valueId) public{
if(_valueId == 1){
value1 = _val;
if(value1 >= max_value1){
emit temperatureOverflow(value1, max_value1);
}
else if(value1 <= min_value1){
emit temperatureUnderflow(value1, min_value1);
}
}
}

function setName(string _name) public{
name = _name;
}

}

contract Controller{
//VARIABLES
address[] public contracts;
uint256 private counter = 0;


//FUNCTIONS
function createContract(address _owner) public{
address newContract = new DHT11(_owner);
contracts.push(newContract);
counter = counter + 1;
}

function getLastContract() public returns (address) {
address _contract = address(0);
if(counter > 0){
_contract = contracts[counter - 1];
}
else{
_contract = contracts[0];
}
return (_contract);
}

}

