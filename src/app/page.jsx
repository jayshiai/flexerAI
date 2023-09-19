import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
      <About />
      <Events />
    </main>
  );
}
