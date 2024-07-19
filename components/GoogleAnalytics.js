import Script from 'next/script';

const GoogleAnalytics = () => {

  return (
    <div>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3482Z4SSKF"></Script>
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3482Z4SSKF');
        `}
      </Script>
    </div>
  );
};

export default GoogleAnalytics;