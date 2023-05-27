const uuid = require('uuid');

exports.handler = async (event) => {
    const id = uuid.v4();
    const response = {
        statusCode: 200,
        body: JSON.stringify({id}),
    };
    return response;
};
