INSERT INTO tb_user (id, user_name, password) VALUES('64ddab6f-e556-40f9-b178-858084ec752e','usuario','$2a$10$CiFc4GoIjo8eIQQvWpuvyumHwZtM7xurv2xyTfFbrbvYM54P3VKAW');

INSERT INTO tb_user (id, user_name, password) VALUES('910e9127-5f9b-44bf-ba1b-126a860f645b','admin','$2a$10$CiFc4GoIjo8eIQQvWpuvyumHwZtM7xurv2xyTfFbrbvYM54P3VKAW');

INSERT INTO tb_role(id, role_name) VALUES ('2537135b-1f9a-4b6d-a270-35bb33280aa0', 'ROLE_ADMIN');
INSERT INTO tb_role(id, role_name) VALUES ('d109ae87-99ab-4118-bb9c-bc2c7613639e', 'ROLE_USER');

INSERT INTO tb_users_roles(user_id, role_id) VALUES ('910e9127-5f9b-44bf-ba1b-126a860f645b', '2537135b-1f9a-4b6d-a270-35bb33280aa0');

INSERT INTO tb_users_roles(user_id, role_id) VALUES ('64ddab6f-e556-40f9-b178-858084ec752e', 'd109ae87-99ab-4118-bb9c-bc2c7613639e');


INSERT INTO tb_parking_spot VALUES('aa995c78-830d-46a7-9cfb-86475225b75e', '12', '12', 'Chevrolet', 'Green', '16', 'Opala', '11', TIMESTAMP '2022-12-14 00:00:00', 'Maria Jos\00e9');

INSERT INTO tb_parking_spot VALUES('aa995c78-810d-46a7-9cfb-86475225b75e', '7', '14', 'Chevrolet', 'Green', '2', 'Opala', '2', TIMESTAMP '2022-09-14 00:00:00', 'Marcos Pereira');

INSERT INTO tb_parking_spot VALUES('b65c1459-f585-41cc-889c-144df0d61a2f', '1', '4', 'Fiat', 'Red', 'dfr5874', 'Argo', '17', TIMESTAMP '2022-12-14 18:15:12.719208', 'William Campos');

INSERT INTO tb_parking_spot VALUES('a6c1767b-9e22-4476-8bbd-97fc613e5d8d', '2', '4', 'Volkswagen', 'White', 'wer8567', 'Fusca', '1', TIMESTAMP '2022-12-14 18:15:52.475038', 'Jose dos Santos');

INSERT INTO tb_parking_spot VALUES('6b7947c6-62dd-44fa-a3b5-c75b2a4cee78', '6', '1', 'Volkswagen', 'Gray', 'wer9652', 'Jetta', '3', TIMESTAMP '2022-12-14 18:16:30.200132', 'Bruno Araujo');

INSERT INTO tb_parking_spot VALUES('3d51e39d-95d4-443e-845f-84184bfa60db', '84', '6', 'Chevrolet', 'Black', 'scd8745', 'Silverado', '6', TIMESTAMP '2022-12-14 18:17:09.88663', 'Eduardo Silva');