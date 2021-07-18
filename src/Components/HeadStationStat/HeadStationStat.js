import { Component } from "react";
import Nav from "../Nav/Nav";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Footer from "../Footer/Footer"
import $ from "jquery";

import Mapgoogle from '../map/Mapgoogle'


export default class Stationtabi extends  Component {


  constructor(props){
    super(props)

    this.state={
      electricpower:[240, 180, 300, 160, 380, 150, 130],
      electricity:[160, 320, 120, 240, 180, 360, 150],
      electricitybill:[280, 340, 320, 260, 400, 380, 500],
      date : ['1 ม.ค.', '2  ม.ค.', '3  ม.ค.', '4  ม.ค.', '5  ม.ค.', '6  ม.ค.', '7  ม.ค.'],
      totaluser:0,
      todayuser:0,
      newuser:0,
      activeuser:0,
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
    console.log("พลังงานไฟฟ้าที่ใช้",this.state.electricpower )
    console.log("กำลังไฟฟ้าที่ใช้", this.state.electricity )
    console.log("ค่าไฟฟ้า",this.state.electricitybill )
    console.log("วันที่", this.state.date )

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


    var chart, merge = Highcharts.merge;
    var perShapeGradient = {
      x1: 0,
      y1: 1,
      x2: 0,
      y2: 0
    };
    var colors = Highcharts.getOptions().colors;
      colors = ['#2280bf', '#37aad3', {
      linearGradient: merge(perShapeGradient),
      stops: [
      [0, 'rgba(255,255,255,0)'],
      [0.1, 'rgba(255,255,255,0.1)'],
      [1, 'rgba(255,255,255,0.5)']
      ]
      }, '#ffffff'];


      const options = {
        chart: {
          renderTo: 'reportkWh',
          style: {
            fontFamily: 'ThaiSansNeue-Regular',
            fontSize: '18px',
            letterSpacing: '0px'
          },
          marginTop: 70,
          spacingBottom: 0,
          //marginBottom: 0,
          backgroundColor: null
        },
        title: {
          text: 'รายงานการใช้พลังงานไฟฟ้า กำลังไฟฟ้า และค่าไฟฟ้า',
          align: 'left',
          style: {
            color: '#ffffff',
          }
        },
        xAxis: {
          categories: this.state.date,
          gridLineWidth: 1,
          gridLineDashStyle: 'solid',
          gridLineColor: 'rgba(255,255,2550,0.5)',
          gridZIndex: 0,
          labels: {
            style: {
              fontSize: '16px',
              letterSpacing: '0.5px',
              color: '#2280bf'
            }
          },
          tickLength: 0,
          lineWidth: 0,
          tickmarkPlacement: 'on'
        },
        yAxis: {
          title: {
            text: null
          },
          labels: {
            enabled: false
          },
          gridLineWidth: 0
        },
        //colors: ['#37AAD3', '#F7A4B8', '#2280bf', '#2280bf'],
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
            //color: option.colors,
            fontWeight: 'normal',
            fontSize: '16px'
          },
          labelFormatter: function () {
            return '<span style="color:' + this.color + ';">' + this.name + '</span>';
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
        series: [{
          type: 'column',
          name: 'ค่าไฟฟ้า',
          pointWidth: 20,
          data: this.state.electricitybill,
          color: colors[2],
          legendColor: colors[2],
          borderWidth: 0,
          dataLabels: {
            color: colors[3],
            enabled: true,
            align: 'center',
            style: {
              fontSize: '16px',
              textOutline: '0px',
              fontWeight: 'normal',
              letterSpacing: '0.5px'
            },
            //y: -10
          },
          showInLegend: false
        }, {
          type: 'line',
          name: 'ค่าไฟฟ้า',
          data: this.state.electricitybill,
          color: colors[3],
          legendColor: colors[3],
          lineWidth: 3,
          marker: {
            radius: 10,
            symbol: 'circle'
          }
        }, {
          type: 'spline',
          name: 'กำลังไฟฟ้าที่ใช้',
          data: this.state.electricity,
          color: colors[1],
          lineWidth: 3,
          marker: {
            lineWidth: 0,
            lineColor: colors[1],
            radius: 5,
            symbol: 'circle'
            //fillColor: 'white'
          },
          dataLabels: {
            color: colors[1],
            enabled: true,
            align: 'center',
            style: {
              fontSize: '16px',
              textOutline: '0px',
              fontWeight: 'normal',
              letterSpacing: '0.5px'
            },
            allowOverlap: true
          }
        }, {
          type: 'spline',
          name: 'พลังงานไฟฟ้าที่ใช้',
          data: this.state.electricpower,
          color: colors[0],
          lineWidth: 3,
          marker: {
            lineWidth: 0,
            lineColor: colors[0],
            radius: 5,
            symbol: 'circle'
            //fillColor: 'white'
          },
          dataLabels: {
            color: colors[0],
            enabled: true,
            align: 'center',
            style: {
              fontSize: '16px',
              textOutline: '0px',
              fontWeight: 'normal',
              letterSpacing: '0.5px'
            },
            allowOverlap: true
          },
        }],
        tooltip: {
          enabled: false
        }
      }

      const token = localStorage.getItem('result')
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
                            <a href="">
                            
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
                        
                        {/* <li className="">
                          <a href="">
                            <i className="pc-ic_statroi"></i>
                            <img src="" alt="icon" />
                          </a>
                        </li> */}
                        
                        <li className="" >
                        <a href="/Stationstat">
                          <i className="pc-ic_cal-month"></i>
                          {/* <img src="icon/Asset 12@3x.png" alt="icon" /> */}
                          </a>
                        </li>
                        
                        <li className="pc-tabs--link" >
                          {/* <a href="/Stationtabi"> */}
                            <i className="pc-ic_statcharge"></i>
                            {/* <img src="icon/Asset 11@3xW.png" alt="" /> */}
                          {/* </a> */}
                        </li>
                        
                        <li className="">
                          <a href="/Reportstation">
                            <i className="pc-ic_statstation"></i>
                            {/* <img src="icon/Asset 13@3x.png" alt="" /> */}
                          </a>
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
                    

                    <div className="pc-overallstat--summary">
                      <ul>
                        <li>
                          <div>
                            <div className="pc-summary--left">
                              <i className="pc-ic_user-total"></i>
                            </div>
                            <div className="pc-summary--body">
                              <p className="pc-summary--title">TOTAL USERS</p>
                              <p className="pc-summary--value"> {this.state.totaluser} </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="pc-summary--left">
                              {/* <img src="icon/Asset 12@3x.png" alt="" /> */}
                              <i className="pc-ic_user-active"></i>
                            </div>
                            <div className="pc-summary--body">
                              <p className="pc-summary--title">TODAY USERS</p>
                              <p className="pc-summary--value"> {this.state.todayuser} </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="pc-summary--left">
                              <i className="pc-ic_analyze-today"></i>
                            </div>
                            <div className="pc-summary--body">
                              <p className="pc-summary--title">NEW USERS</p>
                              <p className="pc-summary--value">{this.state.newuser}</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="pc-summary--left">
                              <i className="pc-ic_user-new"></i>
                            </div>
                            <div className="pc-summary--body">
                              <p className="pc-summary--title">ACTIVE USERS</p>
                              {/* <p className="pc-summary--subtitle">FOR THIS MONTH</p> */}
                              <p className="pc-summary--value"> {this.state.activeuser} </p>
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
                          {/* <img src="icon/ic/Asset 53x.png" alt="icon" /> */}
                           </i>
                          <p>จำนวนสถานีทั้งหมด</p>
                          <p>
                            <b> {this.state.totalstation} </b> สถานี</p>
                        </div>
                      </div>

                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_info-activestation">
                            {/* <img src="icon/ic/Asset 53x.png" alt="icon" /> */}
                            </i>
                          <p>สถานีที่กำลังใช้งาน</p>
                          <p>
                            <b> {this.state.activestation} </b> สถานี</p>
                        </div>
                      </div>

                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_info-repairstation">
                            {/* <img src="icon/ic/Asset 33x.png" alt="icon" /> */}
                            </i>
                          <p>สถานีมีการซ่อมบำรุง</p>
                          <p>
                            <b> {this.state.repairstation} </b> สถานี</p>
                        </div>
                      </div>

                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_info-allcontroller">
                            <img src="icon/ic/Asset 1@3xW.png" alt="icon" />
                            </i>
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
                                <h2>กรุงเทพและปริมณฑล (1)</h2>
                                <i></i>
                              </div>
                              <ul className="pc-liststation--listitem">
                                <li>
                                  <a href="/stationuse" >EGAT Station ท103
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
                              {/* <ul className="pc-liststation--listitem">
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
                              </ul> */}
                            </div>

                            {/* <div className="pc-col-md-3 pc-col-sm-3 pc-liststation--item">
                              <div className="pc-liststation--heading">
                                <h2>ภาคตะวันออก (14)</h2>
                                <i></i>
                              </div>
                              <ul className="pc-liststation--listitem">
                                <li>
                                  <a>PEA Station บางขุนเทียน
                                    <i className="pc-ic_is-charging"></i>
                                  </a>
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
                                <li>
                                  <a>PEA Station ราษฏร์บูรณะ</a>
                                </li>
                                <li>
                                  <a>EGAT Station ท103</a>
                                </li>
                              </ul>
                              <button className="pc-btn pc-btn--more">ดูเพิ่มเติม</button>
                            </div> */}

                            {/* <div className="pc-col-md-3 pc-col-sm-3 pc-liststation--item">
                              <div className="pc-liststation--heading">
                                <h2>ภาคตะวันตก (2)</h2>
                                <i></i>
                              </div>
                              <ul className="pc-liststation--listitem">
                                <li>
                                  <a>PEA Station บางขุนเทียน
                                    <i className="pc-ic_is-charging"></i>
                                  </a>
                                </li>
                                <li>
                                  <a>PEA Station บางเขน</a>
                                </li>
                              </ul>
                            </div> */}

                            {/* <div className="pc-col-md-3 pc-col-sm-3 pc-liststation--item">
                              <div className="pc-liststation--heading">
                                <h2>ภาคตะวันออกเฉียงเหนือ (5)</h2>
                                <i></i>
                              </div>
                              <ul className="pc-liststation--listitem">
                                <li>
                                  <a>PEA Station บางขุนเทียน
                                    <i className="pc-ic_is-charging"></i>
                                  </a>
                                </li>
                                <li>
                                  <a>PEA Station บางเขน</a>
                                </li>
                                <li>
                                  <a>PEA Station บางใหญ่</a>
                                </li>
                                <li>
                                  <a>PEA Station ราษฏร์บูรณะ</a>
                                </li>
                                <li>
                                  <a>EGAT Station ท103</a>
                                </li>
                              </ul>
                              <button className="pc-btn pc-btn--more">ดูเพิ่มเติม</button>
                            </div> */}

                            {/* <div className="pc-col-md-3 pc-col-sm-3 pc-liststation--item">
                              <div className="pc-liststation--heading">
                                <h2>ภาคตะวันตก (0)</h2>
                                <i></i>
                              </div>
                              <ul className="pc-liststation--listitem">
                              </ul>
                            </div>

                            <div className="pc-col-md-3 pc-col-sm-3 pc-liststation--item">
                              <div className="pc-liststation--heading">
                                <h2>ภาคตะวันตก (0)</h2>
                                <i></i>
                              </div>
                              <ul className="pc-liststation--listitem">
                              </ul>
                            </div> */}
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="pc-footer">

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