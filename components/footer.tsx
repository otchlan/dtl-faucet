import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <div className="footer-container max-w-8xl mt-16">
      <div className="footer-section">
        <img src="/logo.svg" alt="Logo" width="200px" />
        <div className="social-media-links">
          <a href="https://example.com/social-link1" target="_blank" rel="noopener noreferrer">
            <img src="/discord.png" alt="Social Link 1" width="25px" />
          </a>
          <a href="https://example.com/social-link2" target="_blank" rel="noopener noreferrer">
            <img src="/li.png" alt="Social Link 2" width="25px" />
          </a>
          <a href="https://example.com/social-link3" target="_blank" rel="noopener noreferrer">
            <img src="/fb.png" alt="Social Link 3" width="25px" />
          </a>
          <a href="https://example.com/social-link3" target="_blank" rel="noopener noreferrer">
            <img src="/tt.png" alt="Social Link 3" width="25px" />
          </a>
          <a href="https://example.com/social-link3" target="_blank" rel="noopener noreferrer">
            <img src="/yt.png" alt="Social Link 3" width="25px" />
          </a>
          <a href="https://example.com/social-link3" target="_blank" rel="noopener noreferrer">
            <img src="/notion.png" alt="Social Link 3" width="25px" />
          </a>
        </div>
        <p className="contact-text align-right text-gray-500">kontakt@deeptechlabs.pl</p>
      </div>
      <div className="footer-section align-right text-gray-500 info-section text-xs">

        
          Pracujemy 24/7
          <br />
          kontakt@deeptechlabs.pl
          <br />
          Dołącz do nas i buduj przyszłość
          <br />
          Polskiej nauki i technologii
          <br />
        
      </div>
      <div className="footer-section align-right text-gray-500 info-section break-all">
           Adres kontraktu (Sieć Polygon):
           <br />
           0x94D772d31804983d2Dd2d9D12F34803C41334dDD
           <br />
           
      </div>

      <div className="footer-section align-right text-gray-300">
        <ul>
        <li><Link href="/rodo">Polityka prywatności</Link></li>

        <li><Link href="/kariera">Kariera</Link></li>
        </ul>
      </div>

      
      <style jsx>{`
        .footer-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100vw;
          padding: 2%;
        }

        .footer-section {
          width: 25%;
          padding: 15px;
        }

        .info-section {
          font-size: 0.9rem;  // Adjust font size as per requirement
          color: #818181;     // A grey-ish color, adjust as per requirement
        }

        .align-right {
          text-align: left;
        }

        .social-media-links {
          display: flex;
          justify-content: flex-start;
          margin-top: 10px;
        }

        .social-media-links a {
          margin-right: 10px;
        }

        .social-media-links img {
          width: 25px;
        }

        .contact-text {
          margin-top: 30px;
          text-align: left;
          color: gray-500;
        }

        @media (max-width: 768px) {

          .footer-section {
            width: 50%;
          }

        }
      `}</style>
    </div>
  );
};

export default Footer;