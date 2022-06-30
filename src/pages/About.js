import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/allisonHeadshot.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Allison Turner</div>
            <div className="brief_description">
              I am a junior pursuing dual degrees in Music and Computer Science at the University of Central Florida. I enjoy hiking, baking, and tennis!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
