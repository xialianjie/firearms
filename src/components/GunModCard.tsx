import { useNavigate } from "react-router-dom";
import { GunMod } from "@/data/mockGunMods";

interface GunModCardProps {
  mod: GunMod;
}

export default function GunModCard({ mod }: GunModCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/detail/${mod.id}`)}
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-lg font-semibold text-gray-800">{mod.name}</h3>
      <div className="mt-2 flex justify-between text-sm text-gray-500">
        <span>作者: {mod.author}</span>
        <span>{mod.createDate}</span>
      </div>
      <div className="mt-2">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
          {mod.category}
        </span>
      </div>
    </div>
  );
}