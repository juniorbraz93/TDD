class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.only(["email", "password"]);

    const token = await auth.attempt(email, password);

    return response.json({
      success: true,
      data: token
    });
  }
}

module.exports = SessionController;
