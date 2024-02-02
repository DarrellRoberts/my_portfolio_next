import LanguageToggle from "../LanguageToggle"
import HeroDE from "../components copy/HeroFolderDE/Hero"
import AboutDE from "../components copy/AboutFolderDE/About"
import SkillsDE from "../components copy/SkillsFolderDE/Skills"
import ContactDE from "../components copy/ContactFolderDE/Contact"
import dynamic from "next/dynamic"

const NoSSRProjectsDE = dynamic(() => import("../components copy/ProjectsFolderDE/Projects"), { ssr: false})
const NoSSRHeaderDE = dynamic(() => import("../components copy/HeaderDE"), { ssr: false})

export default function HomeDE() {

return (
<html>
    <body>
        <NoSSRHeaderDE />
        <main>
          <HeroDE />
          <LanguageToggle />
          <AboutDE />
          <NoSSRProjectsDE />
          <SkillsDE />
        </main>
        <footer>
          <ContactDE />
        </footer>
      </body>
</html>
)
} 