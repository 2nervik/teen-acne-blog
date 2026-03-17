import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Teen Acne Solutions`,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <Link
        href="/"
        className="text-sm text-gray-400 hover:text-gray-600 mb-8 inline-block"
      >
        &larr; Back to all posts
      </Link>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-medium uppercase tracking-wide text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
          {post.category}
        </span>
        <time className="text-sm text-gray-400">{post.date}</time>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{post.title}</h1>
      <div
        className="prose prose-gray prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-teal-600"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
