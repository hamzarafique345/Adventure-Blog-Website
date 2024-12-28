import React from 'react';
import { client } from '@/sanity/lib/client';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import CommentSection from '@/app/components/comment';

interface BlogPost {
  blogtitle: string;
  paragraph: string;
  imageUrl: string;
}

const BlogPostPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  // Resolve params as a Promise
  const resolvedParams = await params;
  const { id } = resolvedParams;

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
          <Image
            src={post.imageUrl || '/default-image.jpg'}
            alt={post.blogtitle}
            className="w-full h-96 object-cover rounded-lg mb-6"
            width={1000}
            height={1000}
          />
          <p className="text-lg leading-relaxed mb-4">
            <strong>{post.paragraph.slice(0, 100)}...</strong>

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus in accusantium quas doloremque veniam ducimus, omnis repellendus nostrum delectus, nisi labore, voluptate sint. Ipsa illo temporibus ea atque. Cupiditate, delectus maxime. Ipsa, culpa rerum?          </p>
     <br />
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aspernatur laudantium nobis aperiam, nemo quaerat sequi praesentium doloribus esse, ex voluptates aliquam deleniti voluptatibus. Quia ab officia quaerat, suscipit eum vitae in architecto incidunt. Magnam facilis quidem beatae maiores officia ratione animi laboriosam temporibus numquam qui, esse voluptas, dolor eveniet. Magni facilis numquam, explicabo nihil similique unde voluptate ex ipsa eligendi assumenda neque, ratione magnam adipisci. Id, atque voluptatibus? Officiis, temporibus ipsa itaque eius vitae quod saepe iusto! Distinctio aliquam nulla at necessitatibus rem? Dolorum omnis amet accusantium corrupti beatae molestiae fugiat officia incidunt sapiente voluptatem, sunt provident quasi.   </div>
    <CommentSection/>  </div>
      
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return <div>Failed to load blog post. Please try again later.</div>;
  }
};

export default BlogPostPage;
