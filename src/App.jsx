
import { Suspense, useState } from 'react';
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ProcessCard from './Components/ProcessCard'
import { Bounce, ToastContainer } from 'react-toastify';
import CustomerTickets from './Components/CustomerTickets';


function App() {
    const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
       <ProcessCard 
        inProgressCount={inProgressCount} 
        resolvedCount={resolvedCount} 
      />

      <CustomerTickets 
        setInProgressCount={setInProgressCount}
        setResolvedCount={setResolvedCount}> </CustomerTickets>

      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      > </ToastContainer>
    </>
  )
}

export default App
