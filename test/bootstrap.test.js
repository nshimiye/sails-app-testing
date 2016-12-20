var sails = require('sails');

before(function(done) {
    process.env.NODE_ENV = 'test';
    process.env.PORT = 1337;

    // Increase the Mocha timeout so that Sails has enough time to lift.
    this.timeout(5000);

    sails.lift({
        // configuration for testing purposes
        models: {
            connection: 'localDiskDb',
            migrate: 'drop'
        }
    }, function(err, server) {
        if (err) { return done(err); }
        // here you can load fixtures, etc.
        sails = server;

        sails.log.info('***** Starting tests... *****');
        console.log('\n');
        
        done(err, sails);
    });
});

after(function(done) {
    // here you can clear fixtures, etc.
    sails.lower(done);
});