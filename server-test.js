// Start Express web app based on Express
const web = require('./server/express');
return new web('memogra', 'www.memogra.pl',80, "./public");