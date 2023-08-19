import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
         <div className="about-section">
            <h1>About Us Page</h1>
            <p>Some text about who we are and what we do.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <h4 className='emnu'>Our Team</h4>
<div className="row">
  <div className="column">
    <div className="card">
      {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
      <img className="pic" src="https://img.freepik.com/free-photo/businessman-black-suit-makes-thumbs-up_114579-15900.jpg?w=1380&t=st=1692398323~exp=1692398923~hmac=4b1f77f8cb6a99e7d185d0fef235c554edc82daf79f1aef438996afb51bd16cc" alt="" />
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"> */}
      <img className="pic" src="https://media.istockphoto.com/id/1363118407/photo/portrait-of-young-businessman.jpg?s=612x612&w=0&k=20&c=e9xjo1AdlIbr7ttZe3iBG3CBWKUBwdTMLkPus9DxA_s=" alt="" />
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%"> */}
      <img className="pic" src="https://img.freepik.com/premium-photo/portrait-successful-confident-elegant-indian-arabian-young-businessman-suit-holding-open-laptop-his-hand-stand-near-desktop-his-modern-office-looking-camera-smiling_754108-631.jpg" alt="" />
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>




        </div>
    );
};

export default About;

// #474e5d;