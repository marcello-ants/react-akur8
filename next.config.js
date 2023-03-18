/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
}

const sassConfig = {
  includePaths: [path.join(__dirname, 'styles')],
}


module.exports = {
  nextConfig,
  sassConfig
};