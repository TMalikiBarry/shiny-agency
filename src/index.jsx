import React from 'react';
import ReactDOM from 'react-dom/client';
import './Utils/Style/index.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Survey from "./pages/Survey";
import Header from "./components/Header";
// import ClientForm from "./components/ClientForm";
// import FreelanceForm from "./components/FreelanceForm";
import Error from "./components/Error";
import Freelances from "./components/Freelances";
import Results from "./components/Results";
import {SurveyProvider, ThemeProvider} from "./Utils/Context";
import Footer from "./components/Footer";
import GlobalStyle from "./Utils/Style/GlobalStyle";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <GlobalStyle/>
                <Header/>
                <SurveyProvider>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/survey/:questionID' element={<Survey/>}/>
                        {/* <Route path='client' element={<ClientForm/>}/>
                            <Route path='freelance/:questionID' element={<FreelanceForm/>}/>*/}
                        <Route path='/flances' element={<Freelances/>}/>
                        <Route path='/results' element={<Results/>}/>
                        <Route path='*' element={<Error/>}/>
                    </Routes>
                </SurveyProvider>
                <Footer/>
            </ThemeProvider>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
