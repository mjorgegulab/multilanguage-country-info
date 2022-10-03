const countriesJSON = require("./countries.json");

const AVAILABLE_COUNTRIES = [
  "english",
  "spanish",
  "french",
  "german",
  "russian",
  "portuguese",
  "japenese",
  "italian",
  "chinese",
];

const prepareCountry = (country) => {
  if (!country) return null;
  return country.toString().toLowerCase().trim();
};

const prepareCountryCode = (countryCode) => {
  if (!countryCode) return null;
  return countryCode.toString().toUpperCase().trim();
};

/**
 * @typedef {Object} Country
 * @property {String} language - Country name in english
 * @property {String} chinese - Country name in chinese
 * @property {String} french - Country name in french
 * @property {String} german - Country name in german
 * @property {String} italian - Country name in italian
 * @property {String} japenese - Country name in japenese
 * @property {String} russian - Country name in russian
 * @property {String} spanish - Country name in spanish
 * @property {String} english - Country name in english
 * @property {String} continent - Continent of the country
 * @property {String} region - Region of the country
 * @property {String} country - Country of the country
 * @property {String} capital - Capital of the country
 *
 * @property {String} fips - FIPS code of the country
 * @property {String} iso2 - ISO2 code of the country
 * @property {String} iso3 - ISO3 code of the country
 * @property {String} isoNo - ISONO code of the country
 * @property {String} internet - INTERNET code of the country
 */

/**
 * Get country information by country name
 *
 * @param {String} countryName - Country name
 * @param {(english|spanish|french|french|german|russian|portuguese|japenese|italian|chinese)} language=null - Language to emulate
 *
 * @return {Country|null}
 *
 * @example
 * const multilingualCountryInfo = require('multilingual-country-info')
 * // Search by bruteforce
 * const info = multilingualCountryInfo.getInfoByCountryName('Spain')
 *
 * // Faster search
 * const info = multilingualCountryInfo.getInfoByCountryName('Spain', 'english')
 *
 * @author thewolfx41 <me@andsec.ch>
 * @version 1.0.0
 */
exports.getInfoByCountryName = (countryName, language = null) => {
  if (!countryName) return null;
  let searchResult = null;
  let preparedCountry = prepareCountry(countryName);
  if (language && AVAILABLE_COUNTRIES.includes(language.toString())) {
    searchResult = countriesJSON.find(
      (e) => e[language].toLowerCase().trim() === preparedCountry
    );
  } else {
    for (const _country of countriesJSON) {
      for (const _countryKey of AVAILABLE_COUNTRIES) {
        if (_country[_countryKey].toLowerCase().trim() === preparedCountry) {
          searchResult = _country;
          break;
        }
      }
      if (searchResult) break;
    }
  }
  return searchResult ? searchResult : null;
};

/**
 * Get country information by country code.
 *
 * @param {String} countryCode - Country code
 *
 * @return {Country|null}
 *
 * @example
 * const multilingualCountryInfo = require('multilingual-country-info')
 * const info = multilingualCountryInfo.getInfoByCountryCode('NL')
 *
 * @author thewolfx41 <me@andsec.ch>
 * @version 1.0.0
 */
exports.getInfoByCountryCode = (countryCode) => {
  if (!countryCode) return null;
  let preparedCountryCode = prepareCountryCode(countryCode);
  return countriesJSON.find((e) => e?.internet === preparedCountryCode) ?? null;
};
