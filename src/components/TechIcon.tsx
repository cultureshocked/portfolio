export interface Icon {
  iconLocation: string;
  name: string;
}

export const TechIcon = (props: Icon) => {
  return <div><img src={props.iconLocation} width="75" height="75"/><p>{props.name}</p></div>
}

export default TechIcon
