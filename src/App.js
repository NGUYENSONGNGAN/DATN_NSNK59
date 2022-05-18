import React, { useEffect } from 'react';
import Router from './router/Router';
import { useDispatch } from 'react-redux';
import { loadUser } from './redux/actions/userAction';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
