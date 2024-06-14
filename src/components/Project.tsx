import { Markdown, renderObject } from "./Markdown"
import { onMount, createSignal, For } from "solid-js" 
import { badgeObject, Badge } from "./Badge"
import FadeIn from "./FadeIn"

interface ProjectProps {
  fileName: string;
  projectImage?: string;
}

const Project = (props: ProjectProps) => {
  const [badges, setBadges] = createSignal<badgeObject[]>([])
  const descriptionRenderer: renderObject = {
    paragraph(text: string) {
      return `<p class="p-1">${text}</p>`
    },
    heading(text: string, level: number) {
      return `<h${level} class="text-xl text-black font-bold">${text}</h${level}>`
    }
  }

  onMount(async () => {
    try {
      const res = await fetch(`/projects/${props.fileName}.badges.json`);
      const json = await res.json();
      setBadges(json);
    } catch (err) {
      console.log(err);
    }
  });

  const imgLocation: string = (props.projectImage) ? props.projectImage : `/projects/${props.fileName}.png`;
  const markdownLocation: string = `/projects/${props.fileName}.md`;

  return (
    <FadeIn>
  <div class="rounded-2xl bg-slate-100 m-10 shadow-xl p-10">
    <div class="p-2 flex">
      <div class="p-2 w-3/4">
        <Markdown renderOptions={descriptionRenderer} fileName={markdownLocation} />
      </div>
      <div class="w-1/4 flex-grow">
        <img src={imgLocation} class="border-slate-300 object-fill" />
      </div>
    </div>
    <div class="flex">
      <For each={badges()}>{ (badge) => <Badge badgeData={badge} />}</For>
    </div>
  </div>
  </FadeIn>
  )
}

export default Project
