const getExcos = (request, response, pool) => {
  const query = "SELECT * FROM database_exco ORDER BY exco_id ";
  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getExcos,
};
