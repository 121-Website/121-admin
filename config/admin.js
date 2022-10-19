module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '61d29ea99a89405d254a8c66fced487b'),
  },
});
