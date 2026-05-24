import { remark } from 'remark';
import remarkMermaid from '.';

async function transform(input: string): Promise<string> {
  const res = await remark().use(remarkMermaid).process(input);
  return String(res);
}

test('converts a mermaid code block to a mermaid div', async () => {
  const input = '```mermaid\ngraph TD\nA-->B\n```\n';
  const output = await transform(input);
  expect(output).toBe('<div class="mermaid">graph TD\nA-->B</div>\n');
});

test('leaves non-mermaid code blocks untouched', async () => {
  const input = '```js\nconst x = 1;\n```\n';
  const output = await transform(input);
  expect(output).toBe('```js\nconst x = 1;\n```\n');
});

test('does not transform code blocks without a language', async () => {
  const input = '```\nplain text\n```\n';
  const output = await transform(input);
  expect(output).not.toContain('<div class="mermaid">');
  expect(output).toContain('plain text');
});

test('leaves prose untouched', async () => {
  const input = '# Title\n\nsome paragraph.\n';
  const output = await transform(input);
  expect(output).toBe('# Title\n\nsome paragraph.\n');
});

test('converts multiple mermaid blocks independently', async () => {
  const input =
    '```mermaid\ngraph TD\nA-->B\n```\n\n```mermaid\nsequenceDiagram\nA->>B: hi\n```\n';
  const output = await transform(input);
  expect(output).toBe(
    '<div class="mermaid">graph TD\nA-->B</div>\n\n<div class="mermaid">sequenceDiagram\nA->>B: hi</div>\n',
  );
});

test('only transforms mermaid blocks when mixed with other content', async () => {
  const input =
    '# Heading\n\n```mermaid\ngraph TD\nA-->B\n```\n\n```js\nconst x = 1;\n```\n\nparagraph.\n';
  const output = await transform(input);
  expect(output).toBe(
    '# Heading\n\n<div class="mermaid">graph TD\nA-->B</div>\n\n```js\nconst x = 1;\n```\n\nparagraph.\n',
  );
});

test('handles an empty mermaid block', async () => {
  const input = '```mermaid\n```\n';
  const output = await transform(input);
  expect(output).toBe('<div class="mermaid"></div>\n');
});
