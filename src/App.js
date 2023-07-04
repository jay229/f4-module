import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import {fetchPosts} from './redux/actions/postActions';
import HomePage from './Components/Home';
import DetailPage from './Components/DetailPage';
import Navbar from './Components/Navbar';
import Error from './Components/Error';

const App = () => {
  const loading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div style={{marginTop: "2rem" , marginLeft:"3rem", marginRight:"3rem"}}>
      <Routes>
        <Route path="/" element={<HomePage posts={data} />} />
        <Route path="/item/:id" element={<DetailPage posts={data} />} />
        <Route path='*' element={<Error/>}/>
      </Routes>
      </div>
    </div>
  );
};

export default App;
