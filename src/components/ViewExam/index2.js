import React from 'react';

function index2() {
  return (
    <>
      <div className='container px-4 py-4'>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
              <div className='box1 bg-gray-300'>
                <div className='box2'>
                  <div>
                    <button className="bg-white rounded text-gray-800 font-semibold py-1 px-2 border border-gray-400 ">
                      Q
                    </button>
                  </div>
                  <div className="container-fluid">
                    <p className="background">Loading.....</p>
                  </div>
                  <div className='container-fluid'>
                    <div className="radio">
                        <label> </label>
                        <label><input type="radio"  name="optradio"/><label id="o1">Option 1</label></label>
                    </div>
                    <div className="radio">
                      <label> </label>
                        <label><input type="radio"  name="optradio"/><label id="o2">Option 2</label></label>
                    </div>
                    <div className="radio">
                      <label> </label>
                        <label><input type="radio"  name="optradio"/><label id="o3">Option 3</label></label>
                    </div>
                    <div className="radio">
                      <label> </label>
                        <label><input type="radio"  name="optradio"/><label id="o4">Option 4</label></label>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className=''>
            <div className='box1'>
              <div className='box2'>
                <div className='row-span-3'>
                  <div className='text-center'>
                    <h4 className='text-xl'>Questions</h4>
                    <hr/>
                  </div>
                </div>
                <div className='flex flex-wrap grid grid-cols-4 gap-4 px-3 py-4'>
                  <div>
                    <button class="bg-white text-gray-800 font-semibold py-2 px-3 border border-gray-400">
                      1
                    </button>
                  </div>
                  <div>
                    <button class="bg-white text-gray-800 font-semibold py-2 px-3 border border-gray-400">
                      2
                    </button>
                  </div>
                  <div>
                    <button class="bg-white text-gray-800 font-semibold py-2 px-3 border border-gray-400">
                      3
                    </button>
                  </div>
                  <div>
                    <button class="bg-white text-gray-800 font-semibold py-2 px-3 border border-gray-400">
                      4
                    </button>
                  </div>
                  <div>
                    <button class="bg-white text-gray-800 font-semibold py-2 px-3 border border-gray-400">
                      5
                    </button>
                  </div>
                  <div>
                    <button class="bg-white text-gray-800 font-semibold py-2 px-3 border border-gray-400">
                      6
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index2;
