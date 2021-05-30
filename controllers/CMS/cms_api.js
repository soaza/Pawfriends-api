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
  const dog_characteristics = dogInfo.dog_characteristics;

  const query = `
  UPDATE database_dogs 
  SET dog_name = nullif($2, 'NaN'), 
  dog_gender = nullif($3, 'NaN'), 
  dog_age = $4, 
  dog_characteristics = nullif($5, 'NaN')
  WHERE dog_id = $1 `;

  pool.query(
    query,
    [dog_id, dog_name, dog_gender, dog_age, dog_characteristics],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json({ success: true });
    }
  );
};

const updateExco = (request, response, pool) => {
  const excoInfo = request.query;

  const exco_id = excoInfo.exco_id ? parseInt(excoInfo.exco_id) : null;
  const exco_name = excoInfo.exco_name;
  const exco_year_of_study = excoInfo.exco_year_of_study
    ? excoInfo.exco_year_of_study
    : null;
  const exco_hobbies = excoInfo.exco_hobbies;
  const exco_favourite_dog = excoInfo.exco_favourite_dog;

  const query = `
  UPDATE database_exco 
  SET exco_name = nullif($2, 'NaN'), 
  exco_year_of_study = $3, 
  exco_hobbies = $4,
  exco_favourite_dog = $5
  WHERE exco_id = $1 `;

  pool.query(
    query,
    [exco_id, exco_name, exco_year_of_study, exco_hobbies, exco_favourite_dog],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json({ success: true });
    }
  );
};

const updateMainPageDescription = (request, response, pool) => {
  const requestBody = request.query;

  const description = requestBody.description;

  const query = `
  UPDATE database_main_page 
  SET pawfriends_description = $1 `;

  pool.query(query, [description], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json({ success: true });
  });
};

module.exports = {
  getUser,
  updateDog,
  updateExco,
  updateMainPageDescription,
};
