import { test } from 'vitest';
import { csum, sum } from './Home.utils';

const _csum = csum;
const _sum = sum;

test('csum vs sum', async ({ bench }) => {
  await bench.compare(
    bench('csum', () => _csum(2)(2)),
    bench('sum', () => _sum(2, 2)),
    { time: 1000 },
  );
});
