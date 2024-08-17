// Componentss
import Header from "@/Components/Header";
import GifGrid from "@/Components/GifGrid";
import NarrativeBlock from "@/Components/NarrativeBlock";
import Videos from "@/Components/Videos";
import Galeria from "./Components/Galeria";
import GifThree from "./Components/GifThree";
import Footer from "./Components/Footer";
import Comparação from "./Components/Comparação";
import Soundtrack from "./Components/Soundtrack";
import Franchise from "./Components/Franchise";

export default function Home() {
  return (
    <main className="bg-#EFF4F8 bg-white scroll-smooth overflow-x-hidden relative flex flex-col gap-6 items-center tv:justify-center max-w-screen min-h-screen">
      <Header />
      <GifGrid />
      <NarrativeBlock />
      <Videos />
      <Galeria />
      <Comparação />
      <GifThree />
      <Soundtrack />
      <Franchise />
      <Footer />
    </main>
  );
}
