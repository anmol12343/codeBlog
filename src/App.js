import Header from './component/Header';
import Blogs from './component/Blogs';
import Footer from './component/Footer';
import './App.css';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const {fetchData} = useContext(AppContext);

  useEffect(() =>{
    fetchData();
  },[]);
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center' >
    <Header />
    <Blogs />
    <Footer />
    </div>
  );
}

export default App;
