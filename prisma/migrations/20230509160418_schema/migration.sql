-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TodoItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "due" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_TodoItem" ("date", "due", "id", "item") SELECT "date", "due", "id", "item" FROM "TodoItem";
DROP TABLE "TodoItem";
ALTER TABLE "new_TodoItem" RENAME TO "TodoItem";
CREATE UNIQUE INDEX "TodoItem_item_key" ON "TodoItem"("item");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
