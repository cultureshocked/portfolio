import { Markdown, renderObject } from "./Markdown"

interface ProjectProps {
  fileName: string;
  projectImage?: string;
}

const Project = (props: ProjectProps) => {
  const descriptionRenderer: renderObject = {
    paragraph(text: string) {
      return `<p class="p-1">${text}</p>`
    },
    heading(text: string, level: number) {
      return `<h${level} class="text-xl text-black font-bold">${text}</h${level}>`
    }
  }

  const imgLocation: string = (props.projectImage) ? props.projectImage : `/projects/${props.fileName}.png`;
  const markdownLocation: string = `/projects/${props.fileName}.md`;

  return (
  <div class="rounded-2xl bg-slate-100 m-10 shadow-xl p-10">
    <div class="p-2 flex">
      <div class="p-2 w-3/4">
        <Markdown renderOptions={descriptionRenderer} fileName={markdownLocation} />
      </div>
      <div class="w-1/4 flex-grow">
        <img src={imgLocation} class="border-slate-300 object-fill" />
      </div>
    </div>
  </div>
  )
}

export default Project
