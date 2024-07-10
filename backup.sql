--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: rental-app_owner
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    description text,
    date_added timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.urls OWNER TO "rental-app_owner";

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: rental-app_owner
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.urls_id_seq OWNER TO "rental-app_owner";

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rental-app_owner
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: rental-app_owner
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: rental-app_owner
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO neon_superuser WITH GRANT OPTION;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON TABLES TO neon_superuser WITH GRANT OPTION;


--
-- PostgreSQL database dump complete
--

