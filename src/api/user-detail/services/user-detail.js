'use strict';

/**
 * user-detail service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-detail.user-detail', ({strapi}) => ({
  async profile(id) {
    const knex = strapi.db.connection
    const user = await knex('up_users as upu')
    .leftJoin('user_details_users_permissions_user_links as ud_links', 'upu.id', 'ud_links.user_id')
    .leftJoin('user_details as ud', 'ud_links.user_detail_id', 'ud.id')
    .where('upu.id', id)
    .select(
      'upu.id as id',
      'upu.username',
      'upu.email',
      'ud.fullname',
      'ud.city',
      'ud.bio'
    )
    return user[0]
  }
}));
