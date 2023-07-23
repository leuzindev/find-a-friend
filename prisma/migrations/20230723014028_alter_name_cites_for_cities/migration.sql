/*
  Warnings:

  - You are about to drop the `cites` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_city_Id_fkey";

-- DropTable
DROP TABLE "cites";

-- CreateTable
CREATE TABLE "cities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cities_name_key" ON "cities"("name");

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_city_Id_fkey" FOREIGN KEY ("city_Id") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;
