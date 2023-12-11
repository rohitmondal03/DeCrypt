/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Password` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Password_userId_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Password_id_key" ON "Password"("id");
