# GOLAZO — World Cup League

Prototype interactif d'une ligue fantasy football entre amis, inspirée de la Coupe du Monde.

## Démo en ligne

Ouvre **[la page GitHub Pages](https://tassousgpa.github.io/golazo/)** dans ton navigateur (desktop ou mobile).

## Lancer en local

Un simple serveur HTTP suffit (les fichiers `.jsx` sont compilés dans le navigateur via Babel) :

```bash
npx serve .
```

Puis ouvre `http://localhost:3000`.

## Parcours

1. **Onboarding** — création de compte (simulée)
2. **Accueil** — prochain match, classement, boosts Coupe du Monde
3. **Club** — composition terrain, banc, rôles
4. **Marché** — enchères secrètes et packs
5. **Boutique** — crédits, bonus jetons, échanges
6. **Match** — simulation cinématique ~60 s

## Stack

- React 18 (CDN)
- JSX inline, sans build step
- Design system gold/navy custom (`ui.jsx`)
