import React, { createContext, useContext, useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { nanoid } from "nanoid";

const SupabaseContext = createContext();

export const SupabaseProvider = ({ children }) => {
  const CDNURL =
    "https://przngajjwwvpyqdplgfs.supabase.co/storage/v1/object/public/images/";
  const [images, setImages] = useState([]);
  const user = useUser();
  const supabase = useSupabaseClient();

  async function getImages() {
    const { data, error } = await supabase.storage
      .from("images")
      .list(user?.id + "/", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    if (data !== null) {
      console.log("data", data);
      setImages(data);
    } else {
      console.log("error", error);
    }
  }
  useEffect(() => {
    if (user) {
      getImages();
    }
  }, [user]);
  async function signIn() {
    const { data, error } = await supabase.auth.signInWithOtp({ email });
    if (error) console.log("error", error);
  }
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) console.log("error", error);
  }
  async function uploadImage(e) {
    let file = e.target.files[0];

    const { data, error } = await supabase.storage
      .from("images")
      .upload(user.id + "/" + nanoid(), file);

    if (data) {
      getImages();
    } else {
      console.log("error", error);
    }
  }
  return (
    <SupabaseContext.Provider
      value={{
        signIn,
        signOut,
        uploadImage,
        getImages,
        images,
        setImages,
        CDNURL,
        user,
        supabase
      }}
    >
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
