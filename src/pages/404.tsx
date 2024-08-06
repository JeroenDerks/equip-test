import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => router.back()}>back</button>

      <h2>404 - Page Not Found</h2>
    </>
  );
}
