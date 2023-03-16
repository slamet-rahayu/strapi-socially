'use strict';

/**
 * post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post.post', ({strapi}) => ({
  async posts() {
    const posts = await strapi.entityService.findMany('api::post.post', {
      populate: {
        post: {
          fields: ['url']
        },
        user_id: {
          fields: ['id', 'username']
        },
        likes: '*',
        comments: '*',
      },
      fields: ['id', 'caption', 'createdAt']
    })
    return posts
  },
  async createPost(body) {
    const { caption, user_id, file } = body;
    await strapi.service("api::post.post").create({
      data: {
        user_id: {
          connect: [user_id]
        },
        caption
      },
      files: {
        post: file
      }
    })
    return "success"
  }
}));
