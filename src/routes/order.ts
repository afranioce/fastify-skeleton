import { FastifyInstance } from "fastify";
import { FastifyPluginAsync } from "fastify";
import Container from "typedi";
import { GetAllService } from "../services/order/getAll.service";

const orderRouterPluginAsync: FastifyPluginAsync = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/orders', Container.get(GetAllService).handler);
}

export default orderRouterPluginAsync;
