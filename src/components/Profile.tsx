import { Markdown, renderObject } from "./Markdown"
import { Badge } from "./Badge"
import { ContactBadges, getGithubAvatarURL } from "../globals"
import { createSignal, onMount, Show } from "solid-js"

const profileRenderer: renderObject = {
  heading(text: string, level: number) {
    return `<h${level} class="pb-10 font-black text-4xl">${text}</h${level}>`
  },
  listitem(text: string) {
    return `<li class="pl-5">${text}</li>`
  },
  paragraph(text: string) {
    return `<p class="p-2">${text}</p>`
  }
}

const Profile = (props: any) => {
  const [avatarURL, setAvatarURL] = createSignal<string>("");

  console.log(avatarURL());

  onMount(async () => {
    const avatar = await getGithubAvatarURL();
    setAvatarURL(avatar);
  });

  return (
    <div class="p-10 bg-slate-100 rounded-xl max-w-5xl m-auto my-32 shadow-xl">
      <div class="flex space-between">
        <div class="flex-grow">
          <Markdown fileName="/ABOUT.md" renderOptions={profileRenderer}/>
        </div>
        <div class="max-w-lg max-h-lg">
          <Show when={avatarURL().length > 0} fallback={<div class="bg-gray-200 rounded-full w-max h-max"></div>}>
            <img src={props.imgLocation} class="object-fill rounded-full" />
          </Show>
        </div>
      </div>
      <br></br>
      Contact me via LinkedIn, GitHub, or E-Mail.
      <div class="flex">
        {ContactBadges.map((elem) => {
          return <Badge badgeData={elem} />
        })}
      </div>
    </div>
  )
}

export default Profile
