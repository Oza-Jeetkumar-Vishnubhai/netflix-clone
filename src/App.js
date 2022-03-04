import React, { useState } from 'react'
import './App.css'
import logo from './Img/logo.png'
import children from './Img/children.png'
import mobile from './Img/mobile.png'
import ew from './Img/ew.png'
import tv from './Img/tv.png'

export default function App() {
  const [bottom, setBottom] = useState(3);
  const [left, setLeft] = useState(19);
  const change = () => {
    setBottom(11.5);
    setLeft(17);
  }
  const rechange = () => {
    setBottom(3);
    setLeft(19);
  }
  const show = (num) => {
    console.log(`item${num} has been clicked`);
    for (var i = 1; i <= 6; i++) {
      var x = document.getElementById(`sub-item${i}`);
      if (i === num)
        x.style.display = 'block';
      else
        x.style.display = 'none';
    }
  }
  return (
    <>
      <div className="bg">
        <div className="navbar">
          <div className="left">
            <img src={logo} alt="Logo" height="70px" width="70px" id="img" />
          </div>
          <div className="right">
            <select id="lang">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
            <button className="btn btn-danger m-1 mx-3 text-white">Sign-in</button>
          </div>
        </div>
        <div className="box container">
          <div className="txt">
            <p className="text-center" style={{ "fontSize": "44px", "fontFamily": "Abril Fatface, cursive" }}><b>Unlimited Movies,TV Shows and more.</b></p>
            <p className="text-center" style={{ "fontSize": "20px", "fontFamily": "Tajawal, sans-serif" }}>Watch anywhere and cancel anytime.</p>
            <p className="text-center" style={{ "fontSize": "20px", "fontFamily": "Tajawal, sans-serif" }}>Ready to watch?Enter your Email to create or restart your membership</p>
          </div>
          <form action="/signin">
            <div className="frm">
              <input type="email" name="email" id="email" className="input" onFocus={change} onBlur={rechange} required />
              <button className="btn btn-danger text-white btn-md" type="submit"><h1>Get Started</h1></button>
            </div>
            <p id="inp-txt text-gray" style={{ "position": "absolute", "left": `${left}%`, "bottom": `${bottom}%` }} onClick={change}>Email adress</p>
          </form>
        </div>
      </div>
      <div className="main">
        <hr />
        <div className="tv">
          <div className="text">
            <h1>Enjoy on your TV</h1>
            <h4>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h4>
          </div>
          <div className="img">
            <img src={tv} alt="tv" className="photo" />
          </div>
        </div>
        <hr />
        <div className="mobile">
          <div className="img">
            <img src={mobile} alt="mobile" height="250px" />
          </div>
          <div className="text">
            <h1>Download your shows to watch offline.</h1>
            <h4>Save your favourites easily and always have something to watch.</h4>
          </div>
        </div>
        <hr />
        <div className="all">
          <div className="text">
            <h1>Watch everywhere.</h1>
            <h4>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h4>
          </div>
          <div className="img">
            <img src={ew} alt="ew" className="photo" />
          </div>
        </div>
        <hr />
        <div className="children">
          <div className="img">
            <img src={children} alt="children" height="250px" />
          </div>
          <div className="text">
            <h1>Create profiles for children.</h1>
            <h4>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h4>
          </div>
        </div>
        <hr />
        <div className="FAQ">
          <h1 className="text-center text-white question-heading">Frequently Asked Questions</h1>
          <div className="question text-white" id="item1" onClick={() => { show(1) }}><h4>What is Netflix?</h4></div>
          <div id="sub-item1" className="sub-item text-white" style={{ "display": "none" }}>
            <span>
              Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
              <br /><br />
              You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
            </span>
          </div>
          <div className="question text-white" id="item2" onClick={() => { show(2) }}><h4>How does Netflix cost?</h4></div>
          <div id="sub-item2" className="sub-item text-white" style={{ "display": "none" }}>
            <span>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
            </span>
          </div>
          <div className="question text-white" id="item3" onClick={() => { show(3) }}><h4>Where can I watch?</h4></div>
          <div id="sub-item3" className="sub-item text-white" style={{ "display": "none" }}>
            <span>
              Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
              <br /><br />
              You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
            </span>
          </div>
          <div className="question text-white" id="item4" onClick={() => { show(4) }}><h4>How do I cancel?</h4></div>
          <div id="sub-item4" className="sub-item text-white" style={{ "display": "none" }}>
            <span>
              Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
            </span>
          </div>
          <div className="question text-white" id="item5" onClick={() => { show(5) }}><h4>What can I watch on Netflix?</h4></div>
          <div id="sub-item5" className="sub-item text-white" style={{ "display": "none" }}>
            <span>
              Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </span>
          </div>
          <div className="question text-white" id="item6" onClick={() => { show(6) }}><h4>Is Netflix good for kids?</h4></div>
          <div id="sub-item6" className="sub-item text-white" style={{ "display": "none" }}>
            <span>
              The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
              <br /><br />
              Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
            </span>
          </div>
        </div>
        <div className="box container">
          <div className="txt">
            <p className="text-center" style={{ "fontSize": "20px", "fontFamily": "Tajawal, sans-serif","margin-bottom":"6px" }}>Ready to watch?Enter your Email to create or restart your membership</p>
          </div>
          <form action="/signin">
            <div className="frm">
              <input type="email" name="email" id="email" className="input" onFocus={change} onBlur={rechange} required />
              <button className="btn btn-danger text-white btn-md" type="submit"><h1>Get Started</h1></button>
            </div>
            <p id="inp-txt text-gray" style={{ "position": "absolute", "left": `${left}%`, "bottom": `${bottom}%` }} onClick={change}>Email adress</p>
          </form>
        </div>
        <br /><br />
        <hr />
      </div>
      <hr />
    </>
  )
}
