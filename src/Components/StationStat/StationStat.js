import React, { Component } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Mapgoogle from '../map/Mapgoogle'


import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"




export default class StationStat extends Component {

  componentWillMount(){
    const config ={
      headers: {
      Authorization : localStorage.getItem('result')
    }
  }

  }

  constructor(props){
    super(props)

    
    this.state={
      data : [358, 390, 296, 435, 356, 445, 376, 300, 354, 287, 321, 251, 300, 435, 332, 431, 324, 293, 213, 324, 346,
        234, 456, 346, 389, 235, 386, 342, 224, 320, 288
      ],
      date: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18',
      '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
      ],
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
      totaluser: 0,
      activeuser : 0,
      todayuser : 0,
      newuser : 0,
      totalstation:0,
      activestation:0,
      repairstation:0,
      totalperson:0,
      persion:0

      }
  }

  

  render() {

    console.log("data", this.state.data)
    console.log("data", this.state.date)
    console.log("activer",this.state.active )


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
        type: 'area',
        style: {
          fontFamily: 'ThaiSansNeue-Regular',
          fontSize: '24px',
          letterSpacing: '0px',

        },
        backgroundColor: null
      },
      title: {
        text: 'รายงานจำนวนผู้ใช้ทั้งหมด ประจำเดือนสิงหาคม',
        align: 'left',
        style: {
          color: '#FFFFFF',
        }
      },
      subtitle: {
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
        symbolHeight: 9,
        itemStyle: {
          color: '#ffffff',
          fontWeight: 'normal',
          fontSize: '18px'
        },
        margin: 0
      },

      xAxis: {
        categories: this.state.date,
        gridLineWidth: 1,
        gridLineDashStyle: 'solid',
        gridLineColor: 'rgba(255,255,2550,0.5)',
        gridZIndex: 0,
        labels: {
          style: {
            fontSize: '14px',
            letterSpacing: '0.5px',
            color: '#FFFFFF',
            
          }
        },
        tickLength: 0,
        lineWidth: 0,
        tickmarkPlacement: 'on'
      },
      yAxis: {
        title: {
          text: null,
          
        },
        style:{
          height:"300px",
        },
        labels: {
          enabled: false
        },
        gridLineWidth: 0,
      },
      tooltip: {
        enabled: false
      },
      colors: ['#FFFFFF'],
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, 'rgba(22,65,147,0.8)'],
              [0.8, 'rgba(22,65,147,0.5)'],
              [0.8, 'rgba(22,65,147,0.5)']
            ]
          },
          marker: {
            fillColor: '#FFFFFF',
            radius: 4
          },
          lineWidth: 3,
          lineColor: 'rgb(22,65,147)',
          label: {
            enabled: true
          }
        }
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'จำนวนผู้ใช้ (ครั้ง)',
        data: this.state.data,
        dataLabels: {
          color: '#ffffff',
          enabled: true,
          align: 'center',
          style: {
            fontSize: '14px',
            textOutline: '0px',
            fontWeight: 'normal',
            letterSpacing: '0.7px'
          },
        }
      }]
}
  const token = localStorage.getItem('result')
  console.log(token)
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
                        
                        <li className="pc-tabs--link" >
                          
                          <i className="pc-ic_cal-month"></i>
                          
                        </li>
                        
                        <li  >
                        <a href="/Stationtabi">
                          <i className="pc-ic_statcharge"></i>
                        
                          </a>
                        </li>
                        
                        <li >
                        <a href="/Reportstation">
                          <i className="pc-ic_statstation"></i>
                        
                          </a>
                        </li>
                      </ul>
                    </div>


                    <div id="tabs1" className="pc-tabs--content" >
                      <div id="container" className="pc-tabscontent--chart" style={{height:"auto"}}>

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
                            <i className="pc-ic_user-total">
                              
                              </i>
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
                              
                              <i className="pc-ic_user-active">
                              
                                </i>
                            </div>
                            <div className="pc-summary--body">
                              <p className="pc-summary--title">ACTIVE USERS</p>
                              <p className="pc-summary--value"> {this.state.activeuser} </p>
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
                              <p className="pc-summary--title">TODAY USERS</p>
                              <p className="pc-summary--value"> {this.state.todayuser}</p>
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
                              <p className="pc-summary--title">NEW USERS</p>
                              
                              <p className="pc-summary--value"> {this.state.newuser} </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="pc-main--row">
                    <div className="pc-row">
                      

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
                            <b> {this.state.activeuser} </b> สถานี</p>
                        </div>
                      </div>

                      <div className="pc-col-md-3">
                        <div className="pc-stat--item">
                          <i className="pc-ic_info-repairstation">
                            
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
                          <i className="pc-ic_info-activecontroller">
                            <img src="icon/ic/Asset 13x.png" alt="icon" />
                            </i>
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
                  {/* <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCIyLls81zvi4LKASyxX19O5MU2YuEAmUk&callback=initMap&libraries=&v=weekly" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>  */}
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

                                {/* <div className="pc-search--autocomplete" style={{display:"none"}}>
                                  <ul>
                                    <li>EGAT Station บางเขน</li>
                                    <li>EGAT Station บางเขน</li>
                                    <li>EGAT Station บางเขน</li>
                                    <li>EGAT Station บางเขน</li>
                                    <li>EGAT Station บางเขน</li>
                                  </ul>
                                </div> */}
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
                                  <a href="/stationuse">EGAT Station ท103</a>
                                </li>
                              </ul>
                              
                            </div>

                            <div className="pc-col-md-3 pc-col-sm-3 pc-liststation--item">
                              <div className="pc-liststation--heading">
                                <h2>ภาคกลาง (0)</h2>
                                <i></i>
                              </div>
                              
                            </div>

                            <div className="pc-col-md-3 pc-col-sm-3 pc-liststation--item">
                              <div className="pc-liststation--heading">
                                <h2>ภาคใต้ (0)</h2>
                                <i></i>
                              </div>
                              
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
        กรณา login
      </div>
    )
  }
}

