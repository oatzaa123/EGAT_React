import { Component } from "react";

import Footer from "../Footer/Footer";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import Expan from "../TBL/expan"


import Nav from '../Nav/Nav'


export default class Expensereport extends Component {
  
  constructor(props){
    super(props)

    this.state={
      turnover:0,
      profit:0,
      revenue:0,
      expenditure:0,

      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      data: [358, 390, 296, 435, 356, 445, 376, 300, 354, 287, 321, 251, 300, 435, 332, 431, 324, 293, 213, 324, 346, 234, 456, 346, 389, 235, null, null, null, null, null],

      categories1: ['1 ม.ค.', '2 ม.ค.', '3 ม.ค.', '4 ม.ค.', '5 ม.ค.', '6 ม.ค.', '7 ม.ค.'],
      data1: [120, 150, 170, 180, 200, 160, 150],
      data2: [100, 140, 120, 180, 160, 230, 210],

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
  
  const options = {
              chart: {
                type: 'area',
                style: {
                  fontFamily: 'ThaiSansNeue-Regular',
                  fontSize: '18px',
                  letterSpacing: '0px',                
                },
                backgroundColor: null,
                spacingBottom: 0,
                spacingLeft: 5,
                spacingRight: 0
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
                  color: 'rgb(64,169,211)',
                  fontWeight: 'normal',
                  fontSize: '18px'
                },
                margin: 0,
              },
  
              xAxis: {
                categories: this.state.categories ,
                gridLineWidth: 1,
                gridLineDashStyle: 'dash',
                gridLineColor: 'rgba(154,214,231,0.8)',
                gridZIndex: 0,
                labels: {
                  style: {
                    fontSize: '16px',
                    letterSpacing: '0.5px',
                    color: 'rgb(64,169,211)'
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
                  style: {
                    fontSize: '16px',
                    letterSpacing: '0.5px',
                    color: 'rgb(64,169,211)'
                  },
                  step: 1,
                  format: '{value}K',
                  distance: 0
                },
                showEmpty: true,
                showLastLabel: true,
                max: 700,
                tickInterval: 100,
                minorTicks: true,
                minorGridLineDashStyle: 'dash',
                minorGridLineColor: 'rgba(154,214,231,0.8)',
                minorTickInterval: 100,
                gridLineWidth: 1,
                gridLineDashStyle: 'dash',
                gridLineColor: 'rgba(154,214,231,0.8)',
              },
              tooltip: {
                enabled: true,
                style: {
                  fontSize: '16px',
                  color: '#FFFFFF'
                },
                headerFormat: '',
                padding: 0,
                borderWidth: 0,
                useHTML: true,
                shadow: false,
                pointFormat: '<div style="padding: 2px 10px">{point.y}</div>',
                backgroundColor: null,
                formatter: function () {
                  return '<div class="round-tooltip" style="background-color:' + this.series.color + '"> ' + this.y + '</div><div class="round-tooltip-arrow" style="border-color: ' + this.series.color + ' transparent transparent transparent;"></div>';
                }
              },
              colors: ['rgb(64,169,211)'],
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
                    fillColor: 'rgb(64,169,211)',
                    radius: 4
                  },
                  lineWidth: 2,
                  lineColor: 'rgb(64,169,211)',
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
                name: 'ผลประกอบการ (บาท)',
                data: this.state.data,
                dataLabels: {
                  color: '#E76876',
                  enabled: false,
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
  
      const optline = {
        chart: {
          type: 'column',
          style: {
            fontFamily: 'ThaiSansNeue-Regular',
            fontSize: '18px',
            letterSpacing: '0px'
          },
          backgroundColor: null,
          spacingBottom: 0,
          spacingLeft: 5,
          spacingRight: 0
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
            color: '#2280bf',
            fontWeight: 'normal',
            fontSize: '18px'
          },
          margin: 0,
        },
    
        xAxis: {
          categories: this.state.categories1,
          gridLineWidth: 0,
          gridLineDashStyle: 'dash',
          gridLineColor: 'rgba(231, 104, 119, .2)',
          gridZIndex: 0,
          labels: {
            style: {
              fontSize: '16px',
              color: '#2280bf'
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
            style: {
              fontSize: '16px',
              letterSpacing: '0.5px',
              color: '#2280bf'
            },
            step: 1,
            format: '{value}K',
            distance: 0
          },
          showEmpty: true,
          showLastLabel: true,
          //max: 800,
          tickInterval: 30,
          minorTicks: true,
          minorGridLineDashStyle: 'dash',
          minorGridLineColor: 'rgba(231, 104, 119, .2)',
          minorTickInterval: 30,
          gridLineWidth: 1,
          gridLineDashStyle: 'dash',
          gridLineColor: 'rgba(231, 104, 119, .2)',
        },
        tooltip: {
          enabled: false,
          style: {
            fontSize: '16px',
            color: '#FFFFFF'
          },
          headerFormat: '',
          padding: 0,
          borderWidth: 0,
          useHTML: true,
          shadow: false,
          backgroundColor: null,
          formatter: function () {
            return '<div class="round-tooltip" style="background-color:' + this.series.color + '"> ' + this.y + '</div><div class="round-tooltip-arrow" style="border-color: ' + this.series.color + ' transparent transparent transparent;"></div>';
          }
        },
        colors: ['#E76876'],
        plotOptions: {
          column: {
            dataLabels: {
              padding: 0,
              allowOverlap: true
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
          name: 'รายรับ',
          data: this.state.data1,
          color: 'rgb(252,225,82)',
          dataLabels: {
            align: 'center',
            color: '#a2dbe5',
            enabled: true,
            align: 'center',
            style: {
              fontSize: '14px',
              textOutline: '0px',
              fontWeight: 'normal',
              lineHeight: '1',
              letterSpacing: '0.5px',
              zIndex: '6'
            },
            useHTML: true,
            formatter: function () {
              return '<div class="round-tooltip" style="background-color:' + this.series.color + '"> ' + this.y + '</div><div class="round-tooltip-arrow" style="border-color: ' + this.series.color + ' transparent transparent transparent;"></div>';
            },
            padding: 0,
            y: -8
          },
          marker: {
            symbol: 'circle',
            radius: 5
          },
          tooltip: {
            backgroundColor: '#a2dbe5'
          }
        }, {
          name: 'รายจ่าย',
          data: this.state.data2,
          color: '#459cc2',
          dataLabels: {
            align: 'center',
            color: '#459cc2',
            enabled: true,
            align: 'center',
            style: {
              fontSize: '14px',
              textOutline: '0px',
              fontWeight: 'normal',
              lineHeight: '1',
              letterSpacing: '0.5px',
              zIndex: '9'
            },
            useHTML: true,
            formatter: function () {
              return '<div class="round-tooltip" style="background-color:' + this.series.color + '"> ' + this.y + '</div><div class="round-tooltip-arrow" style="border-color: ' + this.series.color + ' transparent transparent transparent;"></div>';
            },
            padding: 0,
            y: -8,
            zIndex: 7
          },
          marker: {
            symbol: 'circle',
            radius: 5
          },
          tooltip: {
            backgroundColor: '#459cc2'
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
                          <li >
                            <a href="/Analysis">
                              <i className="pc-ic_menu2"></i>
                              <span>ผลวิเคราะห์</span>
                            </a>
                          </li>
                          <li className="is-active">
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

            <div className="pc-stat has-4-item">
              <div className="pc-wrapper">
                <div className="pc-row">
                  <div className="pc-col-md-3 pc-col-sm-3">
                    <div className="pc-stat--item">
                      <i className="pc-ic_exp-exchange">
                        {/* <img src="icon/ic/Asset 5@3xW.png" alt="icon" /> */}
                        </i>
                      <p>ผลประกอบการทั้งหมด</p>
                      <p>
                        <b> {this.state.turnover} </b> บาท</p>
                    </div>
                  </div>

                  <div className="pc-col-md-3 pc-col-sm-3">
                    <div className="pc-stat--item">
                      <i className="pc-ic_exp-chart">
                        {/* <img src="icon/ic/Asset 4@3xW.png" alt="icon" /> */}
                        </i>
                      <p>กำไรสุทธิที่ได้รับ</p>
                      <p>
                        <b> {this.state.profit} </b> บาท</p>
                    </div>
                  </div>

                  <div className="pc-col-md-3 pc-col-sm-3">
                    <div className="pc-stat--item">
                      <i className="pc-ic_exp-income">
                        {/* <img src="icon/ic/Asset 3@3xW.png" alt="icon" />  */}
                        </i>
                      <p>รายรับทั้งหมด</p>
                      <p>
                        <b> {this.state.revenue} </b> บาท</p>
                    </div>
                  </div>

                  <div className="pc-col-md-3 pc-col-sm-3">
                    <div className="pc-stat--item">
                      <i className="pc-ic_exp-outcome">
                        {/* <img src="icon/ic/Asset 2@3xW.png" alt="icon" /> */}
                        </i>
                      <p>รายจ่ายทั้งหมด</p>
                      <p>
                        <b> {this.state.expenditure} </b> บาท</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pc-content">
              <div className="pc-wrapper">
                <div className="pc-panel pc-panel--profit">
                  <div className="pc-panel--heading">รายงานผลประกอบการ</div>
                  <div className="pc-panel--body">
                    <div className="pc-panel--content">
                      <div className="pc-row">
                        <div className="pc-col-md-4 pc-col-sm-5 pc-col-xs-6">
                          <div className="pc-field pc-field--search has-autocomplete">
                          <div className="pc-sel"> 

                            {/* <select>
                              <option data-display="เลือกเดือน">กรุณาเลือก</option>
                              <option selected>เดือนสิงหาคม 2017</option>
                              <option>ตัวเลือก</option>
                              <option>ตัวเลือก</option>
                            </select> */}

                          </div>
                          </div>
                        </div>
                        <div className="pc-col-md-4 pc-col-sm-5 pc-col-xs-6">
                          <div className="pc-field pc-field--search has-autocomplete">
                          <div className="pc-sel"> 

                            {/* <select>
                              <option data-display="เลือกสถานี">กรุณาเลือก</option>
                              <option selected>ทุกสถานี</option>
                              <option>ตัวเลือก</option>
                              <option>ตัวเลือก</option>
                            </select> */}

                          </div>
                          </div>
                        </div>
                      </div>

                      <div className="pc-row">
                        <div className="pc-col-md-8 pc-col-sm-8">
                          <div className="pc-label">ผลประกอบการรวม (2,180,567)</div>
                        </div>
                        <div className="pc-col-md-4 pc-col-sm-4">
                          {/* <button className="pc-btn pc-btn--export pc-ic_export pc-pull--r"></button> */}
                        </div>
                      </div>

                      <div className="pc-row">
                        <div className="pc-col-md-12">
                          <div className="nano" style={{height:"400px"}} >
                            <div className="content">
                              <div className="pc-panel--content" style={{padding:"0"}}> {/* ลบ min - width: 300px */}
                                <div className="pc-tabscontent--chart">
                                <HighchartsReact
                                  highcharts={Highcharts}
                                  options={options} 
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

                <div className="pc-panel pc-panel--reportkw">
                  <div className="pc-panel--heading">รายงานค่าใช้จ่ายอื่่นๆ</div>
                  <div className="pc-panel--body">
                    <div className="pc-panel--content">
                      <div className="pc-row">
                        <div className="pc-col-md-4 pc-col-sm-5 pc-col-xs-6">
                          <div className="pc-field pc-field--search has-autocomplete">
                          <div className="pc-sel"> 

                            {/* <select>
                              <option data-display="เลือกเดือน">กรุณาเลือก</option>
                              <option selected>สัปดาห์ที่ 1 เดือนสิงหาคม 2017</option>
                              <option>สัปดาห์ที่ 2 เดือนมกราคม 2017</option>
                              <option>สัปดาห์ที่ 3 เดือนมกราคม 2017</option>
                            </select> */}

                            </div>
                          </div>
                        </div>
                        <div className="pc-col-md-4 pc-col-sm-5 pc-col-xs-6">
                          <div className="pc-field pc-field--search has-autocomplete">
                          <div className="pc-sel"> 

                            {/* <select>
                              <option data-display="เลือกเดือน">กรุณาเลือก</option>
                              <option selected>EGAT Station ท103</option>
                              <option>สัปดาห์ที่ 2 เดือนมกราคม 2017</option>
                              <option>สัปดาห์ที่ 3 เดือนมกราคม 2017</option>
                            </select> */}

                          </div>
                          </div>
                        </div>
                      </div>

                      <div className="pc-row">
                        <div className="pc-col-md-8 pc-col-sm-8">
                          <div className="pc-label">รายรับ รายจ่าย</div>

                          <HighchartsReact
                            highcharts={Highcharts}
                            options={optline} 
                          />

                        </div>
                      </div>

                      {/* <div className="pc-row" style={{marginTop:"40px"}}>
                        <div className="pc-col-md-8">
                          <div className="pc-label">รายรับ (180,567)</div>
                            <HighchartsReact
                              highcharts={Highcharts}
                              options={optincome} 
                            />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="pc-panel pc-panel--dailyaccount">
                  <div className="pc-panel--heading">บัญชีรายรับประจำวัน</div>
                  <div className="pc-panel--body">
                    <div className="pc-panel--content">
                      <div className="pc-row">
                        <div className="pc-col-md-4 pc-col-sm-5 pc-col-xs-6">
                          <div className="pc-field pc-field--search has-autocomplete">
                          <div className="pc-sel"> 
                            <select>
                              <option data-display="เลือกเดือน">กรุณาเลือก</option>
                              <option selected>ประจำวันที่ 25 / 02 / 2017</option>
                              <option>ตัวเลือก</option>
                              <option>ตัวเลือก</option>
                            </select>
                          </div>
                          </div>
                        </div>
                        <div className="pc-col-md-4 pc-col-sm-5 pc-col-xs-6">
                          <div className="pc-field pc-field--search has-autocomplete">
                            <div className="pc-groupin">
                              <input type="text" placeholder="ค้นหา..." />
                              <button className="pc-ic_search">
                                {/* <img src="icon/ic/Asset 63x.png" alt="" /> */}
                                 </button>
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
                        <div className="pc-col-md-4 pc-col-sm-2">
                          {/* <button className="pc-btn pc-btn--export pc-ic_export pc-pull--r"></button> */}
                        </div>
                      </div>

                      <div className="nano has-scrollbar-y pc-table--container" style={{minHeight:"330px"}}>
                        <div className="content">
                          <div className="pc-table pc-table--nobordered" style={{minWidth:"700px"}}>
                            
                            <Expan />
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
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