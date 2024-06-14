import ProjectList from "../components/ProjectList"
import TechList from "../components/TechList"
import { Icon } from "../components/TechIcon"
import Profile from "../components/Profile"
import Footer from "../components/Footer"
import { ProficientIcons, FamiliarIcons } from "../globals"

const Home = () => {

  return <>
    <div class="h-4"></div>
    <Profile imgLocation="https://avatars.githubusercontent.com/u/59343709?v=4" />
    <ProjectList anchor={"projects"} >Here's some stuff I've built:</ProjectList>
    <TechList anchor={"tech"} technologies={ProficientIcons}>
      I'm proficient with:
    </TechList>
    <TechList technologies={FamiliarIcons}>
      I'm familiar with:
    </TechList>
    <Footer />
  </>
}

export default Home
