const YAML = require('yamljs');
const path = require('path');
require('dotenv').config();

const isProd = process.env.NODE_ENV === 'prod';
const domainUrl = process.env.DOMAIN_URL;
// Load multiple swagger files
const billSwagger = YAML.load(path.join(__dirname, '../swagger/bill.swagger.yml'));
const feedbackSwagger = YAML.load(path.join(__dirname, '../swagger/feedback.swagger.yml'));

// Merge paths and components
const swaggerDocument = {
    openapi: '3.0.0',
    info: {
        title: 'Relaxo Billing API',
        version: '1.0.0',
        description: 'Combined Swagger docs for Billing and Feedback'
    },
    servers: [{ url: isProd ? domainUrl : 'http://localhost:5000' }],
    paths: {
        ...billSwagger.paths,
        ...feedbackSwagger.paths,
    },
    components: {
        schemas: {
            ...billSwagger.components?.schemas,
            ...feedbackSwagger.components?.schemas,
        }
    },
};

module.exports = swaggerDocument;
