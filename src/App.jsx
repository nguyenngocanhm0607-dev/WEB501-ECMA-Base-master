import { Toaster } from "react-hot-toast";
import List from "./pages/List";   // <== nhớ import

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-semibold hover:text-yellow-200">
            <strong>GA Clothers</strong>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-red-400">Trang chủ</a>
            <a href="#" className="hover:text-red-400">Danh sách</a>
            <a href="#" className="hover:text-red-400">Thêm mới</a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-red-400">Đăng nhập</a>
            <a href="#" className="hover:text-red-400">Đăng ký</a>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB501</h1>
        <p className="text-lg text-gray-600">Ứng dụng quản lý dữ liệu</p>
      </div>

      <Toaster />
    </>
  );
}

export default App;
