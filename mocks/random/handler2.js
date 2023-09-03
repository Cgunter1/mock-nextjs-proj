const { mock } = require("pactum");
const { like } = require("pactum-matchers");

mock.addInteraction({
    request: {
        method: "GET",
        path: "/api/projects/{id}",
        pathParams: {
            id: like("random-id"),
        },
    },
    stores: {
        ProjectId: "req.pathParams.id",
    },
    response: {
        status: 200,
        body: {
            id: "$S{ProjectId}",
        },
    },
});
