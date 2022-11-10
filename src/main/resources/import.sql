INSERT INTO tb_user (id, user_name, password) VALUES('64ddab6f-e556-40f9-b178-858084ec752e','usuario','$2a$10$CiFc4GoIjo8eIQQvWpuvyumHwZtM7xurv2xyTfFbrbvYM54P3VKAW');

INSERT INTO tb_user (id, user_name, password) VALUES('910e9127-5f9b-44bf-ba1b-126a860f645b','admin','$2a$10$CiFc4GoIjo8eIQQvWpuvyumHwZtM7xurv2xyTfFbrbvYM54P3VKAW');

INSERT INTO tb_role(id, role_name) VALUES ('2537135b-1f9a-4b6d-a270-35bb33280aa0', 'ROLE_ADMIN');
INSERT INTO tb_role(id, role_name) VALUES ('d109ae87-99ab-4118-bb9c-bc2c7613639e', 'ROLE_USER');

INSERT INTO tb_users_roles(user_id, role_id) VALUES ('910e9127-5f9b-44bf-ba1b-126a860f645b', '2537135b-1f9a-4b6d-a270-35bb33280aa0');

INSERT INTO tb_users_roles(user_id, role_id) VALUES ('64ddab6f-e556-40f9-b178-858084ec752e', 'd109ae87-99ab-4118-bb9c-bc2c7613639e');