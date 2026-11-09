
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/configs/prisma-config/generated/prisma/client";
import bcrypt from "bcrypt"

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

// -------------------- DIRECTORS --------------------

const directors = [
    ["Christopher", "Nolan", "British-American filmmaker"],
    ["Denis", "Villeneuve", "Canadian filmmaker"],
    ["Steven", "Spielberg", "American filmmaker"],
    ["David", "Fincher", "American filmmaker"],
    ["James", "Cameron", "Canadian filmmaker"],
] as const;

// -------------------- ACTORS --------------------

const actors = [
    ["Leonardo", "DiCaprio", "American actor"],
    ["Matthew", "McConaughey", "American actor"],
    ["Cillian", "Murphy", "Irish actor"],
    ["Anne", "Hathaway", "American actress"],
    ["Ryan", "Gosling", "Canadian actor"],
    ["Timothee", "Chalamet", "American actor"],
    ["Florence", "Pugh", "British actress"],
    ["Christian", "Bale", "British-American actor"],
    ["Brad", "Pitt", "American actor"],
    ["Tom", "Hanks", "American actor"],
] as const;

// -------------------- USERS --------------------

const users = [
    { password:"1",email: "alex@example.com", name: "Alex Morgan", age: 24 },
    { password:"12",email: "sarah@example.com", name: "Sarah Wilson", age: 21 },
    { password:"123",email: "john@example.com", name: "John Carter", age: 29 },
    { password:"1234",email: "emma@example.com", name: "Emma Davis", age: 26 },
    { password:"12345",email: "michael@example.com", name: "Michael Brown", age: 32 },
    { password:"123456",email: "olivia@example.com", name: "Olivia Taylor", age: 23 },
    { password:"1234567",email: "daniel@example.com", name: "Daniel White", age: 28 },
    { password:"1234567",email: "lucas@example.com", name: "Lucas Martin", age: 25 },
];

// -------------------- MOVIES --------------------

// name, year, director index, age limit, serial,
// price, actor indexes, tags, languages

const movieData = [
    ["Inception", 2010, 0, 13, false, 15, [0, 3, 7], ["Sci-Fi", "Thriller"], ["EN", "UA"]],
    ["Interstellar", 2014, 0, 13, false, 18, [1, 3, 7], ["Sci-Fi", "Drama"], ["EN", "UA"]],
    ["The Dark Knight", 2008, 0, 16, false, 15, [7, 2], ["Action", "Crime"], ["EN", "UA"]],
    ["Oppenheimer", 2023, 0, 16, false, 20, [2, 3], ["Drama", "History"], ["EN", "UA"]],
    ["Dunkirk", 2017, 0, 13, false, 14, [2], ["War", "Drama"], ["EN", "UA"]],

    ["Dune", 2021, 1, 13, false, 18, [5, 6], ["Sci-Fi", "Adventure"], ["EN", "UA"]],
    ["Dune: Part Two", 2024, 1, 13, false, 20, [5, 6], ["Sci-Fi", "Adventure"], ["EN", "UA"]],
    ["Blade Runner 2049", 2017, 1, 16, false, 16, [4, 7], ["Sci-Fi", "Mystery"], ["EN", "UA"]],
    ["Arrival", 2016, 1, 13, false, 14, [6], ["Sci-Fi", "Drama"], ["EN", "UA"]],
    ["Prisoners", 2013, 1, 16, false, 15, [7], ["Thriller", "Crime"], ["EN", "UA"]],

    ["Jurassic Park", 1993, 2, 13, false, 12, [9], ["Adventure", "Sci-Fi"], ["EN", "UA"]],
    ["Saving Private Ryan", 1998, 2, 16, false, 15, [9], ["War", "Drama"], ["EN", "UA"]],
    ["Ready Player One", 2018, 2, 13, false, 16, [4], ["Sci-Fi", "Adventure"], ["EN", "UA"]],
    ["The Terminal", 2004, 2, 7, false, 10, [9], ["Comedy", "Drama"], ["EN", "UA"]],
    ["Minority Report", 2002, 2, 13, false, 13, [0], ["Sci-Fi", "Action"], ["EN", "UA"]],

    ["Fight Club", 1999, 3, 18, false, 15, [8], ["Drama", "Thriller"], ["EN", "UA"]],
    ["Se7en", 1995, 3, 18, false, 14, [8], ["Crime", "Thriller"], ["EN", "UA"]],
    ["Gone Girl", 2014, 3, 18, false, 15, [0], ["Mystery", "Drama"], ["EN", "UA"]],
    ["The Social Network", 2010, 3, 13, false, 12, [0], ["Drama", "Biography"], ["EN", "UA"]],
    ["The Killer", 2023, 3, 16, false, 15, [8], ["Crime", "Thriller"], ["EN", "UA"]],

    ["Titanic", 1997, 4, 13, false, 15, [0], ["Romance", "Drama"], ["EN", "UA"]],
    ["Avatar", 2009, 4, 13, false, 18, [0], ["Sci-Fi", "Adventure"], ["EN", "UA"]],
    ["Avatar: The Way of Water", 2022, 4, 13, false, 20, [0], ["Sci-Fi", "Adventure"], ["EN", "UA"]],
    ["Terminator 2", 1991, 4, 16, false, 14, [7], ["Action", "Sci-Fi"], ["EN", "UA"]],
    ["True Lies", 1994, 4, 16, false, 12, [7], ["Action", "Comedy"], ["EN", "UA"]],
] as const;

