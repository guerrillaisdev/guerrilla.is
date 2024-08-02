import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Counter from "../src/components/Counter";
import Home from "../src/components/Home";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layouts/Layout";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);
  
  return (
    <>
    <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
    </Head>
    <Layout dark>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Service dark />
      <Testimonial />
      <Counter />
      <Contact />
    </Layout>
    </>
  );
};

export default Index;
