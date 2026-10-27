# Validation de la V1 — 27 octobre 2026

- Installation reproductible `npm ci --ignore-scripts --cache /tmp/terra-npm-cache` : réussie, aucune dépendance applicative.
- `npm test` : 3 tests exécutés, 3 réussis. Pages et métadonnées, résolution des liens internes, sélection provisoire et sitemap.
- `npm run build` : cinq pages générées ; environ 108 Ko avant les photographies.
- Serveur de développement lancé sur le port 4321, requêtes réelles dans Chromium : HTTP 200 sur les cinq pages.
- Contrôles Playwright/Chromium aux largeurs 320, 390, 768 et 1440 pixels : aucun débordement horizontal sur les cinq pages.
- Filtres de région, recherche insensible aux accents, état vide et réinitialisation : réussis.
- Menu mobile, attribut aria-expanded, fermeture par Échap et retour de focus : réussis.
- Préférence reduced-motion : défilement automatique désactivé ; animations neutralisées par CSS.
- Aucune erreur JavaScript ni ressource HTTP en échec dans les parcours testés. Aucune ressource distante chargée par le site.
- Axe-core via Playwright, règles WCAG 2 A/AA et 2.1 AA, viewport 390 × 844 : aucune violation détectée sur les cinq pages après correction de l’opacité d’animation. Ce contrôle automatisé ne constitue pas une certification d’accessibilité.
- Inspection visuelle des captures de l’accueil en 1440 et 390 pixels : effectuée.

Les outils navigateur ont été installés dans `/tmp/terra-browser`, hors du projet, pour éviter d’ajouter des dépendances à l’application. Les contrôles de performance sont locaux et ne constituent pas un score Lighthouse ni des mesures réelles de visiteurs. Refaire les contrôles après intégration des images et sur l’hébergement définitif.

## Limites

L’ancien site n’a pas pu être exploré : HTTP 403 sur les deux URL demandées, dont un refus CONNECT du proxy. La configuration d’accès a été enregistrée, mais son activation n’est pas prouvée. Aucun déploiement GitHub Pages, push Git ou changement DNS n’a été effectué. Les nouveaux fichiers et modifications restent dans le checkout de travail pour revue. Voir `A-VERIFIER.md` avant publication.
