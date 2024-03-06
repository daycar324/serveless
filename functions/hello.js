const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: "Here I am"
    } }catch (err) {
      return { statusCode: 422, body: err.stack };
    }
  };

