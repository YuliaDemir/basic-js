const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const additionSeparator = options?.additionSeparator || "|";
  const separator = options?.separator || "+";
  const strToStr = str;
  const add = options.addition === undefined ? "" : ("" + options.addition);
  let addition = Array(options?.additionRepeatTimes).fill(add).join(additionSeparator);
	return Array(options?.repeatTimes).fill(strToStr +  addition).join(separator);
}

module.exports = {
  repeater
};
