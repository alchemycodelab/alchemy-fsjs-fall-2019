# LAB - Component Composition

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Practice Component Composition

### Cards and Decks

Begin with: `starter-code`

You are starting with a monolithic application that reads in a `.json` file
containing sections (decks), each of which contain an array of records (cards)

The application renders this content by mapping over the content such that
each deck is a `<section>` and then each card within is a `<div>`

Refactor this application as follows

* Create separate components for `<Deck />` and `<Card />`
* Have the page render a `<Deck />` for each content section.
* Pass your list of `<Card />`s as children to your `<Deck />`
* conditionally render the content in both the decks and cards
  * e.g. only render the `<header>` if you have a title.

**Deck and Card should be generic**

### DeckOfCards

* Create a `<DeckOfCards />` component
* Have the `<DeckOfCards />` render each of its items as a `<Card />`

```
<Deck>
  <Card>
  <Card>
</Deck>


<DeckOfCards items={[]} />


return (
  <Deck>
    {cards}
  </Deck>
)
```

### Use an API

Refactor your code so it no longer relies on `content.json`

* fetch your characters and gifs from the
  [Hey Arnold API!](https://hey-arnold-api-documentation.netlify.com/)
* Create a `src/containers/Characters.js`
  * takes a count prop that changes the number of fetched characters
  * display your characters with a `<DeckOfCards />`
  * BONUS:
    * add buttons to move backwards and forwards to different pages
* Create a `src/containers/Gifs.js`
  * takes a count prop that changes the number of fetched gifs
  * display gifs as a `<Deck />` of `<img />`
  * BONUS:
    * add a button to fetch a new set of random gifs
* Import `Characters` and `Gifs` into `App`

### Testing

* Complete basic render testing on these components
* Account for missing/incomplete content

### Assignemnt Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
