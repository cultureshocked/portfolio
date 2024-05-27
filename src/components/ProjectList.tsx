import { createSignal, onMount, For, Show, JSX } from "solid-js"
import Project from "./Project"

interface projectListProps {
  children: JSX.Element;
};

const ProjectList = (props: projectListProps) => {
  const [showcase, setShowcase] = createSignal<string[]>([]);

  onMount(async () => {
    // Retrieve all public repositories
    const res = await fetch("https://api.github.com/users/cultureshocked/repos");
    const repoArray = await res.json();
    
    // Query all projects with associated markdown documents
    const showcaseNames: string[] = [];
    for (let i = 0; i < repoArray.length; ++i) {
      const repoDocumentLocation = `/projects/${repoArray[i].name}.md`;
      const repoDocument = await fetch(repoDocumentLocation);
      if (repoDocument.status == 200) 
        showcaseNames.push(repoArray[i].name);
    }
    setShowcase(showcaseNames);
  });

  return (
    <Show when={showcase().length} fallback={<div>Loading projects...</div>}>
      <>
        <div class="w-2/3 m-auto">
          <h3 class="text-3xl font-bold text-center">{props.children}</h3>
          <For each={showcase()}>{(elem) => <Project fileName={elem} />}</For>
        </div>
      </>
    </Show>
  );
}

export default ProjectList;
