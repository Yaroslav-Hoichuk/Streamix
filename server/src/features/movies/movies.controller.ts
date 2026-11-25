import { MovieService } from "./movies.service";
import { StatusCodes } from "../entities/StatusCodes";
import { Request, Response } from "express";
import { PrismaClientValidationError } from "@prisma/client/runtime/client";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { IMovie } from "./movie.entity";

export class MovieController {
  constructor(private readonly MovieService: MovieService) {}
  getPaginatedMovies = async (req: Request, res: Response) => {
    try {
      const { limit, pageNum } = req.body ?? {};
      const response = await this.MovieService.getPaginatedMovies(limit, pageNum);
      if (!response) throw new Error();
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err: error });
    }
  };

  getAllMovies = async (req: Request, res: Response) => {
    try {
      const response = await this.MovieService.getAllMovies();
      if (response.length == 0) throw new Error();
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("server error");
    }
  };

  getMovieById = async (req: Request, res: Response) => {
    try {
      const movieId = req.params.id as string;
      const response = await this.MovieService.getMovieById(movieId);
      if (!response) throw new Error();
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      if (error instanceof PrismaClientValidationError)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err: error });
    }
  };
  addMovie = async (req: Request, res: Response) => {
    try {
      const movieData: IMovie = req.body;
      const response = await this.MovieService.addMovie(movieData);
      if (!response) throw new Error();
      return res.status(StatusCodes.OK).json({ movie: response });
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json(error);
    }
  };
  editMovieInfo = async (req: Request, res: Response) => {
    try {
      const movieEditData: Partial<IMovie> = req.body;
      const response = await this.MovieService.editMovieInfo(
        req.params.id as string,
        movieEditData,
      );
      if (!response) throw new Error();
      return res.status(StatusCodes.OK).json({ movieEditInfo: response });
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json(error);
    }
  };
  deleteMovie = async (req: Request, res: Response) => {
    try {
      const response = await this.MovieService.deleteMovie(req.params.id as string);
      if (!response) throw new Error();
      return res.status(StatusCodes.OK).json({ movieEditInfo: response });
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json(error);
    }
  };
}
