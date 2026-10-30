import {prisma} from "../src/prisma-config/prisma-adapter/prisma.js";

async function seed() {
    // await prisma.award.create({
    //     data: {
    //         name: "Golden EYE",
    //         year: 2022
    //     }
    // })

    // await prisma.movie.create({
    //     data:{
    //         name: "It",
    //         year: 2021,
    //         ageBan: 18,
    //         description: "The Dancing Clown",
    //         trailerLink: "###",
    //         previewImagesLink: ["1","2","3"],
    //         languages: ["Ukrainian", "Russian", "Deutch", "English"],
    //         tags: ["Horror", "Fantasy", "Triller"],
    //         isSerial: false,
    //         accessPrice: 20,
    //         director: {
    //             connectOrCreate:{
    //                 where:{
    //                     surname: "Steven King", 
    //                 },
    //                 create:{
                       
    //                     avatar: "noAvatar",
    //                     surname: "Steven King",
    //                     firstname: "Steven",
    //                     lastname: "King",
    //                     birthDate: new Date("1963-11-13"),
    //                     bio: "The Greatest Horror King in the universe",
    //                     photos: ["1235424tgv.img"]
                    
    //                 },
    //             },
    //         },
    //     }, 
    //    include:{
    //         director: true,
    //     }
    // })
}
seed().then(()=> prisma.$disconnect());
