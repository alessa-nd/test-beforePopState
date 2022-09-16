import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

const Page3 = () => {
  const router = useRouter();
  const [content, setContent] = useState('');


  // useEffect(() => {

  //   router.beforePopState(({ url, as, options }) => {
  //     console.log('url', url);
  //     console.log('as', as);
  //     console.log('options', options);

  //     console.log('history', window.history);

  //     router.push('/page3', '/page3');
  //     // router.replace('/page3', '/page3');
  //     // window.location.href = '/page3'
  //     // window.location.pathname = '/page3'

  //     return false

  //     // const pippo = 1;
  //     // const pluto = 2;

  //     // if ((pippo + pluto) === 3) {
  //     //   console.log('inside');
  //     // window.location.href = '/page3'
  //     // router.push('/page3');
  //     // return true
  //     // }

  //     // alert('alert')

  //     // return true;
  //   });

  // }, [router]);


  useEffect(() => {
    router.beforePopState(({ as }) => {
      console.log('as', as);
      console.log('asPath', router.asPath);

      if (as !== router.asPath) {
        // Will run when leaving the current page; on back/forward actions
        // Add your logic here, like toggling the modal state
      }
      // return true;
      return false;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);

  return (
    <div className="">
      <h1 className="">PAGE 3</h1>

      <Link href='/page1'>page1</Link>
      <button onClick={() => setContent('pippo')}>setContent</button>
      <p className="">{content}</p>
    </div>
  )
}

export default Page3