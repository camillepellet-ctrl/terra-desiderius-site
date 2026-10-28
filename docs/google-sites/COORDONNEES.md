# Corriger les coordonnées de Vins Krick et des autres domaines

## Feuille à compléter

https://docs.google.com/spreadsheets/d/1q7nSY_6QqdtTF0TELxhjIBo2hpZYUwsZwEUWO57M9D4/edit

Modifier l’onglet qui a été publié dans le lien CSV déjà configuré, sans recréer le classeur ni écraser les informations existantes. Les colonnes sont facultatives, mais leur intitulé doit être exact. Les nouvelles colonnes peuvent être ajoutées à droite des colonnes actuelles.

| En-tête exact | Information | Règle |
| --- | --- | --- |
| `adresse` | Adresse postale complète, code postal inclus | Texte vérifié, retours à la ligne possibles |
| `commune` | Commune | Facultatif si déjà incluse dans l’adresse |
| `departement` | Département | Nom ou numéro, format texte pour conserver les zéros |
| `telephone` | Téléphone public du domaine | Cellule en texte brut, conserver le zéro ou le `+` |
| `email` | E-mail public du domaine | Une seule adresse, sans `mailto:` ni objet |
| `site_web` | Site officiel | URL HTTPS complète |
| `google_maps` | Lien Google Maps vérifié | Facultatif : sans ce lien, une recherche Maps est construite uniquement si `adresse` est renseignée |
| `instagram` | Compte officiel Instagram | URL HTTPS complète |
| `facebook` | Page officielle Facebook | URL HTTPS complète |
| `autres_reseaux` | Autres comptes publics | `Nom=https://adresse`, plusieurs comptes séparés par ` | ` |

Aucun compte social n’est déduit du nom du domaine. Une adresse n’est pas recherchée automatiquement sur Internet. Le lien Maps calculé est une recherche à partir du texte fourni, pas une garantie de position exacte. Un lien Maps explicite doit utiliser google.com/maps, maps.google.com, maps.app.goo.gl ou goo.gl/maps.

## Ce qui est connu pour Vins Krick

Dans le jeu initial conservé dans le dépôt : nom « Vins Krick », région et appellation « Alsace », note « Anciennement Domaine Ziegler Fugler », participation annoncée 2026. Aucune adresse postale, commune, département, téléphone, adresse e-mail, URL de site, lien Maps ou réseau social n’est renseigné.

Ce constat ne décrit pas forcément la feuille actuellement publiée : les requêtes vers son CSV et le JSON GitHub Pages ont été refusées au niveau du proxy réseau avant accès aux services (CONNECT HTTP 403). La présence des colonnes et le contenu actuel des cellules du véritable Google Sheets ne sont pas vérifiés. Il serait incorrect d’affirmer qu’ils sont absents ou vides sur la base du jeu initial.

## Vérifier toute la chaîne

1. Ajouter ou vérifier les en-têtes ci-dessus dans l’onglet publié.
2. Sur la ligne de Vins Krick, conserver son identifiant stable et saisir uniquement les coordonnées confirmées par le domaine.
3. Relancer **Build and deploy GitHub Pages** dans GitHub Actions (ou attendre la synchronisation programmée). Le journal affiche désormais les en-têtes réellement reçus du CSV.
4. Attendre que le workflow entier soit vert. Un import invalide ne remplace pas le déploiement précédent.
5. Ouvrir le diagnostic lisible : https://camillepellet-ctrl.github.io/terra-desiderius-site/galerie/test/diagnostic.html. Il indique pour chaque champ de chaque domaine : « renseigné », « colonne absente du CSV », « colonne présente, cellule vide » ou « source non vérifiée ». L’heure de synchronisation permet de contrôler la fraîcheur du rapport.
6. Le rapport technique correspondant est `galerie/test/contact-audit.json`. Les en-têtes sont également conservés sous `sourceColumns` dans `galerie/test/data.json`, avec les valeurs importées dans `growers`.
7. Consulter la fiche : https://camillepellet-ctrl.github.io/terra-desiderius-site/galerie/test/?edition=2026#domaine=domaine-01. Ce lien utilise l’identifiant initial ; si la feuille a un autre identifiant pour Vins Krick, rechercher ce nom dans la galerie pour ouvrir la bonne fiche.

Le diagnostic et la fiche proviennent du même snapshot déployé. Ne pas confondre un diagnostic issu du jeu initial et un diagnostic issu d’un CSV réellement importé.

## Comportement de la rubrique

Adresse, téléphone, e-mail, site, Maps et réseaux sont regroupés sous « Contacter le domaine », visibles sans menu supplémentaire. Seul chaque champ manquant est masqué. Dans le test, une absence totale de coordonnées affiche un message discret « Coordonnées à compléter ». Si les métadonnées d’import sont disponibles, il précise les colonnes absentes et les cellules sans valeur exploitable. Les anciens snapshots sans métadonnées n’affichent pas de diagnostic inventé.

Aucun Google Sites, fichier officiel ou DNS n’est modifié. Les données fictives utilisées pour la démonstration sont servies uniquement dans un environnement local séparé hors dépôt, et ne sont jamais copiées dans `dist` ou dans la galerie publique. Seules des captures clairement étiquetées peuvent être partagées pour examen visuel.
