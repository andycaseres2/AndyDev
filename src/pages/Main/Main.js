import React from 'react'
import { Helmet } from 'react-helmet'

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Contacts,
  Projects,
  //Education,
  // Experience,
  //Testimonials,
  //  Blog,
  // Services,
  // Achievement,
} from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Skills />

      {/*
      <Education />
      <Experience />
           <Achievement />
            <Services />
            <Blog /> 
           <Testimonials />*/}
      <Contacts />
      <Footer />
    </div>
  )
}

export default Main
