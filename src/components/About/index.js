import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
            <div class="row">
              <div class="three columns">
              <img class="profile-pic"  src="images/profilepic.jpg" alt="profile_picture"/>
              </div>
              <div class="nine columns main-col">
                  <h3>About Me</h3>
                  <p>Investment analyst with +2 years of experience in investment analysis, CFA level III candidate, 
                     proficient with Excel, R, and SAS. Participated projects related to equity research, 
                     hotel acquisition feasility analysis, single family properties acquisition, and data management.
                  </p>
              </div>
            </div>
            <div class="row">
              <div class="columns contact-details">
                  <h2>Contact Details</h2>
                  <p class="address">
                  <span>(443)800-0005</span>
                  <br/>
                  <span>du.bingxi@gmail.com</span>
                  </p>
              </div>
              <div class="columns download">
                <p><a href="# " class="button"><i class="fa fa-download"></i>Download Resume</a></p>
              </div>
            </div>
      </section> 
      </React.Fragment>
    );
  }
}

