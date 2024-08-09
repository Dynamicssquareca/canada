import { useState, useEffect } from 'react';
import Head from 'next/head';

const TestPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>Test Page</title>
        <meta name="description" content="This is a test page for mobile and desktop layouts." />
        <meta name="robots" content="noindex, nofollow" />
        {/* You can add other meta tags here */}
      </Head>
      <main>
        {isMobile ? (
          <div className="mobile-layout">
            <h1>Mobile Layout</h1>
            <p>This content is only visible on mobile screens.</p>
          </div>
        ) : (
          <div className="desktop-layout">
            <h1>Desktop Layout</h1>
            <p>This content is only visible on desktop screens.</p>
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

export default TestPage;
