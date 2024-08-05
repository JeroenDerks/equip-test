import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Usage: Page router

const testPaths = [
  { params: { id: "1" } },
  { params: { id: "2" } },
  { params: { id: "3" } },
];

export const getStaticPaths = (async () => {
  return {
    paths: testPaths,
    fallback: false, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  return { props: { id: context?.params?.id } };
}) satisfies GetStaticProps;

export default function Page({
  id,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [pow, setPower] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        if (typeof id === "string") {
          const res = await fetch(
            "https://equip-test.vercel.app/api/test-fetch",
            {
              method: "POST",
              body: id,
            }
          );

          console.log({ res });

          if (!res.ok) return;
          const result = await res.json();
          console.log({ result });
          setPower(result.pow);
        }
      } catch (err) {
        console.error(JSON.stringify(err));
      }
    };
    getData();
  }, [id]);

  return (
    <div className="px-4 py-10">
      <button onClick={() => router.back()}>back</button>
      <h1>Dynamic route for id: {id}</h1>
      <p>Fetch result = pow of id: {pow}</p>
    </div>
  );
}
