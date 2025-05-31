import { useState } from 'react'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'
import { promptSimShell } from 'readline-sync'


function App() {

      const BlogPost = [
            {
                title: "Man must explore, and this is exploration at its greatest",
                subTitle: "Problems look mighty small from 150 miles up",
                author: "Start Bootstrap",
                date: "September 24, 2019"
            },{
                title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
                subTitle: "",
                author: "Start Bootstrap",
                date: "September 18, 2019"
            },{
                title: "Science has not yet mastered prophecy",
                subTitle: "We predict too much for the next year and yet far too little for the next ten.",
                author: "Start Bootstrap",
                date: "August 24, 2019"
            },{
                title: "Failure is not an option",
                subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
                author: "Start Bootstrap",
                date: "July 8, 2019"
            }
        ]

  const postElements = BlogPost.map((post, index) => {
    return(
      <BlogList key={index} {...post} />
    )
  })


  return (
    <>
      <Header />
      {postElements}
      <Footer />  
    </>
  )
}

export default App
