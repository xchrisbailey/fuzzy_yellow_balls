CREATE TABLE IF NOT EXISTS "rackets" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"description" text NOT NULL,
	"brand_id" uuid NOT NULL,
	CONSTRAINT "rackets_id_unique" UNIQUE("id"),
	CONSTRAINT "rackets_name_brand_id_unique" UNIQUE("name","brand_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rackets" ADD CONSTRAINT "rackets_brand_id_brands_id_fk" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
