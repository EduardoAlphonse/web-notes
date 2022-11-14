import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

export const Layout = ({ children, pageTitle = "Web Notes" }: LayoutProps) => {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Raleway:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>{pageTitle}</title>
      </Head>
      {children}
    </>
  );
};
