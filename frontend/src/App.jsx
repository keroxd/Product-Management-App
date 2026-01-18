import { useState } from 'react'
import axios from 'axios'
import UserCard from './components/userCard'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  const getUsers = () => {
    axios.get("http://localhost:5000/api/users")
      .then((res) => {
        setData(res.data.data)
        console.log(res.data.data)
      })
  }

  useEffect(() => {
    getUsers();
  }, [])


  return (
    <>
      <div className='bg-neutral-50 pt-10 flex justify-center w-full h-auto'>
        <div className='bg-transparent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-2 w-80 sm:w-150 md:w-200 sm:h-162'>
          {data.map((user) => (
            <UserCard key={user.id} name={user.name} profession={user.profession} image={user.image}></UserCard>
          ))}
        </div>



      </div>

    </>
  )
}

export default App

// http://localhost:5000/api/users