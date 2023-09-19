import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import FindMore from "@/components/FindMore";
import EventsGrid from "@/components/bytes/EventsGrid";
import Speakers from "@/components/Speakers";
import SpeakerCard from "@/components/bytes/SpeakerCard";
import SpeakersGrid from "@/components/SpeakersGrid";
import Venue from "@/components/Venue";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
      <About />
      <Events />
      <EventsGrid />
      <FindMore />
      <Speakers />
      <Venue />
    </main>
  );
}
