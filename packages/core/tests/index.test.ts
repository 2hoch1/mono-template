/**
 * Example test file
 */

import { greet } from '../src/index'

describe('greet', () => {
  it('should return a greeting message', () => {
    const result = greet('World')
    expect(result).toBe('Hello, World!')
  })
})
