import Core from "@/components/Core";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <div className="py-10"></div>
      <Core />
      <div className="py-10"></div>
      <Tech />
      <div className="py-10"></div>
      <Projects />
      <div className="py-10"></div>
      <Contact />
    </>
  );
}
