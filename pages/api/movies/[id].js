
import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  //res.status(200).send(JSON.stringify(movieData,null,2));

  const method = req?.method;
  const id = parseInt(req?.query.id);
  const recordFromBody = req?.body;
  const jsonFile = path.resolve("./", "moviedb.json");

  switch (method) {
    case "POST":
      await postMethod();
      break;
    case "PUT":
      await putMethod();
      break;
    case "DELETE":
      await deleteMethod();
      break;
    default:
      res.status(501).send(`Method ${method} not implemented`);
      console.log(`Method ${method} not implemented`);
  }

  async function putMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const movies = JSON.parse(readFileData).movies;
      if (!movies) {
        res.status(404).send("Error: Request failed with status code 404");
      } else {
        const newMoviesArray = movies.map(function (rec) {
          return rec.id == id ? recordFromBody : rec;
        });
        writeFile(
          jsonFile,
          JSON.stringify({ movies: newMoviesArray }, null, 2)
        );
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(recordFromBody, null, 2));
        console.log(`PUT /api/movies/${id}  status: 200`);
      }
    } catch (e) {
      res
        .status(500)
        .send(`PUT /api/movies/${id}  status: 500 unexpected error`);
      console.log(`PUT /api/movies/${id}  status: 200`, e);
    }
  }

  async function deleteMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const movies = JSON.parse(readFileData).movies;
      if (!movies) {
        res.status(404).send("Error: Request failed with status code 404");
      } else {
        const newMoviesArray = movies.filter(function (rec) {
          return rec.id != id;
        });
        writeFile(
          jsonFile,
          JSON.stringify({ movies: newMoviesArray }, null, 2)
        );
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(
          JSON.stringify(
            movies.find((rec) => rec.id == id),
            null,
            2
          )
        );
        console.log(`DELETE /api/movies/${id}  status: 200`);
      }
    } catch (e) {
      res
        .status(500)
        .send(`DELETE /api/movies/${id}  status: 500 unexpected error`);
      console.log(`DELETE /api/movies/${id}  status: 200`, e);
    }
  }

  async function postMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const movies = JSON.parse(readFileData).movies;
      if (!movies) {
        res.status(404).send("Error: Request failed with status code 404");
      } else {
        const idNew =
        movies.reduce((accumulator, currentValue) => {
            const idCurrent = parseInt(currentValue.id);
            return idCurrent > accumulator ? idCurrent : accumulator;
          }, 0) + 1;

        const newMovieRec = { ...recordFromBody, id: idNew.toString() };

        const newMoviesArray = [newMovieRec, ...movies];
        writeFile(
          jsonFile,
          JSON.stringify({ movies: newMoviesArray }, null, 2)
        );
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(newMovieRec, null, 2));
        console.log(`POST /api/movies/${id}  status: 200`);
      }
    } catch (e) {
      res
        .status(500)
        .send(`POST /api/movies/${id}  status: 500 unexpected error`);
      console.log(`POST /api/movies/${id}  status: 200`, e);
    }
  }
}