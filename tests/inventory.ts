import assert from 'node:assert/strict';
import { derive } from '../src/derive.ts';
export function execute(id: string, iterations: number, expected: string): string {
  const actual = derive(id, iterations);
  assert.equal(actual, expected, 'deterministic application output');
  assert.match(actual, /^[a-f0-9]{64}$/);
  assert.equal(derive(id + '-check', 1).length, 64);
  return actual;
}
