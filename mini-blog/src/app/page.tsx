import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const posts = [
    { id: "1", title: "Getting Started with Next.js", img: "/next.png" },
    { id: "2", title: "Why Next.js is Awesome", img: "/next.png" },
    { id: "3", title: "Deploying Next.js on Vercel", img: "/next.png" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Next.js Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "20px" }}>
            <Image src={post.img} alt={post.title} width={80} height={80} />
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
