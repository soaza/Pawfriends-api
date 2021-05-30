const getDescription = (response, pool) => {
  const query = `SELECT * FROM database_main_page`;
  pool.query(query, (error, results) => {
    if (error) {
      console.log(error);
      response.status(404).json({ response: "Error" });
    } else {
      response.status(200).json(results.rows[0]);
    }
  });
};

module.exports = {
  getDescription,
};
