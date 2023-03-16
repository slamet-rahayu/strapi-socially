'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({strapi}) => ({
  async post(ctx) {
    const res = await strapi.service('api::post.post').posts();
    ctx.send(res);
  },
  async createPost(ctx) {
    const { file } = ctx.request.files;
    const { caption } = ctx.request.body;
    const { id } = ctx.state.user;
    const res = await strapi.service('api::post.post').createPost({ file, caption, user_id: id });
    ctx.send(res);
  },
}));
