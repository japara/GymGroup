import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ylzgfzyvohnqdlzlxrfw.supabase.co";
const supabaseKey =
  process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlsemdmenl2b2hucWRsemx4cmZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3MTQ1OTUsImV4cCI6MjA0MzI5MDU5NX0
    .cjt8IyzvWTZwln0Fj - Y9_588_1c8evQAKs5ujlBwQrM;
export const supabase = createClient(supabaseUrl, supabaseKey);
