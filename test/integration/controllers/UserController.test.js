var request = require('supertest'),
    should = require('should');

describe('UserController', function () {

    before(function (done) {
        sails.log.info('---<>--- Testing UserController ---<>---');
        done(null, sails);
    });
    after(function (done) {
        sails.log.info('---<>--- Finished Testing UserController ---<>---');
        done(null, sails);
    });


    const name = 'mars', username = 'mars@fusemachines.com';
    it('Should create a new user object - send GET request', function (done) {
            request(sails.hooks.http.app)
            .get(`/user/create?name=${name}&username=${username}`)
            .expect(201) // 
            .end(function (err, res) {
                if (err) return done(err);
                
                sails.log.debug('---<>--- START ---<>---');
                sails.log.debug(res.body);
                sails.log.debug('---<>--- END   ---<>---');

                should.exist(res.body);

                done();
            });
    });

    it('Should create a new user object - send POST request', function (done) {
        request(sails.hooks.http.app)
            .post(`/user/create`)
            .send({ name, username })
            .expect(201) // 
            .end(function (err, res) {
                if (err) return done(err);
                
                sails.log.debug('---<>--- START ---<>---');
                sails.log.debug(res.body);
                sails.log.debug('---<>--- END   ---<>---');

                should.exist(res.body);

                done();
            });
    });
    
});