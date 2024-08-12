import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Usage: Page router
import { Capacitor } from "@capacitor/core";
import { useI18n } from "@/hooks/useI18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const testPaths = [
  { params: { id: "1" } },
  { params: { id: "2" } },
  { params: { id: "3" } },
];

export default function Page({}) {
  const [pow, setPower] = useState<string>();
  const [origin, setOrigin] = useState<string>();
  const router = useRouter();
  const { t } = useI18n();

  const id = router?.query.id || 123;

  console.log(router, id);

  useEffect(() => {
    const getData = async () => {
      try {
        if (typeof id === "string") {
          const pathPrefix = Capacitor.isNativePlatform()
            ? "https://equip-test.vercel.app"
            : "";

          const res = await fetch(pathPrefix + "/api/test-fetch", {
            method: "POST",
            body: id,
          });

          if (!res.ok) return;

          const result = await res.json();
          setPower(result.pow);
          setOrigin(result.origin);
        }
      } catch (err) {
        console.error(JSON.stringify(err));
      }
    };
    getData();
  }, [id]);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => router.back()}>back</button>
      <div>
        <LanguageSwitcher locale="en" />
        <LanguageSwitcher locale="nl" />
      </div>
      <h1>
        {t("dynamic.title")}: {id}
      </h1>
      <p>
        {t("dynamic.resultTitle")}: {pow}
      </p>
      <p>{origin}</p>
    </div>
  );
}
