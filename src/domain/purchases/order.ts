interface OrderProps {
  createdAt?: Date;
  total: number;
  customerDocument: string;
}

export class Order implements OrderProps {
  public customerDocument: string;
  public createdAt: Date;
  public total: number;

  constructor({ customerDocument, total }: OrderProps) {
    this.createdAt = new Date();
    this.customerDocument = customerDocument;
    this.total = total;
  }
}
