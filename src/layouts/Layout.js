import Head from "next/head";
import { Fragment, useEffect } from "react";
import {
  Guerrilla_tm_moving_animation,
  aTagClick,
  dataImage,
  wowJsAnimation,
} from "../utilits";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Preloader from "./Preloader";

const Layout = ({ children, headName, dark }) => {
  useEffect(() => {
    dataImage();
    wowJsAnimation();
    Guerrilla_tm_moving_animation();
    aTagClick();
  });
  
  return (
    <Fragment>
      <Head>
        <title>Guerrilla Automotive</title>
        
        <meta name="description" content="Guerrilla Automotive tuning in Austin, TX - All stages, deletes, car detailing" />
        <meta name="keywords" content="Automotive, Tuning, ECU, Performance, Detail, Detailing, Details, Clean, Paint, Cleaning, Painting, Custom, Worldwide, Austin, Texas" />
        <meta name="author" content="Guerrilla Automotive LLC" />

        <meta name="og:description" content="Guerrilla Automotive tuning in Austin, TX - All stages, deletes, car detailing" />
        <meta property="og:title" content="Guerrilla Automotive" />

        <link rel="manifest" href="/site.webmanifest" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Preloader />
      <div className="Guerrilla_tm_all_wrap" data-magic-cursor="show">
        <MobileMenu />
        <Header dark={dark} />
        {children}
        <Footer />
        <Cursor />
      </div>
    </Fragment>
  );
};

export default Layout;