// -------------------- AWARDS --------------------

const awards = [
    { name: "Academy Award - Best Director", year: 2011, type: "DIRECTOR", index: 0 },
    { name: "Academy Award - Best Picture", year: 2011, type: "DIRECTOR", index: 0 },
    { name: "Golden Globe - Best Director", year: 2015, type: "DIRECTOR", index: 0 },
    { name: "BAFTA - Best Film", year: 2018, type: "DIRECTOR", index: 0 },

    { name: "Academy Award - Best Director", year: 2022, type: "DIRECTOR", index: 1 },
    { name: "César Award - Best Director", year: 2017, type: "DIRECTOR", index: 1 },
    { name: "BAFTA - Best Film", year: 2022, type: "DIRECTOR", index: 1 },
    { name: "Venice Film Festival Award", year: 2016, type: "DIRECTOR", index: 1 },

    { name: "Academy Award - Best Director", year: 1994, type: "DIRECTOR", index: 2 },
    { name: "Golden Globe - Best Director", year: 1999, type: "DIRECTOR", index: 2 },
    { name: "Academy Award - Best Picture", year: 1994, type: "DIRECTOR", index: 2 },
    { name: "BAFTA Fellowship", year: 2001, type: "DIRECTOR", index: 2 },

    { name: "Golden Globe - Best Director", year: 2011, type: "DIRECTOR", index: 3 },
    { name: "Emmy Award - Outstanding Directing", year: 2013, type: "DIRECTOR", index: 3 },
    { name: "BAFTA - Best Film", year: 2011, type: "DIRECTOR", index: 3 },
    { name: "Venice Film Festival Award", year: 2007, type: "DIRECTOR", index: 3 },

    { name: "Academy Award - Best Director", year: 1998, type: "DIRECTOR", index: 4 },
    { name: "Golden Globe - Best Director", year: 1998, type: "DIRECTOR", index: 4 },
    { name: "Academy Award - Best Picture", year: 1998, type: "DIRECTOR", index: 4 },
    { name: "Saturn Award - Best Director", year: 2010, type: "DIRECTOR", index: 4 },
] as const;

// -------------------- SEED --------------------

