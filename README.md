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
