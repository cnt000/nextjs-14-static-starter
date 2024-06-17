"use client";

import { patientIds } from "@/constants";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<null | { title: string; id: number }>(null);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/1`,
        { cache: "no-store" },
      );
      setData(await response.json());
    }
    getData();
  }, []);

  const router = useRouter();


  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="text-4xl relative flex place-items-center">
        HELLO YOUMEALS - HOME
      </div>
      <div className="text-2xl ">
        {data?.id || ""} {data?.title || ""}
      </div>
      <div className="text-xl">
        <select
          name="user"
          onChange={(e) => router.push(`/user/${e.target.value}`)}
          className="p-2 border border-gray-300 rounded-md"
        >
          {patientIds.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
      </div>
    </main>
  );
}
