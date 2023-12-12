CREATE TABLE IF NOT EXISTS "racket_reviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"groundstrokes" integer NOT NULL,
	"volleys" integer NOT NULL,
	"serves" integer NOT NULL,
	"returns" integer NOT NULL,
	"power" integer NOT NULL,
	"control" integer NOT NULL,
	"maneuverability" integer NOT NULL,
	"stability" integer NOT NULL,
	"comfort" integer NOT NULL,
	"feel" integer NOT NULL,
	"topspin" integer NOT NULL,
	"slice" integer NOT NULL,
	"comments" text NOT NULL,
	"user_id" varchar NOT NULL,
	"racket_id" uuid NOT NULL,
	CONSTRAINT "racket_reviews_id_unique" UNIQUE("id")
);
--> statement-breakpoint
ALTER TABLE "rackets" ALTER COLUMN "year" SET NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "racket_reviews" ADD CONSTRAINT "racket_reviews_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "racket_reviews" ADD CONSTRAINT "racket_reviews_racket_id_rackets_id_fk" FOREIGN KEY ("racket_id") REFERENCES "rackets"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
