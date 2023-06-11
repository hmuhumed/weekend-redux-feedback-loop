import React from 'react';
import axios from 'axios';
import './App.css';
import FeelingForm from '../FeelingForm/FeelingForm'
import UnderstandingForm from '../UnderstandingForm/UnderStandingForm';
import {useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import SupportForm from '../SupportForm/SupportForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import ReviewForm from '../ReviewForm/ReviewForm';
import NewFeedback from '../NewFeedback/NewFeedback';

function App() {
  const dispatch = useDispatch();

  const getFeedback = () => {

    axios.get('/feedback') 
    .then(response => {
      dispatch({
        type: 'GET_FEEDBACK',
        payload: response.data
      })
    }).catch(err => {
      console.log('Error in GET /App' , err)
    })
  }

  useEffect(() => {
    getFeedback();
  }, [])
  
  

  return (
    <>
  
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
          
        </header>
      <Router>
        <Route exact path='/' >
          <FeelingForm />
        </Route>
        <Route exact path='/Understanding'>
          <UnderstandingForm />
        </Route>
        <Route exact path='/Support'>
          <SupportForm />
        </Route>
        <Route exact path='/Comments'>
          <CommentsForm />
        </Route>
        <Route exact path='/Review'>
          <ReviewForm />
        </Route>
        <Route exact path='/Thanks'>
          <NewFeedback />
        </Route>
      </Router> 
      </div>
    
    </>
  );
}

export default App;
