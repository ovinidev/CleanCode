import { OrderPrismaRepository } from "./repositories/OrderPrismaRepository";
import { SubmitOrderUseCase } from "./useCases/submitOrderUseCase";

const orderPrismaRepository = new OrderPrismaRepository();
const submitOrderUseCase = new SubmitOrderUseCase(orderPrismaRepository);
