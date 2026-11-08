import { fixture, plan } from './requirements.ts';
import { execute } from '../tests/inventory.ts';
for (const id of plan.partitions.flat()) execute(id, fixture.iterations, fixture.tests[id]);
console.log('Passed ' + Object.keys(fixture.tests).length + ' protected tests.');
