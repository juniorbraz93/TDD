const { test, trait } = use("Test/Suite")("Session");
const User = use("App/Models/User");
const Factory = use("Factory");

trait("Test/ApiClient");

test("Return JWT Session created", async ({ assert, client }) => {
  const sessionPayload = {
    email: "jb@kjh.com.tl",
    password: "132132"
  };

  const user = await Factory.model("App/Models/User").create(sessionPayload);

  const response = await client
    .post("sessions")
    .send(sessionPayload)
    .end();

  response.assertStatus(200);
  assert.exists(response.body.data);
}).timeout(0);
