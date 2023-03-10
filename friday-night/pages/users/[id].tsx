import React from 'react'

export const getStaticPaths = async () => {

	const res = await fetch('https://jsonplaceholder.typicode.com/users');	
	const data = await res.json();
	const paths = data.map(user => {
		return {
			params: { id: user.id.toString() }
		}
	})
	
	return {
		paths: paths,
		fallback: false
	}
}


export const getStaticProps = async (context : any) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json();

    return {
        props: {user: data}
    }
}




function Detail ({ user }) {

  console.log(user)

  return (
    <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.website}</p>
        <p>{user.address.city}</p>
    </div>
  )
}

export default Detail;