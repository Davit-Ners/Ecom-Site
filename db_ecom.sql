PGDMP  .                    }            db_ecom    17.3    17.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false                       1262    16388    db_ecom    DATABASE     m   CREATE DATABASE db_ecom WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'fr-FR';
    DROP DATABASE db_ecom;
                     postgres    false            �            1259    16417    comments    TABLE     �   CREATE TABLE public.comments (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    stars character varying(5) NOT NULL,
    comment text NOT NULL,
    product_id integer NOT NULL
);
    DROP TABLE public.comments;
       public         heap r       postgres    false            �            1259    16416    comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.comments_id_seq;
       public               postgres    false    220                       0    0    comments_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;
          public               postgres    false    219            �            1259    16390    product    TABLE     
  CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price numeric(10,2) NOT NULL,
    soldedprice numeric(10,2),
    description text,
    image character varying(255),
    category character varying(100) NOT NULL
);
    DROP TABLE public.product;
       public         heap r       postgres    false            �            1259    16389    product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.product_id_seq;
       public               postgres    false    218            	           0    0    product_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;
          public               postgres    false    217            �            1259    16431    users    TABLE     *  CREATE TABLE public.users (
    id integer NOT NULL,
    role character varying(255),
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    firstname character varying(255),
    lastname character varying(255)
);
    DROP TABLE public.users;
       public         heap r       postgres    false            �            1259    16430    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public               postgres    false    222            
           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public               postgres    false    221            b           2604    16420    comments id    DEFAULT     j   ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);
 :   ALTER TABLE public.comments ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    220    219    220            a           2604    16393 
   product id    DEFAULT     h   ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);
 9   ALTER TABLE public.product ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217    218            c           2604    16434    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    222    221    222            �          0    16417    comments 
   TABLE DATA           L   COPY public.comments (id, username, stars, comment, product_id) FROM stdin;
    public               postgres    false    220   o       �          0    16390    product 
   TABLE DATA           ]   COPY public.product (id, name, price, soldedprice, description, image, category) FROM stdin;
    public               postgres    false    218   �"                 0    16431    users 
   TABLE DATA           Y   COPY public.users (id, role, username, email, password, firstname, lastname) FROM stdin;
    public               postgres    false    222   b'                  0    0    comments_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.comments_id_seq', 41, true);
          public               postgres    false    219                       0    0    product_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.product_id_seq', 20, true);
          public               postgres    false    217                       0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public               postgres    false    221            g           2606    16424    comments comments_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_pkey;
       public                 postgres    false    220            e           2606    16397    product product_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pkey;
       public                 postgres    false    218            i           2606    16438    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public                 postgres    false    222            j           2606    16425    comments fk_product    FK CONSTRAINT     �   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE;
 =   ALTER TABLE ONLY public.comments DROP CONSTRAINT fk_product;
       public               postgres    false    220    218    4709            �   `  x��W�rG�g�b)�Q��+䡃*RfQ�"'�� ���j�ʜ8�ؙ3���}���,΅ʮb@,�wv�k�إV��7��&�o������Z��䟢�*,�[c��2p�\�c�5|,��E��LT)J��On���Қ�uA���˿x����G�W��],����ev�;Ii���\J��	^	�~!b@	����Ⱥ�PR4���WR���.��˪�N:�����bL��2�+��G��(U.7��G��6�~j'��sn�Oyj���Ő��ZI��R�݆n�WS×�\L�	�ؠhX4@�G�չ�
��M��N+�Y#)�	{o����(�Z]]k1��`,I`G.沤�Apv�(�PNL[L
AS]� ܄��n**e��נ8e��YU��U���Nz�Q��yZ���<u���x���ĉ��i���]$8cUM�h�d;F����W�����:W�^��e|��*t�Q��8g�&Xe$T�L��,�˥���7ضP6,.�5���J:����V4ꨃ��:(1R L+S�oP6�Q��Z겓�w�n��1�4��D����J'̪DRr8���شP��}�>�3��z�{��J��|k�a��'�'�z�x/�2%xF�:D'�p���E%m���a%�E���ĩ��pʛ�- �Z�~��z�����T�蒡�Ƞ��cl�m��B��ӄ����>ra��lZD�=�kG��ك����,<�&��=�3kV�j4��Iץ '`�#T���a��cu���*�=Q��b$m$��΋�)�����I��!ȧ�'<nק�l�c��뙆^�;�G�XO������๪jP (o�An@ cb��(z��j��+����$�W&�F��	.�����GQڞ6S���HU�tT.@�'�~x�{�I�	@F�E�����cFct=�(6��"���3���PЃ�N ��ł��htS�{�(���Wp?��L�$�v��^�W ��m!4�p��z1"�wv$�$���Y��Qe9 ,S��Q�t{�H���6�`�?�2��Z�7rq���"����pu���p�"G��v02�%�h��7m�r�z��'�5"@�oӾ��(y[��̵�@�A�?e/�^�I�&	;9%ԺR�*���W�9ΰ"��h��шo"��0$W6�r��_�9�Ǻa7�P�B�H~���*]�fâ-
�s����7^bK)W�GY���5�Q�7ż`O3b��t��|3E���І� ���My���(����:����#���*�`���Ə���DL�(�3H�{0������V�ƫ66�X���_�TU��i1H���[���h���be|KӍMܗ<��V�7�,nH]�~;1J��b�b����Ί����T�V]�D��[V?;>�5(jAw� ��4��ӎ�N`����PVw�BP�e�-��Sv��w����F���7���4H�7I-�)0�r�3ح�BC�\��u���_{��|�
��lJ�����#��τD�xO�lmjʿ�<|��mY�H�]>K����L-ȑ���V6����XR���5�~E�� �W��Q%~t��o��`�d�ڏN)T/���\@����[ſ����      �   s  x�uVK��6\C��<5������e�8��g�AR�� �����I�q6�/�n�9�XI�U�U(�`����먂�a�.g'���[��x���^I���:� ���+!p����+��5�E����A)���$S���l�U\�M�����(�bŤ�n���5l~7�>���|�\����K�� �-�06�� �>3(S����N����k-��_�)P���9��3h׷���e[7��,^����D�� w��i8���l
&���hʖ6:��#Ԓ�}�M;��r�4܌.ETt�V!]����T�'��	���8e��Sۙ�Ou�T�X��t����|r�+��l2�	���ݓh%w�j�Eم	�F��Q?k$	"~#՜�8Q�;�^�(+/�Ӈ?3#E���[������9[.o���ŋ�9+�y2���h�Q'�8Q� m�W������� R5��'hR�����_c^�e)\�v�(~v����냮���*�?�V�>M�j����Mj�A�UV��� ��® �yɞI��r�N��l���/����!����Pm��XG�G�Ж���-N�6� �:�VY��n�W%�QG�����<(��<Pm�A"�.q>>��<�����]���v���"�C��;QV��o����y�B���(������sֻ��7�b��.�	���z�&�U�2Nm�.���C���N0�VR��P���^�/�U��pceL�ol㷥㹨*�=v�4{�}M�^`��ے'��g9�����]Җ���������B?��RӿD'{N�Q1e�Μ����Й���j�h�<�� �t�uR��)�V[���h��`���;�ß�>� B��������i�h/oЉI�ӆ����T�����x�8��b�L~�w08x�{d>�����i`�	T#�;�K��~��6�Í-m��E��!M4�#f��3��o �3���$�$��ޖn�K6�x&t���5����� x) ��-�3'p-?9Q/�����{[V��<�A�;�׏Ѵ�(�$eOz��~+�1��T��!:��e2f��O�ӱ o=�f�������<�h�nDD�<+��w��������h�{Ĉ         [   x�3�LL����tI,�,�L�zy�E�F鹉�9z����%��%�F�&PU~@�����<.#���ܤ�"��
�n �)�������� ��d     