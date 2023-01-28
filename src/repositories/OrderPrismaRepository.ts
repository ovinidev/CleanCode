import { Order } from "../domain/purchases/order";
import { OrdersRepository } from "./OrdersRepository";

export class OrderPrismaRepository implements OrdersRepository {
  async create(order: Order) {}
}
