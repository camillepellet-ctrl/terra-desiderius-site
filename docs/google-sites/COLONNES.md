# Modèle Google Sheets — une ligne par domaine

Le fichier `vignerons-modele.csv` contient les 17 participants fournis, sans photographie, site web ou présentation inventés. Le modèle est importable tel quel. Le modèle est désormais enrichi de neuf colonnes facultatives ; voir [le guide des fiches détaillées](FICHES-DETAILLEES.md). Les feuilles utilisant les dix colonnes initiales restent compatibles. Ne pas ajouter les exemples pédagogiques ci-dessous comme de nouveaux participants.

| Colonne exacte | Obligatoire | Contenu et exemple de format |
| --- | --- | --- |
| `id` | Oui | Identifiant unique et stable : `domaine-01`. Minuscules, chiffres, tirets seulement. Ne pas le changer lors d’un changement de nom. Pour un nouveau domaine, prendre un nouvel identifiant inutilisé. |
| `nom` | Oui | Nom officiel fourni ou validé, par exemple `Vins Krick`. |
| `regions` | Non | Une ou plusieurs régions séparées par `|`. Valeurs identiques d’une ligne à l’autre pour obtenir des filtres cohérents. Les regroupements initiaux viennent du jeu de données existant et restent à relire. |
| `appellations` | Non | Appellations ou spécialités, séparées par `|`, par exemple `Beaumes-de-Venise | Vacqueyras | Ventoux` pour le domaine déjà annoncé correspondant. Ne pas renseigner une appellation non confirmée. |
| `annees` | Oui | `2026` pour les participants connus. Format multiédition : `2026 | 2027`, uniquement après confirmation pour 2027. |
| `afficher` | Oui | `oui` ou `non`. `non` masque la carte pour toutes les éditions, mais ne rend pas les informations du CSV privées. |
| `presentation` | Non | Texte court validé par le domaine, sans code HTML. Peut rester vide. |
| `site_web` | Non | URL HTTPS officielle vérifiée. Laisser vide si inconnue. Pas de lien Facebook déduit du nom. |
| `photo_url` | Non | URL HTTPS publique directe d’une image autorisée, idéalement WebP/AVIF/JPEG, pas un lien de page Google Drive. URL de fichier immuable recommandée pour préserver les versions officielles. |
| `photo_alt` | Oui si photo | Description factuelle de l’image, sans inventer l’identité des personnes. |

## Gestes courants

- **Ajouter** : nouvelle ligne, identifiant inédit, nom, année(s), `afficher=oui`. Les autres champs peuvent être complétés ultérieurement.
- **Modifier** : éditer les cellules et attendre la synchronisation test, ou lancer l’action manuellement.
- **Masquer** : passer `afficher` à `non`.
- **Supprimer** : supprimer toute la ligne. Le test reflétera la suppression ; l’officiel reste inchangé jusqu’à validation.
- **Nouvelle édition** : ajouter l’année confirmée dans `annees`, sans recopier la ligne.
- **Images** : les copier dans un hébergement public autorisé et renseigner leur adresse directe. Avec un stockage GitHub, le téléchargement via l’interface web ne demande pas d’écrire du code. Utiliser un nouveau nom pour chaque nouvelle photo. Ne pas publier de portraits sans autorisation.

Ne pas fusionner les cellules, déplacer les informations dans un second onglet ou ajouter des commentaires sous le tableau : chaque ligne non vide est traitée comme une fiche. Les colonnes peuvent être réordonnées, mais les en-têtes utilisés par la galerie doivent être exacts et sans doublon. Les colonnes supplémentaires sont signalées dans le journal, mais leurs valeurs sont ignorées ; elles ne bloquent plus l’import. Seuls `id`, `nom`, `annees` et `afficher` sont obligatoires. Les colonnes facultatives peuvent être absentes. Une erreur de validation empêche le déploiement et conserve la version publique précédente.
