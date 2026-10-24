/*
  Warnings:

  - A unique constraint covering the columns `[surname]` on the table `Actor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[surname]` on the table `Director` will be added. If there are existing duplicate values, this will fail.
  - Made the column `surname` on table `Actor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `surname` on table `Director` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Actor" ALTER COLUMN "surname" SET NOT NULL;

-- AlterTable
ALTER TABLE "Director" ALTER COLUMN "surname" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Actor_surname_key" ON "Actor"("surname");

-- CreateIndex
CREATE UNIQUE INDEX "Director_surname_key" ON "Director"("surname");
