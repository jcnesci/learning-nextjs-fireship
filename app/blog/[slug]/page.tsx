interface Post {
  title: string;
  slug: string;
  content: string;
}
interface Props {
  params: { slug: string };
}
export default async function BlogPage({ params }: Props) {
  const posts: Post[] = await fetch("http://localhost:3000/api/content", {
    cache: "no-cache",
  }).then((res) => res.json());
  const post = posts.find((post) => post.slug === params.slug)!;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
