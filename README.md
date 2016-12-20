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
