import express, { request, response } from "express";
import { MovieService } from "./movies.service";
import { MovieController } from "./movies.controller";
import { authenticate, authorizate } from "../../middlewares/auth.middleware";

export const movieRouter = express.Router();
const movieService = new MovieService();
const movieController = new MovieController(movieService);

movieRouter.get("/", movieController.getAllMovies);
movieRouter.get("/:id", movieController.getMovieById);
movieRouter.post("/add",authorizate,movieController.addMovie);
movieRouter.patch("/edit/:id", authorizate, movieController.editMovieInfo);
movieRouter.delete("/delete/:id", authorizate, movieController.deleteMovie);
