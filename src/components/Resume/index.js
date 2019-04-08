import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
      <div class="row education">
         <div class="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div class="nine columns main-col">

            <div class="row item">

               <div class="twelve columns">
                  <h3>North Carolina State University    <span class="date">   Raleigh, NC</span></h3>
                  <p class="info">Master of Financial Mathematics <span>&bull;</span> <em class="date"> Aug 2015 – Aug 2016</em></p>
                  <p>
                   The graduate study has prepared me with knowledge of linear regression modeling, time series modeling, hypothesis testing, Monte Carlo Simulation, and numerical methods.
                   I used R, SAS on daily base for course work.
                  </p>
               </div>

            </div> 

            <div class="row item">

               <div class="twelve columns">

                  <h3>Colorado State University <span class="date">  Fort Collins, CO</span></h3>
                  <p class="info">B.S. Degree in Bussiness Administration <span>&bull;</span> <em class="date">Aug 2011 - Aug 2014</em></p>
                  <p class="info">B.S. Degree in Mathematics </p>
                  <p class="info"><span>&bull;</span> <em class="date">Double major in Finance and Statistics</em></p>

                  <p>
                  Druring the undergradute study, I have taken classes related to data analysis such as Data Mining, Multivariate Analysis, and Variance Analysis.
                  </p>

               </div>

            </div> 

         </div> 

      </div> 

      <div class="row skill">

         <div class="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div class="nine columns main-col">
                <p>Full-Stack Application Developing with Node.js and React, MongoDB, MySQL.
            </p>

				<div class="bars">

				   <ul class="skills">

						<li><span class="bar-expand css"></span><em>CSS</em></li>
						<li><span class="bar-expand Bootstrap"></span><em>Bootstrap</em></li>
                  <li><span class="bar-expand jquery"></span><em>jQuery</em></li>
                  <li><span class="bar-expand SQL"></span><em>SQL</em></li>
                  <li><span class="bar-expand MongoDB"></span><em>MongoDB</em></li>
                  <li><span class="bar-expand NodeJs"></span><em>Node.js</em></li>
                  <li><span class="bar-expand React"></span><em>React</em></li>
					</ul>

				</div>

			</div> 

      </div> 
   </section> 
      </React.Fragment>
    );
  }
}
  