# Galerie Terra Desiderius — Google Sites et Google Sheets

## Ce qui est livré et ce qui reste à connecter

La galerie autonome utilise les 17 participants annoncés pour 2026. Les photos et sites web inconnus sont laissés vides. La version test est générée à partir d’un CSV Google Sheets lorsqu’il est configuré, sinon du jeu initial. Aucun lien vers le Google Sites Test ou le domaine officiel n’est inscrit dans le composant.

Le Google Sheets doit être créé dans votre compte : cet environnement n’a pas de connecteur permettant de le faire pour vous. Le modèle est fourni dans ce dossier et publié avec le site. La synchronisation réelle ne peut être validée qu’après création et publication de cette feuille. Aucun secret n’est nécessaire.

Pour enrichir les fiches avec les coordonnées, consulter [le guide des nouvelles colonnes](FICHES-DETAILLEES.md). Ne pas écraser une feuille déjà complétée avec le modèle.

## 1. Créer votre tableau, une seule fois

1. Connectez-vous à votre compte Google et ouvrez https://sheets.google.com/create.
2. Nommez le classeur « Terra Desiderius — Vignerons » et son premier onglet « Vignerons ».
3. Téléchargez le modèle depuis https://camillepellet-ctrl.github.io/terra-desiderius-site/modeles/vignerons-modele.csv (après déploiement). Si Pages n’est pas actif, ouvrez `docs/google-sites/vignerons-modele.csv` sur GitHub puis utilisez **Download raw file**.
4. Dans Sheets, **Fichier → Importer → Importer un fichier**, choisissez le CSV. Remplacez la feuille actuelle, choisissez le séparateur **virgule** et désactivez, si proposé, la conversion automatique des textes en nombres/dates/formules. Vérifiez les accents et les vingt colonnes du modèle enrichi. Les 17 domaines sont déjà renseignés.
5. Figez la première ligne. Ne renommez pas les en-têtes. Consultez `COLONNES.md` pour les modifications.
6. **Fichier → Partager → Publier sur le Web** : sélectionnez seulement l’onglet « Vignerons », format **Valeurs séparées par des virgules (.csv)**. Activez la republication automatique si l’option est proposée, puis publiez.
7. Copiez le lien publié : il commence par `https://docs.google.com/spreadsheets/` et renvoie un CSV, pas une page d’édition. Ne publiez aucun onglet privé ni coordonnées personnelles. Un compte Google Workspace peut interdire cette publication ; dans ce cas, demander à son administrateur ou utiliser un compte autorisant les données publiques.
8. Conservez l’URL d’édition du classeur pour vos mises à jour quotidiennes. Ne donnez pas de droit d’édition aux visiteurs.

## Feuille transmise par l’association

Le classeur transmis est https://docs.google.com/spreadsheets/d/1q7nSY_6QqdtTF0TELxhjIBo2hpZYUwsZwEUWO57M9D4/edit.
Le lien de publication transmis a été converti en source CSV par défaut du workflow :

https://docs.google.com/spreadsheets/d/e/2PACX-1vS2AH9tvuY23x1UOmhhp-Y2tuJvEbl2BYe4eaRwKBzdsFLag89qg14DA4jyR6hyTAwFnqFUTfAH614_/pub?output=csv

Le lien `/pubhtml` sert à la lecture dans un navigateur ; `/pub?output=csv` sert à la synchronisation. Le contenu et les en-têtes restent à vérifier après un import réel. Si plusieurs onglets sont publiés, ajouter le paramètre `gid` de l’onglet des vignerons pour le sélectionner explicitement. La variable GitHub `SHEETS_CSV_URL`, si elle existe, reste prioritaire ; elle permet de sélectionner explicitement un autre onglet ou un lien CSV publié.

L’accès depuis l’environnement a échoué au niveau du proxy réseau (CONNECT HTTP 403), avant réponse de Google. Le contenu et les droits de partage du classeur ne sont donc pas vérifiés. Ce refus ne prouve pas que la feuille est privée. Une erreur d’import interrompt le déploiement et conserve la précédente galerie publique ; aucune donnée officielle n’est modifiée.

