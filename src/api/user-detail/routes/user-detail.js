'use strict';

/**
 * user-detail router
 */


module.exports = {
  routes: [
    { // Path defined with a regular expression
      method: 'GET',
      path: '/profile', // Only match when the URL parameter is composed of lowercase letters
      handler: 'user-detail.profile',
    }
  ]
}