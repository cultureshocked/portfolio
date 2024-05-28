import ProjectList from "../components/ProjectList"
import TechList from "../components/TechList"
import { Icon } from "../components/TechIcon"
import Profile from "../components/Profile"
import Footer from "../components/Footer"

const Home = () => {

  const proficientTechnologies: Icon[] = [
    {name: "C", iconLocation: "./svg/c.svg"},
    {name: "Ruby", iconLocation: "/svg/ruby.svg"},
    {name: "gcc", iconLocation: "/svg/gnu.svg"},
    {name: "Neovim", iconLocation: "/svg/neovim.svg"},
    {name: "Linux", iconLocation: "/svg/linux.svg"},
    {name: "CMake", iconLocation: "/svg/cmake.svg"},
  ];

  const familiarTechnologies: Icon[] = [
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

  return <>
    <div class="h-4"></div>
    <Profile imgLocation="https://avatars.githubusercontent.com/u/59343709?v=4" />
    <ProjectList anchor={"projects"} >Here's some stuff I've built:</ProjectList>
    <TechList anchor={"tech"} technologies={proficientTechnologies}>
      I'm proficient with:
    </TechList>
    <TechList technologies={familiarTechnologies}>
      I'm familiar with:
    </TechList>
    <Footer />
  </>
}

export default Home
