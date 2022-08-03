import pg from "pg";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.static("static"));

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ...(process.env.NODE_ENV === "production"
    ? {
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {}),
});

//ppl
app.get("/ppl", (req, res) => {
  pool.query(`SELECT * FROM ppl`).then((data) => {
    res.send(data.rows);
  });
});

//All exercises
app.get("/ppl/exercises", (req, res) => {
  pool.query(`Select * FROM exercises`).then((data) => {
    res.send(data.rows);
  });
});

//Push/Pull/Leg exercises
app.get("/ppl/exercises/:pplId", (req, res) => {
  let pplId = req.params.pplId;
  if (pplId === "push") pplId = 1;
  else if (pplId === "pull") pplId = 2;
  else if (pplId === "legs") pplId = 3;
  else if (pplId !== "legs" || pplId !== "pull" || pplId !== "push") {
    res.statusCode(404);
  }
  pool
    .query(`SELECT * FROM exercises WHERE ppl_id = $1`, [pplId])
    .then((data) => {
      res.send(data.rows);
    });
});

//show journal
app.get("/ppl/journal", (req, res) => {
  pool.query(`SELECT * FROM journal`).then((data) => {
    res.send(data.rows);
  });
});

//send exercises to journal
app.post("/ppl/journal", (req, res) => {
  const { name, sets, reps, info } = req.body;
  pool
    .query(
      `INSERT INTO journal (
    name,
    sets,
    reps,
    info)
    VALUES(
      $1,
      $2,
      $3,
      $4
    )
    RETURNING *;`,
      [name, sets, reps, info]
    )
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.use((err, req, res, next) => {
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log(`Server is up on running on port ${port}`);
});
