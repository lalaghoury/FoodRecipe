import React from "react";
// import { createClient } from '@supabase/supabase-js';
import supabase from './supabaseClient';


// import { supabase } from "./supabaseClient.js";

// const supabase = createClient({
//   url: 'https://cyvtgpuztblppqsydqjp.supabase.co',
//   key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5dnRncHV6dGJscHBxc3lkcWpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyNjk0NjMsImV4cCI6MjAyMTg0NTQ2M30.hh3cFM_LrK9tNXv_2piPFk20MhcvQT--wgkYpnCbba8',
// });


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