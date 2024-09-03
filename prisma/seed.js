async function rawSql() {
	await prisma.$executeRaw`SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY "public"."_TNToUser" DROP CONSTRAINT IF EXISTS "_TNToUser_B_fkey";
ALTER TABLE IF EXISTS ONLY "public"."_TNToUser" DROP CONSTRAINT IF EXISTS "_TNToUser_A_fkey";
ALTER TABLE IF EXISTS ONLY "public"."_FactoryToTN" DROP CONSTRAINT IF EXISTS "_FactoryToTN_B_fkey";
ALTER TABLE IF EXISTS ONLY "public"."_FactoryToTN" DROP CONSTRAINT IF EXISTS "_FactoryToTN_A_fkey";
DROP INDEX IF EXISTS "public"."_TNToUser_B_index";
DROP INDEX IF EXISTS "public"."_TNToUser_AB_unique";
DROP INDEX IF EXISTS "public"."_FactoryToTN_B_index";
DROP INDEX IF EXISTS "public"."_FactoryToTN_AB_unique";
DROP INDEX IF EXISTS "public"."User_fullName_key";
DROP INDEX IF EXISTS "public"."TN_number_key";
ALTER TABLE IF EXISTS ONLY "public"."User" DROP CONSTRAINT IF EXISTS "User_pkey";
ALTER TABLE IF EXISTS ONLY "public"."TN" DROP CONSTRAINT IF EXISTS "TN_pkey";
ALTER TABLE IF EXISTS ONLY "public"."Inspection" DROP CONSTRAINT IF EXISTS "Inspection_pkey";
ALTER TABLE IF EXISTS ONLY "public"."Factory" DROP CONSTRAINT IF EXISTS "Factory_pkey";
DROP TABLE IF EXISTS "public"."_TNToUser";
DROP TABLE IF EXISTS "public"."_FactoryToTN";
DROP TABLE IF EXISTS "public"."User";
DROP TABLE IF EXISTS "public"."TN";
DROP TABLE IF EXISTS "public"."Inspection";
DROP TABLE IF EXISTS "public"."Factory";
-- *not* dropping schema, since initdb creates it
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

-- *not* creating schema, since initdb creates it


SET default_tablespace = '';

SET default_table_access_method = "heap";

--
-- Name: Factory; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."Factory" (
    "id" "text" NOT NULL,
    "fullName" "text",
    "shortName" "text" NOT NULL,
    "province" "text",
    "address" "text",
    "contact" "text",
    "product" "text"
);


--
-- Name: Inspection; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."Inspection" (
    "id" "text" NOT NULL,
    "year_week" "text" NOT NULL,
    "creatorId" "text" NOT NULL,
    "startDate" "text" NOT NULL,
    "endDate" "text" NOT NULL,
    "inspectionType" "text" NOT NULL,
    "province" "text" NOT NULL,
    "recommendedExecutor" "text" NOT NULL,
    "TN" "text" NOT NULL,
    "RTN" "text" NOT NULL,
    "factoryShortName" "text" NOT NULL,
    "orderNumber" "text" NOT NULL,
    "orderCost" "text" NOT NULL,
    "commentary" "text" NOT NULL,
    "factoryAddress" "text" NOT NULL,
    "managerKP" "text" NOT NULL,
    "reportReceived" "text" NOT NULL
);


--
-- Name: TN; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."TN" (
    "name" "text" NOT NULL,
    "number" integer NOT NULL,
    "RTN" "text" NOT NULL,
    "reportEngineer" "text" NOT NULL
);


--
-- Name: User; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."User" (
    "fullName" "text" NOT NULL,
    "userRights" "text"[],
    "hashedPassword" "text" DEFAULT '***'::"text" NOT NULL
);


--
-- Name: _FactoryToTN; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_FactoryToTN" (
    "A" "text" NOT NULL,
    "B" integer NOT NULL
);


--
-- Name: _TNToUser; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_TNToUser" (
    "A" integer NOT NULL,
    "B" "text" NOT NULL
);


--
-- Data for Name: Factory; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."Factory" ("id", "fullName", "shortName", "province", "address", "contact", "product") FROM stdin;
\.

COPY "public"."TN" ("name", "number", "RTN", "reportEngineer") FROM stdin;
Электроустановочные изделия	22	Поливахин Алексей	Козлов Дмитрий
Стабилизаторы напряжения	30	Поливахин Алексей	Козлов Дмитрий
Кабеленесущие системы	45	Глух Максим	Сорокин Денис
Удлинители и сетевые фильтры	26	Голубцов Александр	Сорокин Денис
Корпуса и боксы	55	Пенухин Юрий	Сорокин Денис
Аксессуары для электромонтажа	56	Окунев Алексей	Сорокин Денис
Кабель и провод	60	Черных Алексей	Сорокин Денис
Инструмент для монтажа	74	Черных Алексей	Сорокин Денис
Модульное оборудование	44	Лузянин Алексей	Козлов Дмитрий
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."User" ("fullName", "userRights", "hashedPassword") FROM stdin;
Тугов Сергей	{}	***
\.


--
-- Data for Name: _FactoryToTN; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_FactoryToTN" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _TNToUser; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_TNToUser" ("A", "B") FROM stdin;
22	Тугов Сергей
30	Тугов Сергей
45	Тугов Сергей
26	Тугов Сергей
55	Тугов Сергей
56	Тугов Сергей
60	Тугов Сергей
74	Тугов Сергей
44	Тугов Сергей
\.


--
-- Name: Factory Factory_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Factory"
    ADD CONSTRAINT "Factory_pkey" PRIMARY KEY ("id");


--
-- Name: Inspection Inspection_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Inspection"
    ADD CONSTRAINT "Inspection_pkey" PRIMARY KEY ("id");


--
-- Name: TN TN_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."TN"
    ADD CONSTRAINT "TN_pkey" PRIMARY KEY ("number");


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY ("fullName");


--
-- Name: TN_number_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "TN_number_key" ON "public"."TN" USING "btree" ("number");


--
-- Name: User_fullName_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "User_fullName_key" ON "public"."User" USING "btree" ("fullName");


--
-- Name: _FactoryToTN_AB_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_FactoryToTN_AB_unique" ON "public"."_FactoryToTN" USING "btree" ("A", "B");


--
-- Name: _FactoryToTN_B_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_FactoryToTN_B_index" ON "public"."_FactoryToTN" USING "btree" ("B");


--
-- Name: _TNToUser_AB_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_TNToUser_AB_unique" ON "public"."_TNToUser" USING "btree" ("A", "B");


--
-- Name: _TNToUser_B_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_TNToUser_B_index" ON "public"."_TNToUser" USING "btree" ("B");


--
-- Name: _FactoryToTN _FactoryToTN_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_FactoryToTN"
    ADD CONSTRAINT "_FactoryToTN_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Factory"("id") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _FactoryToTN _FactoryToTN_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_FactoryToTN"
    ADD CONSTRAINT "_FactoryToTN_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."TN"("number") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _TNToUser _TNToUser_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_TNToUser"
    ADD CONSTRAINT "_TNToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."TN"("number") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _TNToUser _TNToUser_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_TNToUser"
    ADD CONSTRAINT "_TNToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("fullName") ON UPDATE CASCADE ON DELETE CASCADE; ON CONFLICT DO NOTHING;`
	console.log({ result })
}
