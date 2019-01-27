#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------

#------------------------------------------------------------
# Table: TB_USER
#------------------------------------------------------------

CREATE TABLE TB_USER(
        ID_Utilisateur Int  Auto_increment  NOT NULL ,
        Nom            Varchar (50) NOT NULL ,
        Prenom         Varchar (50) NOT NULL ,
        Mail           Varchar (50) NOT NULL ,
        PassWord       Varchar (50) NOT NULL ,
        Etat_Connexion Boolean  NULL ,
        ID_Statut      Int NOT NULL ,
        ID_CENTRE      Int NOT NULL
,CONSTRAINT TB_USER_PK PRIMARY KEY (ID_Utilisateur)

,CONSTRAINT TB_USER_Type_Statut_FK FOREIGN KEY (ID_Statut) REFERENCES Type_Statut(ID_Statut)
,CONSTRAINT TB_USER_CENTRE_CESI0_FK FOREIGN KEY (ID_CENTRE) REFERENCES CENTRE_CESI(ID_CENTRE)
);


#------------------------------------------------------------
# Table: TB_COMMANDE
#------------------------------------------------------------

CREATE TABLE TB_COMMANDE(
        ID_Commande    Int  Auto_increment  NOT NULL ,
        Prix_Commande  DECIMAL (15,3)  NOT NULL ,
        ID_Utilisateur Int NOT NULL
        ,CONSTRAINT TB_COMMANDE_PK PRIMARY KEY (ID_Commande)

        ,CONSTRAINT TB_COMMANDE_TB_USER_FK FOREIGN KEY (ID_Utilisateur) REFERENCES TB_USER(ID_Utilisateur)
);


#------------------------------------------------------------
# Table: TB_CATEGORIE
#------------------------------------------------------------

CREATE TABLE TB_CATEGORIE(
        ID_Categorie   Int  Auto_increment  NOT NULL ,
        Nom_Categorie  Varchar (50) NOT NULL ,
        ID_Utilisateur Int NOT NULL
        ,CONSTRAINT TB_CATEGORIE_PK PRIMARY KEY (ID_Categorie)

        ,CONSTRAINT TB_CATEGORIE_TB_USER_FK FOREIGN KEY (ID_Utilisateur) REFERENCES TB_USER(ID_Utilisateur)
);


#------------------------------------------------------------
# Table: TB_PRODUIT
#------------------------------------------------------------

CREATE TABLE TB_PRODUIT(
        ID_Produit          Int  Auto_increment  NOT NULL ,
        Nom_Produit         Varchar (25) ,
        Description_Produit Varchar (50) ,
        Img_Produit         Varchar (255) NOT NULL ,
        Prix_Produit        DECIMAL (15,3)  ,
        Nombre_Vendu        Int ,
        Stock               Int NOT NULL ,
        ID_Categorie        Int NOT NULL
        ,CONSTRAINT TB_PRODUIT_PK PRIMARY KEY (ID_Produit)

        ,CONSTRAINT TB_PRODUIT_TB_CATEGORIE_FK FOREIGN KEY (ID_Categorie) REFERENCES TB_CATEGORIE(ID_Categorie)
);


#------------------------------------------------------------
# Table: Contenir
#------------------------------------------------------------

CREATE TABLE Contenir(
        ID_Commande Int NOT NULL ,
        ID_Produit  Int NOT NULL ,
        Quantitee   Int NOT NULL
        ,CONSTRAINT Contenir_PK PRIMARY KEY (ID_Commande,ID_Produit)

        ,CONSTRAINT Contenir_TB_COMMANDE_FK FOREIGN KEY (ID_Commande) REFERENCES TB_COMMANDE(ID_Commande)
        ,CONSTRAINT Contenir_TB_PRODUIT0_FK FOREIGN KEY (ID_Produit) REFERENCES TB_PRODUIT(ID_Produit)
);


#------------------------------------------------------------
# Table: Gerer
#------------------------------------------------------------

CREATE TABLE Gerer(
        ID_Utilisateur Int NOT NULL ,
        ID_Produit     Int NOT NULL
        ,CONSTRAINT Gerer_PK PRIMARY KEY (ID_Utilisateur,ID_Produit)

        ,CONSTRAINT Gerer_TB_USER_FK FOREIGN KEY (ID_Utilisateur) REFERENCES TB_USER(ID_Utilisateur)
        ,CONSTRAINT Gerer_TB_PRODUIT0_FK FOREIGN KEY (ID_Produit) REFERENCES TB_PRODUIT(ID_Produit)
);


#------------------------------------------------------------
# Table: TB_EVENEMENT
#------------------------------------------------------------

