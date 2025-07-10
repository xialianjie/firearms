import Navbar from "@/components/Navbar";
import { mockCategories } from "@/data/mockCategories";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">枪械分类</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(`/detail/${category.id}`)}
              className="bg-white rounded-lg shadow-sm p-6 cursor-pointer border border-transparent hover:border-orange-500 transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                <i className={`fa-solid ${category.icon} text-orange-500 text-xl`}></i>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} 个改装码</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}