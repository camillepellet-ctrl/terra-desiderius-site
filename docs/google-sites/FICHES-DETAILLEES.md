# Compléter les fiches des domaines dans Google Sheets

La feuille actuelle reste compatible : les dix anciennes colonnes continuent de fonctionner. Ne pas réimporter le modèle par-dessus votre feuille si vous y avez déjà ajouté des informations. Aucune coordonnée des 17 domaines n’a été inventée ou préremplie.

## 1. Ajouter les neuf nouvelles colonnes

Dans l’onglet publié contenant les vignerons, ajoutez à droite de `photo_alt` ces intitulés exacts, un par colonne :

```text
vigneron	commune	departement	adresse	telephone	email	instagram	facebook	autres_reseaux
```

Vous pouvez copier cette ligne et la coller dans la première cellule libre de la ligne 1 : les tabulations séparent les colonnes. Leur ordre n’est pas obligatoire. Les intitulés doivent rester sans accents, sans espace et sans doublon.

Toutes ces colonnes sont facultatives. Vous pouvez en ajouter seulement certaines. Les données non renseignées n’apparaissent pas dans la fiche : aucun bouton Instagram, adresse ou téléphone vide. Les seules colonnes indispensables sont `id`, `nom`, `annees` et `afficher`. Si une photo est fournie, son texte alternatif reste requis pour l’accessibilité.

## 2. Remplir uniquement les informations vérifiées

| Colonne | Quoi saisir |
| --- | --- |
| `vigneron` | Nom de la personne ou des personnes, validé par le domaine. |
| `commune` | Commune du domaine. |
| `departement` | Nom ou numéro du département. Passer la cellule en texte brut pour conserver un éventuel zéro initial. |
| `adresse` | Adresse postale complète, code postal compris si connu. Les retours à la ligne sont acceptés. |
| `telephone` | Numéro professionnel public, de préférence au format international. **Format → Nombre → Texte brut** avant saisie afin de conserver le `+` et le zéro initial. Les espaces, points, tirets et parenthèses sont acceptés ; les lettres et extensions ne le sont pas. |
| `email` | Une seule adresse professionnelle publique, sans préfixe `mailto:`, sans espaces, sans objet de message. |
| `instagram` | URL complète et vérifiée du compte officiel, commençant par `https://`. |
| `facebook` | URL complète et vérifiée de la page officielle, commençant par `https://`. |
| `autres_reseaux` | Format : `Nom=https://adresse`. Séparer plusieurs réseaux par ` | `. Le premier signe `=` sépare le nom du lien ; les paramètres de l’URL peuvent contenir d’autres `=`. |

Exemple **de format uniquement**, à ne pas copier comme coordonnée d’un domaine : `LinkedIn=https://www.linkedin.com/company/exemple/ | Autre=https://example.org/profil`.

Les colonnes existantes conservent leur rôle : `nom` est le nom du domaine, `regions` et `appellations` utilisent le séparateur `|`, `presentation` contient la présentation du domaine, `photo_url` son image principale autorisée, `photo_alt` sa description factuelle et `site_web` son adresse HTTPS officielle. `annees` et `afficher` gardent les règles précédentes.

Ne publier que les coordonnées destinées au public, avec l’accord du domaine. La feuille publiée est publique, y compris les lignes masquées par `afficher=non`.

## 3. Vérifier l’actualisation du test

1. Vérifiez que la republication automatique du même onglet est activée dans Google Sheets. Le lien CSV déjà configuré reste valable si vous ajoutez les colonnes dans cet onglet.
2. Attendez la synchronisation programmée ou lancez **Build and deploy GitHub Pages → Run workflow** dans GitHub Actions.
3. Si une coordonnée est mal formée, l’import échoue avec le numéro de ligne et le champ concerné. La précédente version publique est conservée. Corrigez la cellule, puis relancez la synchronisation.
4. Ouvrez la galerie test et recherchez le domaine modifié. Cliquez sur **Découvrir le domaine**. Contrôlez les coordonnées et les liens sur ordinateur et téléphone.
5. Utilisez **Retour aux domaines** en haut ou en bas de la fiche, ou la touche **Échap**. La recherche et les filtres restent conservés. Le bouton de la carte retrouve le focus au clavier.

Les contrôles portent sur la syntaxe des liens et coordonnées : ils ne prouvent pas que le compte social existe, qu’un numéro est attribué ou qu’une boîte mail reçoit les messages. Vérifier ces informations auprès du domaine.

## Fiche détaillée et intégration

La fiche est une vue dédiée dans le même cadre, sans fenêtre modale ni modification de la page Google Sites. Elle présente une photographie agrandie, les informations disponibles et les actions de contact. Les liens externes s’ouvrent dans un nouvel onglet. Les liens téléphone/e-mail sollicitent l’application choisie sur l’appareil ; le comportement dépend de cet appareil et des restrictions de l’intégration Google Sites, à contrôler sur la copie publiée.

Le lien de galerie test ne change pas :
https://camillepellet-ctrl.github.io/terra-desiderius-site/galerie/test/?edition=2026

La fiche peut aussi être retrouvée directement par son fragment, par exemple `#domaine=domaine-01` pour l’identifiant correspondant. Le lien n’inclut aucune donnée de contact et ne dépend pas de l’adresse du Google Sites qui l’héberge.

Aucune version officielle n’est modifiée par cet enrichissement. Le workflow de publication manuelle demeure nécessaire après votre validation.
