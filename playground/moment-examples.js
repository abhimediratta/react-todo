var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('timestamp', now.unix());

var timestamp = 1493130019;
var currentMoment = moment.unix(timestamp);
console.log('currentMoment',currentMoment.format());
