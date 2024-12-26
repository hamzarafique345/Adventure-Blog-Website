import Bestplaces from "./components/bestplaces";
import { MyblogPage } from "./components/blogasyc";
import Homepage from "./components/homepage";
import { SocialCategory } from "./components/insta";
import HomePage from "./components/myblog";
import FeaturePage from "./components/sanityfeature";
import Video from "./components/video";
import { Carousel1 } from "./components/carousel";

export default async function Home() {
  const data = await MyblogPage()
  return (
<div >
<Homepage/>
<Carousel1/>
<HomePage data={data}/>
<FeaturePage/>

<Bestplaces/>
<Video/>
<SocialCategory/>

</div>
  );
}
