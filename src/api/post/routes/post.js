'use strict';

/**
 * post router
 */

module.exports = {
  routes: [
    { // Path defined with a regular expression
      method: 'GET',
      path: '/posts', // Only match when the URL parameter is composed of lowercase letters
      handler: 'post.post',
    },
    { // Path defined with a regular expression
      method: 'POST',
      path: '/posts', // Only match when the URL parameter is composed of lowercase letters
      handler: 'post.createPost',
    }
  ]
}