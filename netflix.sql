--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

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
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: WatchHistories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."WatchHistories" (
    id character varying(50) NOT NULL,
    viewer_id character varying(50),
    movie_id character varying(50),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public."WatchHistories" OWNER TO postgres;

--
-- Name: actors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.actors (
    id character varying(50) NOT NULL,
    name character varying(50),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.actors OWNER TO postgres;

--
-- Name: blacklistTokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."blacklistTokens" (
    id character varying(50) NOT NULL,
    token character varying(255),
    expired timestamp with time zone,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public."blacklistTokens" OWNER TO postgres;

--
-- Name: contentWarnings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."contentWarnings" (
    id character varying(50) NOT NULL,
    content character varying(50),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public."contentWarnings" OWNER TO postgres;

--
-- Name: deviceInfos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."deviceInfos" (
    id integer NOT NULL,
    user_id character varying(50),
    device_info character varying(500),
    "lastActive" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public."deviceInfos" OWNER TO postgres;

--
-- Name: deviceInfos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."deviceInfos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."deviceInfos_id_seq" OWNER TO postgres;

--
-- Name: deviceInfos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."deviceInfos_id_seq" OWNED BY public."deviceInfos".id;


--
-- Name: episodes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.episodes (
    id character varying(50) NOT NULL,
    seasons_id character varying(50),
    episode_number integer,
    is_seen boolean DEFAULT false,
    watched_duration character varying(50),
    video_url character varying(200),
    image_url character varying(200),
    "desc" character varying(400),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.episodes OWNER TO postgres;

--
-- Name: favorites; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.favorites (
    id character varying(50) NOT NULL,
    movie_id character varying(50),
    user_id character varying(50),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.favorites OWNER TO postgres;

--
-- Name: genres; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.genres (
    id character varying(50) NOT NULL,
    name character varying(50),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.genres OWNER TO postgres;

--
-- Name: keyTokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."keyTokens" (
    id character varying(50) NOT NULL,
    user_id character varying(50),
    refresh_token character varying(255),
    status boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public."keyTokens" OWNER TO postgres;

--
-- Name: movieActors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."movieActors" (
    id character varying(50) NOT NULL,
    movie_id character varying(50),
    actor_id character varying(50),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public."movieActors" OWNER TO postgres;

--
-- Name: movieContentWarring; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."movieContentWarring" (
    id character varying(50) NOT NULL,
    movie_id character varying(50),
    "contentWarning_id" character varying(50),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public."movieContentWarring" OWNER TO postgres;

--
-- Name: movieTags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."movieTags" (
    id character varying(50) NOT NULL,
    movie_id character varying(50),
    tag_id character varying(50),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public."movieTags" OWNER TO postgres;

--
-- Name: movie_genres; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movie_genres (
    id character varying(50) NOT NULL,
    movie_id character varying(50),
    genre_id character varying(50),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.movie_genres OWNER TO postgres;

--
-- Name: movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movies (
    id character varying(50) NOT NULL,
    title character varying(200),
    "desc" character varying(200),
    age_rating character varying(50),
    thumbnail_url character varying(200),
    release_year integer,
    image_url character varying(200),
    trailer character varying(200),
    type character varying(50),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.movies OWNER TO postgres;

--
-- Name: providers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.providers (
    id character varying(50) NOT NULL,
    name character varying(50),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.providers OWNER TO postgres;

--
-- Name: seasons; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.seasons (
    id character varying(50) NOT NULL,
    movie_id character varying(50),
    season_number character varying(50),
    title character varying(50),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.seasons OWNER TO postgres;

--
-- Name: subscriptions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subscriptions (
    id character varying(50) NOT NULL,
    name character varying(50),
    price character varying(50),
    "time" character varying(50),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.subscriptions OWNER TO postgres;

--
-- Name: tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tags (
    id character varying(50) NOT NULL,
    name character varying(50),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.tags OWNER TO postgres;

--
-- Name: transactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transactions (
    "orderId" character varying(255) NOT NULL,
    user_id character varying(50),
    amount integer NOT NULL,
    status character varying(255) NOT NULL,
    "paymentInfo" text,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.transactions OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id character varying(50) NOT NULL,
    subscriptions_id character varying(50),
    provider_id character varying(50),
    name character varying(50),
    email character varying(50),
    phone integer,
    password character varying(100),
    avatar character varying(200),
    status boolean DEFAULT true,
    "limit" integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: deviceInfos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."deviceInfos" ALTER COLUMN id SET DEFAULT nextval('public."deviceInfos_id_seq"'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20241106091000-create-provider.js
20241106091010-create-subscription.js
20241106091020-create-user.js
20241106100732-create-blacklist-token.js
20241106100756-create-key-token.js
20241106141919-create-genre.js
20241106142215-create-movie.js
20241106142837-movie_genres.js
20241106143123-create-season.js
20241106143635-create-episode.js
20241106144249-create-watch-history.js
20241113074542-create-actor.js
20241113074604-create-tag.js
20241113075230-create-content-warning.js
20241113075701-movie_actors.js
20241113080135-movie_tags.js
20241113080352-movie_contentWarring.js
20241121132517-create-favorite.js
20241126172624-create-transaction.js
20241222141524-create-device-infos.js
\.


--
-- Data for Name: WatchHistories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."WatchHistories" (id, viewer_id, movie_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: actors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.actors (id, name, created_at, updated_at) FROM stdin;
actor1	Vương Truyền Quân	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor2	Trương Ninh	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor3	Ngô Trấn Vũ	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor4	Phạm Băng Băng	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor5	Lưu Đức Hoa	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor6	Châu Tinh Trì	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor7	Lý Băng Băng	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor8	Châu Kiệt Luân	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor9	Dương Mịch	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor10	Triệu Vy	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor11	Huỳnh Hiểu Minh	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor12	Lý Tiểu Long	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor13	Dương Tử Quỳnh	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor14	Trương Quốc Vinh	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor15	Lý Liên Kiệt	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor16	Leonardo DiCaprio	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor17	Robert Downey Jr.	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor18	Scarlett Johansson	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor19	Tom Hanks	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor20	Meryl Streep	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor21	Brad Pitt	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor22	Angelina Jolie	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor23	Johnny Depp	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor24	Chris Hemsworth	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor25	Jennifer Lawrence	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor26	Morgan Freeman	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor27	Emma Stone	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor28	Will Smith	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor29	Natalie Portman	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor30	Denzel Washington	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor31	Hugh Jackman	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor32	Anne Hathaway	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor33	Tom Cruise	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor34	Julia Roberts	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor35	Keanu Reeves	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor36	Daniel Craig	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor37	Sandra Bullock	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor38	Ryan Reynolds	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor39	Christian Bale	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
actor40	Matthew McConaughey	2025-01-16 05:00:36.909687+07	2025-01-16 05:00:36.909687+07
\.


--
-- Data for Name: blacklistTokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."blacklistTokens" (id, token, expired, created_at, updated_at) FROM stdin;
065a4a64-1e49-43fa-a8b3-e2a6af5cc700	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZEFkbWluIiwiaWF0IjoxNzM2OTc2NTYxLCJleHAiOjE3MzY5ODAxNjF9.AxyiAvCRz3GDB0_IGDwtfXWxmVloKm-F6mg_bhylJBo	2025-01-16 05:29:21+07	2025-01-16 05:10:33.642+07	2025-01-16 05:10:33.642+07
9d825ae3-e418-48de-9195-d1c19c22f421	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZEFkbWluIiwiaWF0IjoxNzM3MDU4ODgzLCJleHAiOjE3MzcwNjI0ODN9.LB-g1t-1NugtcdE8ikwiA0IyXSARugo40BdWuoXgWHI	2025-01-17 04:21:23+07	2025-01-17 03:27:33.467+07	2025-01-17 03:27:33.467+07
525af0de-0067-4ade-925d-7a8e88edc0f4	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZEFkbWluIiwiaWF0IjoxNzM4NDA0MTUyLCJleHAiOjE3Mzg0MDc3NTJ9.yp4e_HzUeTAHRNmXvacFNzQ1XQBtcLZN_wu8VwpqIEA	2025-02-01 18:02:32+07	2025-02-01 17:02:35.135+07	2025-02-01 17:02:35.135+07
\.


--
-- Data for Name: contentWarnings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."contentWarnings" (id, content, created_at, updated_at) FROM stdin;
warring1	Lạm dụng trẻ em	2025-01-16 05:00:36.916365+07	2025-01-16 05:00:36.916365+07
warring2	Ngược đãi gia đình	2025-01-16 05:00:36.916365+07	2025-01-16 05:00:36.916365+07
warring3	Bạo lực	2025-01-16 05:00:36.916365+07	2025-01-16 05:00:36.916365+07
warring4	Ngôn ngữ thô tục	2025-01-16 05:00:36.916365+07	2025-01-16 05:00:36.916365+07
warring5	Sử dụng chất kích thích	2025-01-16 05:00:36.916365+07	2025-01-16 05:00:36.916365+07
warring6	Hình ảnh nhạy cảm	2025-01-16 05:00:36.916365+07	2025-01-16 05:00:36.916365+07
warring7	Tự sát	2025-01-16 05:00:36.916365+07	2025-01-16 05:00:36.916365+07
warring8	Phân biệt đối xử	2025-01-16 05:00:36.916365+07	2025-01-16 05:00:36.916365+07
warring9	Chấn thương tâm lý	2025-01-16 05:00:36.916365+07	2025-01-16 05:00:36.916365+07
warring10	Hành vi phạm pháp	2025-01-16 05:00:36.916365+07	2025-01-16 05:00:36.916365+07
warring11	Sợ hãi	2025-01-16 05:00:36.916365+07	2025-01-16 05:00:36.916365+07
warring12	Bắt nạt	2025-01-16 05:00:36.916365+07	2025-01-16 05:00:36.916365+07
warring13	Môi trường nguy hiểm	2025-01-16 05:00:36.916365+07	2025-01-16 05:00:36.916365+07
warring14	Đổ máu	2025-01-16 05:00:36.916365+07	2025-01-16 05:00:36.916365+07
warring15	Bệnh tật	2025-01-16 05:00:36.916365+07	2025-01-16 05:00:36.916365+07
\.


--
-- Data for Name: deviceInfos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."deviceInfos" (id, user_id, device_info, "lastActive", created_at, updated_at) FROM stdin;
2	idAdmin	{"browser":{"name":"Chrome","version":"131.0.0.0","engine":"Blink","engineVersion":"131.0.0.0"},"os":{"name":"Windows","version":"10"},"device":{"type":"desktop","name":"Windows Desktop"}}	2025-01-22 16:44:21.303+07	2025-01-16 05:10:43.269+07	2025-01-22 16:44:21.303+07
\.


--
-- Data for Name: episodes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.episodes (id, seasons_id, episode_number, is_seen, watched_duration, video_url, image_url, "desc", created_at, updated_at) FROM stdin;
Episodes1	season3	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes2	season3	2	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042544/movie3_ffhznw.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes3	season4	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042627/movive4_gw4hn2.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes4	season4	2	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes5	season15	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes6	season15	2	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042544/movie3_ffhznw.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes7	season16	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042627/movive4_gw4hn2.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes8	season16	2	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes9	season17	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes10	season17	2	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042544/movie3_ffhznw.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes11	season18	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042627/movive4_gw4hn2.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes12	season18	2	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes13	season19	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes14	season19	2	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042544/movie3_ffhznw.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes15	season20	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042627/movive4_gw4hn2.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes16	season20	2	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes17	season1	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes18	season2	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042544/movie3_ffhznw.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes19	season5	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042627/movive4_gw4hn2.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes20	season6	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes21	season7	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes22	season8	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042544/movie3_ffhznw.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes23	season9	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042627/movive4_gw4hn2.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes24	season10	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes25	season11	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes26	season12	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042544/movie3_ffhznw.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes27	season13	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042627/movive4_gw4hn2.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes28	season14	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes29	season22	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie2_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes30	season23	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie3_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes31	season24	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie4_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes32	season25	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie5_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes33	season26	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie6_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes34	season27	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie7_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes35	season28	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie8_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes36	season29	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie9_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes37	season30	10	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie10_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes38	season31	11	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie11_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes39	season32	12	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie12_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes40	season33	13	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie13_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes41	season34	14	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie14_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes42	season35	15	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie15_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes43	season36	16	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie16_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes44	season37	17	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie17_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes45	season38	18	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie18_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes46	season39	19	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie19_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes47	season40	10	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie20_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes48	season41	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes49	season42	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie2_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes50	season43	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie3_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes51	season44	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie4_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes52	season45	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie5_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes53	season46	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie6_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes54	season47	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie7_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes55	season48	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie8_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes56	season49	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie9_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes57	season50	10	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie10_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes58	season51	11	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie11_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes59	season52	12	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie12_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes60	season53	13	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie13_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes61	season54	14	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie14_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes62	season55	15	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie15_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes63	season56	16	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie16_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes64	season57	17	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie17_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes65	season58	18	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie18_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes66	season59	19	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie19_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes67	season60	10	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie20_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes68	season61	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes69	season62	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie2_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes70	season63	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie3_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes71	season64	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie4_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes72	season65	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie5_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes73	season66	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie6_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes74	season67	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie7_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes75	season68	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie8_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
Episodes76	season21	1	f	0	https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.	2025-01-16 05:00:36.902797+07	2025-01-16 05:00:36.902797+07
\.


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.favorites (id, movie_id, user_id, created_at, updated_at) FROM stdin;
favorite1	movie1	idAdmin	2025-01-16 05:00:36.949362+07	2025-01-16 05:00:36.949362+07
favorite3	movie3	idAdmin	2025-01-16 05:00:36.949362+07	2025-01-16 05:00:36.949362+07
favorite4	movie4	idAdmin	2025-01-16 05:00:36.949362+07	2025-01-16 05:00:36.949362+07
\.


--
-- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.genres (id, name, created_at, updated_at) FROM stdin;
genres1	Anime	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres2	Châu Á	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres3	Giả tưởng	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres4	Giành giải thưởng	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres5	Giật gân	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres6	Hài	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres7	Hành động	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres8	Hollywood	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres9	Khoa học viễn tưởng	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres10	Kinh dị	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres11	Kinh điển	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres12	Kỳ nghỉ lễ	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres13	Lãng mạn	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres14	Phim âm nhạc & nhạc kịch	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres15	Phim chính kịch	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres16	Phim độc lập	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres17	Phim ngắn	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres18	Phim tài liệu	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres19	Phim Việt Nam	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres20	Quốc tế	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres21	Thể thao	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres22	Tội phạm	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
genres23	Trẻ em và gia đình	2025-01-16 05:00:36.881895+07	2025-01-16 05:00:36.881895+07
\.


--
-- Data for Name: keyTokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."keyTokens" (id, user_id, refresh_token, status, created_at, updated_at) FROM stdin;
0e01894a-b874-43d7-8178-21d5b96d3985	idAdmin	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxNzM3MjM1MTYxNzQ2LjQ2NTYsImlhdCI6MTczNzIzNTE2MSwiZXhwIjoxNzM3ODM5OTYxfQ.xRI59B2b-16-qtre0r1fNQuH44s1ch3DYV6ZaV1sZ7w	t	2025-01-19 04:19:21.759+07	2025-01-19 04:19:21.759+07
5b3a5d7d-5eda-4c0f-bc1e-3053e0268a53	idAdmin	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxNzM4Mzk4ODM0MTQxLjExMywiaWF0IjoxNzM4Mzk4ODM0LCJleHAiOjE3MzkwMDM2MzR9.lHvyVRe2NRjqAAllhM2KaJ6Lf4MsVD0jr_aefOhluLQ	t	2025-02-01 15:33:54.152+07	2025-02-01 15:33:54.152+07
f8104cb2-197d-467c-ba15-6be56c097337	63ff3f48-b744-4d96-b1e6-094b36ded0a2	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxNzM4NDM1Mzk4Mzk1LjQ3MzEsImlhdCI6MTczODQzNTM5OCwiZXhwIjoxNzM5MDQwMTk4fQ.kITBl0WhUF_sS1PbijfiW9ui1unQaaco_oOcR693bQA	t	2025-02-01 17:04:00.446+07	2025-02-02 01:43:18.399+07
\.


--
-- Data for Name: movieActors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."movieActors" (id, movie_id, actor_id, created_at, updated_at) FROM stdin;
580378ca-e039-49cc-a8b1-cafd9920a0cf	movie1	actor1	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
c5243ad9-d110-4a22-81e4-f3befe1cf510	movie1	actor4	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
0f58ff8f-e732-4316-8eb2-6a1ebedcbab1	movie1	actor5	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
9df01742-ad92-4cf4-a53d-67424ac1a2ba	movie1	actor12	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
14dd26d6-3e57-4e76-b7fc-e0017f5e0f1b	movie2	actor2	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
8c3d663f-b9e8-4b00-82dd-c6cf01774f52	movie2	actor5	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
83078d5b-2e91-414b-a233-153a5f710a3d	movie2	actor13	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
727f4a52-eb7c-427a-b2d6-34de7b0a32d8	movie2	actor17	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
e27e4b68-06c9-47d4-b147-62f7f3fcd748	movie3	actor3	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
bbf76ad9-42ec-4788-a8b4-83b46089555c	movie3	actor7	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
13649251-45e8-4405-b0d2-32c4ef4e5cd4	movie4	actor4	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
8b1db49f-b4a1-466f-92b9-3d8710a5b674	movie4	actor9	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
e7547bc7-a01a-4496-88b0-dfa31882a34d	movie5	actor5	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
571a0921-d432-41e0-9ab7-7af240041a38	movie5	actor11	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
457ae48a-ebee-4f59-a264-ff499f859971	movie6	actor6	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
2abb9cc0-6ea4-46d0-9982-9e0a7db85172	movie6	actor12	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
e7d33865-ec1e-4e0a-a062-761f28962e15	movie7	actor7	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
4fdef26c-7459-4646-8fb3-4d87fc509f10	movie7	actor13	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
b7b72640-3948-4147-8175-fe0add4ca7b9	movie8	actor8	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
eba8526d-dc11-47ac-a817-2e79f85c6806	movie8	actor14	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
fe990385-4ec5-46d1-bfd3-333896a05efd	movie9	actor1	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
47f72d71-0e21-4c55-9db0-310a868d5175	movie9	actor10	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
f49d418d-6c60-4439-94b2-ddca5e70b4b1	movie10	actor2	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
7f639458-20a4-4049-a2ae-1ad1848fc017	movie10	actor11	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
dee573a9-65a2-4386-91ab-a21d2e825198	movie11	actor3	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
1dbaca09-86ec-466e-80dd-dee9c199add9	movie11	actor12	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
641ef6fa-c74d-4523-b377-4983f928c8e7	movie12	actor4	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
ad26cf3b-264a-40a6-adef-11186e012a2a	movie12	actor15	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
e0698f21-b6dc-4671-96dc-8122f550ff82	movie13	actor5	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
4b945343-2499-4985-8bf1-cf94888770c4	movie13	actor13	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
26a08f70-fb31-4dc8-8dfd-d37eb64976f7	movie14	actor6	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
86e81ebe-cecb-411c-be90-48654d931872	movie14	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
845acd0e-5a95-40ac-9e5f-501a74e6e35a	movie15	actor7	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
4912db28-66d6-4246-b639-8468f92ae3ad	movie15	actor14	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
73f82a5f-c05e-401b-8d74-f8cb29e3e86a	movie16	actor8	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
f2f2d636-27f2-49ca-8453-0388a511540c	movie16	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
75058d06-fbfb-44fa-afcb-591fb2ca0791	movie16	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
b3a270ed-51db-4e54-bc96-ff139459c748	movie17	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
7d9f2258-2fdb-45e2-a4ff-c8596d340303	movie18	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
e8814947-21ba-4e27-8edd-84d150a3d8e5	movie19	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
809f5685-03ef-4b12-9349-84156dd0d8f6	movie20	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
add5a5fb-9294-42a2-a993-18803756dbe4	movie21	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
208dd3a1-5838-468d-bb7b-e9ac52d05dc5	movie22	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
53eaa382-0983-44af-a4e2-775006e18429	movie23	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
26e1084d-9380-4acc-bed2-a64278195a90	movie24	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
d66c0660-d317-4c9d-bb3b-23bf99b85808	movie25	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
d5aa8718-911e-4f7f-a996-b3384d579b9c	movie26	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
5b783ef0-6ef1-4955-b32a-f09c4d5d8df1	movie27	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
febea6c9-467d-46e5-944e-90faf693ecbb	movie28	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
c8dbf32e-f6b5-4559-9b1c-cf2465eaec1a	movie29	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
4b29997e-2758-4871-a646-cd6c5e75d3e1	movie30	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
6b2efbfa-0e68-479a-be22-06f48b6970cc	movie31	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
017516c5-9e13-4e21-9752-f70025bc4d06	movie32	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
fc593907-bf1b-4e09-82dc-e58502f098e6	movie33	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
997d2da6-dda5-45f8-94b9-379b7d641052	movie34	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
a22fa695-0840-4d55-b732-058d11b770f9	movie35	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
228bf924-ae0d-496e-91d1-96aea048557e	movie36	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
0a70d3cd-1c79-4030-9a78-64fcb4e23859	movie37	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
0848d834-b3a8-41a5-ae03-adaa15b2d4ac	movie38	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
1c4dd916-1c8f-4b89-a16c-eec327a1d153	movie39	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
1394ea8a-7376-41e4-a358-2e00ce8c19a3	movie40	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
baea7925-44c1-4a0b-93b2-b1ea71ae84ca	movie41	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
064ada99-a4dd-49cd-b8a8-fc8b8d9f2311	movie42	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
409f46d2-e7ea-49a5-885e-f620d6336711	movie43	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
e4bb4795-bae9-472e-94bc-d2ff74cd752d	movie44	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
8526165a-f083-4e0a-ad40-95f68c9f97d3	movie45	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
30a5be33-6dce-473e-8f27-bcf1c360c90e	movie46	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
589d2816-5b16-41d7-9610-e3e0477d1bb8	movie47	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
0f049ed1-6c4c-447c-8a57-b5429afa5afc	movie48	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
5bc27bcd-bbe0-4fa9-b963-411af28ed823	movie49	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
bd658240-550d-4a41-9717-c93302bd4a2c	movie50	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
6e94dfa4-4bd5-4662-b57a-0784101b1ebf	movie51	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
bcce6bf7-8823-41d0-9201-461ed09e37c9	movie52	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
ff6a68a0-e93b-4275-9ef1-95aab9ca3bc3	movie53	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
9212b4ac-5f3a-4a60-961b-2c8c3f64e0e1	movie54	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
afc8ded4-fdb8-4377-87d6-bd2f15a35da3	movie55	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
9dfdfb79-9e64-42e6-b44e-cb46ea1fc168	movie56	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
e0efebb5-9564-46e2-ba9c-fc5718ce455b	movie57	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
98764430-a417-40f0-a149-d2c7d78bd60e	movie58	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
d482b649-5895-40b7-a27b-1587d78834ff	movie59	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
14067e95-a2d5-4199-a1c8-910c65d24542	movie60	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
49fcf892-4386-45a6-a102-11f727417051	movie61	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
6b2972e0-cf1c-431e-92ef-d133053ef345	movie62	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
9e54672b-f8b6-480b-810b-aeeb51914233	movie63	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
84fd0f98-b99c-4e2f-a0b8-b71e95e6a402	movie64	actor16	2025-01-16 05:00:36.928483+07	2025-01-16 05:00:36.928483+07
\.


--
-- Data for Name: movieContentWarring; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."movieContentWarring" (id, movie_id, "contentWarning_id", created_at, updated_at) FROM stdin;
cd4508a0-b2be-4177-a229-b9cae680b2f7	movie1	warring1	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
d88f478e-cd7b-47ed-9d44-a3673eff84d2	movie1	warring4	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
9349ac3f-7cb1-493a-abe5-2a9dfe545e0e	movie1	warring5	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
818bfa0d-5775-4a1a-82b3-3a6087a56f3a	movie1	warring12	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
5447609c-5a4b-45ac-8b17-bac0581fcd8b	movie2	warring2	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
f9dd6318-7282-44b0-8e38-a4eb22065683	movie2	warring5	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
fd71637d-bafc-4eb4-b22d-943e8ce8b824	movie2	warring13	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
4d451c02-742a-4d27-86db-431e51008a33	movie2	warring12	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
1de145f4-12a1-4e3e-8dfd-58802a82b07e	movie3	warring3	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
a5b3d0f0-a4c6-47dd-b622-9d648f7b8e6e	movie3	warring7	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
914a63cb-3c24-434c-8a24-9834ff4f35e5	movie4	warring4	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
4dc6a416-8408-4505-b0e6-9d010831618c	movie4	warring9	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
7b247972-fc51-4ee5-afc1-5baa94cbfc00	movie5	warring5	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
69fb6930-f1aa-4bbe-9034-49c1724b54ed	movie5	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
f9010696-b1a5-4a39-8fc5-65be190cd2db	movie6	warring6	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
b93b4220-02d5-4eb4-b9b5-d12debb7ab01	movie6	warring12	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
6d39903d-bc6b-490c-900c-060844d4e2e0	movie7	warring7	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
a8852e10-83a8-4dc3-a817-49838e2fb557	movie7	warring13	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
ec6f8b11-bcc9-473e-b19c-76bbd2b9c45e	movie8	warring8	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
0681f108-f5d6-4c2e-a581-73cf4db24bdd	movie8	warring14	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
ccb7af9a-6fae-4361-b52b-968071f03f0f	movie9	warring1	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
66fe20c3-1717-478a-a72c-68cf0b463e05	movie9	warring10	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
de1293cb-5d02-4af7-9cea-68ef4fb12270	movie10	warring2	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
5438b830-26f8-453b-a49f-1552443f7c98	movie10	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
55268c1d-2cc5-4820-9319-3c4fce4e67c7	movie11	warring3	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
a7a644e3-2342-479a-b790-4fd576ce9fa6	movie11	warring12	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
8b3bb7a9-5773-4f0b-9f27-1b2941a88c5a	movie12	warring4	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
33baac21-6c2a-42be-8651-36359d8c1edb	movie12	warring15	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
b5add27e-37cf-483c-ad59-cb3f13b7d803	movie13	warring5	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
84bcc86f-30ac-4667-a079-65c1bc21bb87	movie13	warring13	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
67431040-2655-40c8-9c6b-b7b5da10bdc9	movie14	warring6	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
abfb9816-c7c8-4203-9559-42249058c888	movie14	warring15	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
74f6dd89-88db-49db-bf37-b866bef958da	movie15	warring7	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
b0bf32be-2b78-44e9-9ef7-8ef06ee5a097	movie15	warring14	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
09a1862e-6ee9-4f1f-95e6-646983aab78b	movie16	warring8	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
9d04a4ad-1d40-421f-be8c-a68bbd8da4c6	movie16	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
36eac74e-b93b-4758-99da-cbc9ba1a4df7	movie17	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
899d4eb0-babe-4b62-a69b-53057591064d	movie18	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
0471c8ba-eaca-46f3-b664-dbee273ca337	movie19	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
a6b45e09-d522-4d13-8e1a-457ef5e95e39	movie20	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
3718ba85-f557-4f45-8361-67fb6c3200d0	movie21	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
4e74aad1-763c-4d28-95fe-f283b70357d5	movie22	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
93dbc707-3827-4ed8-a571-7fd5764dc8f1	movie23	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
b5c4c722-005d-4445-89c4-13ef3cb14015	movie24	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
8840a48f-d565-444a-8e1d-136c17ce337d	movie25	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
36af33bb-31f2-441d-a970-cef60ac99069	movie26	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
f648c4d2-756e-44ed-9183-3ac87bfee903	movie27	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
e768b217-bab4-4d73-b566-64c462f751ad	movie28	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
952f7717-1444-4135-804b-62cbca07b66b	movie29	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
ee4e7542-6420-451a-bdd0-a0575c62b791	movie30	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
87cf4cec-b06a-4e1e-ba19-e3900d50dfa1	movie31	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
ee9bc387-7b61-45e8-89b9-6fb9a8515d9f	movie32	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
e04529d5-208e-4ae3-bbc0-714e84a14311	movie33	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
ed49e9dc-3829-4265-bab0-2f8ce2bfcdec	movie34	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
c24a5532-3ba0-40a8-84f2-bb97e76e62f4	movie35	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
d9e44bc7-2b19-43b0-b53c-298b7a60479e	movie36	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
08bd534e-c906-4233-9a3e-8b4b0a178c3a	movie37	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
e733ed06-adee-435d-9d84-9c1db69bac5b	movie38	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
cc3968e9-43c2-4417-88c3-cab2a420f38f	movie39	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
2bbbc3e5-45c8-4727-a896-e199bba094f3	movie40	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
c4d962a5-65a6-4520-9d31-cdc739944141	movie41	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
595899a5-6f88-4da0-bcc1-11ad9bd341f9	movie42	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
aa1bd24a-9870-4ca3-a629-e11845663145	movie43	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
7c9e1ee8-20e5-41ef-91af-9b70e08d54a4	movie44	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
a720d2e2-cf94-40de-aab7-02457a2d09cf	movie45	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
fd3d5461-7d93-420a-adbc-d773d69944ea	movie46	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
2ef522b5-65ac-4d0b-9d65-e098e339bb2e	movie47	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
031d2055-4d00-40d2-b45e-8ab8d725d4da	movie48	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
72d0fa0d-0e39-40e5-b338-fa869cbfc7a0	movie49	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
a2965117-2fa3-499f-8976-2b959f561287	movie50	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
9e931148-5109-402b-ac76-4a879245278f	movie51	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
b529a48d-df3b-47e1-8fcc-247973ae900e	movie52	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
42677bd7-6a7d-4b9c-81a3-c089ec256fd8	movie53	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
5a19cd22-530d-485f-b585-4b98222947e5	movie54	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
9537b11f-26d9-46a3-b209-4183cdc71f7d	movie55	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
4ab8cf6d-a76f-4db4-a8e1-655bdb559f8b	movie56	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
a0c8b148-8419-4524-833e-f867e2f8e069	movie57	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
3e784704-0a53-4839-97b3-7525a2d289af	movie58	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
6143d951-a23e-496e-a3a6-e506b4b4cad4	movie59	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
982a7704-7baf-44f4-bfac-c25a790e2466	movie60	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
eba101e4-03cb-4265-b355-21e60389184e	movie61	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
9e45d20a-f9a7-4289-ae43-0d64e2f2f491	movie62	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
8c4012be-8874-4542-a14f-6794db188bb1	movie63	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
0da1c20a-9c1c-4d49-8d69-037731ff4f64	movie64	warring11	2025-01-16 05:00:36.942882+07	2025-01-16 05:00:36.942882+07
\.


--
-- Data for Name: movieTags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."movieTags" (id, movie_id, tag_id, created_at, updated_at) FROM stdin;
b24d80a6-2e9b-4e2a-b351-c57900110615	movie1	tag1	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
c2fee07b-a03b-4530-937f-fe04ebcc96b3	movie1	tag4	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
bdcf48fa-bc9b-43bb-91cf-b3e86ca29efc	movie1	tag5	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
7affb39b-0546-4476-a6ce-840ae54892e7	movie1	tag12	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
f8c7af89-025f-47e9-a199-69ea296d03cb	movie2	tag2	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
7ad35828-12a6-44bc-974a-24a41f2c402a	movie2	tag5	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
84e0aae2-9bfb-41ad-95ac-9a12f99d2197	movie2	tag13	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
58993615-222a-481f-b08e-cbf2f74c8c66	movie2	tag17	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
74462e6f-f6dc-4f9d-a1d3-96e27b2b0d7d	movie3	tag3	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
da074e9e-5c51-41c4-8c78-932c3c16efb2	movie3	tag7	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
66d541b6-f08d-4e76-a705-5c5fed60e652	movie4	tag4	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
2e6893c8-b967-4c58-b1c0-7d0be77f3095	movie4	tag9	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
7ed0bfeb-27d7-4977-b2c9-de3326abe3e8	movie5	tag5	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
a6bd6e09-35ed-4691-a72d-6c9435289b3e	movie5	tag11	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
0e98abc3-059e-49d0-ab38-2e49212d4de7	movie6	tag6	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
934b4bd8-5fce-4cb2-9391-68b723b74085	movie6	tag12	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
92c60e3a-6978-4923-8642-4025d63c9b2e	movie7	tag7	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
b210e8a5-9415-415c-8491-ea1945f6cf9a	movie7	tag13	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
f21f41f2-87a4-40bb-8540-8908381b8bf8	movie8	tag8	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
72e3d4d6-5ea3-44eb-b35f-09c453c58de3	movie8	tag14	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
a7dd264f-ee5f-408f-b4b2-1cbee8fe212d	movie9	tag1	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
b618aab3-c1d4-410c-ab25-a81b7796d2e3	movie9	tag10	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
9c5e2b90-3551-4d20-a6aa-4d6bc7291b42	movie10	tag2	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
153d7413-de03-4914-a033-d6744487f350	movie10	tag11	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
bebcf52f-f4e4-42fa-8d1e-7382bdc7a297	movie11	tag3	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
4b4ab123-f91a-4c21-8336-ccd9f4d862ec	movie11	tag12	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
5322b538-b831-4550-99f2-6f10782e5e07	movie12	tag4	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
c5e01f04-9d87-457b-9cf0-f2a586f3020d	movie12	tag15	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
7fd1eaec-4e7e-46b8-bc19-bb6db16e9866	movie13	tag5	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
a4c5dc3a-877a-48dc-8495-8719aa19c467	movie13	tag13	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
9de287fd-41bf-44f7-9669-dc96f100235e	movie14	tag6	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
0f6dfcee-01b6-4a13-8eb1-58b4c4a29101	movie14	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
980655d3-28ce-461d-a29d-2937e520ab3b	movie15	tag7	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
e0bcd86f-a0b2-4f78-a831-a7c72c12556d	movie15	tag14	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
73a9f2ec-d495-4a72-90cd-efdcbfb6dafa	movie16	tag8	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
fa603280-4349-4ee1-9fc2-a11064552cd3	movie16	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
34f48e76-b361-46d9-92ff-43a297087148	movie17	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
f3dc47d1-982b-496d-9d45-f9e0b0a72c20	movie18	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
454f5d3c-059c-40d3-aedb-b4d3abbf8fdb	movie19	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
bdad930a-755d-4e43-aa9b-decc886e3890	movie20	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
447ce82d-3cd4-4db8-a1d3-c15c4b7d4a2e	movie21	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
8a727125-6322-4e38-b7f2-9b0fd173141e	movie22	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
0d24e294-681b-4595-812d-9ceab989b25f	movie23	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
064a016c-91b3-4b1d-a30e-5b5cbb715ea1	movie24	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
23743795-f90b-4ce0-b495-8d99be202ed9	movie25	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
928197f9-3160-4010-8afd-f41a1ab05bdd	movie26	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
1ee58579-b679-4dab-a3b3-00d04c7016ab	movie27	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
a32aac40-7f7f-4574-a15a-8df1a65aa6e9	movie28	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
2dd8d758-2f18-4a4c-a3cb-68e201d40211	movie29	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
f665bc61-9563-4501-91de-ce5934bc191f	movie30	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
6e8c2d98-51c9-4947-bbca-0f4d7ff36760	movie31	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
58830d67-5390-4249-ba4e-32ddfcff53a5	movie32	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
2b0170bf-88f1-45f6-b533-6590bf985a72	movie33	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
55589c74-1230-4e33-8c9e-157f756192b8	movie34	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
3f9eea1b-e58d-49ab-b776-4fef9f337332	movie35	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
b0d7bd5a-85e3-4714-9f5f-26fcd4c96419	movie36	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
cd44f17b-9b58-4069-b0db-28a9b65bc915	movie37	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
f4fa2bcf-b619-4030-a5dd-7f114ccbfd2b	movie38	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
1ff0629e-2812-4a01-ac32-8f06f6f64fa7	movie39	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
bff1abae-2eaf-44bb-b09e-14e0c47cc80b	movie40	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
daf15a3f-a9a3-4f4d-bcb5-55b116cfd825	movie41	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
b1cfe43e-46c5-4d44-8a95-3ac134873db4	movie42	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
356dfc7a-0e61-4924-9149-4489b0e65e38	movie43	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
8f0c94f3-185a-4ef6-906f-f4f976f5da7b	movie44	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
f4cfd3bb-bf35-48d1-b7a0-63b79806c2a8	movie45	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
6e0093fd-1ec1-4f76-a9d0-cc077fd2ef90	movie46	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
ad084d74-b124-4756-ac28-8ebc4884be86	movie47	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
9dbc804b-9a82-4cca-8211-82c34de82602	movie48	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
c74d574f-befa-4473-b253-f711a7a71b84	movie49	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
8fba60f5-6de0-4523-8785-68e62d29ea04	movie50	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
edbb3857-45a7-4f95-bf6c-69a4cb538524	movie51	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
a434ca7e-9646-4d4d-89d2-9895f8dd9c13	movie52	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
a737b30a-5b10-452e-872a-1b05a4d12f40	movie53	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
c14e70c6-9ddb-41f4-89b8-b00207f24cab	movie54	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
7ea8c0df-693d-424a-ae85-189e538fe3eb	movie55	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
0fd68850-11bf-4de7-a4fc-d31e52216dad	movie56	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
4c77ca75-c86e-4523-8fd6-10a96ae246e9	movie57	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
af3dc539-58aa-459d-97cd-972b83c1ffe5	movie58	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
ada98e25-a376-498a-88c7-c997e090e0dd	movie59	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
73487e6b-231a-4ad1-9130-f0e9ac95e54b	movie60	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
120d87d7-16c3-4ef4-b71f-37925f4c4590	movie61	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
3fa8591f-f908-44ad-b15d-9bc1f3f3c05d	movie62	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
e957b63e-6f0d-44f2-a6c4-e2e7e7935f7d	movie63	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
15418b1e-e2df-43d2-80d4-e0650cf90187	movie64	tag16	2025-01-16 05:00:36.935418+07	2025-01-16 05:00:36.935418+07
\.


--
-- Data for Name: movie_genres; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movie_genres (id, movie_id, genre_id, created_at, updated_at) FROM stdin;
movie_genre1	movie1	genres1	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre2	movie1	genres4	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre3	movie2	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre4	movie2	genres5	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre5	movie3	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre6	movie3	genres7	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre7	movie4	genres4	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre8	movie4	genres9	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre9	movie5	genres5	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre10	movie5	genres11	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre11	movie6	genres6	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre12	movie6	genres12	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre13	movie7	genres7	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre14	movie7	genres13	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre15	movie8	genres8	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre16	movie8	genres14	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre17	movie9	genres1	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre18	movie9	genres10	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre19	movie10	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre20	movie10	genres11	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre21	movie11	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre22	movie11	genres12	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre23	movie12	genres4	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre24	movie12	genres15	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre25	movie13	genres5	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre26	movie13	genres13	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre27	movie14	genres6	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre28	movie14	genres16	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre29	movie15	genres7	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre30	movie15	genres14	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre31	movie16	genres8	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre32	movie16	genres16	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre33	movie16	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre34	movie15	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre35	movie14	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre36	movie13	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre37	movie12	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre38	movie11	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre39	movie10	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre40	movie9	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre41	movie8	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre42	movie7	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre43	movie6	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre44	movie5	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre45	movie4	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre46	movie16	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre47	movie15	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre48	movie14	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre49	movie13	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre50	movie12	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre51	movie11	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre52	movie10	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre53	movie9	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre54	movie8	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre55	movie1	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre56	movie2	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre57	movie3	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre58	movie4	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre59	movie17	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre60	movie24	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre61	movie34	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre62	movie40	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre63	movie41	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre64	movie42	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre65	movie43	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre66	movie44	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre67	movie45	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre68	movie46	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre69	movie47	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre70	movie48	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre71	movie49	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre72	movie50	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre73	movie51	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre74	movie52	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre75	movie53	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre76	movie54	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre77	movie55	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre78	movie56	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre79	movie57	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre80	movie58	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre81	movie59	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre82	movie60	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre83	movie61	genres2	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre84	movie62	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre85	movie63	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
movie_genre86	movie64	genres3	2025-01-16 05:00:36.889661+07	2025-01-16 05:00:36.889661+07
\.


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movies (id, title, "desc", age_rating, thumbnail_url, release_year, image_url, trailer, type, created_at, updated_at) FROM stdin;
movie1	My Neighbor Totoro	Two girls move to the countryside and encounter magical creatures, including the lovable Totoro.	G	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner15_k0hfx0.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie2	Parasite	A poor family schemes to become employed by a wealthy family and infiltrates their household.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb2_jlg8t3.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner13_hypkn1.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie3	The Lord of the Rings	A hobbit and his companions set out to destroy the powerful One Ring and defeat dark lord Sauron.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb3_amum39.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner16_bst8mq.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	session	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie4	The Godfather	An organized crime dynasty's aging patriarch transfers control of his empire to his reluctant son.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb4_xt8dbk.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner14_rpdaat.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie5	Inception	A skilled thief is given a chance to have his criminal history erased in exchange for implanting another person's idea into a target's subconscious.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb5_cvbpg6.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner12_a89rnl.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie6	The Hangover	Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb6_eca5r3.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner9_vxfjsy.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie7	Mad Max: Fury Road	In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical warlord.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb7_lxuvxh.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner6_grcadu.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie8	Jurassic Park	A theme park showcasing genetically-engineered dinosaurs turns deadly.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb8_lrmhxn.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner10_lhpphm.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie9	Interstellar	A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb9_frhzqw.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner8_omm6kl.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie10	The Conjuring	Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb10_lc13id.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner7_hmxcbf.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie11	Casablanca	A cynical nightclub owner protects an old flame and her husband from Nazis in Morocco.	PG	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb11_p7jb67.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner11_zsvbja.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie12	Home Alone	An eight-year-old troublemaker must protect his house from burglars when he is accidentally left home alone by his family during Christmas vacation.	PG	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb12_gczg9t.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner4_pueidb.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie13	The Notebook	A young couple falls in love in the 1940s but is separated by their social differences and war.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb13_p7or42.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner5_gtjwbn.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie14	La La Land	A jazz musician and an aspiring actress struggle to keep their love alive as they chase their dreams.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb14_dypf7m.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner3_owgwbu.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	session	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie15	Schindler's List	In Nazi-occupied Poland during World War II, industrialist Oskar Schindler saves his Jewish employees from the Holocaust.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041530/thumb15_d0xbdh.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner1_vcrm8h.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	session	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie16	Moonlight	A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041530/thumb16_j6qcmf.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner2_rwmp0r.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	session	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie17	My Neighbor Totoro	Two girls move to the countryside and encounter magical creatures, including the lovable Totoro.	G	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner15_k0hfx0.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie18	Parasite	A poor family schemes to become employed by a wealthy family and infiltrates their household.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb2_jlg8t3.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner13_hypkn1.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie19	The Lord of the Rings	A hobbit and his companions set out to destroy the powerful One Ring and defeat dark lord Sauron.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb3_amum39.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner16_bst8mq.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	session	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie20	The Godfather	An organized crime dynasty's aging patriarch transfers control of his empire to his reluctant son.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb4_xt8dbk.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner14_rpdaat.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie21	Inception	A skilled thief is given a chance to have his criminal history erased in exchange for implanting another person's idea into a target's subconscious.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb5_cvbpg6.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner12_a89rnl.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie22	The Hangover	Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb6_eca5r3.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner9_vxfjsy.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie23	Mad Max: Fury Road	In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical warlord.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb7_lxuvxh.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner6_grcadu.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie24	Jurassic Park	A theme park showcasing genetically-engineered dinosaurs turns deadly.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb8_lrmhxn.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner10_lhpphm.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie25	The Conjuring	Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb10_lc13id.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner7_hmxcbf.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie26	Casablanca	A cynical nightclub owner protects an old flame and her husband from Nazis in Morocco.	PG	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb11_p7jb67.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner11_zsvbja.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie27	Home Alone	An eight-year-old troublemaker must protect his house from burglars when he is accidentally left home alone by his family during Christmas vacation.	PG	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb12_gczg9t.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner4_pueidb.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie28	The Notebook	A young couple falls in love in the 1940s but is separated by their social differences and war.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb13_p7or42.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner5_gtjwbn.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie29	La La Land	A jazz musician and an aspiring actress struggle to keep their love alive as they chase their dreams.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb14_dypf7m.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner3_owgwbu.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	session	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie30	Schindler's List	In Nazi-occupied Poland during World War II, industrialist Oskar Schindler saves his Jewish employees from the Holocaust.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041530/thumb15_d0xbdh.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner1_vcrm8h.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	session	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie31	Moonlight	A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041530/thumb16_j6qcmf.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner2_rwmp0r.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	session	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie32	Interstellar	A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb9_frhzqw.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner8_omm6kl.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie33	My Neighbor Totoro	Two girls move to the countryside and encounter magical creatures, including the lovable Totoro.	G	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner15_k0hfx0.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie34	Parasite	A poor family schemes to become employed by a wealthy family and infiltrates their household.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb2_jlg8t3.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner13_hypkn1.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie35	The Lord of the Rings	A hobbit and his companions set out to destroy the powerful One Ring and defeat dark lord Sauron.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb3_amum39.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner16_bst8mq.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	session	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie36	The Godfather	An organized crime dynasty's aging patriarch transfers control of his empire to his reluctant son.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb4_xt8dbk.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner14_rpdaat.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie37	Inception	A skilled thief is given a chance to have his criminal history erased in exchange for implanting another person's idea into a target's subconscious.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb5_cvbpg6.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner12_a89rnl.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie38	The Hangover	Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb6_eca5r3.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner9_vxfjsy.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie39	Mad Max: Fury Road	In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical warlord.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb7_lxuvxh.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner6_grcadu.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie40	Jurassic Park	A theme park showcasing genetically-engineered dinosaurs turns deadly.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb8_lrmhxn.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner10_lhpphm.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie41	Interstellar	A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb9_frhzqw.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner8_omm6kl.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie42	The Conjuring	Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb10_lc13id.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner7_hmxcbf.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie43	Casablanca	A cynical nightclub owner protects an old flame and her husband from Nazis in Morocco.	PG	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb11_p7jb67.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner11_zsvbja.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie44	Home Alone	An eight-year-old troublemaker must protect his house from burglars when he is accidentally left home alone by his family during Christmas vacation.	PG	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb12_gczg9t.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner4_pueidb.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie45	The Notebook	A young couple falls in love in the 1940s but is separated by their social differences and war.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb13_p7or42.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner5_gtjwbn.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie46	La La Land	A jazz musician and an aspiring actress struggle to keep their love alive as they chase their dreams.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb14_dypf7m.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner3_owgwbu.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	session	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie47	Schindler's List	In Nazi-occupied Poland during World War II, industrialist Oskar Schindler saves his Jewish employees from the Holocaust.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041530/thumb15_d0xbdh.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner1_vcrm8h.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	session	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie48	Moonlight	A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041530/thumb16_j6qcmf.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner2_rwmp0r.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	session	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie49	My Neighbor Totoro	Two girls move to the countryside and encounter magical creatures, including the lovable Totoro.	G	https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner15_k0hfx0.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie50	Parasite	A poor family schemes to become employed by a wealthy family and infiltrates their household.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb2_jlg8t3.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner13_hypkn1.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie51	The Lord of the Rings	A hobbit and his companions set out to destroy the powerful One Ring and defeat dark lord Sauron.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb3_amum39.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner16_bst8mq.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	session	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie52	The Godfather	An organized crime dynasty's aging patriarch transfers control of his empire to his reluctant son.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb4_xt8dbk.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner14_rpdaat.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie53	Inception	A skilled thief is given a chance to have his criminal history erased in exchange for implanting another person's idea into a target's subconscious.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb5_cvbpg6.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner12_a89rnl.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie54	The Hangover	Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb6_eca5r3.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner9_vxfjsy.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie55	Mad Max: Fury Road	In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical warlord.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb7_lxuvxh.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner6_grcadu.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie56	Jurassic Park	A theme park showcasing genetically-engineered dinosaurs turns deadly.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb8_lrmhxn.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner10_lhpphm.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie57	Interstellar	A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb9_frhzqw.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner8_omm6kl.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie58	The Conjuring	Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb10_lc13id.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner7_hmxcbf.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie59	Casablanca	A cynical nightclub owner protects an old flame and her husband from Nazis in Morocco.	PG	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb11_p7jb67.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner11_zsvbja.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie60	Home Alone	An eight-year-old troublemaker must protect his house from burglars when he is accidentally left home alone by his family during Christmas vacation.	PG	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb12_gczg9t.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner4_pueidb.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie61	The Notebook	A young couple falls in love in the 1940s but is separated by their social differences and war.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb13_p7or42.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner5_gtjwbn.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	single	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie62	La La Land	A jazz musician and an aspiring actress struggle to keep their love alive as they chase their dreams.	PG-13	https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb14_dypf7m.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner3_owgwbu.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	session	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie63	Schindler's List	In Nazi-occupied Poland during World War II, industrialist Oskar Schindler saves his Jewish employees from the Holocaust.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041530/thumb15_d0xbdh.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner1_vcrm8h.webp	https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4	session	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
movie64	Moonlight	A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.	R	https://res.cloudinary.com/dtht61558/image/upload/v1732041530/thumb16_j6qcmf.jpg	\N	https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner15_k0hfx0.webp	https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4	session	2025-01-16 05:00:36.885058+07	2025-01-16 05:00:36.885058+07
\.


--
-- Data for Name: providers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.providers (id, name, created_at, updated_at) FROM stdin;
email	email	2025-01-16 05:00:36.648608+07	2025-01-16 05:00:36.648608+07
google	google	2025-01-16 05:00:36.648608+07	2025-01-16 05:00:36.648608+07
\.


--
-- Data for Name: seasons; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.seasons (id, movie_id, season_number, title, created_at, updated_at) FROM stdin;
season1	movie1	1	The Lord of the Rings	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season2	movie2	1	Mad Max	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season3	movie3	1	The Lord of the Rings: Season 1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season4	movie3	2	The Lord of the Rings: Season 2	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season5	movie4	1	Interstellar	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season6	movie5	1	movie5	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season7	movie6	1	movie6	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season8	movie7	1	movie7	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season9	movie8	1	movie8	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season10	movie9	1	movie9	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season11	movie10	1	movie10	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season12	movie11	1	movie11	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season13	movie12	1	movie12	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season14	movie13	1	movie13	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season15	movie14	1	movie14 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season16	movie14	2	movie14 ss2	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season17	movie15	1	movie15 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season18	movie15	2	movie15 ss2	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season19	movie16	1	movie16 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season20	movie16	2	movie16 ss2	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season21	movie17	1	movie17 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season22	movie18	1	movie18 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season23	movie19	1	movie19 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season24	movie20	1	movie20 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season25	movie21	1	movie21 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season26	movie22	1	movie22 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season27	movie23	1	movie23 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season28	movie24	1	movie24 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season29	movie25	1	movie25 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season30	movie26	1	movie26 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season31	movie27	1	movie27 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season32	movie28	1	movie28 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season33	movie29	1	movie29 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season34	movie30	1	movie30 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season35	movie31	1	movie31 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season36	movie32	1	movie32 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season37	movie33	1	movie33 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season38	movie34	1	movie34 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season39	movie35	1	movie35 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season40	movie36	1	movie36 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season41	movie37	1	movie37 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season42	movie38	1	movie38 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season43	movie39	1	movie39 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season44	movie40	1	movie40 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season45	movie41	1	movie41 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season46	movie42	1	movie42 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season47	movie43	1	movie43 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season48	movie44	1	movie44 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season49	movie45	1	movie45 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season50	movie46	1	movie46 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season51	movie47	1	movie47 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season52	movie48	1	movie48 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season53	movie49	1	movie49 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season54	movie50	1	movie50 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season55	movie51	1	movie51 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season56	movie52	1	movie52 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season57	movie53	1	movie53 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season58	movie54	1	movie54 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season59	movie55	1	movie55 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season60	movie56	1	movie56 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season61	movie57	1	movie57 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season62	movie58	1	movie58 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season63	movie59	1	movie59 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season64	movie60	1	movie60 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season65	movie61	1	movie61 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season66	movie62	1	movie62 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season67	movie63	1	movie63 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
season68	movie64	1	movie64 ss1	2025-01-16 05:00:36.896601+07	2025-01-16 05:00:36.896601+07
\.


--
-- Data for Name: subscriptions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subscriptions (id, name, price, "time", created_at, updated_at) FROM stdin;
phone	Phone	70000	1	2025-01-16 05:00:36.653012+07	2025-01-16 05:00:36.653012+07
basic	Basic	108000	1	2025-01-16 05:00:36.653012+07	2025-01-16 05:00:36.653012+07
standard 	Standard	220000	1	2025-01-16 05:00:36.653012+07	2025-01-16 05:00:36.653012+07
premium	Premium	260000	1	2025-01-16 05:00:36.653012+07	2025-01-16 05:00:36.653012+07
\.


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tags (id, name, created_at, updated_at) FROM stdin;
tag1	Tâm lý	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag2	Giật gân	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag3	Hành động	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag4	Kinh dị	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag5	Phiêu lưu	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag6	Hài hước	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag7	Lãng mạn	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag8	Khoa học viễn tưởng	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag9	Gia đình	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag10	Hình sự	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag11	Bí ẩn	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag12	Thể thao	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag13	Âm nhạc	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag14	Chiến tranh	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag15	Viễn Tây	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag16	Lịch sử	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag17	Kịch tính	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag18	Hoạt hình	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag19	Phiêu lưu mạo hiểm	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
tag20	Lịch sử	2025-01-16 05:00:36.913678+07	2025-01-16 05:00:36.913678+07
\.


--
-- Data for Name: transactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.transactions ("orderId", user_id, amount, status, "paymentInfo", created_at, updated_at) FROM stdin;
2136919317abc	idAdmin	100000	Đã thanh toán	thông tin thanh toán	2025-01-16 05:00:36.952554+07	2025-01-16 05:00:36.952554+07
MOMO1738436749735	63ff3f48-b744-4d96-b1e6-094b36ded0a2	220000	Chưa thanh toán	Thanh toan gói Standard thoi gian: 2025-02-02 02:05:49	2025-02-02 02:05:50.003+07	2025-02-02 02:05:50.003+07
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, subscriptions_id, provider_id, name, email, phone, password, avatar, status, "limit", created_at, updated_at) FROM stdin;
idAdmin	premium	email	admin	adminNetflix@gmail.com	375072400	$2b$10$Qn9HSlgC4WPC5iJzpotxF.LcD69szbr.3ejuZC0PHWfJqHSkW.6Tm	https://res.cloudinary.com/dtht61558/image/upload/v1714926727/fallback-avatar.155cdb2376c5d99ea151_clwp1n.jpg	t	5	2025-01-16 05:00:36.876831+07	2025-01-16 05:00:36.876831+07
idprofile1	standard	email	profile1	profile1@gmail.com	\N	$2b$10$AfN3onqVWPBP/z6bGzL/TOTvVWNWxZxG9IVzwQuFGCNG/5I8OZ/kW	https://res.cloudinary.com/dtht61558/image/upload/v1714926727/fallback-avatar.155cdb2376c5d99ea151_clwp1n.jpg	t	2	2025-01-16 05:00:36.876831+07	2025-01-16 05:00:36.876831+07
idprofile2	phone	email	profile2	profile2@gmail.com	\N	$2b$10$NV4IHmzDIJGfjrYw/yFZzOwAFM21w26GIBBBLoBZ9RdOe7keVCwda	https://res.cloudinary.com/dtht61558/image/upload/v1714926727/fallback-avatar.155cdb2376c5d99ea151_clwp1n.jpg	t	1	2025-01-16 05:00:36.876831+07	2025-01-16 05:00:36.876831+07
63ff3f48-b744-4d96-b1e6-094b36ded0a2	\N	email	kieuduytan	kieuduytan@gmail.com	375072400	$2b$10$jFyMv49yKb25KCDNEyocSOlzp4tzLu37PCZKGTgIchIm0vIrCKf9O	\N	t	\N	2025-02-01 17:04:00.433+07	2025-02-02 02:05:49.737+07
\.


--
-- Name: deviceInfos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."deviceInfos_id_seq"', 2, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: WatchHistories WatchHistories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WatchHistories"
    ADD CONSTRAINT "WatchHistories_pkey" PRIMARY KEY (id);


--
-- Name: actors actors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actors
    ADD CONSTRAINT actors_pkey PRIMARY KEY (id);


--
-- Name: blacklistTokens blacklistTokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."blacklistTokens"
    ADD CONSTRAINT "blacklistTokens_pkey" PRIMARY KEY (id);


--
-- Name: contentWarnings contentWarnings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."contentWarnings"
    ADD CONSTRAINT "contentWarnings_pkey" PRIMARY KEY (id);


--
-- Name: deviceInfos deviceInfos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."deviceInfos"
    ADD CONSTRAINT "deviceInfos_pkey" PRIMARY KEY (id);


--
-- Name: episodes episodes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.episodes
    ADD CONSTRAINT episodes_pkey PRIMARY KEY (id);


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- Name: genres genres_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_pkey PRIMARY KEY (id);


--
-- Name: keyTokens keyTokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."keyTokens"
    ADD CONSTRAINT "keyTokens_pkey" PRIMARY KEY (id);


--
-- Name: movieActors movieActors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."movieActors"
    ADD CONSTRAINT "movieActors_pkey" PRIMARY KEY (id);


--
-- Name: movieContentWarring movieContentWarring_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."movieContentWarring"
    ADD CONSTRAINT "movieContentWarring_pkey" PRIMARY KEY (id);


--
-- Name: movieTags movieTags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."movieTags"
    ADD CONSTRAINT "movieTags_pkey" PRIMARY KEY (id);


--
-- Name: movie_genres movie_genres_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie_genres
    ADD CONSTRAINT movie_genres_pkey PRIMARY KEY (id);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: providers providers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.providers
    ADD CONSTRAINT providers_pkey PRIMARY KEY (id);


--
-- Name: seasons seasons_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seasons
    ADD CONSTRAINT seasons_pkey PRIMARY KEY (id);


--
-- Name: subscriptions subscriptions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT subscriptions_pkey PRIMARY KEY (id);


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- Name: transactions transactions_orderId_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT "transactions_orderId_key" UNIQUE ("orderId");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: WatchHistories WatchHistories_movie_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WatchHistories"
    ADD CONSTRAINT "WatchHistories_movie_id_fkey" FOREIGN KEY (movie_id) REFERENCES public.movies(id) ON DELETE CASCADE;


--
-- Name: deviceInfos deviceInfos_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."deviceInfos"
    ADD CONSTRAINT "deviceInfos_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: episodes episodes_seasons_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.episodes
    ADD CONSTRAINT episodes_seasons_id_fkey FOREIGN KEY (seasons_id) REFERENCES public.seasons(id) ON DELETE CASCADE;


--
-- Name: favorites favorites_movie_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_movie_id_fkey FOREIGN KEY (movie_id) REFERENCES public.movies(id) ON DELETE CASCADE;


--
-- Name: favorites favorites_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: keyTokens keyTokens_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."keyTokens"
    ADD CONSTRAINT "keyTokens_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: movieActors movieActors_actor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."movieActors"
    ADD CONSTRAINT "movieActors_actor_id_fkey" FOREIGN KEY (actor_id) REFERENCES public.actors(id) ON DELETE CASCADE;


--
-- Name: movieActors movieActors_movie_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."movieActors"
    ADD CONSTRAINT "movieActors_movie_id_fkey" FOREIGN KEY (movie_id) REFERENCES public.movies(id) ON DELETE CASCADE;


--
-- Name: movieContentWarring movieContentWarring_contentWarning_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."movieContentWarring"
    ADD CONSTRAINT "movieContentWarring_contentWarning_id_fkey" FOREIGN KEY ("contentWarning_id") REFERENCES public."contentWarnings"(id) ON DELETE CASCADE;


--
-- Name: movieContentWarring movieContentWarring_movie_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."movieContentWarring"
    ADD CONSTRAINT "movieContentWarring_movie_id_fkey" FOREIGN KEY (movie_id) REFERENCES public.movies(id) ON DELETE CASCADE;


--
-- Name: movieTags movieTags_movie_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."movieTags"
    ADD CONSTRAINT "movieTags_movie_id_fkey" FOREIGN KEY (movie_id) REFERENCES public.movies(id) ON DELETE CASCADE;


--
-- Name: movieTags movieTags_tag_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."movieTags"
    ADD CONSTRAINT "movieTags_tag_id_fkey" FOREIGN KEY (tag_id) REFERENCES public.tags(id) ON DELETE CASCADE;


--
-- Name: movie_genres movie_genres_genre_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie_genres
    ADD CONSTRAINT movie_genres_genre_id_fkey FOREIGN KEY (genre_id) REFERENCES public.genres(id) ON DELETE CASCADE;


--
-- Name: movie_genres movie_genres_movie_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie_genres
    ADD CONSTRAINT movie_genres_movie_id_fkey FOREIGN KEY (movie_id) REFERENCES public.movies(id) ON DELETE CASCADE;


--
-- Name: seasons seasons_movie_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seasons
    ADD CONSTRAINT seasons_movie_id_fkey FOREIGN KEY (movie_id) REFERENCES public.movies(id) ON DELETE CASCADE;


--
-- Name: transactions transactions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: users users_provider_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_provider_id_fkey FOREIGN KEY (provider_id) REFERENCES public.providers(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

