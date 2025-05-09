const { app } = require("@azure/functions");

app.http("httpTriggerfunction", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log(
      `Http function processed request for url AUBAIR AKIF ehsan "${request.url}"`
    );

    const name = request.query.get("name") || (await request.text()) || "world";

    return { body: `Hello, ${name}!` };
  },
});
