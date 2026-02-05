import { useState } from 'react'
import useGetProducts from './hooks/useGetProducts'
import ProductCard from './components/product-card'
import UserCard from './components/userCard'
import { useEffect } from 'react'
import AddProductCard from './components/add-product-card'
import EditCard from './components/editCard'


function App() {
  //https://i.imgur.com/vndAP6F.jpeg
  const [isAddCardOpen, setIsAddCardOpen] = useState(false)
  const [IsEditCardOpen, setIsEditCardOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const {data, loading, error, refetch} = useGetProducts()

  

  return (
    <>
      <div className='bg-neutral-100 p-2 flex justify-center h-full'>

        {isAddCardOpen && (
          <div className='bg-black/80 fixed inset-0 z-999 flex items-center justify-center'>
            <AddProductCard close={() => setIsAddCardOpen(false)}/>
          </div>
        )}

        {IsEditCardOpen && (
          <div className='bg-black/80 fixed inset-0 z-999 flex items-center justify-center'>
            <EditCard currentUser={currentUser}  close={() => setIsEditCardOpen(false)}></EditCard>
          </div>
        )}

        <section className=''>
          <div className='bg-transparent py-2 flex justify-end w-auto h-15'>
            <button className='bg-purple-200 text-purple-800 hover:brightness-90 w-40 h-10 text-sm font-semibold rounded-md cursor-pointer
            transition-all duration-150' onClick={() => setIsAddCardOpen(true)}>+ Add New Product</button>
          </div>
          <div className='bg-transparent grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-auto'> 
            {data.map((item)=> (
              <ProductCard key={item._id} name={item.name} price={item.price} image={item.image}></ProductCard>
            ))}
          </div>
        </section>
      </div>

    </>
  )
}

export default App

// http://localhost:5000/api/users