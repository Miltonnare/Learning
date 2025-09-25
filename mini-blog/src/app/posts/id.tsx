import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Blog Post #{id}</h2>
      <p>This is the content for post {id}.</p>
    </div>
  );
}
