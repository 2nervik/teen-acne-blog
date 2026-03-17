import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Clear Skin Starts Here
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Practical, no-nonsense tips for moms and teens navigating acne
          together. From skincare routines to lifestyle changes &mdash;
          everything you need for clearer, healthier skin.
        </p>
      </section>

      {posts.length === 0 ? (
        <p className="text-gray-500">New posts coming soon!</p>
      ) : (
        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium uppercase tracking-wide text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                  {post.category}
                </span>
                <time className="text-sm text-gray-400">{post.date}</time>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block mt-3 text-sm font-medium text-teal-600 hover:text-teal-700"
              >
                Read more &rarr;
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
