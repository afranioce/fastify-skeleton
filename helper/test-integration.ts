import anyTest, { TestInterface } from 'ava';
import { FastifyInstance } from 'fastify';
import Server from '../src/server';

interface TestContext {
	fastify: FastifyInstance
}

const test = anyTest as TestInterface<TestContext>;

test.before(t => {
  t.context = {fastify: new Server().addHandlers().fastify};
});

export default test;
