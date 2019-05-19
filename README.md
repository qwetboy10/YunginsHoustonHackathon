# Houston Volunteer Matchmaking

## Cypress Woods Hackathon Team: The Yungins

## Inspiration
Each year our school hosts a competitive programming contest, and we ask for volunteers from our school's volunteer organization, but many of these volunteers choose not to show up or eat the provided food and leave. We found that many other nonprofits in Houston also face this problem, and we would like to fix that.

## What it does
Houston Volunteer Central is a matchmaking website for finding volunteer events near you, allowing volunteers and organizers to rate the quality of each other's service, improving matchmaking in future events.


### Pre-initialization Script - Setting up dependencies on host computer 

```
#!/bin/bash
echo "Installing dependencies"
apt-get install -y python3-pip git npm
echo "installing django and django based dependencies"
pip3 install -y django djangorestframework django-cors-headers
echo "installing npm and react"
npm install -g create-react-app
apt remove -y cmdtest
npm install -g yarn
cd Frontend/front
npm install
yarn install
```

## Starting the server

Starting the server takes a few steps due to the nature of REACT-Django, follow the steps below.
Starting in the github repo's root directory

```
cd Backend
python3 manage.py migrate
python3 manage.py runserver
```

Leave that running and in a different terminal or emulator

```
cd ../
cd Frontend
cd front
yarn start
```

If the webpage does not open automagically, then navigate to localhost:3000 in your web browser of choice.
