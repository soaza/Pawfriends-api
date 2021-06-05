const getDogs = async (request, response, pool) => {
  const dogQuery = "SELECT * FROM database_dogs ORDER BY dog_id ";
  const dogs = await pool.query(dogQuery);

  const imagesQuery = "SELECT * FROM database_dog_image";
  const images = await pool.query(imagesQuery);

  response.status(200).json({ dogs: dogs.rows, images: images.rows });
};

module.exports = {
  getDogs,
};
