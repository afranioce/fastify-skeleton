import test from '../../helpers/integration';

test('API Testing healthcheck', async (t) => {
  await t.context.fastify
    .inject({ url: '/_healthcheck' })
    .then((res) => {
      t.is(res.statusCode, 200);
      t.is(res.body, 'OK');
    })
    .catch((_err) => t.fail());
});
