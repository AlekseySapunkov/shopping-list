const express = require("express");
const pool = require("./config/database");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5100;
app.use(express.json());
app.use(cors());
pool.query("SELECT NOW()", (err, result) => {
  if (err) {
    console.error("error connecting to the database", err.stack);
  } else {
    console.log("Success connection to the database", result.rows);
  }
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
app.get("/items", (req, res) => {
  pool.query(
    "SELECT id, item_name, date, price FROM shopping_list",
    (err, result) => {
      if (err) {
        console.error("error connecting to the database", err.stack);
      } else {
        console.log(result.rows);
        res.send(result.rows);
      }
    }
  );
});
app.post("/items", (req, resp) => {
  const { item_name, date, price } = req.body;
  pool.query(
    "INSERT INTO shopping_list(item_name, date, price) VALUES($1, $2, $3) RETURNING *",
    [item_name, date, price],
    (err, result) => {
      if (err) {
        resp.send({
          express: "Проблемы с сервером, пожалуйста отправьте форму повторно",
        });
        return console.error(err.message);
      } else {
        console.log({ express: "Ваш запрос доставлен" });
        resp.send({ item_name, date, price });
      }
    }
  );
});
app.delete("/items/:id", (req, resp) => {
  const id = req.params.id;
  pool.query("DELETE FROM shopping_list WHERE id=$1", [id], (err, result) => {
    if (err) {
      resp.send({
        express: "Проблемы с сервером, пожалуйста повторите действие",
        id,
      });
      return console.error(err.message);
    } else {
      console.log({ express: "Ваш запрос выполнен" });
      resp.send({ id });
    }
  });
});
app.put("/items/:id", (req, resp) => {
  const id = req.params.id;
  const { item_name, date, price } = req.body;
  pool.query(
    "UPDATE shopping_list SET item_name = $1, date = $2, price = $3 WHERE id=$4",
    [item_name, date, price, id],
    (err, result) => {
      if (err) {
        resp.send({
          express: "Проблемы с сервером, пожалуйста повторите действие",
          id,
        });
        return console.error(err.message);
      } else {
        console.log({ express: "Ваш запрос выполнен" });
        resp.send({ id });
      }
    }
  );
});
