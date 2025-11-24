class PaymentProcessor {
  constructor() {
    this.paymentMethods = {
      'card': {
        'type': 'card',
        'valid': [' Visa', 'Mastercard', 'Amex'],
        'validAmount': 0.01,
        'validExpiration': 12,
        'validCVV': 0,
        'validCountry': 'US'
      },
      'paypal': {
        'type': 'paypal',
        'valid': ['Visa', 'Mastercard', 'Amex'],
        'validAmount': 0.01,
        'validExpiration': 12,
        'validCVV': 0,
        'validCountry': 'US'
      }
    };
  }

  parsePaymentMethod(paymentMethod) {
    if (paymentMethod in this.paymentMethods) {
      return this.paymentMethods[paymentMethod];
    } else {
      throw new Error(`Unsupported payment method: ${paymentMethod}`);
    }
  }

  validatePaymentMethod(paymentMethod) {
    return this.paymentMethods[paymentMethod].valid;
  }

  getCardDetails() {
    return {
      type: this.paymentMethods['card'].type,
      valid: this.paymentMethods['card'].validAmount,
      validExpiration: this.paymentMethods['card'].validExpiration,
      validCVV: this.paymentMethods['card'].validCVV,
      validCountry: this.paymentMethods['card'].validCountry
    };
  }

  getPaypalDetails() {
    return {
      type: this.paymentMethods['paypal'].type,
      valid: this.paymentMethods['paypal'].validAmount,
      validExpiration: this.paymentMethods['paypal'].validExpiration,
      validCVV: this.paymentMethods['paypal'].validCVV,
      validCountry: this.paymentMethods['paypal'].validCountry
    };
  }
}

const paymentProcessor = new PaymentProcessor();
console.log(paymentProcessor.parsePaymentMethod('card'));
console.log(paymentProcessor.validatePaymentMethod('card'));
console.log(paymentProcessor.getCardDetails());
console.log(paymentProcessor.getPaypalDetails());