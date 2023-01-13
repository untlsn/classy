/*
  Warnings:

  - Added the required column `password` to the `ResUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ResUser" ADD COLUMN     "password" TEXT NOT NULL;
