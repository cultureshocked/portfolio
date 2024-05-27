export interface Icon {
  iconLocation: string;
  name: string;
}

export const TechIcon = (props: Icon) => {
  return <div class="p-2 rounded-md bg-slate-200 shadow-xl m-2 hover:bg-slate-100 transition ease-in-out duration-200 w-32 flex flex-col justify-center items-center">
    <img src={props.iconLocation} width="75" height="75" class="p-2" />
    <h4 class="font-semibold text-lg text-center">{props.name}</h4>
  </div>
}

export default TechIcon
