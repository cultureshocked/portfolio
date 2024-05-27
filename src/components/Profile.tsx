import { Markdown, renderObject } from "./Markdown"

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

interface badgeItem {
  text: string;
  color: string;
  logo: string;
  URL: string;
};

const badges: badgeItem[] = [
  {text: "cultureshocked", color: "111111", logo: "github", URL: "https://github.com/cultureshocked"},
  {text: "conradfitzg", color: "0A66C2", logo: "linkedin", URL: "https://linkedin.com/in/conradfitzg"},
];

const Profile = (props: any) => {
  return (
    <div class="p-10 bg-slate-100 rounded-xl max-w-5xl m-auto my-10 shadow-xl">
      <div class="flex space-between">
        <div class="flex-grow">
          <Markdown fileName="/ABOUT.md" renderOptions={profileRenderer}/>
        </div>
        <div class="max-w-lg max-h-lg">
          <img src={props.imgLocation} class="object-fill rounded-full" />
        </div>
      </div>
      Contact me via LinkedIn, GitHub, or E-Mail.
      <div class="flex">
        {badges.map((elem) => {
          return <a href={elem.URL} class="m-1">
            <img src={`https://img.shields.io/badge/${elem.text}-${elem.color}?style=for-the-badge&logo=${elem.logo}&logoColor=ffffff`} />
          </a>
        })}
      </div>
    </div>
  )
}

export default Profile