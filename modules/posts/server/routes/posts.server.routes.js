'use strict';

/**
 * Module dependencies
 */
var postsPolicy = require('../policies/posts.server.policy'),
    posts = require('../controllers/posts.server.controller');

module.exports = function (app) {
    // Posts Routes
    app.route('/api/posts').get(posts.list);
    app.route('/api/posts').all(postsPolicy.isAllowed).post(posts.create);
    app.route('/api/posts/:postId').get(posts.read);
    
    app.route('/api/posts/:postId').all(postsPolicy.isAllowed)
        .put(posts.update)
        .delete(posts.delete);

    // Finish by binding the Post middleware
    app.param('postId', posts.postByID);
};
