import LanguageToggle from "./LanguageToggle";
import Hero from "@/app/components/hero/Hero";
import About from "@/app/components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import dynamic from "next/dynamic"

const NoSSRProjects = dynamic(() => import("./components/project/Projects"), { ssr: false})
const NoSSRHeader = dynamic(() => import("./components/Header"), { ssr: false})

export default function Home() {
  return (
    <html>
      <body>
        <NoSSRHeader />
        <main>
          <LanguageToggle />
          <Hero />
          <About />
          <NoSSRProjects />
          <Skills />
        </main>
        <footer>
          <Contact />
        </footer>
      </body>
    </html>
  );
}
