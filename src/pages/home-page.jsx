import Link from "next/link";

export const HomePage = () => {
  return (
    <>
      <h1>HOME</h1>
      <Link href={"/restaurants"}>Visit restaurants</Link>
    </>
  );
};
