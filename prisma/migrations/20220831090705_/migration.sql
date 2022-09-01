/*
  Warnings:

  - You are about to drop the column `userId` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_userId_fkey`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `userId`,
    ADD COLUMN `authorId` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `views` INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
