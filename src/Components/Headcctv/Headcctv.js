import { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";



export default class Headcctv extends Component {

  constructor(props){
    super(props)
    this.state={
      totalcctv: 0,
      cctvproblem:0
    }
  }
  componentWillMount(){
    const config ={
      headers: {
      Authorization : localStorage.getItem('result')
    }
  }
  }
  render() {

    const token = localStorage.getItem('result') 
    if(token){
    return (
      <div>
        <Nav />

        <div class="pc-body nano pc-role--owner">
            <div class="content">
              
              <div class="pc-container">
                <div class="pc-main">
                  <div class="pc-wrapper">
                  <div className="pc-nav">
                    <div className="pc-row">
                      <div className="pc-col-123">
                        <div className="pc-col-md-3 pc-col-sm-2 pc-col-xs-2 pc-col-xxs-2">
                          <h2>OPERATOR</h2>
                        </div>
                      </div>
                      <div className="pc-col-md-9 pc-col-sm-10 pc-col-xs-10 pc-col-xxs-10">
                        <ul >
                          <li className="is-active">
                            <a href="/Stationstat">
                            
                              <i className="pc-ic_menu1"></i>
                              <span>สถานีของคุณ</span>
                            </a>
                          </li>
                          <li >
                            <a href="/Analysis">
                              <i className="pc-ic_menu2"></i>
                              <span>ผลวิเคราะห์</span>
                            </a>
                          </li>
                          <li >
                            <a href="/Expensereport">
                              <i className="pc-ic_menu3"></i>
                              <span>รายงานค่าใช้จ่าย</span>
                            </a>
                          </li>
                          <li>
                            <a href="/Accout">
                              <i className="pc-ic_menu4"></i>
                              <span>บัญชีผู้ใช้</span>
                            </a>
                          </li>
                          <li>
                            <a href="/cctv">
                              <i className="pc-ic_menu5"></i>
                              <span>กล้องวงจรปิด</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                    <div class="pc-subnav">
                      <ul>
                        <li>
                          <a href="/stationuse">ข้อมูลของสถานี</a>
                        </li>
                        <li >
                          <a href="/stationcharger">ข้อมูลตู้ชาร์จของสถานี</a>
                        </li>
                        <li >
                          <a href="/HeadStationAnalysis">ผลวิเคราะห์ของสถานี</a>
                        </li>
                        {/* <li>
                          <a href="/Headstationexpensereport">รายงานค่าใช้จ่ายของสถานี</a>
                        </li>
                        <li>
                          <a href="/Headstationpickingreport">รายงานเบิกของสถานี</a>
                        </li> */}
                        <li class="is-active">
                          <a href="/headcctv">กล้องวงจรปิดของสถานี</a>
                        </li>
                      </ul>
                    </div>
                    <div class="pc-subnav--content">
                      <img class="pc-station--logo" src="icon/Asset 1000@3xW.png" alt="" />
                      <h2 class="pc-station--name">EGAT Station ท103</h2>
                      <p class="pc-station--info">เครื่อข่าย : การไฟฟ้าส่วนภูมิภาค</p>
                    </div>
                  </div>
                </div>

              <div class="pc-title">
                กล้องวงจรปิด
              </div>

              <div class="pc-stat has-2-item">
                <div class="pc-wrapper">
                  <div class="pc-row">
                    <div class="pc-col-md-6">
                      <div class="pc-stat--item">
                        <i class="pc-ic_cctv-all"></i>
                        <p>กล้องวงจรปิดทั้งหมด</p>
                        <p>
                          <b> {this.state.totalcctv} </b> ตัว</p>
                      </div>
                    </div>

                    <div class="pc-col-md-6">
                      <div class="pc-stat--item">
                        <i class="pc-ic_cctv-error"></i>
                        <p>กล้องวงจรปิดที่มีปัญหา</p>
                        <p>
                          <b> {this.state.cctvproblem} </b> ตัว</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pc-content">
                <div class="pc-wrapper">
                  <div class="pc-panel pc-panel--cctvitem">
                    <div class="pc-panel--heading">กล้องวงจรปิดตัวที่ 1</div>
                    <div class="pc-panel--body">
                      <div class="pc-row">
                        <div class="pc-col-md-12">
                          <div class="pc-container-img pc-preview-img">
                            <img src="img/cctv.jpg" alt="" />
                            <div class="pc-img--caption">
                              Camera 1
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="pc-row pc-cctvitem--container">
                        <div class="pc-cctvitem--item pc-col-md-3 pc-col-sm-4 pc-col-xs-6 pc-col-xxs-6">
                          <div class="pc-container-img is-active">
                            <img src="img/cctv.jpg" alt="" />
                            <div class="pc-img--caption">
                              Camera 2
                            </div>
                          </div>
                        </div>
                        <div class="pc-cctvitem--item pc-col-md-3 pc-col-sm-4 pc-col-xs-6 pc-col-xxs-6">
                          <div class="pc-container-img">
                            <img src="img/cctv.jpg" alt="" />
                            <div class="pc-img--caption">
                              Camera 3
                            </div>
                          </div>
                        </div>
                        <div class="pc-cctvitem--item pc-col-md-3 pc-col-sm-4 pc-col-xs-6 pc-col-xxs-6">
                          <div class="pc-container-img">
                            <img src="img/cctv.jpg" alt="" />
                            <div class="pc-img--caption">
                              Camera 4
                            </div>
                          </div>
                        </div>
                        <div class="pc-cctvitem--item pc-col-md-3 pc-col-sm-4 pc-col-xs-6 pc-col-xxs-6">
                          <div class="pc-container-img">
                            <img src="img/cctv.jpg" alt="" />
                            <div class="pc-img--caption">
                              Camera 5
                            </div>
                          </div>
                        </div>
                        {/* <div class="pc-cctvitem--item pc-col-md-3 pc-col-sm-4 pc-col-xs-6 pc-col-xxs-6">
                          <div class="pc-container-img">
                            <img src="img/cctv.jpg" alt="" />
                            <div class="pc-img--caption">
                              Camera 6
                            </div>
                          </div>
                        </div>
                        <div class="pc-cctvitem--item pc-col-md-3 pc-col-sm-4 pc-col-xs-6 pc-col-xxs-6">
                          <div class="pc-container-img">
                            <img src="img/cctv.jpg" alt="" />
                            <div class="pc-img--caption">
                              Camera 7
                            </div>
                          </div>
                        </div> */}
                        {/* <div class="pc-cctvitem--item pc-col-md-3 pc-col-sm-4 pc-col-xs-6 pc-col-xxs-6">
                          <div class="pc-container-img">
                            <img src="img/cctv.jpg" alt="" />
                            <div class="pc-img--caption">
                              Camera 8
                            </div>
                          </div>
                        </div>
                        <div class="pc-cctvitem--item pc-col-md-3 pc-col-sm-4 pc-col-xs-6 pc-col-xxs-6">
                          <div class="pc-container-img">
                            <img src="img/cctv.jpg" alt="" />
                            <div class="pc-img--caption">
                              Camera 9
                            </div>
                          </div>
                        </div> */}
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>

              <div>
        
              </div>

              <div class="pc-footer">
                
                <Footer />
                
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
  return(
    <div>
      กรุณา login
    </div>
  )
  }
}