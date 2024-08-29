CREATE TABLE usuarios (
    usuario_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(70) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    creado_en DATE DEFAULT CURRENT_DATE 
)

INSERT INTO `usuarios`(`username`, `email`, `password_hash`) VALUES 
('Pepe', 'pepe@gmail.com', 'pepe123'), ('José', 'jose@gmail.com', 'jose123'), 
('María', 'maria@gmail.com', 'maria123'), ('Julia', 'julia@gmail.com', 'julia123'), 
('Ana', 'anita@gmail.com', 'anita123')

INSERT INTO `usuarios`(`username`, `email`, `password_hash`) VALUES 
('Lucas', 'lucas@gmail.com', 'lucas123'), ('Marcos', 'marcos@gmail.com', 'marcos123'), 
('Leia', 'leia@gmail.com', 'leia123'), ('Daria', 'daria@gmail.com', 'daria123'), 
('Malena', 'malena@gmail.com', 'malena123')

/* 
Crear a 
leonel
juan
Carlita
Eliminar a juan por su id
actualizar que carlita ahora se llame Carlota por el id de carlita
 */\

INSERT INTO usuarios (`username`, `email`, `password_hash`) 
VALUES ('Leonel', 'leonel@gmail.com', 'leonel123'), 
('Juan', 'juancho88@gmail.com', 'juancho999'), 
('Carlita', 'carlita@gmail.com', 'carli333')

DELETE FROM usuarios WHERE usuario_id = 12

UPDATE usuarios SET username = 'Carlota' WHERE usuario_id = 13

/* selecciona toda la columna */
SELECT * FROM usuarios; 

/* buscar */
SELECT `username`,`email`,`creado_en` FROM `usuarios` WHERE username = 'Pepe';