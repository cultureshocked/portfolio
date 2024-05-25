import { TechIcon, Icon } from "./TechIcon"

interface TechnologiesList {
  title: string;
  technologies: Icon[];
}

const TechList = (props: TechnologiesList) => {
  return <div>
    <h3>{props.title}</h3>

    <div class="flex">{props.technologies.map( (elem) => <TechIcon name={elem.name} iconLocation={elem.iconLocation} /> ) }</div>
  </div>
}

export default TechList
