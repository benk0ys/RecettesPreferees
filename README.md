# 🍲 Mes Recettes Préférées

Ce projet full-stack (Angular + NestJS) permet de consulter et d'ajouter des recettes simples, avec une authentification via **Auth0**.

---

## 🔧 Stack utilisée

- **Backend**: [NestJS](https://nestjs.com/)
- **Frontend**: [Angular](https://angular.io/)
- **Authentification**: [Auth0](https://auth0.com/)
- **Stockage**: En mémoire (tableau `Recipe[]`)

---

## 🧠 Objectif

Créer une application permettant :

- De **consulter** une liste de recettes (accès public)
- D’**ajouter une recette** (authentification requise via Auth0)
- Authentification simplifiée via JWT Auth0

---

Une fonctionnalité est malheureusement non fonctionnelle, l'ajout d'une recette, mais tout le reste fonctionne

Voici un screen de la page d'accueil (si je click sur ajouter une recette ca me redirige vers la page de connection): 
<img width="1914" height="944" alt="image" src="https://github.com/user-attachments/assets/e8fa04ee-4863-4746-9048-f7d0f2fd2b63" />

La je peux me connecter:
<img width="1914" height="944" alt="image" src="https://github.com/user-attachments/assets/c1c1d7d6-0988-4ede-9fe6-f9397102ebb9" />

La je suis connecté:
<img width="1914" height="944" alt="image" src="https://github.com/user-attachments/assets/0e14ec18-7645-4876-8599-beafa23c65be" />

Voici l'interface pour ajouter une recette:
<img width="1914" height="944" alt="image" src="https://github.com/user-attachments/assets/09849c92-7793-478d-adef-9b9a6fc6d3d3" />
