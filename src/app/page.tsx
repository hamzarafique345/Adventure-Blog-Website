import Bestplaces from "./components/bestplaces";
import { MyblogPage } from "./components/blogasyc";
import { Carousel1 } from "./components/carousel";
import Footer from "./components/footer";
import Homepage from "./components/homepage";
import { SocialCategory } from "./components/insta";
import { Myblog } from "./components/myblog";
import FeaturePage from "./components/sanityfeature";
import Video from "./components/video";

export default async function Home() {
  const data = await MyblogPage()
  return (
<div >
<Homepage/>
<Carousel1/>
<FeaturePage/>
<Myblog data={data}/>
<Bestplaces/>
<Video/>
<SocialCategory/>
<Footer/>
</div>
  );
}
