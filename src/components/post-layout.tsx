type PostLayoutProps = {
  post: { id: number; title: string };
};

export default function PostLayout({ post }: PostLayoutProps) {
  return (
    <div>
      {post.id} = {post.title}
    </div>
  );
}
