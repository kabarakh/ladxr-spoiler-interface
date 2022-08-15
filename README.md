# LADXR Spoiler Interface

## What is this? 

So you might have heard of game randomizers. And you might have heard of Legend of Zelda Link's Awakening. 

If both, you might want to check out [LADXR](http://ladxr.daid.eu/), a randomizer for Link's Awakening.

When you create a ROM, you can also create a spoiler log. This can be in JSON - and this JSON can be read by
LADXR Spoiler Interface!

## Installation

Just clone the repo, `npm install` everything and `npm run dev` to start the development version.

## Website

There is an online version available: https://kabarakh.github.io/ladxr-spoiler-interface/

## TODOs

I know, I could also do issues/tasks in Github. But just to make it more visible, some TODOs I still want to implement:

- [X] Display non-accessible items/locations in a different style
- [X] Implement a "sphere slider" (0 to highest sphere) and highlight items/locations available in the selected sphere.
That way you can basically make up a route
- [X] Entrance list for entrance shuffle/dungeon shuffle/random starting location seeds
- [ ] Automatically run the deploy script to update the website on push on `main` branch
- [ ] Style that thing
- [ ] Map view of locations
- [X] Inventory view of items
- [ ] Validate the uploaded JSON file against a schema file
