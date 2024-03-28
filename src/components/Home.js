import React, { useState } from 'react'
import Sidebar from './Sidebar'
import ReactApexChart from 'react-apexcharts';

function Home() {
  const [chartData] = useState({
    series: [{
      name: 'Net Profit',
      data: [30, 25, 42, 56, 61, 58, 63, 60, 66, 20, 50, 30]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false // Hide graph lines
        },
        background: '#fff' // Set plain white background
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '80%',
          endingShape: 'rounded',
          borderRadius: 10 // Set border radius
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: false, // Hide stroke lines
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        show: false // Hide y-axis lines
      },
      fill: {
        opacity: 1,
        colors: ['#f2efff'] // Set default column color
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          }
        }
      }
    }
  });

  const [RadialBarData] = useState({
    series: [70],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '65%',
          }
        },
      },
      labels: ['Total New Customers'],
    }
  });

  return (
    <div>
      <div className='row'>
        <div style={{  background:"#040440"}} className='col-md-2'>
          <Sidebar />
        </div>
        <div style={{ background: "#f5f6f8", padding: "0px" }} className='col-md-10'> 
          <div className='container-fluid p-5'>
            <div className='row mb-3'>
              <div className='col-6'>
                <h6>
                  <a className="text-dark iconshow" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </a>

                  <span className='sideshow'>Hello Shahrukh</span> <i className="fa fa-hand-paper-o text-warning sideshow " aria-hidden="true"></i></h6>
              </div>
              <div className='col-6'>
                <div style={{ float: "right" }}>
                  <label className="sr-only" htmlFor="inlineFormInputGroup">Search</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div style={{ background: "#ffffff" }} className="input-group-text">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </div>
                    </div>
                    <input type="text" className="form-control form-control-sm" id="inlineFormInputGroup" placeholder="Search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Cards */}

            <div className='row'>
              <div className='col-md-3 col-lg-3'>
                <div className='bg-white rounded'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-6'>
                        <div style={{ background: "#dbfeec", height: "100px", width: "100px" }} className='text-center rounded-circle text-success'>
                          <i className="fa fa-line-chart icon" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='mt-3'>
                          <p style={{ marginBottom: "0px" }}>Earning</p>
                          <b>$ 198K</b><br />
                          <span style={{ fontSize: "10px" }}><b className='text-success'>37.8%</b> this month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='bg-white rounded'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-6'>
                        <div style={{ background: "#e7dbff", height: "100px", width: "100px", color: "#a60cff" }} className='text-center rounded-circle'>
                          <i className="fa fa-file-text-o icon" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='mt-3'>
                          <p style={{ marginBottom: "0px" }}>Orders</p>
                          <b>$ 2.4K</b><br />
                          <span style={{ fontSize: "10px" }}><b className='text-danger'>2%</b> this month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='bg-white rounded'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-6'>
                        <div style={{ background: "#ccf2ff", height: "100px", width: "100px", color: "#0b5bc1" }} className='text-center rounded-circle'>
                          <i className="fa fa-pie-chart icon" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='mt-3'>
                          <p style={{ marginBottom: "0px" }}>Balance</p>
                          <b>$ 2.4K</b><br />
                          <span style={{ fontSize: "10px" }}><b className='text-danger'>2%</b> this month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='bg-white rounded'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-6'>
                        <div style={{ background: "#ffb4db", height: "100px", width: "100px", color: "#d90016" }} className='text-center rounded-circle'>
                          <i className="fa fa-shopping-bag icon" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='mt-3'>
                          <p style={{ marginBottom: "0px" }}>Total Sales</p>
                          <b>$ 98K</b><br />
                          <span style={{ fontSize: "10px" }}><b className='text-success'>11.8%</b> this week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Graph */}
            <div className='row mt-5'>
              <div className='col-md-8'>
                <div className='bg-white rounded p-3'>
                  <div className='row'>
                    <div className='col-6'>
                      <div>
                        <h6 style={{ paddingBottom: "0px" }}><b>Overview</b></h6>
                        <small className='text-muted'>Monthly Earning</small>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div style={{ float: "right" }}>
                        <select className='form-select'>
                          <option>Quarterly</option>
                          <option>Monthly</option>
                          <option>Yearly</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div id="chart">
                    <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
                  </div>
                  <div id="html-dist"></div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='bg-white rounded p-3'>
                  <div>
                    <h6 style={{ paddingBottom: "0px" }}><b>Customers</b></h6>
                    <small className='text-muted'>Customers that buy products </small>
                  </div>
                  <div id="chart">
                    <ReactApexChart options={RadialBarData.options} series={RadialBarData.series} type="radialBar" height={350} />
                  </div>
                  <div id="html-dist"></div>
                </div>
              </div>
            </div>
            {/* Table  */}
            <div className='bg-white p-3 rounded mt-5'>
              <div className='row '>
                <div className='col-md-8'>
                  <h5>Product Sell</h5>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-6'>
                      <div >
                        <label className="sr-only" htmlFor="inlineFormInputGroup">Search</label>
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div style={{ background: "#ffffff" }} className="input-group-text">
                              <i className="fa fa-search" aria-hidden="true"></i>
                            </div>
                          </div>
                          <input type="text" className="form-control form-control-sm" id="inlineFormInputGroup" placeholder="Search" />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div >
                        <select className='form-select'>
                          <option>Last 30 days</option>
                          <option>Last 60 days</option>
                          <option>Last 90 days</option>
                        </select>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className='table-responsive'>
                <table className="table table-borderless table-hover">
                  <thead className='border-bottom'>
                    <tr>
                      <th scope="col">Product Name</th>
                      <th scope="col">Stock</th>
                      <th scope="col">Price</th>
                      <th scope="col">Total Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className='row'>
                          <div className='col-2'>
                            <img className='rounded' src="https://img.freepik.com/free-vector/squared-web-button_1114-1.jpg" style={{ width: "100px", height: "70px" }} />
                          </div>
                          <div className='col-10'>
                            <p className='mt-2' style={{ marginBottom: "0px" }}><b>Abstract 3D</b></p>
                            <span className='text-muted' style={{ fontSize: "12px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                          </div>
                        </div>
                      </td>
                      <td className='text-center mt-4'>35 in stock</td>
                      <td className='text-center mt-4'><b>$ 45.99</b></td>
                      <td className='text-center mt-4'>20</td>
                    </tr>
                    <tr>
                      <td>
                        <div className='row'>
                          <div className='col-2'>
                            <img className='rounded' src="https://img.freepik.com/free-vector/squared-web-button_1114-1.jpg" style={{ width: "100px", height: "70px" }} />
                          </div>
                          <div className='col-10'>
                            <p className='mt-2' style={{ marginBottom: "0px" }}><b>Abstract 3D</b></p>
                            <span className='text-muted' style={{ fontSize: "12px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                          </div>
                        </div>
                      </td>
                      <td className='text-center mt-4'>35 in stock</td>
                      <td className='text-center mt-4'><b>$ 45.99</b></td>
                      <td className='text-center mt-4'>20</td>
                    </tr>
                    <tr>
                      <td>
                        <div className='row'>
                          <div className='col-2'>
                            <img className='rounded' src="https://img.freepik.com/free-vector/squared-web-button_1114-1.jpg" style={{ width: "100px", height: "70px" }} />
                          </div>
                          <div className='col-10'>
                            <p className='mt-2' style={{ marginBottom: "0px" }}><b>Abstract 3D</b></p>
                            <span className='text-muted' style={{ fontSize: "12px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                          </div>
                        </div>
                      </td>
                      <td className='text-center mt-4'>35 in stock</td>
                      <td className='text-center mt-4'><b>$ 45.99</b></td>
                      <td className='text-center mt-4'>20</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home