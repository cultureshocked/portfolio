import { Markdown, renderObject } from "./Markdown"

interface ProjectProps {
  fileName: string;
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

  return <div class="p-2">
    <Markdown renderOptions={descriptionRenderer} fileName={props.fileName} />
  </div>
}

export default Project
