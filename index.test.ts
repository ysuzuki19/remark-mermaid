import { remark } from 'remark';
import remarkMermaid from '.';

test('sample', async () => {
  const res = await remark().use(remarkMermaid).process('<html></html>');
  console.log(res);
});

export default {};
