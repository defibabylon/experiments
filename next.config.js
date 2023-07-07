const withLess = require('next-with-less');

const nextConfig = {
  // Remove the custom webpack configuration for CSS files
};

module.exports = withLess(nextConfig);
