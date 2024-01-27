import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://przngajjwwvpyqdplgfs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByem5nYWpqd3d2cHlxZHBsZ2ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzMjUxNjgsImV4cCI6MjAyMTkwMTE2OH0.nz-jWxsF_VGE8iG6rDAcaAfYeBVsktRGl9dX2oZvKjQ"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
