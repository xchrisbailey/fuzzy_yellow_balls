DO $$ BEGIN
 CREATE TYPE "role" AS ENUM('ADMIN', 'USER');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "brands" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"about" text,
	CONSTRAINT "brands_id_unique" UNIQUE("id"),
	CONSTRAINT "brands_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_key" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"user_id" varchar(15) NOT NULL,
	"hashed_password" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reviews" (
	"id" uuid PRIMARY KEY NOT NULL,
	"power" integer NOT NULL,
	"feel" integer NOT NULL,
	"control" integer NOT NULL,
	"durability" integer NOT NULL,
	"spin" integer NOT NULL,
	"comfort" integer NOT NULL,
	"playability" integer NOT NULL,
	"comments" text NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp,
	"user_id" varchar NOT NULL,
	"string_id" uuid NOT NULL,
	CONSTRAINT "reviews_user_id_string_id_unique" UNIQUE("user_id","string_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "session" (
	"id" varchar(128) PRIMARY KEY NOT NULL,
	"user_id" varchar(15) NOT NULL,
	"active_expires" bigint NOT NULL,
	"idle_expires" bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "strings" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"material" varchar(256),
	"description" text,
	"brand_id" uuid NOT NULL,
	CONSTRAINT "strings_id_unique" UNIQUE("id"),
	CONSTRAINT "strings_name_brand_id_unique" UNIQUE("name","brand_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" varchar(15) PRIMARY KEY NOT NULL,
	"email" varchar(256),
	"first_name" varchar(256),
	"last_name" varchar(256),
	"role" "role" DEFAULT 'USER',
	CONSTRAINT "user_id_unique" UNIQUE("id"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_key" ADD CONSTRAINT "user_key_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reviews" ADD CONSTRAINT "reviews_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reviews" ADD CONSTRAINT "reviews_string_id_strings_id_fk" FOREIGN KEY ("string_id") REFERENCES "strings"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "strings" ADD CONSTRAINT "strings_brand_id_brands_id_fk" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
