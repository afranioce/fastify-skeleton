import test from 'ava';
import server from '../../src/index';

test('API Testing manifest', async t => {
  await server.fastify.inject({ url: '/' })
    .then(res => {
      t.is(res.statusCode, 200);
      t.true('timestamp' in res.json());
    })
    .catch(_err => t.fail());
});
