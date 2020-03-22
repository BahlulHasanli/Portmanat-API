const md5 = require('md5');

class Checkout {
  constructor(p_id, s_id, key, o_id, tr_id, method, amount, test, hash) {
    this.p_id = p_id;
    this.s_id = s_id;
    this.key = key;
    this.o_id = o_id;
    this.tr_id = tr_id;
    this.method = amount;
    this.test = test;
    this.hash = hash;
  }

  result() {
    const hash = md5(
      this.p_id + this.s_id + this.o_id + this.tr_id + this.key
    ).toLocaleUpperCase();

    if (hash == this.hash) {
      if (this.tr_id == '0') {
        console.log('success');
      }

      return 1;
    } else {
      return 0;
    }

    // if (hash !== this.hash) {
    //   return 0;
    // }

    // if (this.test == '0') {
    //   return 'Hesab artirildi!';
    // }

    // return 1;
  }
}

module.exports = Checkout;
