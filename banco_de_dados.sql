CREATE TABLE Usuario (
    Nome varchar(80) NOT NULL,
    Email varchar(50) NOT NULL,
    Senha varchar(20) NOT NULL,
    PRIMARY KEY (Email)
);

CREATE TABLE Empresa (
    CNPJ int NOT NULL,
    Email varchar(50) NOT NULL,
    PRIMARY KEY (Email),
    FOREIGN KEY (Email) REFERENCES Usuario(Email) ON DELETE CASCADE
);

CREATE TABLE Pessoa (
    CPF int NOT NULL,
    Data_de_nascimento varchar(10) NOT NULL,
    Endereco varchar(150),
    Telefone int NOT NULL,
    Email varchar(50) NOT NULL,
    PRIMARY KEY (Email),
    FOREIGN KEY (Email) REFERENCES Usuario(Email) ON DELETE CASCADE
);

CREATE TABLE Anuncio (
    ID int NOT NULL,
    Material_desejado varchar(100) NOT NULL,
    Quantidade_desejada int NOT NULL,
    Condicao_de_aceitacao varchar(200) NOT NULL,
    Beneficio_em_troca varchar(200) NOT NULL,
    Numero_de_visualizacoes int NOT NULL,
    Categoria_do_material varchar(100) NOT NULL CHECK(Categoria_do_material in ('Plastico', 'Isopor', 'Vidro', 'Papel', 'Papelao', 'Metal')),
    Email_da_Empresa varchar(100) NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (Email_da_Empresa) REFERENCES Empresa(Email) ON DELETE CASCADE
);

CREATE TABLE Transacao (
    Email_do_Usuario varchar(50) NOT NULL,
    ID_do_Anuncio int,
    PRIMARY KEY (Email_do_Usuario, ID_do_Anuncio),
    FOREIGN KEY (Email_do_Usuario) REFERENCES Usuario(Email) ON DELETE CASCADE,
    FOREIGN KEY (ID_do_Anuncio) REFERENCES Anuncio(ID) ON DELETE CASCADE
);



 
 
