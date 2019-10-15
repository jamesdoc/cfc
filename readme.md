# Christian Filmmakers Collective

## Editting the events

Events are stored in `src/_data/events.json`

Add new events at the top in the format:

```
  {
    "name": "Christian Filmmakers Collective #03",
    "date": "2018-10-18",
    "address": "GlobeSpace, 140-148 Borough High Street",
    "url": "https://attending.io/events/christian-filmmakers-collective-03",
    "description": "You're invited to an evening with Vanessa Bailey hearing about her work as a Christian who's an actor, director and producer making short films"
  },
```

## Development

To get this up and running on your own computer you need to have Node and NPM installed. [Find out how here](https://www.npmjs.com/get-npm).

Once you have installed NPM in the command line run the following line in this folder:

`npm run dev`

You'll now have a local server running at [http://localhost:8080](http://localhost:8080).

This is built on top of [Eleventy](https://www.11ty.io) because it is great. One of the nice things about 11ty is it's [super simple documentation](https://www.11ty.io/docs/).

### ToDo

- [x] Add Facebook Group to the footer
- [ ] Add photo gallery from the group
- [ ] Return responsive images
- [x] Return the events with [event schema](https://schema.org/Event)

## Deploy

The site is hosted with [Surge](https://surge.sh/). It is also great. You can deploy from the command line too with the line:

`npm run deploy`

I'll need to give you access to deploy to the Christian Filmmakers Collective website though.
