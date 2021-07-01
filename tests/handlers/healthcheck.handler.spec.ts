import test from 'ava';
import server from '../../src/index';

test('API Testing healthcheck', async t => {
  await server.fastify.inject({ url: '/_healthcheck' })
    .then(res => {
      t.is(res.statusCode, 200);
      t.is(res.body, 'OK');
    })
    .catch(_err => t.fail());
});
