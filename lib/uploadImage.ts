import { supabase } from "@/lib/lib/supabase";

export async function uploadImage(file: File) {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random()
    .toString(36)
    .substring(2)}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("news-images")
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw new Error("Không upload được ảnh: " + error.message);
  }

  const { data: publicUrlData } = supabase.storage
    .from("news-images")
    .getPublicUrl(data.path);

  return publicUrlData.publicUrl;
}