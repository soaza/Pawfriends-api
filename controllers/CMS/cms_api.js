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

// Dogs APIs
const updateDog = (request, response, pool) => {
  const dogInfo = request.query;

  const dog_id = dogInfo.dog_id ? parseInt(dogInfo.dog_id) : null;
  const dog_name = dogInfo.dog_name;
  const dog_gender = dogInfo.dog_gender;
  const dog_age =
    parseInt(dogInfo.dog_age) === NaN ? NaN : parseInt(dogInfo.dog_age);
  const dog_characteristics = dogInfo.dog_characteristics;

  const query = `
  UPDATE database_dogs 
  SET dog_name = nullif($2, 'NaN'), 
  dog_gender = nullif($3, 'NaN'), 
  dog_age =  $4, 
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

const postDogImage = (request, response, pool) => {
  const { image_url, dog_id, gallery_position } = request.body;

  const query = `
  INSERT INTO database_dog_image(image_id,image_url,dog_id,gallery_position)
  VALUES 
  (DEFAULT,$1,$2,$3) `;

  pool.query(query, [image_url, dog_id, gallery_position], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json({ success: true });
  });
};

// Exco APIs
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

// Main Page Apis
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

const updatePost = (request, response, pool) => {
  const postInfo = request.query;

  const post_id = postInfo.post_id ? parseInt(postInfo.post_id) : null;
  const date_posted = postInfo.date_posted ? postInfo.date_posted : null;
  const activity_description = postInfo.activity_description
    ? postInfo.activity_description
    : null;
  const parsed_date_posted = new Date(date_posted);

  const query = `
  UPDATE database_activity_posts 
  SET 
  activity_description = nullif($2, 'NaN'),
  date_posted = $3
  WHERE post_id = $1 `;

  pool.query(
    query,
    [post_id, activity_description, parsed_date_posted],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json({ success: true });
    }
  );
};

// Activity Page Apis
const postActivity = (request, response, pool) => {
  const postInfo = request.body;

  const postDate = postInfo.postDate;
  const postDescription = postInfo.postDescription;

  const query = `
  INSERT INTO database_activity_posts(post_id,date_posted,activity_description)
  VALUES 
  (DEFAULT,$1,$2) `;

  pool.query(query, [postDate, postDescription], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json({ success: true });
  });
};

module.exports = {
  getUser,
  updateDog,
  postDogImage,
  updateExco,
  updateMainPageDescription,
  updatePost,
  postActivity,
};
