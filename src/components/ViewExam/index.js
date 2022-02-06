import React from 'react';
import './style.css';

function ViewExam() {
  return (
  <>

	<div class="container-fluid " style="margin-top: 120px;margin-bottom: 100px;">
		<div class="row">
			<div class="col-md-9" style="">
					<div class="box1">
						<div class="box2">
							<div>
								<button class="btn btn-default" >Q</button>
							</div>
							<div class="container-fluid">
								<p class="background">Loading.....</p>
							</div>
							<div>
								<div class="radio">
	  								<label> </label>
	  								<label><input type="radio"  name="optradio"/><label id="o1">Option 1</label></label>
								</div>
								<div class="radio">
									<label> </label>
	  								<label><input type="radio"  name="optradio"/><label id="o2">Option 2</label></label>
								</div>
								<div class="radio">
									<label> </label>
	  								<label><input type="radio"  name="optradio"/><label id="o3">Option 3</label></label>
								</div>
								<div class="radio">
									<label> </label>
	  								<label><input type="radio"  name="optradio"/><label id="o4">Option 4</label></label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3" style="">
					<div class="box1">
						<div class="box2">
							<div class="rox">
								<div style="text-align: center;">
									<h4>Questions</h4>
									<hr/>
								</div>
							</div>
							<div class="row" style="">
								<div class="col-md-3 col-xs-3">
									<div>
										<button  class="btn btn-default">01</button>
									</div>
								</div>
								<div class="col-md-3 col-xs-3">
									<div>
										<button  class="btn btn-default">02</button>
									</div>
								</div>
								<div class="col-md-3 col-xs-3">
									<div>
										<button  class="btn btn-default">03</button>
									</div>
								</div>
								<div class="col-md-3 col-xs-3">
									<div>
										<button  class="btn btn-default">04</button>
									</div>
								</div>
							</div>
							<div class="row" style="margin-top: 15px;">
								<div class="col-md-3 col-xs-3">
									<div>
										<button id="but5" class="btn btn-default">05</button>
									</div>
								</div>
								<div class="col-md-3 col-xs-3">
									<div>
										<button  class="btn btn-default">06</button>
									</div>
								</div>
								<div class="col-md-3 col-xs-3">
									<div>
										<button  class="btn btn-default">07</button>
									</div>
								</div>
								<div class="col-md-3 col-xs-3">
									<div>
										<button  class="btn btn-default">08</button>
									</div>
								</div>
							</div>
							<div class="row" style="margin-top: 15px;">
								<div class="col-md-3 col-xs-3">
									<div>
										<button  class="btn btn-default">09</button>
									</div>
								</div>
								<div class="col-md-3 col-xs-3">
									<div>
										<button  class="btn btn-default">10</button>
									</div>
								</div>
								<div class="col-md-3 col-xs-3">
									<div>
										<button  class="btn btn-default">11</button>
									</div>
								</div>
								<div class="col-md-3 col-xs-3">
									<div>
										<button  class="btn btn-default">12</button>
									</div>
								</div>
							</div>
							<div class="row" style="margin-top: 15px;">
								<div class="col-md-3 col-xs-3">
									<div>
										<button  class="btn btn-default" >13</button>
									</div>
								</div>
								<div class="col-md-3 col-xs-3">
									<div>
										<button  class="btn btn-default">14</button>
									</div>
								</div>
								<div class="col-md-3 col-xs-3">
									<div>
										<button  class="btn btn-default">15</button>
									</div>
								</div>

							</div>

							<div class="row" style="margin-top: 20%;">
								<div class="" style="text-align: center;">
									<button class="btn btn-primary" data-toggle="tooltip" title="Previous" ></button>
									<button class="btn btn-default" data-toggle="tooltip" title="1" disabled style="cursor: default;" >1</button>
									<button class="btn btn-primary" data-toggle="tooltip" title="Next" >></button>
								</div>
							</div>
						</div>
						<div class="row" style="margin-top: 15%;">
								<div class="" style="text-align: center;">
									<button class="btn btn-primary" >Uncheck</button>
									<button class="btn btn-primary" >Bookmark</button>
									<button class="btn btn-danger" data-toggle="modal" data-target="#teamviewmodal">Submit</button>
								</div>
							</div>

					</div>
				</div>




			</div>


	</div>
	<div id="footer" >
	    <div class="row" >


	        <div class="form-group" style="text-align: center;" >
	          	<header role="banner">

	    			<div class="logo-main">

	    				<img  src="http://res.cloudinary.com/ajaybali9/image/upload/v1498201462/ajdesign_hvz7dh.jpg" width="180" height="100" alt="Logo Thing main logo" style="margin-top: -10px"/>

	    			</div>

				</header>
	        </div>

	    </div>
	  </div>


	  {/* <!--modal--> */}
		<div class="modal fade" id="teamviewmodal" role="dialog">
	    <div class="modal-dialog">

	      {/* <!-- Modal content--> */}
	      <div class="modal-content" >
	        <div class="modal-header">
	          <button type="button" class="close" data-dismiss="modal">&times;</button>
	          <h4 class="modal-title textfont" style="text-align: center;"><strong style="font-size: 25px">Warning</strong></h4>
	        </div>
	        <div class="modal-body" style="text-align: center;">
	          <h5>Do You Really Want to Submit Test?</h5>
	        </div>
	        <div class="modal-footer">
	          <button type="button" class="btn btn-primary"  data-dismiss="modal">Yes</button>
	          <button type="button" class="btn btn-primary" data-dismiss="modal">No</button>
	        </div>
	      </div>

	    </div>
	  </div>
  </>
  );
}

export default ViewExam;
