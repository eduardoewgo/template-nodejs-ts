CREATE TABLE IF NOT EXISTS "public"."User" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL
);

INSERT INTO "User" (name, email)
VALUES ('Eduardo', 'eduardo.ewgo@gmail.com');