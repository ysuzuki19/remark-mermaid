import { visit } from 'unist-util-visit';

interface Node {
  type: string;
  lang?: string;
  value?: string;
}

function isMermaidCode(node: Node): boolean {
  return node.type === 'code' && node?.lang === 'mermaid';
}

function find_transform(tree) {
  visit(tree, isMermaidCode, (node: Node, index: number) => {
    tree.children[index] = {
      type: 'html',
      value: `<div class="mermaid">${node.value}</div>`.trim(),
    };
  });
}

export default function remarkMermaid() {
  return find_transform;
}
