import { client } from "@/sanity/lib/client";


export async function MyblogPage() {
 
    const data = await client.fetch(
      `*[_type == "bloglatest"]{
        blogtitle,
        paragraph,
        "imageUrl": image.asset->url,
        slug
      }`)
  

    // Ensure data is always an array
    return data;
}