CREATE TABLE trilhas (
	id_trilha SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	descripcion VARCHAR(255) NOT NULL,
	info_onibus VARCHAR(7),
	localizacao VARCHAR(100),
	pcd BOOLEAN,
  fizemos BOOLEAN
)