import React, { useEffect, useRef } from "react"
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';


function Sidebarmen() {
    const ref = useRef()

    return (
        <div>
            <div className='sidebar sideshow'>
                <div style={{ padding: "10px" }}>
                    <h5><i className="fa fa-connectdevelop" aria-hidden="true"></i> Dashboard</h5>
                </div>


                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled mt-3" id="side-menu">
                        <li className="active">
                            <a >
                                <i className="fa fa-tachometer p-1"></i> <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="text-muted" >
                            <a >
                                <i className="fa fa-cube iconfont"></i> <span>  Product</span> <i style={{ float: "right" }} className="fa fa-angle-right mt-1"></i>
                            </a>
                        </li>
                        <li className="text-muted" >
                            <a >
                                <i className="fa fa-user-circle-o iconfont"></i> <span>  Customers</span> <i style={{ float: "right" }} className="fa fa-angle-right mt-1"></i>
                            </a>
                        </li>
                        <li className="text-muted" >
                            <a >
                                <i className="fa fa-clone iconfont"></i> <span>  Income </span> <i style={{ float: "right" }} className="fa fa-angle-right mt-1"></i>
                            </a>
                        </li>
                        <li className="text-muted" >
                            <a >
                                <i className="fa fa-ticket iconfont"></i> <span>  Promote </span> <i style={{ float: "right" }} className="fa fa-angle-right mt-1"></i>
                            </a>
                        </li>
                        <li className="text-muted" >
                            <a >
                                <i className="fa fa-info-circle iconfont"></i> <span>  Help </span> <i style={{ float: "right" }} className="fa fa-angle-right mt-1"></i>
                            </a>
                        </li>
                        <div className="menu-container" >
                            <li className="active">
                                <div className="row">
                                    <div style={{ paddingLeft: "3px" }} className="col-3">
                                        <div>
                                            <img className="rounded-circle" style={{ height: "40px" }} src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png" />
                                        </div>
                                    </div>
                                    <div style={{ padding: "0px" }} className="col-9">
                                        <p style={{ marginBottom: "0px" }}><b className="text-white">Evano</b></p>
                                        <small className="text-muted">Project Manager</small>
                                    </div>
                                </div>
                            </li>
                        </div>

                    </ul >

                </div >




            </div >
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div style={{ background: "#040440" }} className='sidebar'>
                    <div style={{ padding: "10px" }}>
                        <div className="offcanvas-header">
                            <h5><i className="fa fa-connectdevelop" aria-hidden="true"></i> Dashboard</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
                        </div>


                    </div>
                    <div id="sidebar-menu1">
                        <ul className="metismenu list-unstyled mt-3" id="side-menu">
                            <li className="active">
                                <a >
                                    <i className="fa fa-tachometer p-1"></i> <span>Dashboard</span>
                                </a>
                            </li>
                            <li className="text-muted" >
                                <a >
                                    <i className="fa fa-cube iconfont"></i> <span>  Product</span> <i style={{ float: "right" }} className="fa fa-angle-right mt-1"></i>
                                </a>
                            </li>
                            <li className="text-muted" >
                                <a >
                                    <i className="fa fa-user-circle-o iconfont"></i> <span>  Customers</span> <i style={{ float: "right" }} className="fa fa-angle-right mt-1"></i>
                                </a>
                            </li>
                            <li className="text-muted" >
                                <a >
                                    <i className="fa fa-clone iconfont"></i> <span>  Income </span> <i style={{ float: "right" }} className="fa fa-angle-right mt-1"></i>
                                </a>
                            </li>
                            <li className="text-muted" >
                                <a >
                                    <i className="fa fa-ticket iconfont"></i> <span>  Promote </span> <i style={{ float: "right" }} className="fa fa-angle-right mt-1"></i>
                                </a>
                            </li>
                            <li className="text-muted" >
                                <a >
                                    <i className="fa fa-info-circle iconfont"></i> <span>  Help </span> <i style={{ float: "right" }} className="fa fa-angle-right mt-1"></i>
                                </a>
                            </li>
                            <div className="menu-container1" >
                                <li className="active">
                                    <div className="row">
                                        <div style={{ paddingLeft: "3px" }} className="col-3">
                                            <div>
                                                <img className="rounded-circle" style={{ height: "40px" }} src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png" />
                                            </div>
                                        </div>
                                        <div style={{ padding: "0px" }} className="col-9">
                                            <p style={{ marginBottom: "0px" }}><b className="text-dark">Evano</b></p>
                                            <small className="text-muted">Project Manager</small>
                                        </div>
                                    </div>
                                </li>
                            </div>

                        </ul >

                    </div >




                </div >
            </div>

        </div>

    )
}

export default Sidebarmen