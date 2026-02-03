import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Footer from './components/Footer';
import './App.css';
import Login from './pages/user/Login';
import Regsiter from './pages/user/Regsiter';
import About from './pages/about/About';
import UserDashboard from './pages/user/UserDashboard';
import ScrollToTop from './pages/TopToBack/ScrollToTop';
import Top from './pages/TopToBack/Top';
import OtpVerification from './pages/user/OtpVerification';
import MyProfile from './pages/user/Myrpofile';
import MyCourse from './pages/user/MyCourse';
import MyJob from './pages/user/MyJob';
import Header from './components/Header';
import FAQSection from './pages/FAQS/FAQSection';
import ActivitiesSection from './pages/gallery/gallery';
import CareersPage from './pages/carrier/CareersPage';
import ApplyForm from './pages/carrier/ApplyForm';
import BlogDetails from './pages/blog/BlogDetails';
import BlogSection from './pages/blog/BlogSection';
import Portfolio from './pages/portfolio/Portfolio';
import CareerDetail from './pages/carrier/CareerDetail';
import Project from './pages/project/Project';
import WebDeveloper from './pages/service/WebDeveloper';
import AppDevelopment from './pages/service/AppDevelopment';
import DigitalMarketing from './pages/service/DigitalMarketing';
import GraphicDesigning from './pages/service/GraphicDesigning';
import UIUXDesign from './pages/service/UIUXDesign';
import CMSDevelopment from './pages/service/CMSDevelopment';
import SEOOptimization from './pages/service/SEOOptimization';
import CursorFollower from './components/CursorFollower';
import SocialBar from './components/SocialBar';




const App = () => {
  return (
    <>
    <Header />
    <ScrollToTop />
    <CursorFollower/>
    <SocialBar/>
        <Routes>
        {/* General Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/faq" element={<FAQSection/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/blog" element={<BlogSection/>} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/gallery" element={<ActivitiesSection/>} />
        <Route path="/career" element={<CareersPage/>} />
        <Route path="/careers/:id" element={<CareerDetail/>} />
        <Route path="/apply" element={<ApplyForm/>} />
        <Route path="/portfolio" element={<Portfolio/>} />

        {/* service  */}
        <Route path="/webdeveloper" element={<WebDeveloper/>} />
        <Route path="/appdevelopment" element={<AppDevelopment/>} />
        <Route path="/digitalmarketing" element={<DigitalMarketing/>} />
        <Route path="/graphicdesigning" element={<GraphicDesigning/>} />
        <Route path="/uiuxdesign" element={<UIUXDesign/>} />
        <Route path="/cmsdevelopment" element={<CMSDevelopment/>} />
        <Route path="/seooptimization" element={<SEOOptimization/>} />
      

   



        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regsiter />} />
        <Route path="/otpverify" element={<OtpVerification />} />

        {/* User Dashboard */}
        <Route path="/user" element={<UserDashboard />}>
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="myjobs" element={<MyJob />} />
          <Route path="mycourses" element={<MyCourse />} />
        </Route>

      </Routes>
        <Top />
      <Footer />
    </>
  );
};

export default App;
