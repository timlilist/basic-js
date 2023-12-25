const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(dir = true) {
    this.dir = dir;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let result = "";
    message = message.toUpperCase();
    key = key.toUpperCase();
    let count = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        let step = this.alphabet.indexOf(key[count]);
        let index = (this.alphabet.indexOf(message[i]) + step) % this.alphabet.length;
        result += this.alphabet[index];
        count= ++count % key.length;
      } else {
        result += message[i];
      }
    }
    return this.dir ? result : result.split("").reverse().join("");
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let result = "";
    message = message.toUpperCase();
    key = key.toUpperCase();
    let count = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        let step = this.alphabet.indexOf(key[count]);
        let index = (this.alphabet.indexOf(message[i]) - step + this.alphabet.length) % this.alphabet.length;
        result += this.alphabet[index];
        count = ++count % key.length;
      } else {
        result += message[i];
      }
    }
    return this.dir ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
