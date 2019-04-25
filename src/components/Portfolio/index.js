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
                        <img alt="" src="images/portfolio/eco-sum.jpg"/>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>News summary in Eco way</h5>
          				    </div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                     </a>
                  </div>
          		</div> 

               <div class="columns portfolio-item">
                  <div class="item-wrap">
                     <a href="#modal-03" title="">
                        <img alt="" src="images/portfolio/into-the-light.jpg"/>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>Friend finder, not a Tender</h5>
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
                        <div class="link-icon"><i class="icon-plus"></i></div>
                     </a>
                  </div>
          		</div>

               <div class="columns portfolio-item">
                  <div class="item-wrap">
                     <a href="#modal-05" title="">
                        <img alt="" src="images/portfolio/buger.jpg"/>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>Oder a burger</h5>
          					</div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                     </a>
                  </div>
          		</div> 

               <div class="columns portfolio-item">
                  <div class="item-wrap">
                     <a href="#modal-06" title="">
                        <img alt="" src="images/portfolio/girl.jpg"/>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>Find the Ladies!</h5>
          					</div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                     </a>
                  </div>
          		</div>

               <div class="columns portfolio-item">
                  <div class="item-wrap">
                     <a href="#modal-07" title="">
                        <img alt="" src="images/portfolio/Koolendar.jpg"/>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>A kool calendar</h5>
          					</div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                     </a>
                  </div>
          		</div> 

               <div class="columns portfolio-item">
                  <div class="item-wrap">
                     <a href="#modal-08" title="">
                        <img alt="" src="images/portfolio/retrocam.jpg"/>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>Retrocam</h5>
                              <p>Web Development</p>
          				    </div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
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
			      <h4>Console</h4>
			      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span class="categories"><i class="fa fa-tag"></i>Branding, Web Development</span>
		      </div>

            <div class="link-box">
               <a href="http://www.behance.net">Details</a>
		         <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>

         <div id="modal-03" class="popup-modal mfp-hide">
		      <img class="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />
		      <div class="description-box">
			      <h4>Judah</h4>
			      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span class="categories"><i class="fa fa-tag"></i>Branding</span>
		      </div>
              <div class="link-box">
               <a href="http://www.behance.net">Details</a>
		         <a class="popup-modal-dismiss">Close</a>
              </div>
	      </div>

         <div id="modal-04" class="popup-modal mfp-hide">
		      <img class="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
		      <div class="description-box">
			      <h4>Into the Light</h4>
			      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span class="categories"><i class="fa fa-tag"></i>Photography</span>
		      </div>

            <div class="link-box">
               <a href="http://www.behance.net">Details</a>
		         <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>

         <div id="modal-05" class="popup-modal mfp-hide">

		      <img class="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />

		      <div class="description-box">
			      <h4>Farmer Boy</h4>
			      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span class="categories"><i class="fa fa-tag"></i>Branding, Webdesign</span>
		      </div>

            <div class="link-box">
               <a href="http://www.behance.net">Details</a>
		         <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>

         <div id="modal-06" class="popup-modal mfp-hide">

		      <img class="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />

		      <div class="description-box">
			      <h4>Girl</h4>
			      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span class="categories"><i class="fa fa-tag"></i>Photography</span>
		      </div>

            <div class="link-box">
               <a href="http://www.behance.net">Details</a>
		         <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>

         <div id="modal-07" class="popup-modal mfp-hide">

		      <img class="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />

		      <div class="description-box">
			      <h4>Origami</h4>
			      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span class="categories"><i class="fa fa-tag"></i>Branding, Illustration</span>
		      </div>

            <div class="link-box">
               <a href="http://www.behance.net">Details</a>
		         <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>

         <div id="modal-08" class="popup-modal mfp-hide">

		      <img class="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />

		      <div class="description-box">
			      <h4>Retrocam</h4>
			      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span class="categories"><i class="fa fa-tag"></i>Webdesign, Photography</span>
		      </div>

            <div class="link-box">
               <a href="http://www.behance.net">Details</a>
		         <a class="popup-modal-dismiss">Close</a>
            </div>
	      </div>
      </div> 
      </section> 
      </React.Fragment>
    );
  }
}