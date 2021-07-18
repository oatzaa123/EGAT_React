import { Component } from "react";

import Footer from "../Footer/Footer"

export default class TblC extends Component {
  render() {
    return(
      <div>
        <div className="pc-main--row">
                    <div className="pc-row">
                      <div className="pc-col-md-5 pc-col-sm-5">
                        <div className="pc-panel pc-panel--poppularstation">
                          <div className="pc-panel--heading">
                            POPULAR STATIONS
                            <b>5</b>
                          </div>
                          <div className="pc-panel--body">
                            <div className="pc-panel--content">
                              <div className="pc-table pc-table--nobordered">
                                <table>
                                  <thead>
                                    <tr>
                                      <td rowSpan="2">สถานี</td>
                                      <td colSpan="2">จำนวนผู้ใช้งาน</td>
                                    </tr>
                                    <tr>
                                      <td>ทั้งหมด</td>
                                      <td>วันนี้</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>EGAT Station ท103</td>
                                      <td>4,825</td>
                                      <td>65</td>
                                    </tr>
                                    <tr>
                                      <td>EGAT Station ท103</td>
                                      <td>4,825</td>
                                      <td>65</td>
                                    </tr>
                                    <tr>
                                      <td>EGAT Station ท103</td>
                                      <td>4,825</td>
                                      <td>65</td>
                                    </tr>
                                    <tr>
                                      <td>EGAT Station ท103</td>
                                      <td>4,825</td>
                                      <td>65</td>
                                    </tr>
                                    <tr>
                                      <td>EGAT Station ท103</td>
                                      <td>4,825</td>
                                      <td>65</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pc-col-md-7 pc-col-sm-7">
                        <div className="pc-panel pc-panel--recentactiveuser">
                          <div className="pc-panel--heading">
                            5 RECENT ACTIVE USERS
                          </div>
                          <div className="pc-panel--body">
                            <div className="nano" style={{height:"296px"}}>
                              <div className="content">
                                <div className="pc-panel--content">
                                  <div className="pc-table pc-table--nobordered">
                                    <table>
                                      <thead>
                                        <tr>
                                          <td>สถานี</td>
                                          <td>ตู้ชาร์จ</td>
                                          <td>ทะเบียน</td>
                                          <td>สถานะ</td>
                                          <td>เวลา</td>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>EGAT Station ท103</td>
                                          <td>ตู้ที่ 2 : EGAT00001239-123</td>
                                          <td>8กฟ5633 กรุงเทพ</td>
                                          <td>เตรียมการชาร์จ</td>
                                          <td>30 วินาทีที่แล้ว</td>
                                        </tr>
                                        <tr>
                                          <td>EGAT Station ท103</td>
                                          <td>ตู้ที่ 2 : EGAT00001239-123</td>
                                          <td>8กฟ5633 กรุงเทพ</td>
                                          <td>เตรียมการชาร์จ</td>
                                          <td>30 วินาทีที่แล้ว</td>
                                        </tr>
                                        <tr>
                                          <td>EGAT Station ท103</td>
                                          <td>ตู้ที่ 2 : EGAT00001239-123</td>
                                          <td>8กฟ5633 กรุงเทพ</td>
                                          <td>เตรียมการชาร์จ</td>
                                          <td>30 วินาทีที่แล้ว</td>
                                        </tr>
                                        <tr>
                                          <td>EGAT Station ท103</td>
                                          <td>ตู้ที่ 2 : EGAT00001239-123</td>
                                          <td>8กฟ5633 กรุงเทพ</td>
                                          <td>เตรียมการชาร์จ</td>
                                          <td>30 วินาทีที่แล้ว</td>
                                        </tr>
                                        <tr>
                                          <td>EGAT Station ท103</td>
                                          <td>ตู้ที่ 2 : EGAT00001239-123</td>
                                          <td>8กฟ5633 กรุงเทพ</td>
                                          <td>เตรียมการชาร์จ</td>
                                          <td>30 วินาทีที่แล้ว</td>
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
                    </div>
                  </div>

                  <div className="pc-content" style={{backgroundColor:"#fff0aa"}}>
                <div className="pc-map--heading">
                  <img src="img/user.svg" alt=""/>
                  
                </div>

                <div className="pc-map">
                  {/* <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=forum%20tower&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>  */}
                </div>

                <div className="pc-title">
                  สถานีของคุณ
                </div>

                <div className="pc-stat has-5-item">
                  <div className="pc-wrapper">
                    <div className="pc-row">
                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_info-allstation"><img src="icon/ic/Asset 53x.png" alt="icon" /></i>
                          <p>จำนวนสถานีทั้งหมด</p>
                          <p>
                            <b>76</b> สถานี</p>
                        </div>
                      </div>

                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_info-activestation"><img src="icon/ic/Asset 53x.png" alt="icon" /></i>
                          <p>สถานีที่กำลังใช้งาน</p>
                          <p>
                            <b>69</b> สถานี</p>
                        </div>
                      </div>

                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_info-repairstation"><img src="icon/ic/Asset 33x.png" alt="icon" /></i>
                          <p>สถานีมีการซ่อมบำรุง</p>
                          <p>
                            <b>2</b> สถานี</p>
                        </div>
                      </div>

                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_info-allcontroller"><img src="icon/ic/Asset 1@3xW.png" alt="icon" /></i>
                          <p>ผู้ควบคุมระบบทั้งหมด</p>
                          <p>
                            <b>149</b> คน</p>
                        </div>
                      </div>

                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_info-activecontroller"><img src="icon/ic/Asset 13x.png" alt="icon" /></i>
                          <p>ผู้ควบคุมที่กำลังใช้งาน</p>
                          <p>
                            <b>108</b> คน</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pc-wrapper">
                  <div className="pc-panel  pc-panel--liststation">
                    <div className="pc-panel--body">
                      <div className="pc-panel--content">
                        <div className="pc-liststation--container">
                          <div className="pc-row">
                            <div className="pc-col-md-5">
                              <div className="pc-field pc-field--search has-autocomplete">
                                <div className="pc-groupfield">
                                  <input type="text"/>
                                  <button className="pc-ic_search"></button>
                                </div>

                                <div className="pc-search--autocomplete" style={{display:"none"}}>
                                  <ul>
                                    <li>EGAT Station บางเขน</li>
                                    <li>EGAT Station บางเขน</li>
                                    <li>EGAT Station บางเขน</li>
                                    <li>EGAT Station บางเขน</li>
                                    <li>EGAT Station บางเขน</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="pc-liststation--container">
                          <div className="pc-row">
                            <div className="pc-col-md-3 pc-col-sm-3 pc-liststation--item">
                              <div className="pc-liststation--heading">
                                <h2>กรุงเทพและปริมณฑล (22)</h2>
                                <i></i>
                              </div>
                              <ul className="pc-liststation--listitem">
                                <li>
                                  <a>PEA Station บางขุนเทียน
                                    <i className="pc-ic_is-charging"></i>
                                  </a>
                                </li>
                                <li className="is-fav">
                                  <a>PEA Station บางเขน
                                    <i className="pc-ic_is-charging"></i>
                                  </a>
                                </li>
                                <li className="is-fav">
                                  <a>PEA Station บางใหญ่
                                    <i className="pc-ic_is-charging"></i>
                                  </a>
                                </li>
                                <li>
                                  <a>PEA Station ราษฏร์บูรณะ
                                    <i className="pc-ic_is-charging"></i>
                                  </a>
                                </li>
                                <li className="is-fav">
                                  <a>EGAT Station ท103
                                    <i className="pc-ic_is-charging"></i>
                                  </a>
                                </li>
                              </ul>
                              <button className="pc-btn pc-btn--more">ดูเพิ่มเติม</button>
                            </div>

                            <div className="pc-col-md-3 pc-col-sm-3 pc-liststation--item">
                              <div className="pc-liststation--heading">
                                <h2>ภาคกลาง (40)</h2>
                                <i></i>
                              </div>
                              <ul className="pc-liststation--listitem">
                                <li>
                                  <a>PEA Station บางขุนเทียน</a>
                                </li>
                                <li>
                                  <a>PEA Station บางเขน
                                    <i className="pc-ic_is-charging"></i>
                                  </a>
                                </li>
                                <li>
                                  <a>PEA Station บางใหญ่
                                    <i className="pc-ic_is-charging"></i>
                                  </a>
                                </li>
                                <li className="is-fav">
                                  <a>PEA Station ราษฏร์บูรณะ</a>
                                </li>
                                <li>
                                  <a>EGAT Station ท103</a>
                                </li>
                              </ul>
                              <button className="pc-btn pc-btn--more">ดูเพิ่มเติม</button>
                            </div>

                            <div className="pc-col-md-3 pc-col-sm-3 pc-liststation--item">
                              <div className="pc-liststation--heading">
                                <h2>ภาคใต้ (9)</h2>
                                <i></i>
                              </div>
                              <ul className="pc-liststation--listitem">
                                <li>
                                  <a>PEA Station บางขุนเทียน</a>
                                </li>
                                <li>
                                  <a>PEA Station บางเขน
                                    <i className="pc-ic_repair"></i>
                                  </a>
                                </li>
                                <li>
                                  <a>PEA Station บางใหญ่</a>
                                </li>
                                <li className="is-fav">
                                  <a>PEA Station ราษฏร์บูรณะ
                                    <i className="pc-ic_is-charging"></i>
                                  </a>
                                </li>
                                <li className="is-fav">
                                  <a>EGAT Station ท103
                                    <i className="pc-ic_is-charging"></i>
                                  </a>
                                </li>
                              </ul>
                              <button className="pc-btn pc-btn--more">ดูเพิ่มเติม</button>
                            </div>

                            <div className="pc-col-md-3 pc-col-sm-3 pc-liststation--item">
                              <div className="pc-liststation--heading">
                                <h2>ภาคเหนือ (3)</h2>
                                <i></i>
                              </div>
                              <ul className="pc-liststation--listitem">
                                <li>
                                  <a>PEA Station บางขุนเทียน</a>
                                </li>
                                <li>
                                  <a>PEA Station ราษฏร์บูรณะ</a>
                                </li>
                                <li className="is-fav">
                                  <a>EGAT Station ท103
                                    <i className="pc-ic_repair"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          
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