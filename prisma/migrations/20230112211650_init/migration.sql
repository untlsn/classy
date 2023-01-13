/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `ResUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `ResUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'ADMIN';

-- AlterTable
ALTER TABLE "ResUser" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "ResUser"("email");
