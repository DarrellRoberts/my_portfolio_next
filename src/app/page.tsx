import Header from "@/app/components/Header";
import Hero from "@/app/components/hero/Hero";
import About from "@/app/components/about/About";
import Project from "@/app/components/project/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <html>
      <body>
        <Header />
        <main>
          <Hero />
          <About />
          <Project />
          <Skills />
        </main>
        <footer>
          <Contact />
        </footer>
      </body>
    </html>
  );
}
