import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <button 
              onClick={() => navigate("/categories")}
              className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              枪械分类
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索改装码..."
                className="border rounded-md py-1 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>
            <button className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">
              登录
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}