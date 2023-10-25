import { useState } from 'react'
import UrlList from './components/UrlList'
import LoginForm from './components/LoginForm';
import UrlForm from './components/UrlForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/urllist" element={<UrlList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
