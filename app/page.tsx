import { FloatingNav } from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Expierence from "@/components/Expierence";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function Home() {
  return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
          <div className="max-3-7xl w-full">
            <FloatingNav navItems={navItems} />
            <Hero/>
            <Grid/>
            <RecentProjects/>
            <Clients />
            <Expierence />
            <Process />
            <Footer />
          </div>
        </main>
  );
}
