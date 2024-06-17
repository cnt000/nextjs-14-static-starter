async function getComments() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=6",
  );
  const comments = await res.json();

  return comments;
}

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export default async function Page2() {
  const comments = await getComments();

  return (
    <>
      <h1>STATIC PAGE</h1>
      {comments.map((comment: Comment) => (
        <div key={comment.id}>- {comment.name}</div>
      ))}
    </>
  );
}
