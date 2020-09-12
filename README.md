# Evaluate Articles with NLP

Webpage as interface to the AYLIEN entity extraction API.
The user can enter a url to an article or a custom text for entity extraction.

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

## Getting started

`cd` into your new folder and run:
- `npm install`

## Setting up the AYLIEN API

### Step 1: Signup for an API key
First, you will need to go [here](https://developer.aylien.com/signup). Signing up will get you an API key.

### Step 2: Install the SDK
Next you'll need to install the SDK. The page is available [here](https://docs.aylien.com/textapi/sdks/#sdks).

### Step 3: Configure API credentials
- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```.
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env```
- [ ] Fill the .env file with your API keys like this:
```
API_ID=**************************
API_KEY=**************************
```

## Build and run the application

### Step 1: Run the build script
```
$ npm run build-prod
```
or (for dev)
```
$ npm run build-dev // runs on http://localhost:8080
```

### Step 2: Run node server
After the build process is completed, start your node server.
```
$ node index.js
```

### Step 3: Start using the application
Navigate to:
```
http://localhost:8081
```
and have fun :-)

## Test application
Run
```
$ npm run test
```