CREATE TABLE TB_EVENEMENT(
        ID_Evenement        Int  Auto_increment  NOT NULL ,
        Nom                 Varchar (50) NOT NULL ,
        Descripition        Varchar (50) NOT NULL ,
        Date                Varchar (50) NOT NULL ,
        Lieu                Varchar (50) NOT NULL ,
        Informations        Varchar (50) NOT NULL ,
        Nombre_participants Int NOT NULL ,
        Evenement_Passe     Boolean NOT NULL
,CONSTRAINT TB_EVENEMENT_PK PRIMARY KEY (ID_Evenement)
);


#------------------------------------------------------------
# Table: Type_Statut
#------------------------------------------------------------

CREATE TABLE Type_Statut(
        ID_Statut Int  Auto_increment  NOT NULL ,
        Statut    Varchar (50) NOT NULL
,CONSTRAINT Type_Statut_PK PRIMARY KEY (ID_Statut)
);


#------------------------------------------------------------
# Table: CENTRE_CESI
#------------------------------------------------------------

CREATE TABLE CENTRE_CESI(
        ID_CENTRE Int  Auto_increment  NOT NULL ,
        Centre    Varchar (50) NOT NULL
,CONSTRAINT CENTRE_CESI_PK PRIMARY KEY (ID_CENTRE)
);



#------------------------------------------------------------
# Table: TB_COMMENTAIRE
#------------------------------------------------------------

CREATE TABLE TB_COMMENTAIRE(
        ID_Commentaire      Int  Auto_increment  NOT NULL ,
        Contenu_Commentaire Varchar (50) NOT NULL ,
        ID_Utilisateur      Int NOT NULL
,CONSTRAINT TB_COMMENTAIRE_PK PRIMARY KEY (ID_Commentaire)

,CONSTRAINT TB_COMMENTAIRE_TB_USER_FK FOREIGN KEY (ID_Utilisateur) REFERENCES TB_USER(ID_Utilisateur)
);


#------------------------------------------------------------
# Table: TB_IMAGE
#------------------------------------------------------------

CREATE TABLE TB_IMAGE(
        ID_Image       Int  Auto_increment  NOT NULL ,
        Nom_Image      Varchar (50) NOT NULL ,
        Like_Image     Int NOT NULL ,
        ID_Utilisateur Int NOT NULL
,CONSTRAINT TB_IMAGE_PK PRIMARY KEY (ID_Image)

,CONSTRAINT TB_IMAGE_TB_USER_FK FOREIGN KEY (ID_Utilisateur) REFERENCES TB_USER(ID_Utilisateur)
);


#------------------------------------------------------------
# Table: ACCES,MODIFIER,POSTER,ADMINISTRER,INCRIPITION
#------------------------------------------------------------

CREATE TABLE ACCES_MODIFIER_POSTER_ADMINISTRER_INCRIPITION(
        ID_Evenement_TB_EVENEMENT Int NOT NULL ,
        ID_Utilisateur            Int NOT NULL ,
        ID_Etudiant               Int NOT NULL ,
        ID_Evenement              Int NOT NULL
,CONSTRAINT ACCES_MODIFIER_POSTER_ADMINISTRER_INCRIPITION_PK PRIMARY KEY (ID_Evenement_TB_EVENEMENT,ID_Utilisateur)

,CONSTRAINT ACCES_MODIFIER_POSTER_ADMINISTRER_INCRIPITION_TB_EVENEMENT_FK FOREIGN KEY (ID_Evenement_TB_EVENEMENT) REFERENCES TB_EVENEMENT(ID_Evenement)
,CONSTRAINT ACCES_MODIFIER_POSTER_ADMINISTRER_INCRIPITION_TB_USER0_FK FOREIGN KEY (ID_Utilisateur) REFERENCES TB_USER(ID_Utilisateur)
);


#------------------------------------------------------------
# Table: AJOUTER
#------------------------------------------------------------

CREATE TABLE AJOUTER(
        ID_Evenement Int NOT NULL ,
        ID_Image     Int NOT NULL
,CONSTRAINT AJOUTER_PK PRIMARY KEY (ID_Evenement,ID_Image)

,CONSTRAINT AJOUTER_TB_EVENEMENT_FK FOREIGN KEY (ID_Evenement) REFERENCES TB_EVENEMENT(ID_Evenement)
,CONSTRAINT AJOUTER_TB_IMAGE0_FK FOREIGN KEY (ID_Image) REFERENCES TB_IMAGE(ID_Image)
);


#------------------------------------------------------------
# Table: POSTER
#------------------------------------------------------------

CREATE TABLE POSTER(
        ID_Image       Int NOT NULL ,
        ID_Commentaire Int NOT NULL
,CONSTRAINT POSTER_PK PRIMARY KEY (ID_Image,ID_Commentaire)

,CONSTRAINT POSTER_TB_IMAGE_FK FOREIGN KEY (ID_Image) REFERENCES TB_IMAGE(ID_Image)
,CONSTRAINT POSTER_TB_COMMENTAIRE0_FK FOREIGN KEY (ID_Commentaire) REFERENCES TB_COMMENTAIRE(ID_Commentaire)
);