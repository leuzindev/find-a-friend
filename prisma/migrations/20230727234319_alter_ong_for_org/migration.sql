/*
  Warnings:

  - You are about to drop the column `ong_Id` on the `pets` table. All the data in the column will be lost.
  - You are about to drop the `ongs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `org_Id` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_ong_Id_fkey";

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "ong_Id",
ADD COLUMN     "org_Id" TEXT NOT NULL;

-- DropTable
DROP TABLE "ongs";

-- CreateTable
CREATE TABLE "orgs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "orgs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_org_Id_fkey" FOREIGN KEY ("org_Id") REFERENCES "orgs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
