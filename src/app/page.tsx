"use client";

import Header from "@/app/components/Header"
import Hero from "@/app/components/hero/Hero"
import About from "@/app/components/about/About"


export default function Home() {
  return (
    <html>
      <body>
        <Header />
          <main className="">
            <Hero />
            <About />
          </main>
      </body>
    </html>
  );
}
