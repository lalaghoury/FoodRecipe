import React from "react";
import supabase from './supabaseClient';



const { data, error } = await supabase.storage.createBucket(
  'test-bucket',
  {
    // Optional settings:
    public: true, //(for public access),
    allowedMimeTypes: ['image/*'],//(restrict upload types),
    maxFileSize: '50MB' //(limit file size),
  }
);

if (error) {
  // Handle error
  console.error(error);
} else {
  console.log('Bucket created successfully!');
}


export default function Exp() {
  const handleUpload = async (e) => {
    let file;

    if (e.target.files) {
      file = e.target.files[0];
    }
    const { data, error } = await supabase.storage.from('images').upload('public/' + file.name, file);
    if (data) {
      console.log(data)
    } else if (error) {
      console.log(error)
    }
  };
  return (
    <div>
      <h1>Exp</h1>
    </div>
  );
}