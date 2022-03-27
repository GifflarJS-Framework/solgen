module.exports = {
  createConfig: (code) => {
    return JSON.stringify({
      language: "Solidity",
      sources: {
        jsons: {
          content: code,
        },
      },
      settings: {
        outputSelection: {
          // return everything
          "*": {
            "*": ["*"],
          },
        },
      },
    });
  },
};
