import { prisma } from "../../configs/prisma-config/prisma-adapter/prisma";
import { IMovie } from "./movie.entity";

export class MovieService {
  getPaginatedMovies = async (limit = 50, pageNum = 1) => {
    return await prisma.movie.findMany({
      take: limit,
      skip: (pageNum - 1) * limit,
    });
  };
  getAllMovies = async () => {
    return await prisma.movie.findMany({});
  };

  getMovieById = async (movieId: string) => {
    return await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
      include: {
        rating: true,
      },
    });
  };

  addMovie = async (movieData: IMovie) => {
    const { directorId, ...data } = movieData;
    return await prisma.movie.create({
      data: {
        ...data,
        director: {
          connect: {
            id: movieData.directorId,
          },
        },
      },
      include: {
        purchases: true,
        rating: true,
        actors: true,
        bookmark: true,
        director: true,
      },
    });
  };

  editMovieInfo = async (movieId: string, movieEditData: Partial<IMovie>) => {
    return await prisma.movie.update({
      where: {
        id: movieId,
      },
      data: {
        ...movieEditData,
      },
    });
  };
  deleteMovie = async (movieId: string) => {
    return await prisma.movie.delete({
      where: {
        id: movieId,
      },
    });
  };
}
