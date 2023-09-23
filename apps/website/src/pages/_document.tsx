import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="mm-wrapper mm-wrapper--position-left-front">
        <div className="wrapper ovh mm-page mm-slideout">
          <Navbar />
          <div className="body_content">
            <Main />
            <NextScript />
            <Footer />
          </div>
        </div>
      </body>
    </Html>
  );
}
