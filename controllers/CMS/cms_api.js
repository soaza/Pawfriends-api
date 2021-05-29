// User APIs
const getUser = (request, response, pool) => {
  const username = request.query.username;
  const password = request.query.password;
  const query = `SELECT * FROM database_cms_account WHERE username = $1 AND user_password = $2`;
  pool.query(query, [username, password], (error, results) => {
    if (error) {
      console.log(error);
      response.status(404).json({ response: "Error" });
    } else {
      if (results.rows.length == 0)
        response.status(200).json({ response: "User not found" });
      else response.status(200).json({ success: "success" });
    }
  });
};

const updateDog = (request, response, pool) => {
  const dogInfo = request.query;

  const dog_id = dogInfo.dog_id ? parseInt(dogInfo.dog_id) : null;
  const dog_name = dogInfo.dog_name;
  const dog_gender = dogInfo.dog_gender;
  const dog_age = dogInfo.dog_age ? parseInt(dogInfo.dog_age) : null;
  console.log(dogInfo);

  const query = `UPDATE database_dogs SET dog_name = $2, dog_gender = $3, dog_age = $4 WHERE dog_id = $1 `;
  pool.query(
    query,
    [dog_id, dog_name, dog_gender, dog_age],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json({ success: true });
    }
  );
};

module.exports = {
  getUser,
  updateDog,
};
