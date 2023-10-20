import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex">
        <Sidebar playlists={[]} />
        <div className="flex-grow">Building...</div>
      </div>
    </main>
  );
}
