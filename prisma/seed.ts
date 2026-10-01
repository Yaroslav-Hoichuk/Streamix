import {prisma} from "../src/prisma.service";

async function seed() {
}
seed().then(()=> prisma.$disconnect());
