import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BoxTop from '../components/BoxTop'
import SearchAppBar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { QueryClient,QueryClientProvider } from 'react-query'
const query = new QueryClient()
const Home: NextPage = () => {
  return (
    
    <div>
      <SearchAppBar/>
      <QueryClientProvider client={query}>
      <BoxTop/>
      </QueryClientProvider>
    </div>
    
  )
}

export default Home
