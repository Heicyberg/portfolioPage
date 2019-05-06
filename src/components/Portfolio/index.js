import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="portfolio">
         <div class="row">
           <div class="twelve columns collapsed">

            <h1>Check Out Some of My Projects</h1>
            
            <div id="portfolio-wrapper" class="bgrid-quarters s-bgrid-thirds cf">

          	   <div class="columns portfolio-item">
                  <div class="item-wrap">
                     <a href="#modal-01" title="">
                       <img alt="" src="images/portfolio/google-book-search.jpg"/>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>Google Book Shelf</h5>
          					   </div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                     </a>
                  </div>
          		</div>

               <div class="columns portfolio-item">
                  <div class="item-wrap">
                     <a href="#modal-02" title="">
                        <img alt="" src="images/portfolio/click-game.jpg"/>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>Click Game</h5>
          				    </div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                     </a>
                  </div>
          		</div> 

               <div class="columns portfolio-item">
                  <div class="item-wrap">
                     <a href="#modal-03" title="">
                        <img alt="" src="images/portfolio/burger.jpg"/>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>Order your burger</h5>
          				    </div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                     </a>
                  </div>
          		</div> 

               <div class="columns portfolio-item">
                  <div class="item-wrap">
                     <a href="#modal-04" title="">
                        <img alt="" src="images/portfolio/real-solution.jpg"/>
                           <div class="overlay">
                              <div class="portfolio-item-meta">
          					        <h5>Bring the solution in real estate</h5>
          					      </div>
                           </div>
                           <div class="link-icon">
                           <i class="icon-plus"></i>
                           </div>
                     </a>
                  </div>
          		</div>

               </div>

            </div> 
         </div>       
         <div>
           <div id="modal-01" class="popup-modal mfp-hide">

		      <img class="scale-with-grid" src="images/portfolio/modals/m-google-book-search.jpg" alt="" />

		      <div class="description-box">
			      <h4>Search a book you interested using google api,and save the result to your shelf</h4>
		      </div>

            <div class="link-box">
               <a href="https://boiling-retreat-26672.herokuapp.com/">Website</a>
		         <a className="popup-modal-dismiss">Close</a>
            </div>

	      </div>

           <div id="modal-02" class="popup-modal mfp-hide">

		      <img class="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt="" />

		      <div class="description-box">
			      <h4>The click game</h4>
			      <p>In this game you need to find all the 7 actress without doule click on a sigle girl tiwce. This is react front end game</p>
               <span class="categories"><i class="fa fa-tag"></i>Game</span>
		      </div>

            <div class="link-box">
               <a href="https://stormy-inlet-97975.herokuapp.com/">Play</a>
		         <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>

           <div id="modal-03" class="popup-modal mfp-hide">
		      <img class="scale-with-grid" src="images/portfolio/modals/m-burger.jpg" alt="" />
		      <div class="description-box">
			      <h4>Big Burger</h4>
			      <p>This is a site you can order your burger. This site shows up without fanncy front-end work, but powered by handlerbar template language</p>
               <span class="categories"><i class="fa fa-tag"></i>Dining</span>
		      </div>
              <div class="link-box">
               <a href="https://boiling-gorge-57667.herokuapp.com/">Order</a>
		         <a class="popup-modal-dismiss">Close</a>
              </div>
	      </div>

           <div id="modal-04" class="popup-modal mfp-hide">
		      <img class="scale-with-grid" src="images/portfolio/modals/m-house.jpg" alt="" />
		      <div class="description-box">
			      <h4>Real solution to real estate questions</h4>
			      <p>This website will show you the rental properties meet your return goal in residecial property</p>
               <span class="categories"><i class="fa fa-tag"></i>Photography</span>
		      </div>

            <div class="link-box">
               <a href="https://powerful-tor-47566.herokuapp.com">Check</a>
		         <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>

          </div> 
      </section> 
      </React.Fragment>
    );
  }
}