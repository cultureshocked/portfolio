import { TechIcon, Icon } from "./TechIcon"
import type { JSX } from "solid-js"
import FadeIn from "./FadeIn"

interface TechnologiesList {
  technologies: Icon[];
  children: JSX.Element;
  anchor?: string;
}

const TechList = (props: TechnologiesList) => {
  return <div class="m-auto my-16 w-2/3">
    <h1 class="font-bold text-3xl text-center scroll-smooth" id={props.anchor} >{props.children}</h1>
    <div class="flex justify-center flex-wrap">{props.technologies.map( (elem) => <FadeIn><TechIcon name={elem.name} iconLocation={elem.iconLocation} /></FadeIn> ) }</div>
  </div>
}

export default TechList
