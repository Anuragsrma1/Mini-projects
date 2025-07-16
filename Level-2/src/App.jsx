import React from 'react';
import GreetingCardApp from './Component/GreetingCardApp';
import StarRating from './Component/StarRating';
import ImageGallery from './Component/ImageGallery';
import ProgressBar from './Component/ProgressBar';
import MultiStepForm from './Component/MultiStepForm';
import NoteApp from './Component/NoteApp';
import BookmarkManager from './Component/BookmarkManager';

function App() {

  return (
    <>
      <div>
          <GreetingCardApp />
          <StarRating />
          <ImageGallery />
          <ProgressBar />
          <MultiStepForm />
          <NoteApp />
          <BookmarkManager />
      </div>
   
    </>
  )
}

export default App
