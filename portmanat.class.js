'use strict';

const crypto = require('crypto').createHash('md5');

class Checkout {
  constructor(p_id, s_id, key, o_id, tr_id, method, amount, test, hash) {
    this.p_id = p_id; // Partner ID
    this.s_id = s_id; // Product ID
    this.key = key; // Product KEY
    this.o_id = o_id; // Order ID
    this.tr_id = tr_id; // Transaction ID
    this.method = method; // Method (account) or (code)
    this.amount = amount; // Product amount
    this.test = test; // Test mode: 0, Prod mode: 1
    this.hash = hash; // Auto hash
  }

  result() {
    const hash = crypto
      .update(`${this.p_id}${this.s_id}${this.o_id}${this.tr_id}${this.key}`)
      .digest('hex')
      .toUpperCase();

    if (hash !== this.hash) return 0;

    if (this.test == '0') return 1;

    return 1;
  }
}

module.exports = Checkout;
