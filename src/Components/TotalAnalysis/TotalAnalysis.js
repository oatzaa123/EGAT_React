import { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer"

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import Dropdown from 'react-bootstrap/Dropdown';



      


export default class Analysis extends Component {

    constructor(props){
      super(props)
      this.state={
        returnoninvestment : 0,
        totaluserm : 0,
        totaluserd : 0,
        maxelt : 0,
        powermax : 0,
        problemelt:0,
        

        data: [358, 390, 296, 435, 356, 445, 376, 300, 354, 287, 321, 251, 300, 435, 332, 431, 324, 293, 213, 324,
          346, 234, 456, 346, 389, 235, 386, 342, 224, 320, 288 ],
        date: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17',
        '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],

        categories1: ['1 ม.ค.', '2  ม.ค.', '3  ม.ค.', '4  ม.ค.', '5  ม.ค.', '6  ม.ค.', '7  ม.ค.'],
        dataelt: [280, 340, 320, 260, 400, 380, 200],
        datause: [160, 320, 120, 240, 180, 360, 150],
        poweretldata: [240, 180, 300, 160, 380, 150, 130],
        categories2: ['1 ม.ค.', '2  ม.ค.', '3  ม.ค.', '4  ม.ค.', '5  ม.ค.', '6  ม.ค.', '7  ม.ค.'],
        powerdata: [55, 25, 45, 15, 75, 20, 10],
        totaldata: [20, 55, 10, 35, 25, 55, 15],
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




  var chart, merge = Highcharts.merge; 
  var perShapeGradient = {
    x1: 0,
    y1: 1,
    x2: 0,
    y2: 0
  };
  var colors = Highcharts.getOptions().colors;
  colors = ['#37AAD3', '#F7A4B8', {
    linearGradient: merge(perShapeGradient),
    stops: [
      [0, 'rgba(255,255,255,0)'],
      [0.1, 'rgba(176,224,237,0.1)'],
      [1, 'rgba(154,214,231,0.5)']
    ]
  }, '#92d5e1'];

const option = {
                chart: {
                  type: 'area',
                  style: {
                    fontFamily: 'ThaiSansNeue-Regular',
                    fontSize: '18px',
                    letterSpacing: '0px'
                  },
                  backgroundColor: null,
                  spacingBottom: 0
                },
                title: {
                  text: '',
                },
                subtitle: {
                  enabled: false
                },

                legend: {
                  backgroundColor: null,
                  borderWidth: 0,
                  symbolHeight: 10,
                  itemStyle: {
                    color: '#37aad3',
                    fontWeight: 'normal',
                    fontSize: '18px'
                  },
                  margin: 0,
                },

                xAxis: {
                  categories: this.state.date,
                  gridLineWidth: 2,
                  gridLineDashStyle: 'dash',
                  gridLineColor: 'rgba(146, 213, 225, .4)',
                  gridZIndex: 0,
                  labels: {
                    style: {
                      fontSize: '16px',
                      letterSpacing: '0.5px',
                      color: '#37aad3'
                    },
                    step: 1
                  },
                  tickInterval: 1,
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
                tooltip: {
                  enabled: false
                },
                colors: ['#37aad3'],
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
                        [0, 'rgba(154,214,231,0.8)'],
                        [0.8, 'rgba(176,224,237,0.5)'],
                        [0.8, 'rgba(176,224,237,0.5)']
                      ]
                    },
                    marker: {
                      fillColor: '#37aad3',
                      radius: 4
                    },
                    lineWidth: 3,
                    lineColor: '#37aad3',
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
                  data: this.state.data ,
                  dataLabels: {
                    color: '#37aad3',
                    enabled: true,
                    align: 'center',
                    style: {
                      fontSize: '16px',
                      textOutline: '0px',
                      fontWeight: 'normal',
                      letterSpacing: '0.5px'
                    },
                    y: -30
                  }
                }]
              }

const opts = {
                chart: {
                  renderTo: 'reportkWh',
                  style: {
                    fontFamily: 'ThaiSansNeue-Regular',
                    fontSize: '18px',
                    letterSpacing: '0px'
                  },
                  spacingBottom: 0,
                  marginBottom: 70,
                  backgroundColor: null
                },
                title: {
                  text: ''
                },
                xAxis: {
                  categories: this.state.categories1 ,
                  gridLineWidth: 1,
                  gridLineDashStyle: 'solid',
                  gridLineColor: 'rgba(255,255,2550,0.5)',
                  gridZIndex: 0,
                  labels: {
                    style: {
                      fontSize: '16px',
                      letterSpacing: '0.5px',
                      color: '#37aad3'
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
                //colors: ['#37AAD3', '#F7A4B8', '#37aad3', '#37aad3'],
                legend: {
                  reversed: true,
                  itemStyle: {
                    fontSize: '16px',
                    textOutline: '0px',
                    fontWeight: 'normal',
                    letterSpacing: '0',
                    color: '#37aad3'
                  }
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
                  data: this.state.dataelt,
                  color: colors[2],
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
                  data: this.state.dataelt,
                  color: colors[3],
                  lineWidth: 3,
                  marker: {
                    radius: 10,
                    symbol: 'circle'
                  }
                }, {
                  type: 'spline',
                  name: 'กำลังไฟฟ้าที่ใช้',
                  data: this.state.datause ,
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
                  data: this.state.poweretldata,
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

    const optsi = {
                  chart: {
                    type: 'areaspline',
                    //spacingTop: 5,
                    style: {
                      fontFamily: 'ThaiSansNeue-Regular',
                      fontSize: '18px',
                      letterSpacing: '0px'
                    },
                    marginBottom: 60,
                    backgroundColor: null
                  },
                  title: {
                    text: ''
                  },
                  subtitle: {
                    enabled: false
                  },
              
                  legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    backgroundColor: null,
                    borderWidth: 0,
                    x: 0,
                    y: 0,
                    floating: true,
                    padding: 0,
                    symbolHeight: 10,
                    itemStyle: {
                      color: '#37aad3',
                      fontWeight: 'normal',
                      fontSize: '16px'
                    },
                    margin: 0
                  },
              
                  xAxis: {
                    categories: this.state.categories2,
                    gridLineWidth: 1,
                    gridLineDashStyle: 'dash',
                    gridLineColor: 'rgb(146,194,224)',
                    gridZIndex: 0,
                    labels: {
                      style: {
                        fontSize: '16px',
                        letterSpacing: '0.5px',
                        color: '#37aad3'
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
                      style: {
                        fontSize: '16px',
                        letterSpacing: '0.5px',
                        color: '#37aad3'
                      }
                    },
                    tickAmount: 10,
                    gridLineWidth: 1,
                    gridLineDashStyle: 'dash',
                    gridLineColor: 'rgb(146,194,224)',
                  },
                  tooltip: {
                    /*formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' +
                            this.x + ': ' + this.y;
                    }*/
                    enabled: false
                  },
                  colors: ['#FFFFFF'],
                  plotOptions: {
                    areaspline: {
                      //fillColor: '#37AAD3',
                      marker: {
                        enabled: false
                      },
                      lineWidth: 0,
                      label: {
                        enabled: false
                      },
                      pointStart: 0
                    }
                  },
                  exporting: {
                    enabled: false
                  },
                  credits: {
                    enabled: false
                  },
                  colors: ['#37AAD3', 'rgb(225,238,246)'],
                  series: [{
                    name: 'พลังงาน',
                    data: this.state.powerdata,
                    //fillColor: '#37AAD3',
                    fillOpacity: 0.6,
                    dataLabels: {
                      enabled: false
                    }
                  }, {
                    name: 'จำนวนผู้ใช้',
                    data: this.state.totaldata,
                    fillOpacity: 0.6,
                    dataLabels: {
                      enabled: false
                    }
                  }]
                }

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
                          <li className="is-active">
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
                </div>
              </div>

                

              <div className="pc-stat has-5-item">
                <div className="pc-wrapper">
                  <div className="pc-row">
                  <div className="pc-col-md-3">
                      <div className="pc-stat--item">
                        
                        <i className="pc-ic_analyze-problem">
                          {/* <img src="icon/ic/Asset 103x.png" alt="icon" /> */}
                          </i>
                        <p>RETURN ON INVESTMENT</p>
                        <p>
                          <b> {this.state.returnoninvestment} </b> %</p>
                      </div>
                    </div>

                    <div className="pc-col-md-3">
                      <div className="pc-stat--item">
                        <i className="pc-ic_analyze-month">
                          {/* <img src="icon/ic/Asset 113x.png" alt="icon" /> */}
                          </i>
                        <p>จำนวนผู้ใช้ประจำเดือน</p>
                        <p>
                          <b> {this.state.totaluserm} </b> คน</p>
                      </div>
                    </div>

                    <div className="pc-col-md-3">
                      <div className="pc-stat--item">
                        <i className="pc-ic_analyze-today">
                          {/* <img src="icon/ic/Asset 123x.png" alt="icon" /> */}
                          </i>
                        <p>จำนวนผู้ใช้ประจำวัน</p>
                        <p>
                          <b> {this.state.totaluserd} </b> คน</p>
                      </div>
                    </div>

                    <div className="pc-col-md-3">
                      <div className="pc-stat--item">
                        <i className="pc-ic_analyze-kw">
                          {/* <img src="icon/ic/Asset 133x.png" alt="icon" /> */}
                          </i>
                        <p>กำลังไฟฟ้ารวมสูงสุด</p>
                        <p>
                          <b> {this.state.maxelt} </b> kW</p>
                      </div>
                    </div>

                    <div className="pc-col-md-3">
                      <div className="pc-stat--item">
                        <i className="pc-ic_analyze-kwh">
                          {/* <img src="icon/ic/Asset 143x.png" alt="icon" /> */}
                          </i>
                        <p>พลังงานไฟฟ้ารวมสูงสุด</p>
                        <p>
                          <b> {this.state.powermax} </b> kWh</p>
                      </div>
                    </div>

                    <div className="pc-col-md-3">
                      <div className="pc-stat--item">
                        <i className="pc-ic_analyze-problem">
                          {/* <img src="icon/ic/Asset 153x.png" alt="icon" /> */}
                          </i>
                        <p>การเกิดปัญหาทั้งหมด</p>
                        <p>
                          <b> {this.state.problemelt} </b> ครั้ง</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
                
                <div className="pc-content">
                  <div className="pc-wrapper">
                    <div className="pc-panel pc-panel--reportuser">
                      <div className="pc-panel--heading">รายงานจำนวนผู้ใช้ทั้งหมด</div>
                      <div className="pc-panel--body">
                        <div className="pc-panel--content">
                          <div className="pc-row">
                            <div className="pc-col-md-5 pc-col-sm-5 pc-col-xs-10 pc-col-xxs-10">
                              
                              <div className="pc-field pc-field--search has-autocomplete">
                                <div className="pc-sel">


                                {/* <select>
                                  <option data-display="เลือกเดือน">กรุณาเลือก</option>
                                  <option selected>เดือนสิงหาคม 2017</option>
                                  <option>เดือนกันยายน 2017</option>
                                  <option>เดือนตุลาคม 2017</option>
                                </select> */}
                                  <div className="cc"></div>
                                {/* <select>
                                  <option data-display="ทั้งหมด 76 สถานนี" > ทั้งหมด 76 สถานนี </option>
                                </select> */}

                                </div>
                              </div>
                              
                            </div>
                            {/* <button className="pc-btn pc-btn--export pc-ic_export pc-pull--r"></button> */}
                            <div className="pc-col-md-7 pc-col-sm-7 pc-col-xs-2 pc-col-xxs-2">
                              {/* <button className="pc-btn pc-btn--export pc-ic_export pc-pull--r"></button> */}
                            </div>
                          </div>
                          <div className="nano" style={{height:"400px"}}>
                            <div className="content">
                              <div className="pc-panel--content" style={{minWidth:"400px",padding:"0"}}>
                                <div id="container" className="pc-tabscontent--chart">

                                <HighchartsReact
                                  highcharts={Highcharts}
                                  options={option} 
                                />

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pc-panel pc-panel--reportkw">
                      <div className="pc-panel--heading">รายงานข้อมูลทางไฟฟ้า</div>
                      <div className="pc-panel--body">
                        <div className="pc-panel--content">
                          <div className="pc-row">
                            <div className="pc-col-md-5">
                              <div className="pc-field pc-field--search has-autocomplete">
                              <div className="pc-sel">
                                {/* <select>
                                  <option data-display="เลือกเดือน">กรุณาเลือก</option>
                                  <option>สัปดาห์ที่ 1 เดือนสิงหาคม 2017</option>
                                  <option>สัปดาห์ที่ 2 เดือนมกราคม 2017</option>
                                  <option>สัปดาห์ที่ 3 เดือนมกราคม 2017</option>
                                </select> */}

                                <div className="cc"></div>

                                {/* <select>
                                  <option>EGAT STATION ท103</option>
                                </select> */}

                                </div>
                                
                              </div>
                            </div>
                          </div>

                          <div className="pc-row">
                            <div className="pc-col-md-8 pc-col-sm-8 pc-col-xs-10 pc-col-xxs-10">
                              <div className="pc-label">รายงานการใช้พลังงานไฟฟ้า กำลังไฟฟ้า และค่าไฟฟ้า</div>

                              <HighchartsReact
                                  highcharts={Highcharts}
                                  options={opts} 
                                  />
                            </div>
                          </div>

                          <div className="pc-row" style={{marginTop:"40px"}}>
                            <div className="pc-col-md-8 pc-col-sm-8 pc-col-xs-10 pc-col-xxs-10">
                              <div className="pc-label">รายงานสรุปข้อมูลทางไฟฟ้าอื่นๆ</div>
                              <HighchartsReact
                                highcharts={Highcharts}
                                options={optsi} 
                              />
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
        <Footer />
      </div>
      
    )
    }
    return (
      <div>
        กรุณา login
      </div>
    )
  }
}