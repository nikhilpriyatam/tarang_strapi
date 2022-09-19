'use strict';

/**
 * article-component service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article-component.article-component');