Pour une source durable et limitée à l’onglet voulu, utiliser **Fichier → Partager → Publier sur le Web**, sélectionner uniquement l’onglet des vignerons au format CSV, puis renseigner son URL publiée dans `SHEETS_CSV_URL`. Ne pas publier d’onglets privés.

## 2. Connecter Sheets à la galerie test

1. Dans le dépôt GitHub, ouvrez **Settings → Secrets and variables → Actions → Variables → New repository variable**.
2. Nom : `SHEETS_CSV_URL`. Valeur : le lien CSV publié, sans guillemets. C’est une URL publique, pas un mot de passe.
3. Dans **Actions**, choisissez **Build and deploy GitHub Pages**, puis **Run workflow**, branche `main`.
4. Le journal « Synchroniser la feuille » doit annoncer le nombre de lignes importées. En cas d’erreur de colonne ou de lien, le workflow s’arrête et le précédent déploiement reste en place. Ne pas conclure à une mise à jour réussie si l’action est rouge.
5. Si nécessaire, dans **Settings → Pages**, sélectionner **GitHub Actions** comme source. Ne pas configurer de domaine personnalisé. L’offre gratuite GitHub Pages requiert notamment un dépôt public ; ne pas souscrire d’offre payante.
6. Après succès du workflow entier, ouvrir la galerie test, vérifier les données et lire sa date de synchronisation. Noter le numéro de run affiché dans le résumé du workflow pour une éventuelle validation officielle.

Le workflow est également programmé toutes les deux heures. GitHub et la republication Google peuvent ajouter un délai. Les tâches planifiées peuvent être désactivées par GitHub après une période d’inactivité ; le lancement manuel reste disponible. Les visiteurs ne se connectent jamais directement à Google Sheets : ils consultent le dernier snapshot déployé. Une URL publiée ne sécurise pas des données privées : toutes les données du CSV sont publiques, même les lignes masquées dans la galerie.

## 3. Intégrer dans Google Sites Test

1. Ouvrez l’éditeur de votre copie de travail, puis la page souhaitée.
2. **Insérer → Intégrer → Par URL**.
3. Collez : `https://camillepellet-ctrl.github.io/terra-desiderius-site/galerie/test/?edition=2026`.
4. Insérez le cadre et étirez-le sur la largeur disponible. Une hauteur de départ de 1 300 à 1 600 px peut servir de point de départ ; elle doit être ajustée avec la prévisualisation mobile. Le bouton « Afficher davantage » augmente la longueur du contenu : Google Sites n’adapte pas automatiquement la hauteur de son cadre.
5. Vérifiez les modes ordinateur et téléphone dans l’aperçu Google Sites. Une barre de défilement interne peut subsister selon la hauteur choisie.
6. Publiez uniquement la copie de travail. Testez la recherche, les deux filtres, les liens de domaines et la navigation clavier sur la page publiée.

Variante par code d’intégration, si nécessaire :

```html
<iframe
  src="https://camillepellet-ctrl.github.io/terra-desiderius-site/galerie/test/?edition=2026"
  title="Les vignerons du P’tit Salon des Vins 2026"
  width="100%" height="1500" style="border:0" loading="lazy">
</iframe>
```

Google Sites ajoute son propre cadre d’intégration : privilégier l’intégration directe par URL. Ne pas copier le JavaScript dans un bloc de texte.

## 4. Valider et figer une version officielle

La version officielle est initialement une page d’attente. Les synchronisations et modifications du composant test ne la mettent jamais à jour.

1. Après vérification de la galerie test, ouvrez le run **Build and deploy GitHub Pages** qui l’a produite. Il doit être entièrement vert. Dans son résumé, relevez le numéro de version à valider. Vérifiez qu’il correspond bien à la version examinée ; une synchronisation plus récente peut avoir remplacé le test depuis.
2. Dans **Actions**, sélectionnez **Publier la galerie officielle après validation**, puis **Run workflow**, branche `main`.
3. Saisissez ce numéro dans `version_test` et **PUBLIER** dans `confirmation`.
4. Le workflow télécharge le bundle exact conservé pour ce run, sans relire Google Sheets. Il fige HTML, styles, JavaScript et données dans `gallery/official`, puis déploie. Une validation de plus de 30 jours peut ne plus être disponible : relancer la génération test et valider à nouveau.
5. Vérifiez que le workflow entier est vert. Consultez `https://camillepellet-ctrl.github.io/terra-desiderius-site/galerie/officielle/?edition=2026` et contrôlez les informations.
6. Le compte exécutant l’action doit avoir le droit de lancer un workflow et le bot doit pouvoir écrire sur `main`. Une protection de branche peut bloquer cette écriture : dans ce cas, faire passer le snapshot par une pull request validée, sans supprimer la protection. Ne pas annoncer une publication si le workflow échoue.

