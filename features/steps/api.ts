import { Then, When } from '@cucumber/cucumber';
import assert from 'assert';
import { HTTPMethods } from 'fastify';
import { ApiWorld } from '../support/api-world';

When(
  /^(?:I )?send a ([a-zA-Z_.0-9]+) request to "([^"]*)"$/,
  function (this: ApiWorld, method: HTTPMethods, url: string) {
    this.opts.method = method;
    this.opts.url = url;
  }
);

Then('print response', async function (this: ApiWorld) {
  await this.inject();
});

Then('the response code should be {int}', function (this: ApiWorld, statusCode: number) {
  if (!this.response) {
    throw new Error('execute print response after this one');
  }

  assert.strictEqual(this.response.statusCode, statusCode);
});

Then('the response message should be {string}', function (this: ApiWorld, message: string) {
  if (!this.response) {
    throw new Error('execute print response after this one');
  }

  assert.strictEqual(this.response.statusMessage, message);
});
