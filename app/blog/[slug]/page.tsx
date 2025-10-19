// Although we use generateStaticParams() we still need to refresh data once in a while, so revalidate it every 420 secs.
export const revalidate = 420;

interface Post {
  title: string;
  slug: string;
  content: string;
}
interface Props {
  params: { slug: string };
}

// Pregenerate data that almost never changes (perf optimization)
export async function generateStaticParams() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPage({ params }: Props) {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );
  const post = posts.find((post) => post.slug === params.slug)!;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
