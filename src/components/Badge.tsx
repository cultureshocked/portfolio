import { Show } from "solid-js"

export interface badgeObject {
  text: string;
  logo: string;
  color: string;
  URL?: string;
  alt?: string;
}

interface badgeProps {
  badgeData: badgeObject;
}

export const Badge = (props: badgeProps) => {
  const badgeImg = <img src={`https://img.shields.io/badge/${props.badgeData.text}-${props.badgeData.color}?style=for-the-badge&logo=${props.badgeData.logo}&logoColor=ffffff`} />
  return (
    <div class="p-1">
      <Show when={props.badgeData.URL} fallback={badgeImg}><a href={props.badgeData.URL}>{badgeImg}</a></Show>
    </div>
  )
}
