import Navbar from "@/components/Navbar";
import GunModCard from "@/components/GunModCard";
import { mockGunMods } from "@/data/mockGunMods";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">热门改装码</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGunMods.map((mod) => (
            <GunModCard key={mod.id} mod={mod} />
          ))}
        </div>
      </main>
    </div>
  );
}