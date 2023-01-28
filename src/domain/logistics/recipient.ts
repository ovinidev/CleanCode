interface RecipientProps {
  street: string;
  number: number;
  zipcode: string;
}

export class Recipient implements RecipientProps {
  public street: string;
  public number: number;
  public zipcode: string;

  constructor({ number, street, zipcode }: RecipientProps) {
    this.street = street;
    this.number = number;
    this.zipcode = zipcode;
  }
}