Seules les images sont des ressources distantes : les fichiers image doivent avoir des URL stables et immuables (nouveau fichier pour une nouvelle photo). Si le contenu d’une photo distante est remplacé sous la même URL, il peut aussi changer dans une version officielle figée. Pour une isolation complète des médias, conserver les photos autorisées dans des fichiers versionnés du dépôt et ne jamais les écraser. Les sites des domaines sont naturellement externes.

## 5. Reproduire sur le véritable Google Sites — après votre accord

1. Confirmez que la galerie officielle a été validée et publiée.
2. Ouvrez vous-même l’éditeur du véritable Google Sites. Les opérations ne nécessitent aucun changement de domaine ou de DNS.
3. Sur la page souhaitée : **Insérer → Intégrer → Par URL**.
4. Collez `https://camillepellet-ctrl.github.io/terra-desiderius-site/galerie/officielle/?edition=2026`.
5. Réglez largeur et hauteur comme sur la copie, vérifiez les aperçus ordinateur et téléphone et les liens.
6. Publiez le véritable Google Sites seulement lorsque vous l’avez décidé.

Ne jamais intégrer l’URL `/test/` sur le site officiel : elle suit les modifications de la feuille. L’URL `/officielle/` suit uniquement les versions explicitement validées. Une nouvelle publication officielle affectera toutes les pages qui utilisent cette URL officielle ; elle ne change ni le texte ni l’agencement natif Google Sites.

## 6. Préparer 2027 et les éditions suivantes

Conserver les lignes des domaines et leurs identifiants. Dans `annees`, ajouter `2027` à côté de `2026`, séparé par `|`, uniquement après confirmation de participation. Un nouveau domaine peut n’avoir que `2027`. Les filtres se calculent selon l’édition sélectionnée. Aucun participant n’est supposé présent une année non renseignée.

Pour intégrer l’édition 2027, changer seulement `?edition=2026` en `?edition=2027`. Si aucune participation n’est renseignée, le composant affiche un état vide ; il ne réutilise pas implicitement la liste 2026.

`afficher=non` masque un domaine pour toutes ses éditions. Pour le retirer uniquement de 2027, enlever seulement `2027` de `annees`. Supprimer sa ligne le retire de toutes les éditions lors de la prochaine synchronisation test. L’historique officiel reste figé jusqu’à validation.

## 7. Recette de synchronisation réelle à réaliser avec votre feuille

1. Masquez un participant avec `afficher=non`, lancez la synchronisation test et vérifiez que le compteur passe de 17 à 16. La version officielle doit rester identique.
2. Remettez `oui`, relancez et vérifiez le retour à 17.
3. Pour tester l’édition 2027 sans annoncer une participation non confirmée, utilisez temporairement une seconde feuille de recette publiée, jamais promue officielle. Ajoutez une année à une ligne existante, synchronisez ce CSV et vérifiez le sélecteur. Revenez ensuite au CSV de production.
4. Testez une présentation et une photo autorisées, puis vérifiez leurs mises à jour dans le test uniquement.
5. Validez ensuite un numéro de run précis ; confirmez que les informations officielles correspondent exactement. Conservez ce numéro pour la traçabilité.

## Accès et référencement

Le test et la version officielle hébergée sont publiquement accessibles et comportent `noindex, nofollow` ; cela évite de proposer ces cadres autonomes à l’indexation mais ne constitue pas un contrôle d’accès. Garder les informations essentielles dans les blocs natifs Google Sites pour le référencement. Aucun abonnement, backend, publicité, police distante ou outil de suivi n’est nécessaire.
