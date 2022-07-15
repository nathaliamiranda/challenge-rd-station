import type { NextPage } from 'next'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <Layout/>
      <Footer/>
    </>
  )
}

export default Home;
