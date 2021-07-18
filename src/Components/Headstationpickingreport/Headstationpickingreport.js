import { Component } from "react";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default class Headstationpickingreport extends Component {
  render() {
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
                        <ul>
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
                        <li class="is-active">
                          <a href="/Headstationpickingreport">รายงานเบิกของสถานี</a>
                        </li> */}
                        <li>
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
                รายงานการเบิกของของสถานี
              </div>

              <div class="pc-stat has-3-item">
                <div class="pc-wrapper">
                  <div class="pc-row">
                    <div class="pc-col-md-4 pc-col-sm-4 pc-col-xs-4 pc-col-xxs-4">
                      <div class="pc-stat--item">
                        <i class="pc-ic_rept-month"></i>
                        <p>รายการของประจำเดือน</p>
                        <p>
                          <b>8</b> รายการ</p>
                      </div>
                    </div>

                    <div class="pc-col-md-4 pc-col-sm-4 pc-col-xs-4 pc-col-xxs-4">
                      <div class="pc-stat--item">
                        <i class="pc-ic_rept-today"></i>
                        <p>รายการของประจำวัน</p>
                        <p>
                          <b>8</b> รายการ</p>
                      </div>
                    </div>

                    <div class="pc-col-md-4 pc-col-sm-4 pc-col-xs-4 pc-col-xxs-4">
                      <div class="pc-stat--item">
                        <i class="pc-ic_rept-problem"></i>
                        <p>รายการของที่พบปัญหา</p>
                        <p>
                          <b>8</b> รายการ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pc-content">
                <div class="pc-wrapper">
                  <div class="pc-panel pc-panel--pickingyear">
                    <div class="pc-panel--heading">รายงานการเบิกของประจำปี</div>
                    <div class="pc-panel--body">
                      <div class="pc-panel--content">
                        <div class="pc-row">
                          <div class="pc-col-md-4 pc-col-sm-4 pc-col-xs-5">
                            <div class="pc-field pc-field--search has-autocomplete">
                              <select>
                                <option data-display="กรุณาเลือก">กรุณาเลือก</option>
                                <option selected>ปี 2017</option>
                                <option>ตัวเลือก</option>
                                <option>ตัวเลือก</option>
                                <option>ตัวเลือก</option>
                              </select>
                            </div>
                          </div>
                          <div class="pc-col-md-4 pc-col-sm-4 pc-col-xs-5">
                          </div>
                          <div class="pc-col-md-4 pc-col-sm-4 pc-col-xs-2">
                            <button class="pc-btn pc-btn--export pc-ic_export pc-pull--r"></button>
                          </div>
                        </div>

                        <div class="nano has-scrollbar-y pc-pickingyear--list" style={{minHeight:"220px"}}>
                          <div class="content">
                            <div class="pc-table" style={{minWidth:"800px"}}>
                              <table>
                                <thead class="pc-text--c">
                                  <tr>
                                    <td>
                                      <a>
                                        <span>เลขที่</span>
                                        <i class="pc-ic_sort-desc"></i>
                                      </a>
                                    </td>
                                    <td>
                                      รายการของ
                                    </td>
                                    <td>
                                      <a>
                                        <span>ประเภท</span>
                                        <i class="pc-ic_sort-desc"></i>
                                      </a>
                                    </td>
                                    <td></td>
                                    <td>
                                      <a>
                                        <span>วันที่</span>
                                        <i class="pc-ic_sort-desc"></i>
                                      </a>
                                    </td>
                                    <td>
                                      เวลา
                                    </td>
                                    <td>
                                      <a>
                                        <span>ผู้เบิกของ</span>
                                        <i class="pc-ic_sort-desc"></i>
                                      </a>
                                    </td>
                                  </tr>
                                </thead>
                                <tbody class="pc-text--c">
                                  <tr>
                                    <td>abb2349-2</td>
                                    <td>หัวชาร์จ SAE J1772</td>
                                    <td>อุปกรณ์การชาร์จ</td>
                                    <td style={{width:"7%"}}>
                                      <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_1"
                                      aria-expanded="false" aria-controls="collapse_1"></button>
                                    </td>
                                    <td>25/02/2017</td>
                                    <td>05.30 am</td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                  </tr>
                                  <tr class="pc-table--collapse">
                                    <td colspan="7">
                                      <div class="collapse" id="collapse_1">
                                        <div>
                                          <table>
                                            <thead>
                                              <tr>
                                                <td>
                                                  <a>
                                                    <span>เลขที่</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>รายการของ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>ประเภท</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"7%"}}></td>
                                                <td>
                                                  <a>
                                                    <span>วันที่</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>เวลา</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>ผู้เบิกของ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td></td>
                                                <td>รายละเอียดการเบิกของ</td>
                                                <td>รหัสของ</td>
                                                <td colspan="2">ราคาของ (บาท)</td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td></td>
                                                <td>หัวชาร์จ SAE J1772</td>
                                                <td>CGSJ1266</td>
                                                <td colspan="2">2,550</td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td></td>
                                                <td>ปลอกข้อต่อ</td>
                                                <td>ET2035</td>
                                                <td colspan="2">70</td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>abb2349-2</td>
                                    <td>หัวชาร์จ SAE J1772</td>
                                    <td>อุปกรณ์การชาร์จ</td>
                                    <td style={{width:"7%"}}>
                                      <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_2"
                                      aria-expanded="false" aria-controls="collapse_2"></button>
                                    </td>
                                    <td>25/02/2017</td>
                                    <td>05.30 am</td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                  </tr>
                                  <tr class="pc-table--collapse">
                                    <td colspan="7">
                                      <div class="collapse" id="collapse_2">
                                        <div>
                                          <table>
                                            <thead>
                                              <tr>
                                                <td>
                                                  <a>
                                                    <span>เลขที่</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>รายการของ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>ประเภท</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"7%"}}></td>
                                                <td>
                                                  <a>
                                                    <span>วันที่</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>เวลา</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>ผู้เบิกของ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td></td>
                                                <td>รายละเอียดการเบิกของ</td>
                                                <td>รหัสของ</td>
                                                <td colspan="2">ราคาของ (บาท)</td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td></td>
                                                <td>หัวชาร์จ SAE J1772</td>
                                                <td>CGSJ1266</td>
                                                <td colspan="2">2,550</td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td></td>
                                                <td>ปลอกข้อต่อ</td>
                                                <td>ET2035</td>
                                                <td colspan="2">70</td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>abb2349-2</td>
                                    <td>หัวชาร์จ SAE J1772</td>
                                    <td>อุปกรณ์การชาร์จ</td>
                                    <td style={{width:"7%"}}>
                                      <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_3"
                                      aria-expanded="false" aria-controls="collapse_3"></button>
                                    </td>
                                    <td>25/02/2017</td>
                                    <td>05.30 am</td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                  </tr>
                                  <tr class="pc-table--collapse">
                                    <td colspan="7">
                                      <div class="collapse" id="collapse_3">
                                        <div>
                                          <table>
                                            <thead>
                                              <tr>
                                                <td>
                                                  <a>
                                                    <span>เลขที่</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>รายการของ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>ประเภท</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"7%"}}></td>
                                                <td>
                                                  <a>
                                                    <span>วันที่</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>เวลา</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>ผู้เบิกของ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td></td>
                                                <td>รายละเอียดการเบิกของ</td>
                                                <td>รหัสของ</td>
                                                <td colspan="2">ราคาของ (บาท)</td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td></td>
                                                <td>หัวชาร์จ SAE J1772</td>
                                                <td>CGSJ1266</td>
                                                <td colspan="2">2,550</td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td></td>
                                                <td>ปลอกข้อต่อ</td>
                                                <td>ET2035</td>
                                                <td colspan="2">70</td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>abb2349-2</td>
                                    <td>หัวชาร์จ SAE J1772</td>
                                    <td>อุปกรณ์การชาร์จ</td>
                                    <td style={{width:"7%"}}>
                                      <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_4"
                                      aria-expanded="false" aria-controls="collapse_4"></button>
                                    </td>
                                    <td>25/02/2017</td>
                                    <td>05.30 am</td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                  </tr>
                                  <tr class="pc-table--collapse">
                                    <td colspan="7">
                                      <div class="collapse" id="collapse_4">
                                        <div>
                                          <table>
                                            <thead>
                                              <tr>
                                                <td>
                                                  <a>
                                                    <span>เลขที่</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>รายการของ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>ประเภท</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"7%"}}></td>
                                                <td>
                                                  <a>
                                                    <span>วันที่</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>เวลา</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>ผู้เบิกของ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td></td>
                                                <td>รายละเอียดการเบิกของ</td>
                                                <td>รหัสของ</td>
                                                <td colspan="2">ราคาของ (บาท)</td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td></td>
                                                <td>หัวชาร์จ SAE J1772</td>
                                                <td>CGSJ1266</td>
                                                <td colspan="2">2,550</td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td></td>
                                                <td>ปลอกข้อต่อ</td>
                                                <td>ET2035</td>
                                                <td colspan="2">70</td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>abb2349-2</td>
                                    <td>หัวชาร์จ SAE J1772</td>
                                    <td>อุปกรณ์การชาร์จ</td>
                                    <td style={{width:"7%"}}>
                                      <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_5"
                                      aria-expanded="false" aria-controls="collapse_5"></button>
                                    </td>
                                    <td>25/02/2017</td>
                                    <td>05.30 am</td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                  </tr>
                                  <tr class="pc-table--collapse">
                                    <td colspan="7">
                                      <div class="collapse" id="collapse_5">
                                        <div>
                                          <table>
                                            <thead>
                                              <tr>
                                                <td>
                                                  <a>
                                                    <span>เลขที่</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>รายการของ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>ประเภท</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"7%"}}></td>
                                                <td>
                                                  <a>
                                                    <span>วันที่</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>เวลา</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td>
                                                  <a>
                                                    <span>ผู้เบิกของ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td></td>
                                                <td>รายละเอียดการเบิกของ</td>
                                                <td>รหัสของ</td>
                                                <td colspan="2">ราคาของ (บาท)</td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td></td>
                                                <td>หัวชาร์จ SAE J1772</td>
                                                <td>CGSJ1266</td>
                                                <td colspan="2">2,550</td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td></td>
                                                <td>ปลอกข้อต่อ</td>
                                                <td>ET2035</td>
                                                <td colspan="2">70</td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </td>
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

              <div class="pc-footer">
                
                <Footer />
                
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}