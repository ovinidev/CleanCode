import { Order } from "../domain/purchases/order";
import { OrdersRepository } from "../repositories/OrdersRepository";

interface SubmitOrderRequest {
  customerDocument: string;
  total: number;
}

export class SubmitOrderUseCase {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute({
    customerDocument,
    total,
  }: SubmitOrderRequest): Promise<void> {
    const order = new Order({ customerDocument, total });

    await this.ordersRepository.create(order);
  }
}
