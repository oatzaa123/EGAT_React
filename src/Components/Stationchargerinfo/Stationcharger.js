import { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default class Stationcharger extends Component {
    constructor(props){
      super(props)

      this.state={
        charger: 0,
        charging:0,
        emptycharger:0,
        repaircharger:0,

        namecharger:"EGAT00001239-123",
        parking:"1",
        modelcharger:"Delta EV",
        spleet:"รวดเร็ว",
        chargerhead:"XXXXXX"

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
                          <a href="/Headstationexpensereport">รายงานค่าใช้จ่ายของสถานี</a>
                        </li>
                        <li>
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
                  ข้อมูลตู้ชาร์จของสถานี
                </div>

                <div class="pc-stat">
                  <div class="pc-wrapper">
                    <div class="pc-row">
                      <div class="pc-col-md-1 pc-col-sm-3 pc-col-xs-3">
                        <div class="pc-stat--item">
                          <i class="pc-ic_info-allcharger"></i>
                          <p>ตู้ชาร์จทั้งหมด</p>
                          <p>
                            <b> {this.state.charger} </b> ตู้</p>
                        </div>
                      </div>

                      <div class="pc-col-md-3 pc-col-sm-3 pc-col-xs-3">
                        <div class="pc-stat--item">
                          <i class="pc-ic_info-activecharger"></i>
                          <p>ตู้ชาร์จที่กำลังใช้งาน</p>
                          <p>
                            <b> {this.state.charging} </b> ตู้</p>
                        </div>
                      </div>

                      <div class="pc-col-md-3 pc-col-sm-3 pc-col-xs-3">
                        <div class="pc-stat--item">
                          <i class="pc-ic_info-inactivecharger"></i>
                          <p>ตู้ชาร์จที่ว่าง</p>
                          <p>
                            <b> {this.state.emptycharger} </b> ตู้</p>
                        </div>
                      </div>

                      <div class="pc-col-md-3 pc-col-sm-3 pc-col-xs-3">
                        <div class="pc-stat--item">
                          <i class="pc-ic_info-repaircharger"></i>
                          <p>ตู้ชาร์จที่ซ่อมบำรุง</p>
                          <p>
                            <b> {this.state.repaircharger} </b> คน</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pc-content">
                  <div class="pc-wrapper">
                    <div class="pc-panel  pc-panel--listcharger">
                      <div class="pc-panel--body">
                        <div class="pc-panel--content">
                          <div class="pc-listcharger--container">
                            <div class="pc-row">
                              <div class="pc-col-md-5 pc-col-sm-7 pc-col-xs-7">
                                <div class="pc-field pc-field--search has-autocomplete">
                                  <div class="pc-groupfield">

                                    {/* <input type="text" /> */}

                                    {/* <button class="pc-ic_search"></button> */}
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
                            </div>
                          </div>

                          <div class="nano" style={{minHeight:"940px"}}>
                            <div class="content">
                              <div class="pc-listcharger--container">
                                <div class="pc-row pc-listcharger">
                                  <div class="pc-col-md-3 pc-col-sm-3">
                                    <a href="/stationcg">
                                      <div class="pc-listcharger--heading">
                                        ตู้ที่ 1 : {this.state.namecharger}
                                      </div>
                                    </a>
                                    <div className="im-charger">
                                      <img src="img/charger.jpg" class="pc-listcharger--img" />
                                      
                                    </div>
                                  </div>
                                  <div class="pc-col-md-9 pc-col-sm-9" style={{width:"400%"}}>
                                    <div class="pc-listcharger--content">
                                      <div class="pc-row pc-charger--item">
                                        <div class="pc-col-md-3 pc-col-sm-4 pc-col-xs-12 pc-charger--status">
                                          <p>สถานะการใช้งาน</p>
                                          <i class="pc-ic_charge-active"></i>
                                          <p class="pc-timeline--timespend" style={{textAlign:"center"}}>ใช้เวลา : 3 นาที</p>
                                        </div>
                                        <div class="pc-col-md-5 pc-col-sm-8 pc-col-xs-12 pc-charger--content">
                                          <p>ช่องจอด: {this.state.parking} </p>
                                          <p>รุ่นเครื่องชาร์จไฟฟ้า : {this.state.modelcharger} </p>
                                          <p>ประเภท : {this.state.spleet} </p>
                                          <p>พิกัดหัวชาร์จ : {this.state.chargerhead} </p>
                                          <p>หัวชาร์จ :
                                            <i class="pc-charger--adapter pc-ic_adapter1"></i>
                                            <i class="pc-charger--adapter pc-ic_adapter2"></i>
                                            <i class="pc-charger--adapter pc-ic_adapter3"></i>
                                          </p>
                                        </div>
                                        {/* <div class="pc-col-md-4 pc-col-md-offset-0 pc-col-sm-8 pc-col-sm-offset-4 pc-charger--timeline">
                                          <div class="pc-row">
                                            <div class="pc-col-md-6 pc-timeline--item timeline-active">
                                              <div class="pc-timeline--no">
                                                4
                                                <span></span>
                                              </div>
                                              <div class="pc-timeline--name">ทำการ
                                                <br />เช็คอิน</div>
                                              <div class="pc-timeline--time">06.42 pm</div>
                                              <p class="pc-timeline--timespend">ใช้เวลา : 3 นาที</p>
                                            </div>
                                            <div class="pc-col-md-6 pc-timeline--item timeline-inactive">
                                              <div class="pc-timeline--no">
                                                5
                                                <span></span>
                                              </div>
                                              <div class="pc-timeline--name">เริ่มต้น
                                                <br />ทำการชาร์จ</div>
                                              <div class="pc-timeline--time">00.00 pm</div>
                                              <p class="pc-timeline--timespend">ใช้เวลา : 15 นาที</p>
                                            </div>
                                          </div>
                                        </div> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* <div class="pc-row pc-listcharger" >
                                  <div class="pc-col-md-3 pc-col-sm-3">
                                    <a href="">
                                      <div class="pc-listcharger--heading">
                                        ตู้ที่ 1 : EGAT00001239-123
                                      </div>
                                    </a>
                                    <div className="im-charger">
                                      <img src="img/charger.jpg" class="pc-listcharger--img" />
                                    </div>
                                  </div>
                                  <div class="pc-col-md-9 pc-col-sm-9" style={{width:"400%"}}>
                                    <div class="pc-listcharger--content">
                                      <div class="pc-row pc-charger--item">
                                        <div class="pc-col-md-3 pc-col-sm-4 pc-col-xs-12 pc-charger--status">
                                          <p>สถานะการใช้งาน</p>
                                          <i class="pc-ic_charge-inactive"></i>
                                        </div>
                                        <div class="pc-col-md-5 pc-col-sm-8 pc-col-xs-12 pc-charger--content">
                                          <p>ช่องจอด: 2</p>
                                          <p>รุ่นเครื่องชาร์จไฟฟ้า : Delta EV</p>
                                          <p>ประเภท : รวดเร็ว</p>
                                          <p>พิกัดหัวชาร์จ : XXXXXX</p>
                                          <p>หัวชาร์จ :
                                            <i class="pc-charger--adapter pc-ic_adapter1"></i>
                                            <i class="pc-charger--adapter pc-ic_adapter2"></i>
                                            <i class="pc-charger--adapter pc-ic_adapter3"></i>
                                          </p>
                                        </div>
                                        <div class="pc-col-md-4 pc-col-md-offset-0 pc-col-sm-8 pc-col-sm-offset-4 pc-charger--timeline">
                                          <div class="pc-row">
                                            <div class="pc-col-md-6 pc-timeline--item timeline-disabled">
                                              <div class="pc-timeline--no">
                                                4
                                                <span></span>
                                              </div>
                                              <div class="pc-timeline--name">ทำการ
                                                <br />เช็คอิน</div>
                                              <div class="pc-timeline--time">06.42 pm</div>
                                              <p class="pc-timeline--timespend">ใช้เวลา : 3 นาที</p>
                                            </div>
                                            <div class="pc-col-md-6 pc-timeline--item timeline-disabled">
                                              <div class="pc-timeline--no">
                                                5
                                                <span></span>
                                              </div>
                                              <div class="pc-timeline--name">เริ่มต้น
                                                <br />ทำการชาร์จ</div>
                                              <div class="pc-timeline--time">00.00 pm</div>
                                              <p class="pc-timeline--timespend">ใช้เวลา : 15 นาที</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div> */}

                                {/* <div class="pc-row pc-listcharger">
                                  <div class="pc-col-md-3 pc-col-sm-3">
                                    <a href="">
                                      <div class="pc-listcharger--heading">
                                        ตู้ที่ 1 : EGAT00001239-123
                                      </div>
                                    </a>
                                    <div className="im-charger">
                                      <img src="img/charger.jpg" class="pc-listcharger--img" />
                                    </div>
                                  </div>
                                  <div class="pc-col-md-9 pc-col-sm-9" style={{width:"400%"}}>
                                    <div class="pc-listcharger--content">
                                      <div class="pc-row pc-charger--item">
                                        <div class="pc-col-md-3 pc-col-sm-4 pc-col-xs-12 pc-charger--status">
                                          <p>สถานะการใช้งาน</p>
                                          <i class="pc-ic_charge-active"></i>
                                        </div>
                                        <div class="pc-col-md-5 pc-col-sm-8 pc-col-xs-12 pc-charger--content">
                                          <p>ช่องจอด: 2</p>
                                          <p>รุ่นเครื่องชาร์จไฟฟ้า : Delta EV</p>
                                          <p>ประเภท : รวดเร็ว</p>
                                          <p>พิกัดหัวชาร์จ : XXXXXX</p>
                                          <p>หัวชาร์จ :
                                            <i class="pc-charger--adapter pc-ic_adapter1"></i>
                                            <i class="pc-charger--adapter pc-ic_adapter2"></i>
                                          </p>
                                        </div>
                                        <div class="pc-col-md-4 pc-col-md-offset-0 pc-col-sm-8 pc-col-sm-offset-4 pc-charger--timeline">
                                          <div class="pc-row">
                                            <div class="pc-col-md-6 pc-timeline--item timeline-active">
                                              <div class="pc-timeline--no">
                                                4
                                                <span></span>
                                              </div>
                                              <div class="pc-timeline--name">ทำการ
                                                <br />เช็คอิน</div>
                                              <div class="pc-timeline--time">06.42 pm</div>
                                              <p class="pc-timeline--timespend">ใช้เวลา : 3 นาที</p>
                                            </div>
                                            <div class="pc-col-md-6 pc-timeline--item timeline-inactive">
                                              <div class="pc-timeline--no">
                                                5
                                                <span></span>
                                              </div>
                                              <div class="pc-timeline--name">เริ่มต้น
                                                <br />ทำการชาร์จ</div>
                                              <div class="pc-timeline--time">00.00 pm</div>
                                              <p class="pc-timeline--timespend">ใช้เวลา : 15 นาที</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div> */}

                                {/* <div class="pc-row pc-listcharger">
                                  <div class="pc-col-md-3 pc-col-sm-3">
                                    <a href="">
                                      <div class="pc-listcharger--heading">
                                        ตู้ที่ 1 : EGAT00001239-123
                                      </div>
                                    </a>
                                    <div className="im-charger">
                                      <img src="img/charger.jpg" class="pc-listcharger--img" />
                                    </div>
                                  </div>
                                  <div class="pc-col-md-9 pc-col-sm-9" style={{width:"400%"}}>
                                    <div class="pc-listcharger--content">
                                      <div class="pc-row pc-charger--item">
                                        <div class="pc-col-md-3 pc-col-sm-4 pc-col-xs-12 pc-charger--status">
                                          <p>สถานะการใช้งาน</p>
                                          <i class="pc-ic_charge-active"></i>
                                        </div>
                                        <div class="pc-col-md-5 pc-col-sm-8 pc-col-xs-12 pc-charger--content">
                                          <p>ช่องจอด: 2</p>
                                          <p>รุ่นเครื่องชาร์จไฟฟ้า : Delta EV</p>
                                          <p>ประเภท : รวดเร็ว</p>
                                          <p>พิกัดหัวชาร์จ : XXXXXX</p>
                                          <p>หัวชาร์จ :
                                            <i class="pc-charger--adapter pc-ic_adapter1"></i>
                                            <i class="pc-charger--adapter pc-ic_adapter2"></i>
                                          </p>
                                        </div>
                                        <div class="pc-col-md-4 pc-col-md-offset-0 pc-col-sm-8 pc-col-sm-offset-4 pc-charger--timeline">
                                          <div class="pc-row">
                                            <div class="pc-col-md-6 pc-timeline--item timeline-active">
                                              <div class="pc-timeline--no">
                                                4
                                                <span></span>
                                              </div>
                                              <div class="pc-timeline--name">ทำการ
                                                <br />เช็คอิน</div>
                                              <div class="pc-timeline--time">06.42 pm</div>
                                              <p class="pc-timeline--timespend">ใช้เวลา : 3 นาที</p>
                                            </div>
                                            <div class="pc-col-md-6 pc-timeline--item timeline-inactive">
                                              <div class="pc-timeline--no">
                                                5
                                                <span></span>
                                              </div>
                                              <div class="pc-timeline--name">เริ่มต้น
                                                <br />ทำการชาร์จ</div>
                                              <div class="pc-timeline--time">00.00 pm</div>
                                              <p class="pc-timeline--timespend">ใช้เวลา : 15 นาที</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div> */}

                                {/* <div class="pc-row pc-listcharger">
                                  <div class="pc-col-md-3 pc-col-sm-3">
                                    <a href="">
                                      <div class="pc-listcharger--heading">
                                        ตู้ที่ 1 : EGAT00001239-123
                                      </div>
                                    </a>
                                    <div className="im-charger">
                                      <img src="img/charger.jpg" class="pc-listcharger--img" />
                                    </div>
                                  </div>
                                  <div class="pc-col-md-9 pc-col-sm-9" style={{width:"400%"}}>
                                    <div class="pc-listcharger--content">
                                      <div class="pc-row pc-charger--item">
                                        <div class="pc-col-md-3 pc-col-sm-4 pc-col-xs-12 pc-charger--status">
                                          <p>สถานะการใช้งาน</p>
                                          <i class="pc-ic_charge-active"></i>
                                        </div>
                                        <div class="pc-col-md-5 pc-col-sm-8 pc-col-xs-12 pc-charger--content">
                                          <p>ช่องจอด: 2</p>
                                          <p>รุ่นเครื่องชาร์จไฟฟ้า : Delta EV</p>
                                          <p>ประเภท : รวดเร็ว</p>
                                          <p>พิกัดหัวชาร์จ : XXXXXX</p>
                                          <p>หัวชาร์จ :
                                            <i class="pc-charger--adapter pc-ic_adapter1"></i>
                                            <i class="pc-charger--adapter pc-ic_adapter2"></i>
                                          </p>
                                        </div>
                                        <div class="pc-col-md-4 pc-col-md-offset-0 pc-col-sm-8 pc-col-sm-offset-4 pc-charger--timeline">
                                          <div class="pc-row">
                                            <div class="pc-col-md-6 pc-timeline--item timeline-active">
                                              <div class="pc-timeline--no">
                                                4
                                                <span></span>
                                              </div>
                                              <div class="pc-timeline--name">ทำการ
                                                <br />เช็คอิน</div>
                                              <div class="pc-timeline--time">06.42 pm</div>
                                              <p class="pc-timeline--timespend">ใช้เวลา : 3 นาที</p>
                                            </div>
                                            <div class="pc-col-md-6 pc-timeline--item timeline-inactive">
                                              <div class="pc-timeline--no">
                                                5
                                                <span></span>
                                              </div>
                                              <div class="pc-timeline--name">เริ่มต้น
                                                <br />ทำการชาร์จ</div>
                                              <div class="pc-timeline--time">00.00 pm</div>
                                              <p class="pc-timeline--timespend">ใช้เวลา : 15 นาที</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div> */}

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