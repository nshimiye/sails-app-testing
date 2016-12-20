# sails-app-testing
How to test a sailsjs application

# Scenario
We have built [an app](https://github.com/nshimiye/sails-record-list) that logs a list of jokes for each user.

# End goal
Create a test (unit and acceptence) to make sure that 
* if a user request a joke
* That same joke is added to the user's joke list

# Step by step

* Look at the [sailsjs-handlebars-app tutorial](https://github.com/nshimiye/sailsjs-handlebars-app) to create a handlebars based sails app.

* Look at [sails-record-list tutorial](https://github.com/nshimiye/sails-record-list) to finish up the app logic
 * save user info that includes email
 * add/fetch joke for the user

* Add a `test` folder
```sh
mkdir test
```

* Add the rest a structure
```sh
<app>/api
|- test # mocha default testing folder
| |- mocha.opts
| |- unit # testing a function/method as it is (same input give out same output)
| | |- controllers
| | |- models
| | |- policies
| | |- services
| | | |- DailyJokeService.test.js
| | | |- UtilityService.test.js
| |- integration # testing the behavior of a function when placed in a given environment (ex: action handler defined in the controller)
| | |- controllers
| | | |- UserController.test.js
| | |- models
| | |- policies
| | |- services
| | | |- DatabaseAccessService.test.js
```

* install required packages
```sh
npm install supertest --save-dev
npm install should --save-dev
```

* create a test - user can be created using **/user/create** api

* run the test
```
npm install -g mocha
npm test
```