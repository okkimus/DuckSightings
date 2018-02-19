# DuckSightings

DuckSightings is a small frontend app for [Duck backend](https://github.com/vincit/summer-2018). This small project is part of summer job application for [Vincit](https://www.vincit.fi/). It's also the first React frontend I have built, so keep that in mind!

Live version can be found [here](https://vincit-duck-sighting.herokuapp.com/). This repository's latest commit is making calls to [Duck backend](https://github.com/vincit/summer-2018) which is running on seperate Heroku instance [here](https://duck-server.herokuapp.com/). Please note that ordering sightings is working correctly on Firefox...Chrome has some compatibility issues with ordering.

## Requirements

Requires [Node.js](https://nodejs.org/) installed with npm. (And Firefox as browser to make ordering work.)

## Install

```
$ git clone https://github.com/okkimus/DuckSightings.git
$ cd DuckSightings
$ npm install
```

## Run

NOTE: this is just a frontend application for [Duck backend](https://github.com/vincit/summer-2018). If you wish to use the backend, you need to clone and run that server aswell. Current code is making calls to deployed backend server, so you might want to change that before running (I might add ".env" file to fix this later).

To start server run

```
$ npm start
```
