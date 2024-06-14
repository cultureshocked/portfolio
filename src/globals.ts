import type { Icon } from "./components/TechIcon"
import type { BadgeObject } from "./components/Badge"

export const GITHUB_USERNAME: string = "cultureshocked";
export const GITHUB_URL: string = `https://www.github.com/${GITHUB_USERNAME}/`;

export const getGithubAvatarURL = async (): Promise<string> => {
  const raw = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
  const json = await raw.json();
  return json.avatar_url;
}

export const LINKEDIN_USERNAME: string = "conradfitzg";
export const LINKEDIN_URL: string = `https://linkedin.com/in/${LINKEDIN_USERNAME}/`;

export const ProficientIcons: Icon[] = [
  {name: "C", iconLocation: "./svg/c.svg"},
  {name: "Ruby", iconLocation: "/svg/ruby.svg"},
  {name: "gcc", iconLocation: "/svg/gnu.svg"},
  {name: "Neovim", iconLocation: "/svg/neovim.svg"},
  {name: "Linux", iconLocation: "/svg/linux.svg"},
  {name: "CMake", iconLocation: "/svg/cmake.svg"},
];

export const FamiliarIcons: Icon[] = [
  {name: "C++", iconLocation: "/svg/cplusplus.svg"},
  {name: "CE", iconLocation: "/svg/compilerexplorer.svg"},
  {name: "TypeScript", iconLocation: "/svg/typescript.svg"},
  {name: "JavaScript", iconLocation: "/svg/javascript.svg"},
  {name: "SolidJS", iconLocation: "/svg/solid.svg"},
  {name: "React", iconLocation: "/svg/react.svg"},
  {name: "Tailwind", iconLocation: "/svg/tailwindcss.svg"},
  {name: "Python", iconLocation: "svg/python.svg"},
  {name: "NumPy", iconLocation: "/svg/numpy.svg"},
  {name: "Rust", iconLocation: "/svg/rust.svg"},
  {name: "Rails", iconLocation: "/svg/rubyonrails.svg"},
  {name: "Git", iconLocation: "/svg/git.svg"},
];

export const ContactBadges: BadgeObject[] = [
  {text: GITHUB_USERNAME, color: "111111", logo: "github", URL: GITHUB_URL},
  {text: LINKEDIN_USERNAME, color: "0A66C2", logo: "linkedin", URL: LINKEDIN_URL},
];
