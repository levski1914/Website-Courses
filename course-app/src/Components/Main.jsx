import React from 'react'

import './Main.css'

const style={
    width:'1500px'
}


const Main = () => {
  return (
    <>
        <div className="container py-5">
            <section className="d-flex justify-content-around relative part-1">
                <img src="https://codewithmosh.com/_next/static/media/bg-grid-lighter.4c1e8196.svg" width={style.width}  alt="" />
                <div className="col-4">
                    <h1>All-Access Subscription</h1>
                    <p className='text-part-1'>Become the best coder you can be with unlimited access to all the existing and future courses</p>
                    <div className="buttons">

                    <div className="d-flex col">
                        <a href="#" className='button'>Access all courses for $29/m</a>
                    </div>
                    <div className="divider">
                        <div className="line"></div>
                        <div className="circle">OR</div>
                        <div className="line"></div>
                    </div>
                    <div className="d-flex">
                        <a href="#" className='button'>Buy this course for $15</a>
                    </div>

                    </div>
                </div>
                <div className="col-3">
                    <div className="cards d-flex align-items-center flex-column  p-5">
                        <h2>Course view</h2>
                        <ul className="list-group text-blue m-0">
                            <li className="item">Beginner</li>
                            <li className="item">8 Hours of HD video</li>
                            <li className="item">140 lessons</li>
                            <li className="item">Downloadable content</li>
                            <li className="item">Hands-on exercises</li>
                            <li className="item">English captions</li>
                            <li className="item">Certificate of completion</li>
                            <li className="item">Lifetime access</li>
                            <li className="item">Learn at your own pace</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    
    </>
  )
}

export default Main