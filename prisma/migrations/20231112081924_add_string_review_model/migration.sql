-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "power" INTEGER NOT NULL DEFAULT 0,
    "feel" INTEGER NOT NULL DEFAULT 0,
    "control" INTEGER NOT NULL DEFAULT 0,
    "durability" INTEGER NOT NULL DEFAULT 0,
    "spin" INTEGER NOT NULL DEFAULT 0,
    "comfort" INTEGER NOT NULL DEFAULT 0,
    "playability" INTEGER NOT NULL DEFAULT 0,
    "comments" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "string_id" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_string_id_fkey" FOREIGN KEY ("string_id") REFERENCES "TennisString"("id") ON DELETE CASCADE ON UPDATE CASCADE;
