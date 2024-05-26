import { createSignal, onMount, For, Show } from "solid-js"
import Project from "./Project"


const ProjectList = () => {
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
        showcaseNames.push(repoDocumentLocation);
    }
    setShowcase(showcaseNames);
  });

  return (
    <Show when={showcase().length} fallback={<div>Loading projects...</div>}>
      <>
        <h3>Here's some stuff I've built:</h3>
        <For each={showcase()}>{(elem) => <Project fileName={elem} />}</For>
      </>
    </Show>
  );
}

export default ProjectList;
