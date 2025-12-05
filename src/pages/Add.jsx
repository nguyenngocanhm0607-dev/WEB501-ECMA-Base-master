import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function AddPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [available, setAvailable] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("tour nội địa");
  const [active, setActive] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !price.trim() || !description.trim() || !image.trim()) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    try {
      await axios.post("http://localhost:3001/tours", {
        name,
        price: Number(price),
        description,
        image,
        available: Number(available),
        duration,
        category,
        active,
      });

      toast.success("Thêm tour thành công!");


      setName("");
      setPrice("");
      setDescription("");
      setImage("");
      setAvailable("");
      setDuration("");
      setCategory("tour nội địa");
      setActive(true);
    } catch (err) {
      toast.error("Lỗi khi thêm tour");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Thêm Tour</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Tên tour"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Giá"
          className="border p-2 w-full"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <textarea
          placeholder="Mô tả"
          className="border p-2 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Ảnh (URL)"
          className="border p-2 w-full"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          type="number"
          placeholder="Còn lại"
          className="border p-2 w-full"
          value={available}
          onChange={(e) => setAvailable(e.target.value)}
        />

        <input
          type="text"
          placeholder="Thời lượng (ví dụ: 3 ngày 2 đêm)"
          className="border p-2 w-full"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <select
          className="border p-2 w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="tour nội địa">Tour nội địa</option>
          <option value="tour quốc tế">Tour quốc tế</option>
        </select>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
          Kích hoạt
        </label>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Thêm Tour
        </button>
      </form>
    </div>
  );
}

export default AddPage;
