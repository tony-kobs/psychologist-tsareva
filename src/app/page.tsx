import { TopBar } from "@/components/layout/TopBar/TopBar";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { BackToTop } from "@/components/ui/BackToTop/BackToTop";
import { Hero } from "@/components/sections/Hero/Hero";
import { Values } from "@/components/sections/Values/Values";
import { About } from "@/components/sections/About/About";
import { Help } from "@/components/sections/Help/Help";
import { Groups } from "@/components/sections/Groups/Groups";
import { Certificates } from "@/components/sections/Certificates/Certificates";
import { Game } from "@/components/sections/Game/Game";
import { Reviews } from "@/components/sections/Reviews/Reviews";
import { Contacts } from "@/components/sections/Contacts/Contacts";
import { Gallery } from "@/components/sections/Gallery/Gallery";
import { Location } from "@/components/sections/Location/Location";

export default function HomePage() {
  return (
    <div className="page">
      <div id="top" />
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Values />
        <About />
        <Help />
        <Groups />
        <Certificates />
        <Game />
        <Reviews />
        <Contacts />
        <Gallery />
        <Location />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
