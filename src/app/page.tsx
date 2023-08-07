import Header from "@/components/home/header";
import AboutMe from "@/components/home/about-me";
import Experiments from "@/components/home/experiments";
import Portrait from "@/components/home/portrait";
import Footer from "@/components/shared/footer";

// Home page
export default function Home() {
  return (
    <div>
      <Header />

      {/* Top section */}
      <div className="border-b border-gray-500">
        <div className="mx-auto grid max-w-8xl grid-cols-12 px-4 xs:px-10">
          <AboutMe />
          <Experiments />
          <Portrait />
        </div>
      </div>

      <Footer />
    </div>
  );
}
