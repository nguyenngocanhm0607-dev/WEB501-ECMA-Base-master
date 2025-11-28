import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AddPage() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    available: "",
    duration: "",
    category: "tour nội địa",
    active: true,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!formData.name || !formData.price) {
      toast.error("Vui lòng nhập tên và giá tour");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:3001/tours", {
        ...formData,
        price: Number(formData.price),
        available: Number(formData.available),
      });
      toast.success("Thêm tour thành công!");
      // Reset form
      setFormData({
        name: "",
        price: "",
        description: "",
        image: "",
        available: "",
        duration: "",
        category: "tour nội địa",
        active: true,
      });
    } catch (err) {
      toast.error("Lỗi thêm tour: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Thêm Tour Mới</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-medium mb-1">Tên Tour</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div>
          <label className="block font-medium mb-1">Giá</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div>
          <label className="block font-medium mb-1">Mô tả</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div>
          <label className="block font-medium mb-1">Ảnh (URL)</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div>
          <label className="block font-medium mb-1">Còn lại</label>
          <input
            type="number"
            name="available"
            value={formData.available}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Thời lượng</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div>
          <label className="block font-medium mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="active"
            checked={formData.active}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
          />
          <label className="text-gray-700">Kích hoạt</label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {loading ? "Đang thêm..." : "Thêm Tour"}
        </button>̉
      </form>
    </div>
  );
}
