import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className="">HOME</h1>

      <Link href='/page1'>page1</Link>
    </div>
  )
}
