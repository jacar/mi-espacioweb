<<<<<<< HEAD
export default function LottieAnimation() {
  return (
    <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
      <p className="text-white text-lg">Lottie Animation Placeholder</p>
    </div>
  )
=======
import React from 'react';

export default function LottieAnimation() {
  return (
    <div className="w-[800px] h-[800px] bg-gray-800 rounded-lg flex items-center justify-center">
      <dotlottie-player 
        src="https://lottie.host/96c4b4d6-9a10-4437-95f0-f897df04b214/KA6OcgVIs6.lottie" 
        background="transparent" 
        speed="1" 
        style={{ width: '100%', height: '100%' }} 
        loop 
        autoplay
      />
    </div>
  );
>>>>>>> origin/master
}

