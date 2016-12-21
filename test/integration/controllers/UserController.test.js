'use strict';
/**
 *  Tests run in order
 */
const request = require('supertest'),
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

describe('user creation', function () {

    const name = 'mars', username = 'mars@fusemachines.com';
    it('Should create a new user object - send GET request', function (done) {
        request(sails.hooks.http.app)
        .get(`/user/create?id=1&name=${name}&username=${username}`)
        .expect(201) // 
        .end(function (err, res) {

            if (err) { return done(err); }
            should.equal(res.body.name, name, `Name should be ${name}`);
            should.equal(res.body.username, username, `Username should be ${username}`);
            done();

        });
    });

    it('Should create a new user object - send POST request', function (done) {
        request(sails.hooks.http.app)
        .post(`/user/create`)
        .send({ id: 2, name, username })
        .expect(201) // 
        .end(function (err, res) {

            if (err) { return done(err); }
            should.equal(res.body.name, name, `Name should be ${name}`);
            should.equal(res.body.username, username, `Username should be ${username}`);
            done();

        });
    });
});

describe('joke fetching', function () {

    /**
     * @depend on 'user creation' suite
     * make a get request to <host>/user/<user-id>/dailyJoke
     */
    it('Should fetch a random joke', function (done) {
        request(sails.hooks.http.app)
        .get('/user/1/dailyJoke')
        .expect(200) // 
        .end(function (err, res) {

            if (err) { return done(err); }
            should.ok(res.body.ok, 'should return indication of success response');
            should.exist(res.body.joke, 'Random joke has been returned!');
            done();
        });
    });
    /**
     * @depend on 'Should fetch a random joke' test
     * get request <host>/user/find?id=1
     * 
     */
    it('Should show user with a daily-joke-list', function (done) {
        request(sails.hooks.http.app)
        .get('/user/find?id=1')
        .expect(200)
        .end(function (err, res) {

            if (err) { return done(err); }
            sails.log.debug(res.body);
            should(res.body.dailyJokes).be.Array('dailyJokes should be an array');
            should.exist(res.body.dailyJokes[0], 'one record should exist in the dailyJoke list');
            done();

        });
    });

});


});