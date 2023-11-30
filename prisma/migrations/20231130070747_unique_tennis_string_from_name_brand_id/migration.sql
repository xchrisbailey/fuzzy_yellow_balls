/*
  Warnings:

  - A unique constraint covering the columns `[name,brand_id]` on the table `TennisString` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TennisString_name_brand_id_key" ON "TennisString"("name", "brand_id");
