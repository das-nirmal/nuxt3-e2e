import { fileURLToPath } from 'node:url';
import { describe, test, expect } from 'vitest'
import { setup, fetch } from '@nuxt/test-utils/e2e'

describe('My test', async () => {
  await setup({
    // test context options
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
		server: true,
		browser: false,
  })

  test('my test', async () => {
    const res = await fetch('/api/my-api')
    const body = await res.text();

    expect(body).toContain('Hello, World!');
  })
})