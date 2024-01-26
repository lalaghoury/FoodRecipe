require("dotenv").config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

import { createClient } from "@supabase/supabase-js";

const supabase = createClient({
  url: supabaseUrl,
  key: supabaseKey,
});

export default supabase;
