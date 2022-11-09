/*
  Warnings:

  - Added the required column `endsAt` to the `Trek` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Trek` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationDescription` to the `Trek` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationLatitude` to the `Trek` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationLongitude` to the `Trek` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Trek` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startsAt` to the `Trek` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trek" ADD COLUMN     "endsAt" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "locationDescription" TEXT NOT NULL,
ADD COLUMN     "locationLatitude" TEXT NOT NULL,
ADD COLUMN     "locationLongitude" TEXT NOT NULL,
ADD COLUMN     "price" TEXT NOT NULL,
ADD COLUMN     "startsAt" TEXT NOT NULL;
