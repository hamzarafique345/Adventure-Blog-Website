// Server Component (FeaturePage.tsx)
import Feature from "../../app/components/feature"
import { client } from '@/sanity/lib/client';

async function DataFeature() {
  const fetch = await client.fetch(`*[_type == "featured"]{
    text,
    "imageUrl": image.asset->url,
    paragraph
  }`);
  return fetch;
}

export default async function FeaturePage() {
  const data = await DataFeature();

  return (
    <Feature data={data} />
  );
}
