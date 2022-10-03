const multilingualCountryInfo = require('./index');

const info = multilingualCountryInfo.getInfoByCountryName('Spain');
console.log(info);

const info2 = multilingualCountryInfo.getInfoByCountryName('Spain', 'english');
console.log(info2);

const info3 = multilingualCountryInfo.getInfoByCountryCode('NL');
console.log(info3);