async function main() {
    console.log("Starting Streamix seed...");

    // 1. Create directors

    const directorIds: string[] = [];

    for (const [firstname, surname, bio] of directors) {
        const director = await prisma.director.upsert({
            where: { surname },
            update: { firstname, bio },
            create: {
                firstname,
                surname,
                lastname: surname,
                birthDate: new Date("1970-01-01"),
                avatar: `https://placehold.co/300x300?text=${firstname}`,
                bio,
                photos: [],
            },
        });

        directorIds.push(director.id);
    }

    // 2. Create actors

    const actorIds: string[] = [];

    for (const [firstname, surname, bio] of actors) {
        const actor = await prisma.actor.upsert({
            where: { surname },
            update: { firstname, bio },
            create: {
                firstname,
                surname,
                lastname: surname,
                birthDate: new Date("1980-01-01"),
                avatar: `https://placehold.co/300x300?text=${firstname}`,
                bio,
                photos: [],
            },
        });

        actorIds.push(actor.id);
    }

    // 3. Create users

    const userIds: string[] = [];
    
    for (const user of users) {
        const result = await prisma.user.upsert({
            where: {email: user.email },
            update: {
                name: user.name,
                age: user.age,
                password: await bcrypt.hash(user.password, 8)
            },
            create: {
                name: user.name,
                age: user.age,
                email: user.email,
                password: await bcrypt.hash(user.password, 8),
                role: "USER",
                userStatus: "FREE",
            },
        });

        userIds.push(result.id);
    }

    // 4. Create movies

    const movieIds: string[] = [];

    for (const [
        name,
        year,
        directorIndex,
        ageBan,
        isSerial,
        accessPrice,
        actorIndexes,
        tags,
        languages,
    ] of movieData) {
        const movie = await prisma.movie.upsert({
            where: { name },
            update: {
                year,
                ageBan,
                isSerial,
                accessPrice,
                directorId: directorIds[directorIndex],
            },
            create: {
                name,
                year,
                ageBan,
                description: `${name} is a cinematic production released in ${year}. Discover its story, characters and unforgettable moments on Streamix.`,
                trailerLink: `https://www.youtube.com/results?search_query=${encodeURIComponent(name + " trailer")}`,
                cinemaBanner: `https://placehold.co/1920x1080?text=${encodeURIComponent(name)}`,
                previewImagesLink: [
                    `https://placehold.co/800x450?text=${encodeURIComponent(name + " Scene 1")}`,
                    `https://placehold.co/800x450?text=${encodeURIComponent(name + " Scene 2")}`,
                    `https://placehold.co/800x450?text=${encodeURIComponent(name + " Scene 3")}`,
                ],
                languages: [...languages],
                tags: [...tags],
                isSerial,
                accessPrice,
                directorId: directorIds[directorIndex],
            },
        });

        movieIds.push(movie.id);

        // Connect actors to movies

        await prisma.movieActor.createMany({
            data: actorIndexes.map((actorIndex) => ({
                movieId: movie.id,
                actorId: actorIds[actorIndex],
            })),
            skipDuplicates: true,
        });
    }

    // 5. Create awards
    // Delete only awards belonging to this test dataset.

    const awardNames = [...new Set(awards.map((award) => award.name))];

    // Awards don't have a unique natural key in this schema.
    // Use a dedicated marker list to keep repeated seeds idempotent.
    // Here we recreate the award dataset.

    await prisma.award.deleteMany({
        where: {
            name: { in: awardNames },
        },
    });

    for (const award of awards) {
        await prisma.award.create({
            data: {
                name: award.name,
                year: award.year,
                ...(award.type === "DIRECTOR"
                    ? { directorId: directorIds[award.index] }
                    : { actorId: actorIds[award.index] }),
            },
        });
    }

    // 6. Create ratings
    // Three unique users review every movie.

    const comments = [
        "Absolutely loved it! Great story and cinematography.",
        "Really good movie. The atmosphere was incredible.",
        "A solid production with amazing performances.",
        "One of the best movies I have watched recently.",
        "Great visuals, but the story could be stronger.",
        "Worth watching. Definitely recommend it.",
        "The acting was outstanding!",
        "Interesting plot and fantastic soundtrack.",
    ];

    for (let movieIndex = 0; movieIndex < movieIds.length; movieIndex++) {
        for (let reviewIndex = 0; reviewIndex < 3; reviewIndex++) {
            const userIndex = (movieIndex * 3 + reviewIndex) % userIds.length;

            await prisma.rating.upsert({
                where: {
                    userId_movieId: {
                        userId: userIds[userIndex],
                        movieId: movieIds[movieIndex],
                    },
                },
                update: {
                    value: 3 + ((movieIndex + reviewIndex) % 3),
                    comment: comments[(movieIndex + reviewIndex) % comments.length],
                },
                create: {
                    value: 3 + ((movieIndex + reviewIndex) % 3),
                    comment: comments[(movieIndex + reviewIndex) % comments.length],
                    userId: userIds[userIndex],
                    movieId: movieIds[movieIndex],
                },
            });
        }
    }

    console.log("Streamix seed completed!");
    console.log({
        directors: directorIds.length,
        actors: actorIds.length,
        users: userIds.length,
        movies: movieIds.length,
        awards: awards.length,
        ratings: movieIds.length * 3,
    });
}

main()
    .catch((error) => {
        console.error("Seed failed:", error);
        process.exitCode = 1;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
