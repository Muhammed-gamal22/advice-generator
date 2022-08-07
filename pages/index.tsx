import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home: NextPage = (props) => {
  let [randomAdvice, setRandomAdvice] = useState<number>(1);

  // const incrementAdviceHandler = () => {
  //   setRandomAdvice((prevState) => (prevState >= 223 ? 0 : prevState + 1));
  // };
  // useEffect(() => {

  // }, [randomAdvice]);

  return <Card />;
};

// export async function getStaticProps() {
//   let randomNumber: number = 1;
//   const response = await fetch(
//     `https://api.adviceslip.com/advice/${randomNumber}`
//   );
//   const data = await response.json();
//   return {
//     props: {
//       slip: data.slip,
//       randomNumber: randomNumber,
//     },
//   };
// }
export default Home;
