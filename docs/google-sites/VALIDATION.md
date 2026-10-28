# État des vérifications — 28 octobre 2026

## Réussites locales

- `npm test` : 9 tests réussis, aucun échec. Modèle des 17 participants, CSV avec accents/guillemets/retours à la ligne, refus des URL non HTTPS et des lignes invalides, synchronisation simulée, préservation des fichiers en cas d’échec d’import, suppression/masquage/années multiples et isolation du snapshot officiel.
- `npm run build` : cinq pages initiales conservées, galerie test autonome, page d’attente officielle et modèle CSV générés.
- Chromium piloté par Playwright : recherche instantanée, recherche sans accents, filtres région + appellation combinés, remise à zéro, absence de résultat, pagination 9 puis 17 cartes.
- Éditions : 2026 contient les 17 participants. 2027 est vide avec les données initiales. Une fixture locale vérifie les participations multiples sans publier une participation 2027 non confirmée.
- Pas de débordement horizontal à 320, 390, 768 et 1440 pixels. Inspection visuelle des captures ordinateur et mobile effectuée.
- Axe-core : aucune violation WCAG 2 A/AA et 2.1 AA détectée sur la galerie test mobile. Ce contrôle automatisé ne certifie pas l’accessibilité complète.
- Réduction des animations respectée. Pas d’erreur JavaScript dans les parcours testés.
- Intégration dans un iframe local avec sandbox : chargement et recherche opérationnels. Ce test ne remplace pas une validation dans le Google Sites réel.
- Images : affichage et repli en cas d’image absente testés avec une ressource de recette interceptée, non publiée. Liens externes en nouvel onglet protégés avec noopener/noreferrer. Aucun portrait officiel n’a été reçu ou inventé.
- Erreur de chargement du JSON : message visible et filtres désactivés.
- Les contenus textuels sont insérés comme texte, jamais comme HTML provenant du tableau.

Les outils Playwright et axe ont été installés hors du dépôt, dans `/tmp/terra-browser`, sans ajouter de dépendances à l’application. Les fixtures ne sont pas des données de participants et ne sont pas publiées.

## Synchronisation : distinction essentielle

La chaîne de parsing et d’import CSV est testée avec des réponses HTTP simulées, dont un refus 403 et une réponse HTML invalide. Le workflow de synchronisation vers le test et celui de promotion explicite sont préparés. Aucun Google Sheets utilisateur n’est encore connecté ; aucune synchronisation réelle Google → GitHub Pages n’est donc déclarée validée.

Pour terminer la recette, créer le classeur avec le modèle, publier uniquement l’onglet des vignerons au format CSV et configurer `SHEETS_CSV_URL`. Suivre le scénario de masquage/rétablissement dans `INSTALLATION.md`, puis vérifier le journal Actions et la date affichée par la galerie test. Aucun identifiant de classeur ni URL de feuille utilisateur n’a été inventé.

## Blocages externes

Les requêtes depuis l’environnement vers l’URL GitHub Pages et l’API GitHub retournent encore un refus réseau HTTP 403 du proxy. Le déploiement public et l’état réel de GitHub Pages ne peuvent pas être certifiés ici. L’URL de galerie documentée est une URL cible, à vérifier après succès du workflow.

Aucun Google Sites, domaine ou DNS n’est modifié. La galerie officielle reste volontairement sur une page d’attente, faute de validation explicite d’un run test. Les opérations de publication officielle ne sont pas lancées.

## Fiches détaillées enrichies — vérification du 28 octobre 2026

- 11 tests Node réussis : compatibilité avec les dix colonnes historiques, acceptation des seules colonnes indispensables, conservation des neuf nouveaux champs et rejet des e-mails, téléphones ou liens mal formés.
- Chromium/Playwright : ouverture des fiches des participants initiaux, champs absents masqués, fermeture par les deux boutons et Échap, restauration du focus, retour navigateur, conservation de la recherche et des filtres.
- Aucun débordement à 320, 390, 768 et 1440 pixels, galerie et fiche. Inspection visuelle des captures ordinateur et mobile effectuée.
- Une fixture locale, non publiée, vérifie photo agrandie, alternative, adresse multiligne, nom du vigneron, liens `tel:`/`mailto:`, site et trois réseaux sociaux. Le texte HTML est affiché comme texte, jamais exécuté.
- Les liens externes ouvrent un nouvel onglet avec `noopener noreferrer`. Les coordonnées invalides sont également omises côté navigateur si une donnée incorrecte contourne l’import.
- Axe-core : aucune violation A/AA détectée sur la fiche enrichie aux largeurs 320, 390 et 1440 pixels, sur la fiche minimale et sur la galerie. Les animations respectent la préférence de réduction.
- Ouverture et retour testés dans une iframe locale avec sandbox. Les appels réels et l’ouverture d’un logiciel de messagerie dépendent de l’appareil et doivent être vérifiés dans la copie Google Sites publiée.
- Un problème de carte recréée lors du passage du champ de recherche au bouton a été reproduit et corrigé : la recherche réagit à `input`, les sélecteurs à `change`.
- Les 17 données initiales sont conservées sans coordonnées inventées. Le dossier `gallery/official` n’a pas été modifié ; aucune promotion officielle n’est exécutée.

L’accès depuis l’environnement à GitHub Pages et à l’API Actions demeure refusé par le proxy (HTTP 403). La nouvelle version est vérifiée localement ; le déploiement distant et la synchronisation de la feuille utilisateur restent à confirmer par le workflow réel. Les nouvelles colonnes n’ont pas été ajoutées directement à la feuille Google : le guide explique comment les ajouter sans écraser les données existantes.
