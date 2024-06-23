import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, useRouteError, RouterProvider, Route, Outlet } from 'react-router-dom';
import './css/global.css';
import reportWebVitals from './reportWebVitals';

import Header from './header';
import ContactPage from './contact';
import ProjectsPage from './projects';

function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);
  return (
    <div id="error-container">
      <a id="error-return" href="/">Return Home</a>
      <span id="error-message">
        <p>Error {error.status}: {error.error.message}</p>
      </span>
    </div> // #error-message
  )
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <>
          <Header />
          <Outlet />
        </>
      }
      errorElement={<ErrorBoundary />}
    >
      <Route path="/" element={
        <div id="index-container">
          <p>Hello there, my name is Kyal Chatten and this is my personal website. It's pretty plain because I'm focused on my personal and professional development.</p>
          <hr />
          <p>I'm a junior Web Developer based out of Ontario, Canada.</p>
          <hr />
          <p>I have fond memories of the video games that used to come in cereal boxes, and I'd like to work in educational entertainment (edutainment).</p>
          <hr />
          <p>I'm passionate about creating memorable experiences through interactive media.</p>
          <hr />
          <p>I've got an informal background in IT and have been upskilling with self-directed learning, certification programs and workshops.</p>
        </div>
      } />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
