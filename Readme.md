# 1-Description du projet

Il est vrai que l’hygiène de vie est de plus en plus importante pour un grand nombre de personnes et plus particulièrement l’alimentation. C’est pourquoi nous avons décidé de créer une application web pour les personnes qui souhaitent avoir un suivi de leur alimentation.

Ce projet est le lancement d’une application web qui a pour objectif pour les utilisateurs de se connecter grâce à des identifiants et ensuite de pouvoir visualiser leurs données personnelles (poids,taille,age…). 

L’une des principales fonctionnalités de l’application va être de pouvoir calculer le nombre de calories des plats cuisinés par les utilisateurs en ajoutant chacun des aliments de ce plat ainsi que la quantité correspondante du plat.
Grâce à une API, notre application web va être capable d’aller interroger une base de données pour aller récupérer les différents aliments existants avec ses différents apports. Pour information, le nom des différents aliments est en anglais dans notre base de données.

Pour ce projet, nous avons utilisé le framework Django Rest pour notre API, ensuite pour le frontend nous utilisons React et enfin notre base de données est une PostgreSQL.

# 2-Fonctionnement de notre application

Notre application est composée de plusieurs pages:
une page de connexion, il est possible pour l’utilisateur de s’identifier ou bien de se créer un compte. Cette page est reliée à une table ‘User’ de la base de données grâce à notre API, ce qui permet de vérifier si l’utilisateur à bien un compte.

Une page Identifiant, cette page donne les différentes informations de l’utilisateur (Nom, Prénom, Age, Sexe, Poids, Taille, Nb de sport par semaine…) et il est possible de les modifier en cas de modification de son rythme de sport ou bien de son poids.  
On calcule le nombre de calorie nécessaire par jours selon les informations renseignées par l'individu.  
Grâce à cette page, il est également possible de pouvoir ajouter les différents aliments d’un futur plat ainsi que la quantité des différents aliments. Ce qui a pour but de pouvoir calculer le nombre de calories précis d’un plat ( Attention cliquer sur le bouton "search" mis à votre disposition et non sur Entrer ).


# 3-Lancement Django Rest & React App


Pour lancer notre application web, voici  les différentes commandes à exécuter dans le terminal:

Cette commande va permettre de récupérer le code source de notre projet sur git:
$ git clone https://github.com/vithulaksan/full_stack



Ensuite, il suffit de lancer le container docker que le nous avons créé pour containeriser le projet:

Notre docker-compose contient 3 services (une pour la base de données, une pour le back de notre application et une pour le front de notre application web)

Pour la base de données:
$ docker-compose up -d db 

Pour la partie back (api):
$ docker-compose up -d web 

Pour le front:
$ docker-compose up -d frontend 


Il est également nécessaire d'exécuter un programme python afin d’alimenter notre base de données avec un csv récupéré préalablement sur kaggle:
Vous devez installer pandas et psycopg2 (dans une venv possiblement):
$ pip install pandas
$ pip install psycopg2
$ python full_stack/script.py

Notre API fonctionne sur http://localhost:8000/ .
Et notre application est quant à elle visualisable sur http://localhost:3000/ .


Pour la connexion, l’utilisateur va devoir se créer un compte, il faut faire attention il a des conditions minimum sur le mot de passe :   
8 caractères  
1 chiffre  
1 lettre minuscule  
1 lettre majuscule   

# Equipe  

Naguleswaran Vithulaksan   
Pochon Mathieu  
Morel Marius