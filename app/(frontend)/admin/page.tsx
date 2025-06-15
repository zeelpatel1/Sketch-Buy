"use client";

import React, { useState } from 'react';
import ImageButton from '@/app/components/UploadButton';

type FileState = {
  title: string;
  artist: string;
  price: string;
  image: string;
};

const AdminPage = () => {
  const [files, setFiles] = useState<FileState>({
    title: '',
    artist: '',
    price: '',
    image: '',
  });

  const isFormValid = files.title && files.artist && files.price && files.image;

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFiles((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(files);

    const res=await fetch('/api/createSketch',{
      method:'POST',
      body:JSON.stringify({
        title:files.title,
        imageUrl:files.image,
        price:files.price,
        artist:files.artist
      })
    })
    const data=await res.json()
    console.log(data)
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Add New Sketch
      </h2>

      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="p-2 border rounded-lg"
          onChange={handleEdit}
        />

        <input
          type="text"
          placeholder="Artist"
          name="artist"
          className="p-2 border rounded-lg"
          onChange={handleEdit}
        />

        <input
          type="number"
          placeholder="Price"
          name="price"
          className="p-2 border rounded-lg"
          onChange={handleEdit}
        />

        <ImageButton
          onUploadComplete={(url: string) =>
            setFiles((prev) => ({
              ...prev,
              image: url,
            }))
          }
        />
        <button
          type="submit"
          disabled={!isFormValid}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
