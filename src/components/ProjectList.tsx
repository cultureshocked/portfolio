import { createSignal, onMount, For, Show, JSX } from "solid-js"
import Project from "./Project"
import { opendir } from "fs/promises"
import { dirname } from "path"
import { fileURLToPath } from 'url'

interface projectListProps {
  children: JSX.Element;
  anchor: string;
};

const ProjectList = (props: projectListProps) => {
  const [showcase, setShowcase] = createSignal<string[]>([]);
  
  const readProjectsFromServer = async (): Promise<string[]> => {
    "use server";
    const publicParent = dirname(dirname(fileURLToPath(dirname(import.meta.url))));
    const projectsPath = publicParent + `/public/projects`;
    const dir = await opendir(projectsPath);
    let descriptions: string[] = [];
    for await (const dirent of dir)
      if (dirent.name.endsWith(".md"))
        descriptions.push(dirent.name);
    return descriptions
  }

  onMount(async () => {
    const showcaseDocs: string[] = await readProjectsFromServer();
    const showcaseNames = showcaseDocs.map((str) => str.substring(0, str.length - 3));
    console.log(showcaseNames);
    setShowcase(showcaseNames);
  });

  return (
    <Show when={showcase().length} fallback={<div>Loading projects...</div>}>
      <>
        <div class="w-2/3 m-auto">
          <h3 class="text-3xl font-bold text-center scroll-smooth" id={props.anchor} >{props.children}</h3>
          <For each={showcase()}>{(elem) => <Project fileName={elem} />}</For>
        </div>
      </>
    </Show>
  );
}

export default ProjectList;
