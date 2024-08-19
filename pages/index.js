import dynamic from "next/dynamic";
import { useEffect } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Counter from "../src/components/Counter";
import Home from "../src/components/Home";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layouts/Layout";
import { NextSeo } from 'next-seo';
import METADATA from "../src/Metadata";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);
  
  return (
    <>
              <NextSeo {...METADATA} />

    <Layout dark>
      <Home />
      <About />
      <Skills />
      {/* <Portfolio /> */}
      <Service dark />
      {/* <Testimonial /> */}
      <Counter />
      <Contact />
    </Layout>
    </>
  );
};

export default Index;
