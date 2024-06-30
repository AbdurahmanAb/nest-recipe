/*
  Warnings:

  - You are about to drop the column `recipeId` on the `Comment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_recipeId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "recipeId";

-- CreateTable
CREATE TABLE "RecipeComment" (
    "recipeId" INTEGER NOT NULL,
    "commentId" INTEGER NOT NULL,

    CONSTRAINT "RecipeComment_pkey" PRIMARY KEY ("recipeId","commentId")
);

-- AddForeignKey
ALTER TABLE "RecipeComment" ADD CONSTRAINT "RecipeComment_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeComment" ADD CONSTRAINT "RecipeComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
