import { createSignal } from "solid-js"
export interface Icon {
  iconLocation: string;
  name: string;
}

export const TechIcon = (props: Icon) => {
  const [hovered, setHovered] = createSignal<Boolean>(false);
  const handleHover = (e: any) => {
    setHovered(true);
  }
  const handleLeave = (e: any) => {
    setHovered(false);
  }
  const hoverClassesImg = () => {
    if (hovered()) {
      return "transform-none";
    }
    return "scale-125"
  }

  const hoverClassesText = () => {
    if (hovered()) {
      return "transform-none text-slate-900"
    }
    return "translate-y-1.5 text-slate-500"
  }
  return <div onmouseover={handleHover} onmouseleave={handleLeave} class="p-2 rounded-md bg-slate-200 shadow-xl m-2 hover:bg-slate-100 transition ease-in-out duration-200 w-32 flex flex-col justify-center items-center">
    <img src={props.iconLocation} width="75" height="75" class={`p-2 duration-200 ease-in-out transition-all ${hoverClassesImg()}`} />
    <h4 class={`font-semibold text-lg text-center duration-500 transition-all ease-in-out ${hoverClassesText()}`}>{props.name}</h4>
  </div>
}

export default TechIcon
