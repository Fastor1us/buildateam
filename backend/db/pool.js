const { Pool } = require('pg');


const pool = new Pool({
  user: 'buildateam',
  host: 'buildateam',
  database: 'buildateam',
  password: 'buildateam',
  port: 5432,
});

module.exports = pool;
