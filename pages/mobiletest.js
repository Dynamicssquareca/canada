// pages/test.js

import Head from 'next/head';

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
          </div>
        ) : (
          <div className="desktop-layout">
            <h1>Desktop Layout</h1>
            <p>This content is visible on desktop screens.</p>
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
