/*
  Warnings:

  - A unique constraint covering the columns `[cinemaBanner]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cinemaBanner` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "cinemaBanner" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Movie_cinemaBanner_key" ON "Movie"("cinemaBanner");
