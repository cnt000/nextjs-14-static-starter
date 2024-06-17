"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<null | { title: string; id: number }>(null);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=6",
      );
      setData(await response.json());
    }
    getData();
  }, []);

  return (
    <>
      <h1>DATA:</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}
