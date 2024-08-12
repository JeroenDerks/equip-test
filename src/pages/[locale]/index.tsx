import { makeStaticProps, getStaticPaths } from "i18next-ssg/server";

const Page = () => {
  return <div>Page</div>;
};

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
export default Page;
