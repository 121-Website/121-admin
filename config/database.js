module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-61.railway.app'),
      port: env.int('DATABASE_PORT', 6563),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '6LZVMT1cY0tSMy7cGv9W'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
