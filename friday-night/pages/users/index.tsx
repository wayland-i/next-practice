import React from 'react'
import Link from 'next/link';


export const getStaticProps = async () => {

	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
  
	return {
		props: { users: data}
	}
}



const Users = ({ users }) => {
    console.log(users);

  return (
    <div style={{ 'textAlign': 'center'}}>
        {users.map(user => (
          <div key={user.id} style={{ 'marginBottom': '2%'}} >
              <Link style={{ 'fontSize': '3rem'}}href={`/user/${user.id}`}>{user.name}</Link>
          </div>
        ))}
    </div>
  )
}

export default Users;