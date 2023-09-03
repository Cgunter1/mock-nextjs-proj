const { mock } = require("pactum");

mock.addInteraction({
    request: {
        method: "GET",
        path: "/api/users",
        queryParams: {
            id: 1,
        },
    },
    response: {
        status: 200,
        body: "user 1",
    },
});
