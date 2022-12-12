// import the database connection

const connection = require("../index");

module.exports = {
  getAll: function (callback) {
    const sql = `SELECT * FROM post INNER JOIN user ON post.user_iduser = user.iduser;`;
    // const sql = `SELECT *FROM post `;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  // "SELECT * FROM post INNER JOIN user ON post.user_iduser1=user.iduser INNER JOIN comment ON post.comment_idcomment=idcomment"

  getOne: function (callback, category) {
    // const sql = `SELECT * FROM post WHERE category="${category}"`;
    const sql = `SELECT * FROM post INNER JOIN user ON post.user_iduser = user.iduser WHERE post.category="${category}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  add: function (
    callback,
    postedat,
    posttitle,
    postcontent,
    postimage,
    categorie,
    user_iduser,
    like
  ) {
    const sql = `INSERT INTO post (postedat,posttitle,postcontent,postimage,categorie,user_iduser ) VALUES("${postedat}","${posttitle}", "${postcontent}","${postimage}","${categorie}","${user_iduser}" )`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  del: function (callback, idpost) {
    const sql = `DELETE FROM post WHERE idpost="${idpost}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  putpost: function (
    callback,
    postedat,
    posttitle,
    postcontent,
    postimage,
    categorie,
    idpost
  ) {
    const sql = `UPDATE post SET postedat="${postedat}",posttitle ="${posttitle}", postcontent ="${postcontent}" ,postimage="${postimage}", categorie="${categorie}"  WHERE idpost ="${idpost}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  putlike: function (callback, likes, idpost) {
    // const sql =  `UPDATE post INNER JOIN user ON post.user_iduser = user.iduser SET post.like = '${likes}' where id  `
    const sql = `UPDATE post SET likes = '${likes}' WHERE idpost ="${idpost}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  football: function (callback) {
    const sql =
      "SELECT * FROM post INNER JOIN user ON post.user_iduser = user.iduser WHERE post.categorie='football' ";
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
