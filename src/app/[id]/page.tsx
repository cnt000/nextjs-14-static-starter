// `app` directory
import PostLayout from "@/components/post-layout";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

type PostParams = { id: string };

async function getPost(params: PostParams) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`,
  );
  const post = await res.json();

  return post;
}

export default async function Post({ params }: { params: PostParams }) {
  const post = await getPost(params);

  return <PostLayout post={post} />;
}
