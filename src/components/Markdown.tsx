import { marked } from "marked"
import { onMount, createSignal } from "solid-js"


export interface renderObject {
  code?: (codeText: string, info: string | undefined, escaped: boolean) => string;
  paragraph?: (text: string) => string;
  heading?: (text: string, level: number, raw?: string) => string;
  hr?: () => string;
  list?: (body: string, ordered: boolean, start: number | "") => string;
  listitem?: (text: string, task: boolean, checked: boolean) => string;
  strong?: (text: string) => string;
  em?: (text: string) => string;
  br?: () => string;
  codespan?: (text: string) => string;
}

interface markdownProps {
  fileName: string;
  renderOptions: renderObject;
}

export const Markdown = (props: markdownProps) => {
  const [mdBody, setMdBody] = createSignal<string>("");
  const renderer = props.renderOptions;
  
  onMount(async () => {
    const res = await fetch(props.fileName);
    const text = await res.text();
    marked.use({renderer});
    const htmlString = await marked.parse(text);
    setMdBody(htmlString);
  });
  
  return <div innerHTML={mdBody()}></div>
}
