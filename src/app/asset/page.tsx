"use client";

import { useEffect, useState } from "react";

export default function Page(props: any) {
  const [data, setData] = useState<null | any>(null);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${props.searchParams.id.substr(0, 1)}`,
      );
      setData(await response.json());
    }
    getData();
  }, []);

  return (
    <>
      <h1>DATA:</h1>
      <p>non funziona in prod</p>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}
