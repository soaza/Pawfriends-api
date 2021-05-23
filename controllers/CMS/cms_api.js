// User APIs
const getUser = (request, response, pool) => {
  const username = request.params.username;
  const password = request.params.password;
  const query = `SELECT * FROM database_cms_account WHERE username = $1 AND user_password = $2`;
  pool.query(query, [username, password], (error, results) => {
    if (error) {
      console.log(error);
      response.status(404).json({ response: "Error" });
    } else {
      if (results.rows.length == 0)
        response.status(404).json({ response: "User not found" });
      else response.status(200).json(results.rows);
    }
  });
};

module.exports = {
  getUser,
};
