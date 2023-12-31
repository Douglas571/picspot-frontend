import React, { useState } from 'react';
import { Box, Grid, Divider } from '@mui/material';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import Login from '@/pages/login';
import Register from '@/pages/register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
