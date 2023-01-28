interface CustomerProps {
  name: string;
  email: string;
  document: string;
}

export class Customer implements CustomerProps {
  public name: string;
  public email: string;
  public document: string;

  constructor({ document, email, name }: CustomerProps) {
    this.name = name;
    this.email = email;
    this.document = document;
  }
}
