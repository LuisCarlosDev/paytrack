/*
  Warnings:

  - Added the required column `status` to the `tuitions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tuitions" ADD COLUMN     "status" TEXT NOT NULL;
