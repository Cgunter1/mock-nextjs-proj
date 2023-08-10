const { mock } = require("pactum");
require("./random");
// runs mock server on port 8081
mock.start(8081)
    .then(() => console.log("Mock Server running!"))
    .catch(e => console.log("Mock server failed due to", e));
