# multilingual-country-info

> Extract country information from country name or country code (multilingual).

## Install

```bash
yarn add multilingual-country-info
# - or -
npm install multilingual-country-info
```

## Usage

```js
const multilingualCountryInfo = require('multilingual-country-info')

// Search by country using bruteforce
const info_1 = multilingualCountryInfo.getInfoByCountryName('Spain')

// Search by country and language - faster search
const info_2 = multilingualCountryInfo.getInfoByCountryName('Spain', 'english')

// Search by country code
const info_3 = multilingualCountryInfo.getInfoByCountryCode('NL')
```

---
## Contributing

PRs are welcome.

---

## License

Copyright © 2022 - 2022, [thewolfx41] Released under the MIT License.
