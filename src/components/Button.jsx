import Modal from "../Modal/Modal";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="px-10 py-5 bg-gray-400 rounded-md flex items-center"
        onClick={() => setOpen(true)}
      >
        Open
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        {" "}
        <h1 className="text-2xl">Modal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas numquam
          architecto ipsam accusantium a earum explicabo. Sit provident nulla,
          quibusdam numquam pariatur sapiente, nobis veniam ab porro magnam,
          perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Earum tenetur magnam nostrum quod quis repudiandae, accusamus corporis
          laborum aliquid libero itaque harum! Adipisci omnis nostrum, labore
          dignissimos fugiat laudantium exercitationem?
        </p>
      </Modal>
    </div>
  );
}
