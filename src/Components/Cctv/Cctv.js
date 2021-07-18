import { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default class CCTV extends Component {

  constructor(props){
    super(props)

    this.state={
      cctv : 0 ,
      problemcctv:0
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


        <div class="pc-body nano pc-role--owner pc-owner--cctv">
          <div class="content">
            

            <div class="pc-container">
            <div className="pc-main">
                <div className="pc-wrapper">
                  <div className="pc-nav">
                    <div className="pc-row">
                      <div className="pc-col-123">
                        <div className="pc-col-md-3 pc-col-sm-2 pc-col-xs-2 pc-col-xxs-2">
                          <h2>OPERATOR</h2>
                        </div>
                      </div>
                      <div className="pc-col-md-9 pc-col-sm-10 pc-col-xs-10 pc-col-xxs-10">
                        <ul>
                          <li>
                            <a href="/Stationstat">
                            
                              <i className="pc-ic_menu1"></i>
                              <span>สถานีของคุณ</span>
                            </a>
                          </li>
                          <li>
                            <a href="/Analysis">
                              <i className="pc-ic_menu2"></i>
                              <span>ผลวิเคราะห์</span>
                            </a>
                          </li>
                          <li>
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
                          <li className="is-active">
                            <a href="/cctv">
                              <i className="pc-ic_menu5"></i>
                              <span>กล้องวงจรปิด</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pc-stat has-3-item">
                <div class="pc-wrapper">
                  <div class="pc-row">
                    <div class="pc-col-md-4 pc-col-sm-4">
                      <div class="pc-stat--item">
                        <i class="pc-ic_cctv-all">  </i>
                        <p>กล้องวงจรปิดทั้งหมด</p>
                        <p>
                          <b> {this.state.cctv} </b> ตัว</p>
                      </div>
                    </div>

                    <div class="pc-col-md-4 pc-col-sm-4">
                      <div class="pc-stat--item">
                        <i class="pc-ic_cctv-error"></i>
                        <p>กล้องวงจรปิดที่มีปัญหา</p>
                        <p>
                          <b> {this.state.problemcctv} </b> ตัว</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pc-content">
                <div class="pc-wrapper">
                  <div class="pc-panel pc-panel--cctvstation">
                    <div class="pc-panel--heading">กล้องวงจรปิด สถานี EGAT Station ท103 (6)</div>
                    <div class="pc-panel--body">
                      <div class="pc-panel--content">
                        <div class="nano has-scrollbar-y" style={{minHeight:"147px"}}>
                          <div class="content">
                            <div class="pc-nano--content">
                              <div class="pc-row">
                                <div class="pc-cctvstation--item pc-col-md-3 pc-col-sm-3 pc-col-xs-4 pc-col-xxs-6">
                                  <div class="pc-container-img">
                                    <img src="img/cctv.jpg" alt="" />
                                    <div class="pc-img--caption">
                                      Camera 1
                                    </div>
                                  </div>
                                </div>
                                <div class="pc-cctvstation--item pc-col-md-3 pc-col-sm-3 pc-col-xs-4 pc-col-xxs-6">
                                  <div class="pc-container-img">
                                    <img src="img/cctv.jpg" alt="" />
                                    <div class="pc-img--caption">
                                      Camera 2
                                    </div>
                                  </div>
                                </div>
                                <div class="pc-cctvstation--item pc-col-md-3 pc-col-sm-3 pc-col-xs-4 pc-col-xxs-6">
                                  <div class="pc-container-img">
                                    <img src="img/cctv.jpg" alt="" />
                                    <div class="pc-img--caption">
                                      Camera 3
                                    </div>
                                  </div>
                                </div>
                                <div class="pc-cctvstation--item pc-col-md-3 pc-col-sm-3 pc-col-xs-4 pc-col-xxs-6">
                                  <div class="pc-container-img">
                                    <img src="img/cctv.jpg" alt="" />
                                    <div class="pc-img--caption">
                                      Camera 4
                                    </div>
                                  </div>
                                </div>

                                <div class="pc-cctvstation--item pc-col-md-3 pc-col-sm-3 pc-col-xs-4 pc-col-xxs-6">
                                  <div class="pc-container-img">
                                    {/* <img src="img/cctv.jpg" alt="" />
                                    <div class="pc-img--caption">
                                      Camera 5
                                    </div> */}
                                  </div>
                                </div>
                                <div class="pc-cctvstation--item pc-col-md-3 pc-col-sm-3 pc-col-xs-4 pc-col-xxs-6">
                                  <div class="pc-container-img">
                                    {/* <img src="img/cctv.jpg" alt="" />
                                    <div class="pc-img--caption">
                                      Camera 6
                                    </div> */}
                                  </div>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> 
                  </div>
                </div>
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