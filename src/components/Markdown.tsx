import { marked } from "marked"
import { onMount, createSignal } from "solid-js"

interface filePath {
  fileName: string;
}

const Markdown = (props: filePath) => {
  const [mdBody, setMdBody] = createSignal<string>("");

  onMount(async () => {
    const res = await fetch(props.fileName);
    const text = await res.text();
    const htmlString = await marked.parse(text);
    setMdBody(htmlString);
  });
  
  return <div innerHTML={mdBody()}></div>
}

export default Markdown
