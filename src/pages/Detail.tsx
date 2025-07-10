import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { mockGunMods } from "@/data/mockGunMods";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const mod = mockGunMods.find(mod => mod.id === id);
  
  if (!mod) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">改装码不存在</h2>
          <button 
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
          >
            返回
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-orange-500 hover:text-orange-600 mb-6 transition-colors"
        >
          <i className="fa-solid fa-arrow-left mr-2"></i>
          返回
        </button>
        
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{mod.name}</h2>
              <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                <span>作者: {mod.author}</span>
                <span>创建日期: {mod.createDate}</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  {mod.category}
                </span>
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold text-orange-600 mb-4">详细配置</h3>
            <pre className="whitespace-pre-wrap font-sans bg-gray-50 p-4 rounded-md">{mod.content}</pre>
          </div>
          
          {mod.attachments.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-orange-600 mb-4">附件</h3>
              <ul className="space-y-2">
                {mod.attachments.map((attachment, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fa-solid fa-file-lines text-gray-400 mr-2"></i>
                    <span className="text-gray-700">{attachment}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
