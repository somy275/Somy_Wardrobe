// src/App.js
import React from 'react';
import { WardrobeProvider } from './context/WardrobeContext';
import WardrobeGrid from './components/WardrobeGrid';
import AddClothingForm from './components/AddClothingForm';
import OutfitGenerator from './components/OutfitGenerator';
import SmartMatchGenerator from './components/SmartMatchGenerator';
import WeatherOutfitGenerator from './components/WeatherOutfitGenerator';
import { Offline, Online } from './components/Notification';
import { Bounce, ToastContainer } from 'react-toastify';


function App() {
  window.ononline = () => { //When the user is online the Online() function is called
    Online()
  }
  window.onoffline = () => { //When the user is offline the Offline() function is called
    Offline()
  }
  return (
    <WardrobeProvider>
      <div className=" p-4 mx-auto sm:mx-[3rem] my-[1rem] lg:mt-[.5rem] lg:flex lg:flex-col lg:items-center max-w-none">
        <h1 className="text-2xl text-center font-bold mb-[2rem]  ">👕 My Wardrobe</h1>
        <AddClothingForm />
        <WardrobeGrid />
        <OutfitGenerator />
        <SmartMatchGenerator />
        <WeatherOutfitGenerator />
      </div>
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
        theme="light"
        transition={Bounce}
      />
    </WardrobeProvider>
  );
}

export default App;
