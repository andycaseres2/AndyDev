import React from 'react'
import { Helmet } from 'react-helmet'

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Testimonials,
  Education,
  Experience,
  Contacts,
  Projects,
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
      <Experience />
      <Education />
      {/* <Achievement />
            <Services />
            <Blog /> 
      <Testimonials />*/}
      <Contacts />
      <Footer />
    </div>
  )
}

export default Main
