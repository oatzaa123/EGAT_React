import { Component } from "react";
import Nav from "../Nav/Nav";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Footer from "../Footer/Footer";
import $ from "jquery";


import Mapgoogle from '../map/Mapgoogle'





export default class Stationtabii extends  Component {

  constructor(props){
    super(props)

      this.state={
        problemelt : 8 ,
        problemmoney: 14,
        problemcharger: 19,


        yourstation: 0,
        activerstation:0,
        totaloperors:0,
        onlineoperators:0,
        totalusero:0,

        active: [
          {
            id:1,
            station : "EGAT Station ท103",
            charger: "ตู้ที่ 1 : EGAT00001239-123",
            numbercar: "8กฟ633 กรุงเทพ",
            status:"เตรียมการชาร์จ",
            time:"30 วินาทีที่แล้ว"
  
          },
          {
            id:2,
            station : "EGAT Station ท103",
            charger: "ตู้ที่ 2 : EGAT00001239-123",
            numbercar: "8กฟ5633 กรุงเทพ",
            status:"เตรียมการชาร์จ",
            time:"30 วินาทีที่แล้ว"
  
          },
          {
            id:3,
            station : "EGAT Station ท103",
            charger: "ตู้ที่ 3 : EGAT00001239-123",
            numbercar: "8ฟ5633 กรุงเทพ",
            status:"เตรียมการชาร์จ",
            time:"30 วินาทีที่แล้ว"
  
          },
          {
            id:4,
            station : "EGAT Station ท103",
            charger: "ตู้ที่ 4 : EGAT00001239-123",
            numbercar: "8ก5633 กรุงเทพ",
            status:"เตรียมการชาร์จ",
            time:"30 วินาทีที่แล้ว"
  
          },
          {
            id:5,
            station : "EGAT Station ท103",
            charger: "ตู้ที่ 5 : EGAT00001239-123",
            numbercar: "8กฟ33 กรุงเทพ",
            status:"เตรียมการชาร์จ",
            time:"30 วินาทีที่แล้ว"
  
          }
        ],
        totaluser: "15,213",
        activeuser : "665",
        todayuser : "665",
        newuser : "178",
        totalstation:0,
        activestation:0,
        repairstation:0,
        totalperson:0,
        persion:0

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
    const act = this.state.active
    const tblRecent = act.map((item) =>
     <tr key={item.id}>
       <td> {item.station} </td>
       <td> {item.charger} </td>
       <td> {item.numbercar} </td>
       <td> {item.status} </td>
       <td> {item.time} </td>
     </tr>
    )


    const options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        style: {
          fontFamily: 'ThaiSansNeue-Regular',
          fontSize: '18px',
          letterSpacing: '0px'
        },
        marginTop: 70,
        marginRight: 200,
        spacingTop: 0,
        //spacingBottom: -10,
        backgroundColor: null
      },
      title: {
        text: 'สรุปปัญหาท่ีเกิดขึ้น',
        align: 'left',
        style: {
          color: '#ffffff',
        }
      },
      tooltip: {
        enabled: false
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        backgroundColor: null,
        borderWidth: 0,
        x: 0,
        y: 0,
        floating: true,
        padding: 0,
        symbolHeight: 7,
        itemStyle: {
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: '16px'
        },
        
        margin: 0,
        reversed: true
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          borderColor: '#92d5e1',
          enableMouseTracking: false,
          
          dataLabels: {
            align: 'center',
            color: '#a2dbe5',
            connectorColor: '#92d5e1',
            connectorPadding: 0,
            connectorWidth: 2,
            padding: 0,
            enabled: true,
            align: 'center',
            style: {
              fontSize: '18px',
              textOutline: '0px',
              fontWeight: 'normal',
              letterSpacing: '0.5px'
            },
            useHTML: true,
            formatter: function () {
              return '<div style="padding:3px 7px; width:45px; text-align:center; background-color:#92d5e1; color:#ffffff; border-radius: 5px;"> ' +
                this.y +
                '</div>';
            },
            padding: 0,
            y: -8
          },
          showInLegend: true,
          borderWidth: 2
        }
      },
      series: [{
        name: '',
        colorByPoint: true,
        data: [{
          name: 'ปัญหาด้านไฟฟ้า (ครั้ง) ',
          y: this.state.problemelt,
          color: 'rgb(67,174,213)'
        }, {
          name: 'ปัญหาด้านการคิดเงิน (ครั้ง)  ',
          y: this.state.problemmoney ,
          color: 'rgb(57,148,189)'
        }, {
          name: 'ปัญหาด้านตู้ชาร์จ (ครั้ง) ',
          y: this.state.problemcharger,
          color: 'rgb(81,198,229)'
        }]
      }]
    }


    if(token){
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

                  <div className="pc-main--overallstat">
                    <div className="pc-overallstat--tabs">
                      <ul>
                        <li className="" >
                        <a href="/Stationstat">
                          <i className="pc-ic_cal-month"></i>
                          
                          </a>
                        </li>
                        
                        <li className="" >
                          <a href="/Stationtabi">
                            <i className="pc-ic_statcharge"></i>
                            
                          </a>
                        </li>
                        
                        <li className="pc-tabs--link">
                          {/* <a href="/Reportstation"> */}
                            <i className="pc-ic_statstation"></i>
                          {/* </a> */}
                        </li>
                      </ul>
                    </div>

                    <div id="tabs1" className="pc-tabs--content">
                      <div id="container" className="pc-tabscontent--chart">
                      
                      <HighchartsReact
                        highcharts={Highcharts}
                        options={options} 
                      />

                      </div>
                    </div>
                    

                    <div className="pc-overallstat--summary1" > 
                      <ul>
                      <li>
                          <div>
                            <div className="pc-summary--left">
                              <i className="pc-ic_user-total"></i>
                            </div>
                            <div className="pc-summary--body">
                              <p className="pc-summary--title">YOUR STATIONS</p>
                              <p className="pc-summary--value"> {this.state.yourstation} </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="pc-summary--left">
                              <i className="pc-ic_user-total"></i>
                            </div>
                            <div className="pc-summary--body">
                              <p className="pc-summary--title">ACTIVE STATIONS</p>
                              <p className="pc-summary--value"> {this.state.activerstation} </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="pc-summary--left">
                              
                              <i className="pc-ic_user-active">
                                
                                </i>
                            </div>
                            <div className="pc-summary--body">
                              <p className="pc-summary--title">TOTAL OPERATORS</p>
                              <p className="pc-summary--value"> {this.state.totaloperors} </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="pc-summary--left">
                              <i className="pc-ic_analyze-today"></i>
                            </div>
                            <div className="pc-summary--body">
                              <p className="pc-summary--title"> ONLINE OPERATORS </p>
                              <p className="pc-summary--value"> {this.state.onlineoperators} </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="pc-summary--left">
                              <i className="pc-ic_user-new"></i>
                            </div>
                            <div className="pc-summary--body">
                              <p className="pc-summary--title">TOTAL USERS</p>
                              {/* <p className="pc-summary--subtitle">FOR THIS MONTH</p> */}
                              <p className="pc-summary--value"> {this.state.totalusero} </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="pc-main--row">
                    <div className="pc-row">
                      {/* <div className="pc-col-md-5 pc-col-sm-5">
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
                      </div> */}

                      <div className="pc-col-md-7 pc-col-sm-7">
                        <div className="pc-panel pc-panel--recentactiveuser">
                          <div className="pc-panel--heading">
                            5 RECENT ACTIVE USERS
                          </div>
                          <div className="pc-panel--body">
                            <div className="nano" style={{height:"205px"}}>
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
                                          {tblRecent}
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
                </div>
              </div>

              <div className="pc-content">

                <div className="pc-title">
                  สถานีของคุณ
                </div>

                <div className="pc-stat has-5-item">
                  <div className="pc-wrapper">
                    <div className="pc-row">
                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_info-allstation">
                            </i>
                          <p>จำนวนสถานีทั้งหมด</p>
                          <p>
                            <b> {this.state.totalstation} </b> สถานี</p>
                        </div>
                      </div>

                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_info-activestation">
                            
                            </i>
                          <p>สถานีที่กำลังใช้งาน</p>
                          <p>
                            <b> {this.state.activerstation} </b> สถานี</p>
                        </div>
                      </div>

                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_info-repairstation"></i>
                          <p>สถานีมีการซ่อมบำรุง</p>
                          <p>
                            <b> {this.state.repairstation} </b> สถานี</p>
                        </div>
                      </div>

                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_info-allcontroller"><img src="icon/ic/Asset 1@3xW.png" alt="icon" /></i>
                          <p>ผู้ควบคุมระบบทั้งหมด</p>
                          <p>
                            <b> {this.state.totalperson} </b> คน</p>
                        </div>
                      </div>

                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_info-activecontroller"><img src="icon/ic/Asset 13x.png" alt="icon" /></i>
                          <p>ผู้ควบคุมที่กำลังใช้งาน</p>
                          <p>
                            <b> {this.state.persion} </b> คน</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pc-map">
                  <Mapgoogle />
                  {/* <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=forum%20tower&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>  */}
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
                                <a href="/stationuse">EGAT Station ท103
                                    {/* <i className="pc-ic_is-charging"></i> */}
                                  </a>
                                </li>
                                {/* <li className="is-fav">
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
                                </li> */}
                              </ul>
                              {/* <button className="pc-btn pc-btn--more">ดูเพิ่มเติม</button> */}
                            </div>

                            <div className="pc-col-md-3 pc-col-sm-3 pc-liststation--item">
                              <div className="pc-liststation--heading">
                                <h2>ภาคกลาง (0)</h2>
                                <i></i>
                              </div>
                              {/* <ul className="pc-liststation--listitem">
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
                              <button className="pc-btn pc-btn--more">ดูเพิ่มเติม</button> */}
                            </div>

                            <div className="pc-col-md-3 pc-col-sm-3 pc-liststation--item">
                              <div className="pc-liststation--heading">
                                <h2>ภาคใต้ (0)</h2>
                                <i></i>
                              </div>
                              {/* <ul className="pc-liststation--listitem">
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
                              <button className="pc-btn pc-btn--more">ดูเพิ่มเติม</button> */}
                            </div>

                            <div className="pc-col-md-3 pc-col-sm-3 pc-liststation--item">
                              <div className="pc-liststation--heading">
                                <h2>ภาคเหนือ (0)</h2>
                                <i></i>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>


                      
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="pc-footer">


                <Footer/>
                
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