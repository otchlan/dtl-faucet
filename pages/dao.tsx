import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import TokenSale from "@/components/TokenSale";
import styles from './Home.module.css';
import Head from 'next/head';
import DAOElement from '../components/DAOElement';
import {useState, useEffect} from 'react';
import axios from 'axios'

interface AirtableRecord {
  id: string;
  fields: {
    Link: string;
  };
  createdTime: string;
}

export default function Home() {

  const [records, setRecords] = useState<AirtableRecord[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/getDataFromAirTableDAOLinks');
        const fetchedRecords = response.data.records;
  
        // Check if fetchedRecords is an array before setting the state
        if (Array.isArray(fetchedRecords)) {
          setRecords(fetchedRecords);
          
        } else {
          console.error('API response is not an array:', fetchedRecords);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        {/*setLoading(false);*/}
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
    <Head>
        <title>DAO</title>
        <link rel="icon" href="/faviconSmallSize.png" type="image/x-icon" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Deeptechlabs, technology driving your future" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Deeptechlabs" />
        <meta name="keywords" content="future, crypto, blockchain, technology, innovation, AI, artificial intelligence" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Title for Sharing" />
        <meta property="og:description" content="Deeptechlabs, technology driving your future" />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="https://www.deeptechlabs.pl" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deeptechlabs" />
        <meta name="twitter:description" content="Technology driving your future" />
        <meta name="twitter:image" content="/logo.svg" />
      </Head>
      <div className={styles['cards-container-dao']}> 
       

        {/* <TokenSale /> */}
        <span className={styles.glowText}>
            Silne, etyczne, ciągle uczące, się nastawione na rozwój społeczeństwo
        </span>

        <h1 className={styles.header}>Biblioteka</h1>  

        {records.map((record, index) => (
                  <DAOElement key={index} link={record.fields.Link}/>
                ))}

        

        

      </div>

      <Footer />
    </>
  );
}