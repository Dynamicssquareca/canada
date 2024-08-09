// pages/test.js

import Head from 'next/head';
import Image from 'next/image';
const TestPage = ({ isMobile }) => {
  return (
    <>
      <Head>
        <title>Test Page</title>
        <meta name="description" content="This is a test page for mobile and desktop layouts." />
      </Head>
      <main>
        {isMobile ? (
          <div className="mobile-layout">
          <h1>Mobile Layout</h1>
          <p>This content is visible on mobile screens.</p>
          <Image
            src="/img/mobile-image.jpg" // Path to your mobile image
            alt="Mobile Layout Image"
            layout="responsive"
            width={720} // Aspect ratio width
            height={480} // Aspect ratio height
          />
        </div>
        ) : (
            <div className="desktop-layout">
                 <h1>Desktop Layout</h1>
                 <p>This content is visible on mobile screens.</p>
            <Image
            src="/img/desktop-image.jpg" // Path to your desktop image
            alt="Desktop Layout Image"
            layout="responsive"
            width={1200} // Aspect ratio width
            height={800} // Aspect ratio height
          />
          </div>
        )}
      </main>

      <style jsx>{`
        .desktop-layout {
          background-color: lightblue;
          padding: 20px;
          text-align: center;
        }

        .mobile-layout {
          background-color: lightcoral;
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export async function getServerSideProps(context) {
  // Basic user agent detection for mobile vs desktop
  const isMobile = /Mobi|Android/i.test(context.req.headers['user-agent']);

  return {
    props: {
      isMobile,
    },
  };
}

export default TestPage;
