const DigestFetch = require("digest-fetch");

const client = new DigestFetch(
  process.env.ATLAS_USER,
  process.env.ATLAS_USER_KEY,
  { }
);

const urlbase = "https://cloud.mongodb.com/api/atlas/v1.0/";

client
  .fetch(urlbase,{})
  .then(res => res.json())
  .then(json => console.log(JSON.stringify(json,null," ")));

