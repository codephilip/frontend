/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
        REACT_APP_USER_SERVICE_URL: process.env.REACT_APP_USER_SERVICE_URL,
      },
}

module.exports = nextConfig
