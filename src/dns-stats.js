const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getCount(array) {
	let obj = {};
	console.log(array);
	for (let el of array) {		
		if (obj.hasOwnProperty(el)) {
			obj[el] = obj[el] + 1;
		}
		else {
			obj[el] = 1;
		}
	}
	return obj;
}

function makeDomains (array) {
	array.reverse();
	let subArray, result = [], newElement;
	for (let i = 1; i <= array.length; i++) {
		subArray = array.slice(0, i);
		newElement = subArray.reduce((acc, cur) => acc + cur, "");
		result.push(newElement);
	}
	return result;
}

function getDNSStats(domains) {
  return getCount(domains.flatMap(el => makeDomains(("." + el).match(/\.[^\.]*/g))));
}

module.exports = {
  getDNSStats
};
