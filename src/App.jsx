
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ProcessCard from './Components/ProcessCard'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <ProcessCard></ProcessCard>

     
        <div className='bg-amber-700 container mx-auto h-[1000px] grid grid-cols-4'>
          <div className='col-span-3 bg-blue-700 p-5'>
            <h6 className='font-bold text-4xl'>Customer Tickets</h6>
          </div>
          <div className='col-span-1 bg-amber-400 p-5'>
            <h6 className='font-bold text-4xl'>Task Status</h6>
            <h6 className='font-bold text-4xl'>Resolved Task</h6>

          </div>


        </div>


      <Footer></Footer>
    </>
  )
}

export default App
