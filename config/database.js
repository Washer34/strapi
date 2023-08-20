module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', '127.0.0.1'),
      port: env.int('PGPORT', 5432),
      database: env('PGDATABASE', 'strapi'), // changer entre strapi et dbantoine
      user: env('PGUSER', 'strapi'), // changer entre strapi et postgres
      password: env('PGPASSWORD', 'password'), // changer entre password et postgres
      ssl: env.bool(true),
    },
    pool: { min: 0 }
  },
});
