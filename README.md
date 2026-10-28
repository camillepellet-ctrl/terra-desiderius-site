# Terra Desiderius

V1 statique, responsive et sans dépendance, pour l’association Terra Desiderius. Cinq pages éditoriales, 17 fiches de participants annoncés, filtres de région et recherche, menu mobile, animations respectant la réduction des mouvements. Aucune modification de Google Sites ou des DNS.

## Démarrer

Node.js 24 recommandé (minimum 22), npm. Aucun secret ni backend requis.

```sh
npm ci --ignore-scripts
npm test
npm run dev
```

Ouvrir le port 4321, chemin `/terra-desiderius-site/`. Le serveur régénère le site à son démarrage ; le relancer après les modifications. `npm run build` produit `dist/`, et `npm run preview` le régénère puis le sert. `PORT` peut modifier le port.

```sh
BASE_PATH=/ SITE_ORIGIN=https://exemple.org npm run build
```

Les valeurs par défaut ciblent l’adresse de projet GitHub Pages, sans configurer le domaine actuel. Node.js génère du HTML/CSS/JS natif ; rien ne s’exécute côté serveur en production. Les polices sont les polices système gratuites Georgia et Arial, sans téléchargement externe. Les photographies autorisées restent à fournir ; tous les emplacements sont explicitement identifiés.

## Fichiers et guides

- `src/content.json` : domaines, événements, réseaux et coordonnées.
- `scripts/build.mjs` : génération et texte éditorial des cinq pages.
- `public/` : styles, interactions et futures images.
- [Modifier les contenus](docs/CONTENUS.md).
- [Publier sur GitHub Pages et préparer une future migration](docs/PUBLICATION.md).
- [Contenus manquants et informations à vérifier](docs/A-VERIFIER.md).

Le workflow `.github/workflows/pages.yml` génère, teste et déploie après un envoi sur `main`, une fois GitHub Pages activé. Le projet livré n’implique pas qu’un déploiement a déjà eu lieu.

## Galerie réutilisable pour Google Sites

Le site statique initial est conservé. La nouvelle galerie autonome se trouve sous `galerie/test/` et `galerie/officielle/` dans `dist`.

- [Installation Google Sites, connexion Sheets et validation officielle](docs/google-sites/INSTALLATION.md).
- [Description des colonnes et gestes de maintenance](docs/google-sites/COLONNES.md).
- [CSV à importer dans votre propre Google Sheets](docs/google-sites/vignerons-modele.csv).

`gallery/component/` contient le composant sans dépendance au site hôte. `gallery/data/preview.json` conserve les 17 participants initiaux. `npm run sync:sheets` importe le CSV public indiqué par `SHEETS_CSV_URL` vers le test uniquement. `gallery/official/` est un snapshot complet, modifiable uniquement lors d’une publication explicitement validée. Le workflow de publication sélectionne le bundle d’un run test déjà réussi ; il ne relit pas une feuille ayant pu changer depuis la validation.
