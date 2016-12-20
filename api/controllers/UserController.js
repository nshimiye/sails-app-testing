/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
	 * GET <host>/user/:userId/dailyJoke
	 * fetch all jokes for this user
	 * @param req.params.id string id of the user who request the joke
	 */
	dailyJoke(req, res) {
		let ok = true;
		sails.log.debug('dailyJoke', req.params, typeof req.params, Object.keys(req.params) );

		let userId = req.params.id;
		DailyJokeService.getRandom()
		.then(jokeObject => {
			let content = jokeObject.content, author = jokeObject.author, source = jokeObject.source;
			return DatabaseAccessService.userSaveJoke(userId, { content, author, source });
		})
		.then(jokeObject => {
			return res.send(200, { ok, joke: jokeObject.content, from: jokeObject.author });
		})
		.catch(e => res.send(500, { ok: false, message: (e.message || 'unknown error') }));
	}
};

