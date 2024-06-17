// Componentss
import Header from "@/Components/Header";
import GifGrid from "@/Components/GifGrid";
import NarrativeBlock from "@/Components/NarrativeBlock";
import Videos from "@/Components/Videos";

export default function Home() {
  return (
    <main className="bg-#EFF4F8 bg-white scroll-smooth overflow-x-hidden relative flex flex-col items-center max-w-screen">
      <Header />
      <GifGrid />
      <NarrativeBlock />
      <Videos />
    </main>
  );
}
