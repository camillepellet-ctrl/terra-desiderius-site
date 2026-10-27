# Publication gratuite sur GitHub Pages

Le site actuel Google Sites et le DNS ne sont pas modifiés. Aucun fichier CNAME n’est fourni.

La V1 de démonstration contient une balise `noindex, nofollow` pour demander aux moteurs de ne pas l’indexer. La retirer dans `scripts/build.mjs` uniquement lors de la mise en ligne définitive. Cela ne restreint pas l’accès public.

## Adresse temporaire

Le dépôt est `https://github.com/camillepellet-ctrl/terra-desiderius-site`. Après publication réussie, l’adresse prévue est `https://camillepellet-ctrl.github.io/terra-desiderius-site/`. Cette adresse n’est pas une preuve de déploiement : consulter le résultat de l’action GitHub Pages.

1. Avant publication publique, traiter la liste `A-VERIFIER.md`, particulièrement les mentions légales et les droits sur les contenus. La V1 utilise uniquement des emplacements photo.
2. Envoyer le projet sur la branche `main` du dépôt indépendant.
3. Dans **Settings → Pages → Build and deployment**, choisir **GitHub Actions**. Pour garantir l’hébergement gratuit, utiliser un dépôt public avec l’offre GitHub gratuite. Ne pas saisir de domaine personnalisé.
4. Dans **Actions**, exécuter le workflow ou envoyer un changement sur `main`. La génération est testée avant l’envoi de l’artefact `dist` à Pages.
5. Après succès, vérifier les cinq pages, les liens sociaux, les filtres et l’affichage mobile sur l’adresse temporaire.

Aucune installation côté serveur n’est nécessaire. Node.js sert uniquement à produire les fichiers statiques. Le projet ne charge ni police externe, ni traceur, ni service payant. Le fichier robots.txt produit dans le sous-chemin est livré pour la future migration : les moteurs ne consultent que `/robots.txt` à la racine de l’hôte. Sur une adresse de projet GitHub Pages, le contrôle du robots.txt racine dépend du site utilisateur du compte. Le sitemap peut être soumis directement une fois le site accessible.

## Domaine actuel : ultérieurement seulement

Ne rien modifier avant accord explicite et validation de la nouvelle version. Pour préparer la migration, mettre `BASE_PATH` à `/` et `SITE_ORIGIN` à `https://www.terra-desiderius.com` (ou à l’hôte canonique effectivement choisi) dans le workflow. Vérifier les liens, le sitemap et les URL canoniques avec une génération locale. Prévoir les redirections des anciennes URL, notamment `/salon-des-vins-2026`, vers leur nouvel équivalent ; GitHub Pages ne gère pas les redirections serveur, prévoir des pages statiques de transition si nécessaire.

À cette étape future, consulter la documentation officielle GitHub Pages pour vérifier la propriété du domaine, définir le domaine personnalisé et les enregistrements DNS requis, puis activer HTTPS. Ne pas remplacer les enregistrements mail. Conserver Google Sites disponible jusqu’à la validation complète de la bascule et prévoir un retour arrière. Aucun de ces changements n’a été effectué pendant la création du projet.
