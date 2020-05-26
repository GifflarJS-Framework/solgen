/**
 * @todo Write documentation
 * @module
 */
function createIfModel(_condition, _else) {
  /**
   * @todo Write documentation
   */
  let _if = {
    statement: "if",
    else: _else,
    condition: _condition,
    content: [],
  };

  return _if;
}

module.exports = createIfModel;
