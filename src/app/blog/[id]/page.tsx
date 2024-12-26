import React from 'react';
import { client } from '@/sanity/lib/client';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

interface BlogPost {
  blogtitle: string;
  paragraph: string;
  imageUrl: string;
}

const BlogPostPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  if (!id) {
    return <div>Error: Invalid ID</div>;
  }

  try {
    const post: BlogPost | null = await client.fetch(
      `*[_type == "bloglatest" && slug.current == $id][0]{
        blogtitle,
        paragraph,
        "imageUrl": image.asset->url
      }`,
      { id }
    );

    if (!post) return <div>Post not found.</div>;

    return (
      <div className="bg-gray-100 text-gray-800">
        {/* Navbar Section */}
        <div className="bg-gray-600 text-white">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center px-4 py-2 gap-4">
            {/* Logo */}
            <div className="text-center">
              <h1 className="text-[15px] font-bold leading-3">
                <strong className="text-yellow-400">Ha</strong>mza Trav
                <strong className="text-yellow-400">el</strong> <br />
                <strong className="text-sky-200">Guide</strong>
              </h1>
            </div>
            {/* Search Bar */}
            <div className="w-full sm:w-auto">
              <input
                type="text"
                className="rounded-full text-black border-2 border-slate-500 placeholder:text-sm placeholder:pl-3 w-full sm:w-80 h-8"
                placeholder="Search Your Option"
              />
            </div>
            {/* Social Icons */}
            <div className="flex gap-4">
              <FaFacebook className="text-blue-600 hover:text-blue-700 w-6 h-6 hover:scale-110" />
              <FaTwitter className="text-sky-600 hover:text-sky-700 w-6 h-6 hover:scale-110" />
              <FaInstagram className="text-pink-500 hover:text-pink-600 w-6 h-6 hover:scale-110" />
              <FaYoutube className="text-red-500 hover:text-red-600 w-6 h-6 hover:scale-110" />
            </div>
          </div>
          <div className="h-[1px] bg-slate-300"></div>

          {/* Navigation Links */}
          <div className="flex justify-center mt-2 flex-wrap">
            <ul className="flex flex-wrap space-x-6 text-sm sm:text-lg font-medium">
              <li>
                <Link href="/" className="hover:scale-110 transition-transform">Home</Link>
              </li>
              <li>
                <Link href="#" className="hover:scale-110 transition-transform">About Me</Link>
              </li>
              <li>
                <Link href="#carouselpage" className="hover:scale-110 transition-transform">Category</Link>
              </li>
              <li>
                <Link href="#blog" className="hover:scale-110 transition-transform">Blog</Link>
              </li>
              <li>
                <Link href="#" className="hover:scale-110 transition-transform">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-screen-lg mx-auto mt-12 p-6 rounded-lg shadow-lg pb-10">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">{post.blogtitle}</h1>
          <img
            src={post.imageUrl || '/default-image.jpg'}
            alt={post.blogtitle}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
          <p className="text-lg leading-relaxed mb-4">
            <strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
          </p>
          <p className="text-lg leading-relaxed">
            Nulla facilisi. Fusce nec tellus non mi molestie gravida. Nam auctor massa nec venenatis pretium. Proin id
            tellus convallis, mattis arcu ut, ultrices nisl. Duis tristique lorem a magna viverra, id ultrices mauris
            accumsan.
          </p>
          <p className="text-lg leading-relaxed">
            Sed vel fermentum elit. Integer at posuere elit, sed ornare erat. Donec non erat nec lectus gravida faucibus
            at non libero. In in fermentum odio. Duis efficitur tincidunt sapien quis convallis. Mauris a felis at dolor
            vehicula luctus sed sit amet lorem. Donec scelerisque arcu velit, quis laoreet mi dignissim non.
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return <div>Failed to load blog post. Please try again later.</div>;
  }
};

export default BlogPostPage;
