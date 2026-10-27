# Mettre à jour le site

Les contenus sont centralisés dans `src/content.json`. Le texte éditorial des cinq pages se trouve dans `scripts/build.mjs`, chaque entrée de `pages` correspondant à une page. Aucun compte de service ni abonnement n’est nécessaire.

## Domaines

Ajouter un objet dans `growers` (respecter les virgules JSON) :

```json
{
  "name": "Nom officiel du domaine",
  "region": "Région",
  "appellations": "Appellation(s)",
  "description": "Présentation validée par le domaine.",
  "website": "https://site-officiel.example",
  "image": "images/portrait-domaine.webp",
  "imageAlt": "Prénom et nom, vigneron du domaine, au salon"
}
```

Ce modèle est illustratif : ne pas publier ce domaine fictif. Le nombre affiché de participants et les filtres se recalculent automatiquement. Le nombre attendu du salon se règle dans `salon.expected`. Les données `salon` alimentent les informations pratiques ; les paragraphes éditoriaux contenant l’année ou la liste provisoire doivent également être relus dans `scripts/build.mjs` à chaque nouvelle édition.

## Photos

Déposer les fichiers dans `public/images/`, en conservant une copie des originaux hors du site. Utiliser WebP ou AVIF, idéalement moins de 200 Ko par portrait et de 400 Ko pour une grande photo. N’utiliser que des images autorisées pour ce site, avec accord des personnes reconnaissables lorsque nécessaire. Tenir un registre des crédits et des autorisations.

Les champs `image` et `imageAlt` fonctionnent pour les domaines et événements. Pour les images éditoriales, les appels `photo('Légende', 'classe', 'images/fichier.webp', 'Description accessible')` dans `scripts/build.mjs` permettent de remplacer les emplacements sans changer la mise en page. Pour le premier visuel visible à l’ouverture, utiliser `loading="eager"` et `fetchpriority="high"` lors de l’intégration définitive. Ne pas inventer des légendes ou identités.

## Événements et liens sociaux

Dans `events`, renseigner `date` au format `AAAA-MM-JJ`, `end` pour un événement de plusieurs jours, `display` pour la date lisible, `place`, `description`, et éventuellement `facebook` avec l’URL vérifiée. Une date `null` classe l’événement dans les rendez-vous à annoncer. Les dates passées sont archivées automatiquement lors de la prochaine génération ; relancer un déploiement après l’événement. `href` est un chemin interne relatif, sans slash initial.

Les liens Instagram, Facebook et l’adresse de contact sont les premières propriétés du fichier. Valider les liens externes avant ajout ; utiliser exclusivement des URL HTTPS (ou l’adresse mail dans le champ email).

## Vérifier une modification

1. Modifier le JSON ou le texte, puis `npm test`.
2. Lancer `npm run dev` et ouvrir le chemin `/terra-desiderius-site/` sur le port 4321.
3. Vérifier ordinateur et téléphone, ainsi que la navigation clavier.
4. Envoyer les changements sur GitHub après relecture. Un envoi sur `main` déclenche le déploiement dès lors que Pages est activé.

GitHub permet de modifier ces fichiers dans son éditeur web. Pour une mise à jour importante, créer une branche et une pull request pour relire les changements avant de les fusionner.
