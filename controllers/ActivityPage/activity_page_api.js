const getActivityPosts = (response, pool) => {
  const query = `SELECT * FROM database_activity_posts ORDER BY post_id`;
  pool.query(query, (error, results) => {
    if (error) {
      console.log(error);
      response.status(404).json({ response: "Error" });
    } else {
      response.status(200).json(results.rows);
    }
  });
};

module.exports = {
  getActivityPosts,
};
