import { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default class Accoutdetail extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div class="pc-body nano pc-role--owner pc-owner--account-detail">
            <div class="content">
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
                          <li >
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

              <div class="pc-container">
              

                <div class="pc-content">
                  <div class="pc-wrapper">
                    <div class="pc-img-round">
                      <img src="img/user.jpg" alt="" />
                    </div>

                    <div class="pc-panel pc-panel--background">
                      <div class="pc-panel--heading">ประวัติโดยละเอียด</div>
                      <div class="pc-panel--body">
                        <div class="pc-panel--content" style={{color:"rgb(45,128,191)"}}>
                          <div class="pc-row" >
                            <div class="pc-col-md-4 pc-col-sm-6 pc-col-xs-6">
                              <p>ชื่อ-สกุล : นายดำ แรงสูง</p>
                              <p>วันเกิด : 15/02/1995</p>
                              <p>ที่อยู่ : 60/45 หมู่บ้านทองทรัพย์ ต.ทองทรัพย์ อ.เมือง จ.อ่างทอง 23020</p>
                            </div>
                            {/* <div class="pc-col-md-4 pc-col-sm-6 pc-col-xs-6">
                              <p>ชื่อเล่น : ดำดำ</p>
                              <p>สถานภาพ : โสด</p>

                            </div> */}
                            {/* <div class="pc-col-md-4 pc-col-sm-6 pc-col-xs-6">
                              <p>เลขประจำตัวประชาชน : 120-56-77809-45</p>
                              <p>สัญชาติ : ไทย</p>
                            </div> */}
                            {/* <div class="pc-col-md-4 pc-col-sm-6 pc-col-xs-6">
                              <p>วันเกิด : 15/02/1995</p>
                            </div> */}
                            {/* <div class="pc-col-md-4 pc-col-sm-6 pc-col-xs-6">
                              <p>สถานภาพ : โสด</p>
                            </div> */}
                            {/* <div class="pc-col-md-4 pc-col-sm-6 pc-col-xs-6">
                              <p>สัญชาติ : ไทย</p>
                            </div> */}
                            <div class="pc-col-md-12">
                              {/* <p>ที่อยู่ : 60/45 หมู่บ้านทองทรัพย์ ต.ทองทรัพย์ อ.เมือง จ.อ่างทอง 23020</p> */}
                            </div>
                          </div>

                          <div class="pc-row">
                            <div class="pc-col-md-4 pc-col-sm-6 pc-col-xs-6">
                              <p>รหัสพนักงาน : MEALKB822</p>
                              <p>วันที่เริ่มทำงาน : 15 มิถุนายน 2556</p>
                              <p>เบอร์ติดต่อ : 102</p>

                            </div>
                            <div class="pc-col-md-4 pc-col-sm-6 pc-col-xs-6">
                              <p>ตำแหน่ง : Staff Operator</p>
                            </div>
                            <div class="pc-col-md-4 pc-col-sm-6 pc-col-xs-6">
                              <p>สถานี : MEA Station ลาดกระบัง</p>
                              <p>อายุงาน : 4 ปี</p>
                              <p>เบอร์โทรศัพท์ : 087-567-5644</p>
                            </div>
                            {/* <div class="pc-col-md-4 pc-col-sm-6 pc-col-xs-6">
                              <p>วันที่เริ่มทำงาน : 15 มิถุนายน 2556</p>
                            </div> */}
                            {/* <div class="pc-col-md-8">
                              <p>อายุงาน : 4 ปี</p>
                            </div> */}
                            {/* <div class="pc-col-md-4 pc-col-sm-6 pc-col-xs-6">
                              <p>เบอร์ติดต่อ : 102</p>
                            </div> */}
                            <div class="pc-col-md-4 pc-col-sm-6 pc-col-xs-6">
                              <p>สถานี : EGAT Station ลาดกระบัง</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="pc-panel pc-panel--history">
                      <div class="pc-panel--heading">ประวัติการใช้งานในระบบ</div>
                      <div class="pc-panel--body">
                        <div class="pc-panel--content">
                          <div class="pc-row">
                            <div class="pc-col-md-4 pc-col-sm-5 pc-col-xs-6">
                              <div class="pc-field pc-field--search has-autocomplete">
                              <div className="pc-sel"> 
                                <select>
                                  <option data-display="เลือก">กรุณาเลือก</option>
                                  <option selected>เดือน มีนาคม 2017</option>
                                  <option>ตัวเลือก</option>
                                  <option>ตัวเลือก</option>
                                  <option>ตัวเลือก</option>
                                </select>
                              </div>
                              </div>
                            </div>
                            <div class="pc-col-md-4 pc-col-sm-5 pc-col-xs-6">
                              <div class="pc-field pc-field--search has-autocomplete">
                              <div className="pc-groupin">
                                  <input type="text" placeholder="ค้นหา..." />
                                  <button className="pc-ic_search"></button>
                                </div>

                                <div class="pc-search--autocomplete" style={{display:"none"}}>
                                  <ul>
                                    <li>ตู้ที่ 2 : EGAT00001236-123</li>
                                    <li>ตู้ที่ 2 : EGAT00001236-123</li>
                                    <li>ตู้ที่ 2 : EGAT00001236-123</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="pc-col-md-4 pc-col-sm-2">
                              <button class="pc-btn pc-btn--export pc-ic_export pc-pull--r"></button>
                            </div>
                          </div>
                          <div class="nano has-scrollbar-y pc-table--container" style={{minHeight:"330px"}}>
                            <div class="content">
                              <div class="pc-table pc-table--nobordered" style={{minWidth:"700px"}}>
                                <table>
                                  <thead class="pc-text--c">
                                    <tr>
                                      <td style={{width:"15%"}}>
                                        <a>
                                          <span>วันที่</span>
                                          <i class="pc-ic_sort-desc"> </i>
                                        </a>
                                      </td>
                                      <td style={{width:"15%"}}>
                                        <a>
                                          <span>เข้าสู่ระบบ</span>
                                          <i class="pc-ic_sort-desc"> </i>
                                        </a>
                                      </td>
                                      <td style={{width:"20%"}}>
                                        <a>
                                          <span>ออกจากระบบ</span>
                                          <i class="pc-ic_sort-desc"> </i>
                                        </a>
                                      </td>
                                      <td style={{width:"25%"}}>
                                        <a>
                                          <span>ประเภทการเข้าใช้</span>
                                          <i class="pc-ic_sort-desc"> </i>
                                        </a>
                                      </td>
                                      <td style={{width:"25%"}}>
                                        <a>
                                          <span>IP เครื่องท่ี่เข้าระบบ</span>
                                          <i class="pc-ic_sort-desc"> </i>
                                        </a>
                                      </td>
                                    </tr>
                                  </thead>
                                  <tbody class="pc-text--c">
                                    <tr>
                                      <td>02/03/2017</td>
                                      <td>06.40 pm</td>
                                      <td>กำลังใช้งาน</td>
                                      <td>MAC IOS SAFARI</td>
                                      <td>192.001.0.111</td>
                                    </tr>
                                    <tr>
                                      <td>02/03/2017</td>
                                      <td>06.40 pm</td>
                                      <td>กำลังใช้งาน</td>
                                      <td>MAC IOS SAFARI</td>
                                      <td>192.001.0.111</td>
                                    </tr>
                                    <tr>
                                      <td>02/03/2017</td>
                                      <td>06.40 pm</td>
                                      <td>กำลังใช้งาน</td>
                                      <td>MAC IOS SAFARI</td>
                                      <td>192.001.0.111</td>
                                    </tr>
                                    <tr>
                                      <td>02/03/2017</td>
                                      <td>06.40 pm</td>
                                      <td>กำลังใช้งาน</td>
                                      <td>MAC IOS SAFARI</td>
                                      <td>192.001.0.111</td>
                                    </tr>
                                    <tr>
                                      <td>02/03/2017</td>
                                      <td>06.40 pm</td>
                                      <td>กำลังใช้งาน</td>
                                      <td>MAC IOS SAFARI</td>
                                      <td>192.001.0.111</td>
                                    </tr>
                                    <tr>
                                      <td>02/03/2017</td>
                                      <td>06.40 pm</td>
                                      <td>กำลังใช้งาน</td>
                                      <td>MAC IOS SAFARI</td>
                                      <td>192.001.0.111</td>
                                    </tr>
                                    <tr>
                                      <td>02/03/2017</td>
                                      <td>06.40 pm</td>
                                      <td>กำลังใช้งาน</td>
                                      <td>MAC IOS SAFARI</td>
                                      <td>192.001.0.111</td>
                                    </tr>
                                    <tr>
                                      <td>02/03/2017</td>
                                      <td>06.40 pm</td>
                                      <td>กำลังใช้งาน</td>
                                      <td>MAC IOS SAFARI</td>
                                      <td>192.001.0.111</td>
                                    </tr>
                                    <tr>
                                      <td>02/03/2017</td>
                                      <td>06.40 pm</td>
                                      <td>กำลังใช้งาน</td>
                                      <td>MAC IOS SAFARI</td>
                                      <td>192.001.0.111</td>
                                    </tr>
                                    <tr>
                                      <td>02/03/2017</td>
                                      <td>06.40 pm</td>
                                      <td>กำลังใช้งาน</td>
                                      <td>MAC IOS SAFARI</td>
                                      <td>192.001.0.111</td>
                                    </tr>
                                    <tr>
                                      <td>02/03/2017</td>
                                      <td>06.40 pm</td>
                                      <td>กำลังใช้งาน</td>
                                      <td>MAC IOS SAFARI</td>
                                      <td>192.001.0.111</td>
                                    </tr>
                                  </tbody>
                                </table>
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
      </div>
      </div>
    )
  }
}