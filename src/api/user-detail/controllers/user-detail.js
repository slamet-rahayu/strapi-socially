'use strict';

/**
 * user-detail controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-detail.user-detail', ({strapi}) => ({
  async profile(ctx) {
    const id = ctx.state.user.id
    const res = await strapi.service('api::user-detail.user-detail').profile(id);
    ctx.send(res)
  }
}));
