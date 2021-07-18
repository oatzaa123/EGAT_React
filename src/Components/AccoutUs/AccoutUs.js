import { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default class AccoutUs extends Component {

  constructor(props){
    super(props)

    this.state={
        systemoperator : 0,
        activecontroller:0,
        allservice : 0,
        logintoday:0,
        fixessystemtoday:0
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

    if (token){
    return (
      <div>
        <Nav />

        <div className="pc-body nano pc-role--owner pc-owner--stationstat">
          <div className="content">

            <div className="pc-container">
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
                          <li className="is-active">
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
                </div>
              </div>

                <div className="pc-stat has-5-item">
                  <div className="pc-wrapper">
                    <div className="pc-row">
                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_acc-all">
                          </i>
                          <p>ผู้ควบคุมระบบทั้งหมด</p>
                          <p>
                            <b> {this.state.systemoperator} </b> คน</p>
                        </div>
                      </div>

                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_acc-chargeuser"></i>
                          <p>ผู้ควบคุมที่กำลังใช้งาน</p>
                          <p>
                            <b> {this.state.activecontroller} </b> คน</p>
                        </div>
                      </div>

                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_acc-user"></i>
                          <p>พนักงานบริการทั้งหมด</p>
                          <p>
                            <b> {this.state.allservice} </b> คน</p>
                        </div>
                      </div>

                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_acc-chargetoday"></i>
                          <p>การเข้าใช้งานระบบวันนี้</p>
                          <p>
                            <b> {this.state.logintoday} </b> ครั้ง</p>
                        </div>
                      </div>

                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_acc-repairtoday"></i>
                          <p>การแก้ไขในระบบวันนี้</p>
                          <p><b> {this.state.fixessystemtoday} </b> ครั้ง</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pc-content">
                  <div className="pc-wrapper">
                    <div className="pc-panel pc-panel--stuffoperator">

                    <div className="pc-panel--heading">บัญชีผู้ใช้ระดับ HEAD OPERATOR</div>
                      <div className="pc-panel--body">
                        <div className="pc-panel--content">
                          <div className="asdf" style={{height:"10px"}} ></div>
                          <div className="pc-row1">
                            <table>
                                  <thead className="pc-text--c">
                                    <tr>
                                      <td style={{width:"15%"}}>
                                      </td>
                                      {/* <td style={{width:"20%"}}>
                                        การใช้งานระบบล่าสุด
                                      </td> */}
                                      <td style={{width:"15%"}}>
                                        <a>
                                          <span style={{backgroundColor:"rgb(162,217,223)",color:"#ffffff" }} >ผู้ใช้งาน</span>
                                          <i className="pc-ic_sort-desc"></i>
                                        </a>
                                      </td>
                                      <td style={{width:"15%"}}>
                                        <a>
                                          <span style={{backgroundColor:"rgb(162,217,223)",color:"#ffffff" }}>รหัสพนักงาน</span>
                                          <i className="pc-ic_sort-desc"></i>
                                        </a>
                                      </td>
                                      <td style={{width:"15%"}}>
                                        <a>
                                          <span style={{backgroundColor:"rgb(162,217,223)",color:"#ffffff" }}>สถานี</span>
                                          <i className="pc-ic_sort-desc"></i>
                                        </a>
                                      </td>
                                      <td style={{width:"20%"}}>
                                        <a>
                                          <span style={{backgroundColor:"rgb(162,217,223)",color:"#ffffff" }}>สถานะ</span>
                                          <i className="pc-ic_sort-desc"></i>
                                        </a>
                                      </td>
                                    </tr>
                                  </thead>

                                  <tbody className="pc-text--c">
                                    <tr>
                                      <td>
                                        <div className="pc-img-round1">
                                          <img src="img/user.jpg" alt="" />
                                        </div>
                                      </td>
                                      {/* <td>02/03/2017 06.42 pm</td> */}
                                      <td>นายม่วง แรงสูง</td>
                                      <td>MEALKB822</td>
                                      <td>MEA Station ลาดกระบัง</td>
                                      <td>กำลังใช้งาน</td>
                                    </tr>
                                  </tbody>
                                </table>
                          </div>

                        </div>
                      </div>
                      <div className="dr"></div>
                    
                    
                      <div className="pc-panel--heading">บัญชีผู้ใช้ระดับ STAFF OPERATOR</div>
                      <div className="pc-panel--body">
                        <div className="pc-panel--content">
                          <div className="pc-row">
                            <div className="pc-col-md-4 pc-col-sm-5 pc-col-xs-6">
                              <div className="pc-field pc-field--search1 has-autocomplete">
                                <div className="pc-g">
                                  <div className="pc-groupin">
                                    <input type="text" placeholder="ค้นหา..." />
                                    <button className="pc-ic_search"></button>
                                  </div>
                                </div>

                                <div className="pc-search--autocomplete" style={{display:"none"}}>
                                  <ul>
                                    <li>ตู้ที่ 2 : EGAT00001236-123</li>
                                    <li>ตู้ที่ 2 : EGAT00001236-123</li>
                                    <li>ตู้ที่ 2 : EGAT00001236-123</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="pc-col-md-8 pc-col-sm-7 pc-col-xs-6">
                              <button className="pc-btn pc-btn--export  pc-pull--r" style={{float:"right"}} > <img src="icon2/Asset 22@3xW.png" alt="" /> </button>
                            </div>
                          </div>
                          
                          <div className="pc-row">
                            <div className="pc-col-md-8">
                              <div className="pc-label">รายงานการใช้งานระบบของบัญชีผู้ใช้</div>
                            </div>
                          </div>

                          <div className="nano has-scrollbar-y pc-table--container pc-stuffoperator--list" style={{minHeight:"330px"}}>
                            <div className="content">
                              <div className="pc-table pc-table--nobordered" style={{minWidth:"700px"}}>
                                <table>
                                  <thead className="pc-text--c">
                                    <tr>
                                      <td style={{width:"15%"}}>
                                      </td>
                                      <td style={{width:"20%"}}>
                                        การใช้งานระบบล่าสุด
                                      </td>
                                      <td style={{width:"15%"}}>
                                        <a>
                                          <span>ผู้ใช้งาน</span>
                                          <i className="pc-ic_sort-desc"> </i>
                                        </a>
                                      </td>
                                      <td style={{width:"15%"}}>
                                        <a>
                                          <span>รหัสพนักงาน</span>
                                          <i className="pc-ic_sort-desc"> </i>
                                        </a>
                                      </td>
                                      <td style={{width:"15%"}}>
                                        <a>
                                          <span>สถานี</span>
                                          <i className="pc-ic_sort-desc"> </i>
                                        </a>
                                      </td>
                                      <td style={{width:"20%"}}>
                                        <a>
                                          <span>สถานะ</span>
                                          <i className="pc-ic_sort-desc"> </i>
                                        </a>
                                      </td>
                                    </tr>
                                  </thead>

                                  <tbody className="pc-text--c">
                                    <tr>
                                      <td>
                                        <div className="pc-img-round">
                                          <a href="/Accoutdetail" ><img src="img/user.jpg" alt="" /></a>
                                        </div>
                                      </td>
                                      <td>02/03/2017 06.42 pm</td>
                                      <td>นายม่วง แรงสูง</td>
                                      <td>MEALKB822</td>
                                      <td>MEA Station ลาดกระบัง</td>
                                      <td>กำลังใช้งาน</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="pc-img-round">
                                          <img src="img/user.jpg" alt="" />
                                        </div>
                                      </td>
                                      <td>02/03/2017 06.42 pm</td>
                                      <td>นายม่วง แรงสูง</td>
                                      <td>MEALKB822</td>
                                      <td>MEA Station ลาดกระบัง</td>
                                      <td>กำลังใช้งาน</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="pc-img-round">
                                          <img src="img/user.jpg" alt="" />
                                        </div>
                                      </td>
                                      <td>02/03/2017 06.42 pm</td>
                                      <td>นายม่วง แรงสูง</td>
                                      <td>MEALKB822</td>
                                      <td>MEA Station ลาดกระบัง</td>
                                      <td>กำลังใช้งาน</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="pc-img-round">
                                          <img src="img/user.jpg" alt="" />
                                        </div>
                                      </td>
                                      <td>02/03/2017 06.42 pm</td>
                                      <td>นายม่วง แรงสูง</td>
                                      <td>MEALKB822</td>
                                      <td>MEA Station ลาดกระบัง</td>
                                      <td>กำลังใช้งาน</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="pc-img-round">
                                          <img src="img/user.jpg" alt="" />
                                        </div>
                                      </td>
                                      <td>02/03/2017 06.42 pm</td>
                                      <td>นายม่วง แรงสูง</td>
                                      <td>MEALKB822</td>
                                      <td>MEA Station ลาดกระบัง</td>
                                      <td>กำลังใช้งาน</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="pc-img-round">
                                          <img src="img/user.jpg" alt="" />
                                        </div>
                                      </td>
                                      <td>02/03/2017 06.42 pm</td>
                                      <td>นายม่วง แรงสูง</td>
                                      <td>MEALKB822</td>
                                      <td>MEA Station ลาดกระบัง</td>
                                      <td>กำลังใช้งาน</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="pc-img-round">
                                          <img src="img/user.jpg" alt="" />
                                        </div>
                                      </td>
                                      <td>02/03/2017 06.42 pm</td>
                                      <td>นายม่วง แรงสูง</td>
                                      <td>MEALKB822</td>
                                      <td>MEA Station ลาดกระบัง</td>
                                      <td>กำลังใช้งาน</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="pc-img-round">
                                          <img src="img/user.jpg" alt="" />
                                        </div>
                                      </td>
                                      <td>02/03/2017 06.42 pm</td>
                                      <td>นายม่วง แรงสูง</td>
                                      <td>MEALKB822</td>
                                      <td>MEA Station ลาดกระบัง</td>
                                      <td>กำลังใช้งาน</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="pc-img-round">
                                          <img src="img/user.jpg" alt="" />
                                        </div>
                                      </td>
                                      <td>02/03/2017 06.42 pm</td>
                                      <td>นายม่วง แรงสูง</td>
                                      <td>MEALKB822</td>
                                      <td>MEA Station ลาดกระบัง</td>
                                      <td>กำลังใช้งาน</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="pc-img-round">
                                          <img src="img/user.jpg" alt="" />
                                        </div>
                                      </td>
                                      <td>02/03/2017 06.42 pm</td>
                                      <td>นายม่วง แรงสูง</td>
                                      <td>MEALKB822</td>
                                      <td>MEA Station ลาดกระบัง</td>
                                      <td>กำลังใช้งาน</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <div className="pc-panel pc-panel--stuff">
                        <div className="pc-panel--heading">บัญชีผู้ใช้ระดับ STAFF</div>
                        <div className="pc-panel--body">
                          <div className="pc-panel--content">
                            <div className="pc-row">
                              <div className="pc-col-md-4 pc-col-sm-5 pc-col-xs-6">
                                
                                <div className="pc-field pc-field--search1 has-autocomplete">
                                <div className="pc-g">
                                  <div className="pc-groupin">
                                    <input type="text" placeholder="ค้นหา..." />
                                    <button className="pc-ic_search"></button>
                                  </div>
                                </div>

                                <div className="pc-search--autocomplete" style={{display:"none"}}>
                                  <ul>
                                    <li>ตู้ที่ 2 : EGAT00001236-123</li>
                                    <li>ตู้ที่ 2 : EGAT00001236-123</li>
                                    <li>ตู้ที่ 2 : EGAT00001236-123</li>
                                  </ul>
                                </div>
                              </div>
                              </div>
                              <div className="pc-col-md-8 pc-col-sm-7 pc-col-xs-6">
                                <button className="pc-btn pc-btn--export  pc-pull--r" style={{float:"right"}}> <img src="icon2/Asset 22@3xW.png" alt="" /> </button>
                                
                              </div>
                            </div>
                            
                            <div className="pc-row">
                              <div className="pc-col-md-8">
                                <div className="pc-label">รายงานการใช้งานระบบของบัญชีผู้ใช้</div>
                              </div>
                            </div>

                            <div className="nano has-scrollbar-y pc-table--container pc-stuffoperator--list" style={{minHeight:"330px"}}>
                              <div className="content">
                                <div className="pc-table pc-table--nobordered" style={{minWidth:"700px"}}>
                                  <table>
                                    <thead className="pc-text--c">
                                      <tr>
                                        <td style={{widthL:"15%"}}>
                                        </td>
                                        <td style={{width:"20%"}}>
                                          การเข้างานล่าสุด
                                        </td>
                                        <td style={{width:"15%"}}>
                                          <a>
                                            <span>ผู้ใช้งาน</span>
                                            <i className="pc-ic_sort-desc"></i>
                                          </a>
                                        </td>
                                        <td style={{width:"15%"}}>
                                          <a>
                                            <span>รหัสพนักงาน</span>
                                            <i className="pc-ic_sort-desc"></i>
                                          </a>
                                        </td>
                                        <td style={{width:"15%"}}>
                                          <a>
                                            <span>ตำแหน่ง</span>
                                            <i className="pc-ic_sort-desc"></i>
                                          </a>
                                        </td>
                                        <td style={{width:"20%"}}>
                                          <a>
                                            <span>สถานี</span>
                                            <i className="pc-ic_sort-desc"></i>
                                          </a>
                                        </td>
                                      </tr>
                                    </thead>
                                    <tbody className="pc-text--c">
                                      <tr>
                                        <td>
                                          <div className="pc-img-round">
                                            <img src="img/user.jpg" alt="" />
                                          </div>
                                        </td>
                                        <td>02/03/2017 06.42 pm</td>
                                        <td>นายม่วง แรงสูง</td>
                                        <td>MEALKB822</td>
                                        <td>Staff</td>
                                        <td>MEA Station ลาดกระบัง</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="pc-img-round">
                                            <img src="img/user.jpg" alt="" />
                                          </div>
                                        </td>
                                        <td>02/03/2017 06.42 pm</td>
                                        <td>นายม่วง แรงสูง</td>
                                        <td>MEALKB822</td>
                                        <td>Staff</td>
                                        <td>MEA Station ลาดกระบัง</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="pc-img-round">
                                            <img src="img/user.jpg" alt="" />
                                          </div>
                                        </td>
                                        <td>02/03/2017 06.42 pm</td>
                                        <td>นายม่วง แรงสูง</td>
                                        <td>MEALKB822</td>
                                        <td>Staff</td>
                                        <td>MEA Station ลาดกระบัง</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="pc-img-round">
                                            <img src="img/user.jpg" alt="" />
                                          </div>
                                        </td>
                                        <td>02/03/2017 06.42 pm</td>
                                        <td>นายม่วง แรงสูง</td>
                                        <td>MEALKB822</td>
                                        <td>Staff</td>
                                        <td>MEA Station ลาดกระบัง</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="pc-img-round">
                                            <img src="img/user.jpg" alt="" />
                                          </div>
                                        </td>
                                        <td>02/03/2017 06.42 pm</td>
                                        <td>นายม่วง แรงสูง</td>
                                        <td>MEALKB822</td>
                                        <td>Staff</td>
                                        <td>MEA Station ลาดกระบัง</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="pc-img-round">
                                            <img src="img/user.jpg" alt="" />
                                          </div>
                                        </td>
                                        <td>02/03/2017 06.42 pm</td>
                                        <td>นายม่วง แรงสูง</td>
                                        <td>MEALKB822</td>
                                        <td>Staff</td>
                                        <td>MEA Station ลาดกระบัง</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="pc-img-round">
                                            <img src="img/user.jpg" alt="" />
                                          </div>
                                        </td>
                                        <td>02/03/2017 06.42 pm</td>
                                        <td>นายม่วง แรงสูง</td>
                                        <td>MEALKB822</td>
                                        <td>Staff</td>
                                        <td>MEA Station ลาดกระบัง</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="pc-img-round">
                                            <img src="img/user.jpg" alt="" />
                                          </div>
                                        </td>
                                        <td>02/03/2017 06.42 pm</td>
                                        <td>นายม่วง แรงสูง</td>
                                        <td>MEALKB822</td>
                                        <td>Staff</td>
                                        <td>MEA Station ลาดกระบัง</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="pc-img-round">
                                            <img src="img/user.jpg" alt="" />
                                          </div>
                                        </td>
                                        <td>02/03/2017 06.42 pm</td>
                                        <td>นายม่วง แรงสูง</td>
                                        <td>MEALKB822</td>
                                        <td>Staff</td>
                                        <td>MEA Station ลาดกระบัง</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="pc-img-round">
                                            <img src="img/user.jpg" alt="" />
                                          </div>
                                        </td>
                                        <td>02/03/2017 06.42 pm</td>
                                        <td>นายม่วง แรงสูง</td>
                                        <td>MEALKB822</td>
                                        <td>Staff</td>
                                        <td>MEA Station ลาดกระบัง</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}

                    </div>
                  </div>

                    <div className="pc-footer">
                      
                      
                    </div>
                </div>
              </div>
            </div>
        </div>
        <Footer />     
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