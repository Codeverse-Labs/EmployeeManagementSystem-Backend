//connecting to cloudinary
const cloudinary = require('cloudinary').v2;
const https = require('https');

cloudinary.config({
  cloud_name: 'dlaimiqfi',
  api_key: '393459479285331',
  api_secret: 'OJyYLf-ineOg7-j3NBKKaWgcd_U',
  secure: true,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});