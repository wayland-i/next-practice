import React from 'react'
import Link from 'next/link';


export const getStaticProps = async () => {

	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
  
	return {
		props: { ninjas: data}
	}
}

function index({ ninjas }) {
  return (
    <div>
        {ninjas.map( ninja => (
          <div key={ninja.id}>
            <Link href={`/ninjas/${ninja.id}`}>
              <h1>{ninja.name}</h1>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default index;