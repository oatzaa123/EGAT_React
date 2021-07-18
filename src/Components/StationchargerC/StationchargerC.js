import { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";


import TBLEX from "../TBL/Historycharger"

export default class StationCG extends Component {

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
                        <li class="is-active">
                          <a href="">ข้อมูลตู้ชาร์จของสถานี</a>
                        </li>
                        <li>
                          <a href="/HeadStationAnalysis">ผลวิเคราะห์ของสถานี</a>
                        </li>
                        {/* <li>
                          <a href="Headstationexpensereport">รายงานค่าใช้จ่ายของสถานี</a>
                        </li> */}
                        {/* <li>
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
                ข้อมูลตู้ที่ 4 : EGAT00001239-123
              </div>

              <div class="pc-content">
                <div class="pc-wrapper">
                  <div class="pc-panel pc-panel--nobg pc-panel--chargerimg">
                    <div class="pc-panel--body">
                      <div class="pc-panel--content">
                        <div class="pc-row-chargering">
                          <div class="pc-chargerimg--item pc-col-md-3 pc-col-sm-3 pc-col-xs-6 pc-col-xxs-6">
                            <img src="img/charger.jpg" class="pc-img--responsive" />
                          </div>
                          <div class="pc-chargerimg--item pc-col-md-3 pc-col-sm-3 pc-col-xs-6 pc-col-xxs-6">
                            <img src="img/charger.jpg" class="pc-img--responsive" />
                          </div>
                          <div class="pc-chargerimg--item pc-col-md-3 pc-col-sm-3 pc-col-xs-6 pc-col-xxs-6">
                            <img src="img/charger.jpg" class="pc-img--responsive" />
                          </div>
                          <div class="pc-chargerimg--item pc-col-md-3 pc-col-sm-3 pc-col-xs-6 pc-col-xxs-6">
                            <img src="img/charger.jpg" class="pc-img--responsive" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="pc-panel pc-panel--chargerdetail">
                    <div class="pc-panel--body">
                      <div class="pc-panel--content">
                        <div class="pc-row">
                          <div class="pc-col-md-12">
                            <div class="pc-label">
                              ข้อมูล
                            </div>
                          </div>
                          <div class="pc-col-md-3 pc-col-sm-6 pc-col-xs-6 pc-col-xxs-12">
                            <p>รุ่นเครื่องชาร์จไฟฟ้า : Delta EV</p>
                            <p>ประเภท : รวดเร็ว</p>
                            <p>กำลังไฟฟ้า : 52 kW</p>
                            <p>พลังงานไฟฟ้ารวม : 520 kWh</p>
                            <p>วันที่ติดตั้ง : ธันวันคม 2556</p>
                          </div>
                          <div class="pc-col-md-3 pc-col-sm-6 pc-col-xs-6 pc-col-xxs-12">
                            <p>Mac : 00-00-00-00-00</p>
                            <p>IP : 192.001.0.111</p>
                            <p>Subnet : 255.255.255.0</p>
                            <p>Gateway : 192.168.0.1</p>
                            <p>ผู้ดูแล : นายไฟฟ้า แรงสูง</p>
                            <p>เบอร์ติดต่อ : 099-235-6978</p>
                          </div>
                          <div class="pc-col-md-3 pc-col-sm-6 pc-col-xs-6 pc-col-xxs-12">
                            <p>ช่องจอดที่ : 4</p>
                            <p>พิกัดหัวชาร์จ : XXXXXX</p>
                            <p>หัวชาร์จ :
                              {/* <p>
                                <p> */}
                                  <i class="pc-charger--adapter pc-ic_adapter1"></i>
                                  <i class="pc-charger--adapter pc-ic_adapter2"></i>
                                {/* </p>
                              </p> */}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="pc-panel pc-panel--chargertimeline">
                    <div class="pc-panel--heading">
                      สถานะการใช้งานของตู้ชาร์จ
                      <i class="pc-ic_charge-active"></i>
                    </div>
                    <div class="pc-panel--body">
                      <div class="nano" style={{height:"255px"}}>
                        <div class="content">
                          <div class="pc-panel--content" style={{minWidth:"800px"}}>
                            <div class="pc-row">
                              <div class="pc-col-md-12">
                                <div class="pc-chargertimeline--stopcharge">
                                  <p>คำสั่งการชาร์จระยะไกล</p>
                                  <button class="pc-btn pc-btn--pink">หยุดการชาร์จทันที</button>
                                </div>
                                <div class="pc-row pc-steps has-8-steps">
                                  {/* <div class="pc-steps--item is-complete">
                                    <div class="pc-steps--no">1</div>
                                    <div class="pc-steps--prog prog-l"></div>
                                    <div class="pc-steps--prog prog-r"></div>
                                    <div class="pc-steps--info">
                                      <div>ทำการจอง
                                        <br />สำเร็จ</div>
                                    </div>
                                    <div class="pc-steps--time">06.30 pm</div>
                                  </div>

                                  <div class="pc-steps--item is-complete">
                                    <div class="pc-steps--no">2</div>
                                    <div class="pc-steps--prog prog-l"></div>
                                    <div class="pc-steps--prog prog-r"></div>
                                    <div class="pc-steps--info">
                                      <div>กำลังเดินทาง</div>
                                    </div>
                                    <div class="pc-steps--time">0-15 mn.</div>
                                  </div>

                                  <div class="pc-steps--item is-complete">
                                    <div class="pc-steps--no">3</div>
                                    <div class="pc-steps--prog prog-l"></div>
                                    <div class="pc-steps--prog prog-r"></div>
                                    <div class="pc-steps--info">
                                      <div>ถึงสถานี</div>
                                    </div>
                                    <div class="pc-steps--time">06.40 pm</div>
                                  </div> */}

                                  <div class="pc-steps--item is-active">
                                    <div class="pc-steps--no">1</div>
                                    <div class="pc-steps--prog prog-l"></div>
                                    <div class="pc-steps--prog prog-r"></div>
                                    <div class="pc-steps--info">
                                      <div>ทำการ
                                        <br />เช็คอิน</div>
                                    </div>
                                    <div class="pc-steps--time">06.42 pm</div>
                                  </div>

                                  <div class="pc-steps--item">
                                    <div class="pc-steps--no">2</div>
                                    <div class="pc-steps--prog prog-l"></div>
                                    <div class="pc-steps--prog prog-r"></div>
                                    <div class="pc-steps--info">
                                      <div>เริ่มต้น
                                        <br />ทำการชาร์จ</div>
                                    </div>
                                    <div class="pc-steps--time">00.00 pm</div>
                                  </div>

                                  <div class="pc-steps--item">
                                    <div class="pc-steps--no">3</div>
                                    <div class="pc-steps--prog prog-l"></div>
                                    <div class="pc-steps--prog prog-r"></div>
                                    <div class="pc-steps--info">
                                      <div>ทำการชาร์จ
                                        <br />สำเร็จ</div>
                                    </div>
                                    <div class="pc-steps--time">00.00 pm</div>
                                  </div>

                                  {/* <div class="pc-steps--item">
                                    <div class="pc-steps--no">4</div>
                                    <div class="pc-steps--prog prog-l"></div>
                                    <div class="pc-steps--prog prog-r"></div>
                                    <div class="pc-steps--info">
                                      <div>ทำการ
                                        <br />คิดเงิน</div>
                                    </div>
                                    <div class="pc-steps--time">00.00 pm</div>
                                  </div> */}

                                  {/* <div class="pc-steps--item">
                                    <div class="pc-steps--no">8</div>
                                    <div class="pc-steps--prog prog-l"></div>
                                    <div class="pc-steps--prog prog-r"></div>
                                    <div class="pc-steps--info">
                                      <div>ทำการ
                                        <br />เช็คเอาท์</div>
                                    </div>
                                    <div class="pc-steps--time">00.00 pm</div>
                                  </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div class="pc-panel pc-panel--renter">
                    <div class="pc-panel--heading">ผู้ทำการจอง</div>
                    <div class="pc-panel--body">
                      <div class="pc-panel--content">
                        <div class="pc-row">
                          <div class="pc-col-md-3 pc-renter--img">
                            <img src="img/info-head.svg" class="pc-img--responsive" />
                          </div>
                          <div class="pc-col-md-9">
                            <div class="pc-row">
                              <div class="pc-col-md-6">
                                <p>
                                  <b>รุ่นรถ</b> : Nissan Leaf 2017</p>
                              </div>
                              <div class="pc-col-md-6">
                                <p>
                                  <b>เจ้าของรถ</b> : Nutwara Pratchayakul</p>
                              </div>

                              <div class="pc-col-md-6">
                                <p>
                                  <b>ทะเบียน</b> : 8กฟ4857 กรุงเทพมหานคร</p>
                              </div>
                              <div class="pc-col-md-6">
                                <p>
                                  <b>หัวชาร์จ</b> :
                                  <i class="pc-charger--adapter pc-ic_adapter1"></i>
                                  <i class="pc-charger--adapter pc-ic_adapter1"></i>
                                  <i class="pc-charger--adapter pc-ic_adapter1"></i>
                                </p>
                              </div>

                              <div class="pc-col-md-6">
                                <p>
                                  <b>ทำการจอง</b> : 15/03/17 12.30 pm</p>
                              </div>
                              <div class="pc-col-md-6">
                                <button class="pc-btn pc-btn--pink">ทำการยกเลิกการจอง</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}



                  <div class="pc-panel pc-panel--chrgerhistory">
                    <div class="pc-panel--heading">ข้อมูลความจุสายส่งไฟฟ้าและภาระหม้อแปลง</div>
                    <div class="pc-panel--body">
                      <div class="pc-panel--content">
                        <div class="pc-row">
                          <div class="pc-col-md-4 pc-col-sm-5 pc-col-xs-5">
                            <div class="pc-field pc-field--search has-autocomplete">
                              <div className="batterry" style={{marginLeft:"17%"}}>
                                <table>
                                  <thead class="pc-text--c">
                                    <tr>
                                      <td style={{width:"15%"}}>
                                        รหัสหม้อแปลงไฟฟ้า
                                      </td>
                                      <td style={{width:"30%"}}>
                                        <a>
                                          พิกัดหม้อแปลงไฟฟ้า
                                      </a>
                                      </td>
                                      <td style={{width:"25%"}}>
                                      ระดับภาระหม้อแปลงไฟฟ้า
                                      </td>
                                      
                                      <td style={{width:"25%"}}>
                                      <a>
                                        ภาระกระแสไฟฟ้าที่เหลืออยู่
                                      </a>
                                      </td>
                                    </tr>
                                  </thead>
                                  <tbody style={{textAlign:"center"}}>
                                    <tr>
                                      <td>
                                        12345
                                      </td>
                                      <td>
                                        1000 kVA
                                      </td>
                                      <td>
                                        100 %
                                      </td>
                                      
                                      <td>
                                        100 A.
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                {/* <p>รหัสหม้อแปลงไฟฟ้า 12345</p>
                                <p>พิกัดหม้อแปลงไฟฟ้า 1000 kVA</p>
                                <p>ระดับภาระหม้อแปลงไฟฟ้า 100 %</p>
                                <p>ภาระกระแสไฟฟ้าที่เหลืออยู่ 100 A.</p> */}
                              </div>
                              {/* <select>
                                <option data-display="ประจำวันที่">Nothing</option>
                                <option value="1">Some option</option>
                                <option value="2">Another option</option>
                                <option value="3" disabled>A disabled option</option>
                                <option value="4">Potato</option>
                              </select> */}

                            </div>
                          </div>
                          
                          
                        </div>

                        <div class="nano has-scrollbar-y pc-pickingyear--list" style={{minWidth:"220px"}}>
                          <div class="content">
                            <div class="pc-table pc-table--nobordered" style={{minWidth:"800px"}}>
                              <table>
                                <thead class="pc-text--c">
                                  <tr>
                                    <td style={{width:"15%"}}>
                                      เวลา
                                    </td>
                                    <td style={{width:"30%"}}>
                                      <a>
                                        <span>หัวข้อ</span>
                                        <i class="pc-ic_sort-desc"></i>
                                      </a>
                                    </td>
                                    <td style={{width:"25%"}}>
                                      ผู้ทำการจอง
                                    </td>
                                    <td style={{width:"5%"}}></td>
                                    <td style={{width:"25%"}}>
                                      <a>
                                        <span>ผู้รับผิดชอบ</span>
                                        <i class="pc-ic_sort-desc"></i>
                                      </a>
                                    </td>
                                  </tr>
                                </thead>
                                <tbody class="pc-text--c">
                                  <tr>
                                    <td>เมื่อ 3 นาทีที่แล้ว</td>
                                    <td>เตรียมการชาร์จ</td>
                                    <td>8กฟ4857 กรุงเทพมหานคร</td>
                                    <td style={{width:"7%"}}>
                                      <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_1"
                                      aria-expanded="false" aria-controls="collapse_1"></button>
                                    </td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                  </tr>
                                  <tr class="pc-table--collapse">
                                    <td colSpan="7">
                                      <div class="collapse" id="collapse_1">
                                        <div>
                                          <table>
                                            <thead class="pc-text--c">
                                              <tr>
                                                <td style={{width:"15%"}}>
                                                  <a>
                                                    <span>เวลา</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"30%"}}>
                                                  <a>
                                                    <span>หัวข้อ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"30%"}} colSpan="2">
                                                  <a>
                                                    <span>ผู้ทำการจอง</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"25%"}}>
                                                  <a>
                                                    <span>ผู้รับผิดชอบ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td></td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล
                                                    {/* </p> */}
                                                </td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772
                                                    {/* </p> */}
                                                </td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td></td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>รุ่นรถ</b> NISSAN LEAF 2017
                                                    {/* </p> */}
                                                </td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>ตู้ชาร์จ</b> ตู้ที่ 2
                                                    {/* </p> */}
                                                </td>
                                                <td></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>เมื่อ 3 นาทีที่แล้ว</td>
                                    <td>เตรียมการชาร์จ</td>
                                    <td>8กฟ4857 กรุงเทพมหานคร</td>
                                    <td style={{width:"7%"}}>
                                      <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_1"
                                      aria-expanded="false" aria-controls="collapse_1"></button>
                                    </td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                  </tr>
                                  <tr class="pc-table--collapse">
                                    <td colSpan="7">
                                      <div class="collapse" id="collapse_1">
                                        <div>
                                          <table>
                                            <thead class="pc-text--c">
                                              <tr>
                                                <td style={{width:"15%"}}>
                                                  <a>
                                                    <span>เวลา</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"30%"}}>
                                                  <a>
                                                    <span>หัวข้อ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"30%"}} colSpan="2">
                                                  <a>
                                                    <span>ผู้ทำการจอง</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"25%"}}>
                                                  <a>
                                                    <span>ผู้รับผิดชอบ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td></td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล
                                                    {/* </p> */}
                                                </td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772
                                                    {/* </p> */}
                                                </td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td></td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>รุ่นรถ</b> NISSAN LEAF 2017
                                                    {/* </p> */}
                                                </td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>ตู้ชาร์จ</b> ตู้ที่ 2
                                                    {/* </p> */}
                                                </td>
                                                <td></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>เมื่อ 3 นาทีที่แล้ว</td>
                                    <td>เตรียมการชาร์จ</td>
                                    <td>8กฟ4857 กรุงเทพมหานคร</td>
                                    <td style={{width:"7%"}}>
                                      <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_1"
                                      aria-expanded="false" aria-controls="collapse_1"></button>
                                    </td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                  </tr>
                                  <tr class="pc-table--collapse">
                                    <td colSpan="7">
                                      <div class="collapse" id="collapse_1">
                                        <div>
                                          <table>
                                            <thead class="pc-text--c">
                                              <tr>
                                                <td style={{width:"15%"}}>
                                                  <a>
                                                    <span>เวลา</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"30%"}}>
                                                  <a>
                                                    <span>หัวข้อ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"30%"}} colSpan="2">
                                                  <a>
                                                    <span>ผู้ทำการจอง</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"25%"}}>
                                                  <a>
                                                    <span>ผู้รับผิดชอบ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td></td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล
                                                    {/* </p> */}
                                                </td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772
                                                    {/* </p> */}
                                                </td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td></td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>รุ่นรถ</b> NISSAN LEAF 2017
                                                    {/* </p> */}
                                                </td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>ตู้ชาร์จ</b> ตู้ที่ 2
                                                    {/* </p> */}
                                                </td>
                                                <td></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>เมื่อ 3 นาทีที่แล้ว</td>
                                    <td>เตรียมการชาร์จ</td>
                                    <td>8กฟ4857 กรุงเทพมหานคร</td>
                                    <td style={{width:"7%"}}>
                                      <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_1"
                                      aria-expanded="false" aria-controls="collapse_1"></button>
                                    </td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                  </tr>
                                  <tr class="pc-table--collapse">
                                    <td colSpan="7">
                                      <div class="collapse" id="collapse_1">
                                        <div>
                                          <table>
                                            <thead class="pc-text--c">
                                              <tr>
                                                <td style={{width:"15%"}}>
                                                  <a>
                                                    <span>เวลา</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"30%"}}>
                                                  <a>
                                                    <span>หัวข้อ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"30%"}} colSpan="2">
                                                  <a>
                                                    <span>ผู้ทำการจอง</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"25%"}}>
                                                  <a>
                                                    <span>ผู้รับผิดชอบ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td></td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล
                                                    {/* </p> */}
                                                </td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772
                                                    {/* </p> */}
                                                </td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td></td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>รุ่นรถ</b> NISSAN LEAF 2017
                                                    {/* </p> */}
                                                </td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>ตู้ชาร์จ</b> ตู้ที่ 2
                                                    {/* </p> */}
                                                </td>
                                                <td></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>เมื่อ 3 นาทีที่แล้ว</td>
                                    <td>เตรียมการชาร์จ</td>
                                    <td>8กฟ4857 กรุงเทพมหานคร</td>
                                    <td style={{width:"7%"}}>
                                      <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_1"
                                      aria-expanded="false" aria-controls="collapse_1"></button>
                                    </td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                  </tr>
                                  <tr class="pc-table--collapse">
                                    <td colSpan="7">
                                      <div class="collapse" id="collapse_1">
                                        <div>
                                          <table>
                                            <thead class="pc-text--c">
                                              <tr>
                                                <td style={{width:"15%"}}>
                                                  <a>
                                                    <span>เวลา</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"30%"}}>
                                                  <a>
                                                    <span>หัวข้อ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"30%"}} colSpan="2">
                                                  <a>
                                                    <span>ผู้ทำการจอง</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                                <td style={{width:"25%"}}>
                                                  <a>
                                                    <span>ผู้รับผิดชอบ</span>
                                                    <i class="pc-ic_sort-desc"></i>
                                                  </a>
                                                </td>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td></td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล
                                                    {/* </p> */}
                                                </td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772
                                                    {/* </p> */}
                                                </td>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td></td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>รุ่นรถ</b> NISSAN LEAF 2017
                                                    {/* </p> */}
                                                </td>
                                                <td>
                                                  {/* <p> */}
                                                    <b>ตู้ชาร์จ</b> ตู้ที่ 2
                                                    {/* </p> */}
                                                </td>
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

                  <div class="pc-panel pc-panel--chargerrepairhistory">
                    <div class="pc-panel--heading">ประวัติการใช้งานตู้ชาร์จ</div>
                    <div class="pc-panel--body">
                      <div class="pc-panel--content">
                        <div class="pc-row">
                          <div class="pc-col-md-4 pc-col-sm-5 pc-col-xs-5">
                            <div class="pc-field pc-field--search has-autocomplete">


                            </div>
                          </div>
                          <div class="pc-col-md-4 pc-col-sm-5 pc-col-xs-5">
                          </div>
                          <div class="pc-col-md-4 pc-col-sm-2 pc-col-xs-2">
                            {/* <button class="pc-btn pc-btn--export pc-ic_export pc-pull--r"></button> */}
                          </div>
                        </div>

                        <div class="nano has-scrollbar-y pc-pickingyear--list" style={{minHeight:"290px"}}>
                          <div class="content">
                            <div class="pc-table pc-table--nobordered" style={{minWidth:"800px"}}>
                              <TBLEX />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div class="pc-panel pc-panel--chargerrepairhistory">
                    <div class="pc-panel--heading">ประวัติการซ่อมบำรุงตู้ชาร์จ</div>
                    <div class="pc-panel--body">
                      <div class="pc-panel--content">
                        <div class="pc-row">
                          <div class="pc-col-md-4 pc-col-sm-5 pc-col-xs-5">
                            <div class="pc-field pc-field--search has-autocomplete">

                              {/* <select>
                                <option data-display="ปี">Nothing</option>
                                <option value="1">Some option</option>
                                <option value="2">Another option</option>
                                <option value="3" disabled>A disabled option</option>
                                <option value="4">Potato</option>
                              </select> */}

                            </div>
                          </div>
                          <div class="pc-col-md-4 pc-col-sm-5 pc-col-xs-5">
                          </div>
                          <div class="pc-col-md-4 pc-col-sm-2 pc-col-xs-2">
                            {/* <button class="pc-btn pc-btn--export pc-ic_export pc-pull--r"></button> */}
                          </div>
                        </div>

                        <div class="nano has-scrollbar-y pc-pickingyear--list" style={{minHeight:"290px"}}>
                          <div class="content">
                            <div class="pc-table pc-table--nobordered" style={{minWidth:"800px"}}>
                              <table>
                                <thead class="pc-text--c">
                                  <tr>
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
                                        <span>รหัสรายการ</span>
                                        <i class="pc-ic_sort-desc"></i>
                                      </a>
                                    </td>
                                    <td>
                                      <a>
                                        <span>หัวข้อ</span>
                                        <i class="pc-ic_sort-desc"></i>
                                      </a>
                                    </td>
                                    <td>
                                      <a>
                                        <span>ผู้รับผิดชอบ</span>
                                        <i class="pc-ic_sort-desc"></i>
                                      </a>
                                    </td>
                                    <td>
                                      <a>
                                        <span>สถานะ</span>
                                        <i class="pc-ic_sort-desc"></i>
                                      </a>
                                    </td>
                                  </tr>
                                </thead>
                                <tbody class="pc-text--c">
                                  <tr>
                                    <td>28/02/2017</td>
                                    <td>05.30 am</td>
                                    <td>WO-0014</td>
                                    <td>ทำความสะอาดตู้</td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                    <td>สำเร็จ</td>
                                  </tr>
                                  <tr>
                                    <td>28/02/2017</td>
                                    <td>05.30 am</td>
                                    <td>WO-0014</td>
                                    <td>ทำความสะอาดตู้</td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                    <td>สำเร็จ</td>
                                  </tr>
                                  <tr>
                                    <td>28/02/2017</td>
                                    <td>05.30 am</td>
                                    <td>WO-0014</td>
                                    <td>ทำความสะอาดตู้</td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                    <td>สำเร็จ</td>
                                  </tr>
                                  <tr>
                                    <td>28/02/2017</td>
                                    <td>05.30 am</td>
                                    <td>WO-0014</td>
                                    <td>ทำความสะอาดตู้</td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                    <td>สำเร็จ</td>
                                  </tr>
                                  <tr>
                                    <td>28/02/2017</td>
                                    <td>05.30 am</td>
                                    <td>WO-0014</td>
                                    <td>ทำความสะอาดตู้</td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                    <td>สำเร็จ</td>
                                  </tr>
                                  <tr>
                                    <td>28/02/2017</td>
                                    <td>05.30 am</td>
                                    <td>WO-0014</td>
                                    <td>ทำความสะอาดตู้</td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                    <td>สำเร็จ</td>
                                  </tr>
                                  <tr>
                                    <td>28/02/2017</td>
                                    <td>05.30 am</td>
                                    <td>WO-0014</td>
                                    <td>ทำความสะอาดตู้</td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                    <td>สำเร็จ</td>
                                  </tr>
                                  <tr>
                                    <td>28/02/2017</td>
                                    <td>05.30 am</td>
                                    <td>WO-0014</td>
                                    <td>ทำความสะอาดตู้</td>
                                    <td>นายไฟฟ้า แรงสูง</td>
                                    <td>สำเร็จ</td>
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
    return(
      <div>
        กรุณา login
      </div>
    )
  }
}