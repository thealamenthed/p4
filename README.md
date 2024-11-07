# Projet GameOn

## Table des matières
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Instructions pour le développement](#instructions-pour-le-développement)
4. [Issues et Tâches](#issues-et-tâches)
5. [Maquette](#maquette)

---

### Introduction
Ce projet a pour objectif de développer une application web en utilisant uniquement du **CSS personnalisé** et du **JavaScript Vanilla**, sans librairies supplémentaires (comme jQuery ou Bootstrap).

### Installation
1. Forkez ce repo ;
2. Il est conseillé d'utiliser VisualStudio Code et vous pouvez utiliser Docker, mais ce n'est pas obligatoire ;
3. Il n'y a aucune dépendance ;
4. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.

### Instructions pour le développement
- Ce projet doit être développé sans librairies externes. Utilisez uniquement du **JavaScript Vanilla** et du **CSS personnalisé**.
- Évitez l'utilisation de frameworks ou librairies de styles comme Bootstrap.

### Issues et Tâches
Voici les principales issues et tâches associées au projet : [Issues sur GitHub](https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/issues) 

#### TODO 1 : Fermer la modale
- Ajouter la fonctionnalité de fermeture de la modale au bouton "X".

#### TODO 2 : Implémenter les entrées du formulaire
1. Relier les labels aux champs d'entrée dans le HTML en utilisant les attributs `for` et `id` pour une meilleure accessibilité.
2. Implémenter la validation du formulaire en **JavaScript pur** afin d'assurer que :
   - Le formulaire est valide lorsque l'utilisateur clique sur "Submit".
   - Les données sont correctement saisies selon les critères suivants :
     - **Prénom** : minimum 2 caractères et non vide.
     - **Nom** : minimum 2 caractères et non vide.
     - **Adresse électronique** : format valide.
     - **Nombre de concours** : valeur numérique.
     - **Bouton radio** : au moins une option sélectionnée.
     - **Conditions générales** : case cochée (l'autre case est facultative).
   - Conserver les données du formulaire pour ne pas effacer les champs qui ne passent pas la validation.

#### TODO 3 : Ajouter validation et messages d'erreur
- Des messages d'erreur spécifiques doivent apparaître sous les champs incorrects :
  - Par exemple :
    - "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    - "Vous devez choisir une option."
    - "Vous devez vérifier que vous acceptez les termes et conditions."
    - "Vous devez entrer votre date de naissance."

### Maquette
[Maquette](https://www.figma.com/file/prxFGnSUoEhk6PTcMaJQim/UI-Design-GameOn-EN)

[![GameOn](https://user.oc-static.com/upload/2020/08/14/15974189716945_image2.png "GameOn")](https://user.oc-static.com/upload/2020/08/14/15974189716945_image2.png "GameOn")
