DO $$ BEGIN
 CREATE TYPE "balance_unit" AS ENUM('inches', 'centimeters', 'points');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "weight_unit" AS ENUM('grams', 'ounces');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "rackets" ADD COLUMN "weight" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "rackets" ADD COLUMN "weight_unit" "weight_unit" DEFAULT 'grams' NOT NULL;--> statement-breakpoint
ALTER TABLE "rackets" ADD COLUMN "balance" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "rackets" ADD COLUMN "balance_unit" "balance_unit" DEFAULT 'points' NOT NULL;--> statement-breakpoint
ALTER TABLE "rackets" ADD COLUMN "head_size" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "rackets" ADD COLUMN "swingweight" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "rackets" ADD COLUMN "mains" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "rackets" ADD COLUMN "crosses" integer NOT NULL;