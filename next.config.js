/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  images: {
    domains: [
      "randomuser.me",
      "www.w3.org",
      "upload.wikimedia.org",
      "getbootstrap.com",
      "cdn-images-1.medium.com",
      "d33wubrfki0l68.cloudfront.net",
      "nodejs.org",
      "www.vectorlogo.zone",
      "raw.githubusercontent.com",
      "www.postgresql.org",
      "encrypted-tbn0.gstatic.com",
      "developer.android.com",
      "camo.githubusercontent.com",
      "github.githubassets.com",
      "seeklogo.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
