import { prisma } from "../src/configs/prisma-config/prisma-adapter/prisma.js";

async function seed() {
  // await prisma.award.create({
  //     data: {
  //         name: "Golden EYE",
  //         year: 2022
  //     }
  // })

  await prisma.movie.create({
      data:{
          name: "It",
          year: 2021,
          ageBan: 18,
          description: "The Dancing Clown",
          trailerLink: "###",
          cinemaBanner: "https://static.yani.tv/posters/full/1636671167.jpg",
          previewImagesLink: ["1","2","3"],
          languages: ["Ukrainian", "Russian", "Deutch", "English"],
          tags: ["Horror", "Fantasy", "Triller"],
          isSerial: false,
          accessPrice: 20,

          director: {
              connectOrCreate:{
                  where:{
                      surname: "Steven King",
                  },
                  create:{

                      avatar: "noAvatar",
                      surname: "Steven King",
                      firstname: "Steven",
                      lastname: "King",
                      birthDate: new Date("1963-11-13"),
                      bio: "The Greatest Horror King in the universe",
                      photos: ["1235424tgv.img"]

                  },
              },
          },
      },
     include:{
          director: true,
      }
  })

  await prisma.$transaction([
    prisma.rating.create({
      data: {
        value: 4,
        comment: "nice film",
        user: {
          connectOrCreate: {
            where: {
              email: "kiloton@gmail.com",
            },
            create: {
              name: "Killua",
              email: "kiloton@gmail.com",
              age: 22,
            },
          },
        },
        movie: {
          connect: {
            name: "It",
          },
        },
      },
      include: {
        user: true,
        movie: true,
      },
    }),
    prisma.rating.create({
      data: {
        value: 1,
        comment: "scary film!!!!",
        user: {
          connectOrCreate: {
            where: {
              email: "kiloton3@gmail.com",
            },
            create: {
              name: "Mateo",
              email: "kiloton3@gmail.com",
              age: 7,
            },
          },
        },
        movie: {
          connect: {
            name: "It",
          },
        },
      },
      include: {
        user: true,
        movie: true,
      },
    }),
    prisma.rating.create({
      data: {
        value: 2,
        comment: "bad film",
        user: {
          connectOrCreate: {
            where: {
              email: "kiloton1@gmail.com",
            },
            create: {
              name: "marquis",
              email: "kiloton1@gmail.com",
              age: 11,
            },
          },
        },
        movie: {
          connect: {
            name: "It",
          },
        },
      },
      include: {
        user: true,
        movie: true,
      },
    }),
  ]);
}
seed().then(() => prisma.$disconnect());
