	CREATE TABLE imgTrilhas (
  url_img VARCHAR(400),
  img_id SERIAL PRIMARY KEY,
  FOREIGN KEY (trilha_id) REFERENCES trilhas (trilha_id),
)
