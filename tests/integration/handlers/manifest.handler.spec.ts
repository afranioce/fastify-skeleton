import test from '../../../helper/test-integration';

test('API Testing manifest', async (t) => {
  await t.context.fastify
    .inject({ url: '/' })
    .then((res) => {
      t.is(res.statusCode, 200);
      t.true('timestamp' in res.json());
    })
    .catch((_err) => t.fail());
});
