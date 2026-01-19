import { useState } from 'react'
import axios from 'axios'
import UserCard from './components/userCard'
import { useEffect } from 'react'
import AddCard from './components/addCard'
import EditCard from './components/editCard'

function App() {

  const [data, setData] = useState([])
  const [isAddCardOpen, setIsAddCardOpen] = useState(false)
  const [IsEditCardOpen, setIsEditCardOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

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
      <div className='bg-neutral-50 p-2 flex justify-center h-[100vh] '>

        {isAddCardOpen && (
          <div className='bg-black/80 fixed inset-0 z-[999] flex items-center justify-center'>
            <AddCard close={() => setIsAddCardOpen(false)}></AddCard>
          </div>
        )}

        {IsEditCardOpen && (
          <div className='bg-black/80 fixed inset-0 z-[999] flex items-center justify-center'>
            <EditCard currentUser={currentUser}  close={() => setIsEditCardOpen(false)}></EditCard>
          </div>
        )}

        <section className=''>
          <div className='bg-transparent py-2 flex justify-end w-85 sm:w-170 lg:w-250 h-15'>
            <button className='bg-purple-200 text-purple-800 hover:brightness-90 w-22 h-10 text-xs font-semibold rounded-md cursor-pointer
            transition-all duration-150' onClick={() => setIsAddCardOpen(true)}>+ Add User</button>
          </div>
          <div className='bg-transparent grid sm:grid-cols-2 lg:grid-cols-3 gap-2 w-85 sm:w-170 lg:w-250'>
            {data.map((user) => (
            <UserCard onClick={() => {
              setCurrentUser(user)
              setIsEditCardOpen(true)
              console.log(currentUser)
            }
            }
             key={user._id} name={user.name} email={user.email} image={user.image}></UserCard>
          ))}

          </div>
        </section>
      </div>

    </>
  )
}

export default App

// http://localhost:5000/api/users