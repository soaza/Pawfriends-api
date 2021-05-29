const getDogs = (request, response, pool) => {
  const query = "SELECT * FROM database_dogs ORDER BY dog_id ";
  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getDogs,
};
