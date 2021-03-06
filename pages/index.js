import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import {
  getBanner,
  getAllPostsForHome,
  getAllPostsWithSlug,
  getTestPosts,
} from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Banner from "./banner";

export default function Index({ preview, allPosts, allBanners }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const banner = allBanners[0];
  return (
    <>
      {console.log(allBanners)}
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          {banner && (
            <Banner
              callToAction={banner.callToAction}
              image={banner.image}
              text={banner.text}
            />
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  const allBanners = (await getBanner(preview)) ?? [];

  return {
    props: { preview, allPosts, allBanners },
  };
}
