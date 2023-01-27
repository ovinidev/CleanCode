// - SRP
// - OCP
// - LSP
// - ISP
// - DIP

class CalculateOrderDiscountBad {
  execute(amount: number, installments: number, paymentMethod: string) {
    if (paymentMethod === "pix") {
      return amount * 0.05;
    }

    if (paymentMethod === "credit") {
      if (installments === 1) {
        return amount * 0.05;
      }

      if (installments <= 6) {
        return amount * 0.02;
      }

      return 0;
    }

    if (paymentMethod === "debit") {
      return amount * 0.05;
    }

    return 0;
  }
}

interface Card {
  number: number;
  cvv: number;
  expiration: number;
}

interface PaymentMethod {
  getDiscountAmount: (amount: number) => number;
}

class Pix implements PaymentMethod {
  getDiscountAmount(amount: number) {
    return amount * 0.05;
  }
}

class Credit implements PaymentMethod, Card {
  private installments: number;
  number: number;
  cvv: number;
  expiration: number;

  constructor(installments: number, card: Card) {
    this.installments = installments;
    this.number = card.number;
    this.cvv = card.cvv;
    this.expiration = card.expiration;
  }

  getDiscountAmount(amount: number) {
    if (this.installments === 1) {
      return amount * 0.05;
    }

    if (this.installments <= 6) {
      return amount * 0.02;
    }

    return 0;
  }
}

class Debit implements PaymentMethod, Card {
  number: number;
  cvv: number;
  expiration: number;

  constructor(card: Card) {
    this.number = card.number;
    this.cvv = card.cvv;
    this.expiration = card.expiration;
  }

  getDiscountAmount(amount: number) {
    return amount * 0.05;
  }
}

class CalculateOrderDiscount {
  private paymentMethod: PaymentMethod;

  constructor(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  execute(amount: number) {
    return this.paymentMethod.getDiscountAmount(amount);
  }
}

const calculateOrderDiscountPix = new CalculateOrderDiscount(new Pix());
const calculateOrderDiscountDebit = new CalculateOrderDiscount(
  new Debit({ cvv: 2, expiration: 2, number: 2 })
);
const calculateOrderDiscountCredit = new CalculateOrderDiscount(
  new Credit(1, { cvv: 2, expiration: 2, number: 2 })
);

calculateOrderDiscountPix.execute(500);
calculateOrderDiscountDebit.execute(500);
calculateOrderDiscountCredit.execute(500);
