import { Component } from "react";

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";


const opt = {
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
    symbolHeight: 13,
    squareSymbol: true,
    symbolRadius: 0,
    itemStyle: {
      color: '#2280bf',
      fontWeight: 'normal',
      fontSize: '18px'
    },
    margin: 0,
  },

  xAxis: {
    categories: ['1 ม.ค.', '2 ม.ค.', '3 ม.ค.', '4 ม.ค.', '5 ม.ค.', '6 ม.ค.', '7 ม.ค.'],
    gridLineWidth: 0,
    gridLineDashStyle: 'dash',
    gridLineColor: 'rgba(34, 128, 191, .2)',
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
    minorGridLineColor: 'rgba(34, 128, 191, .2)',
    minorTickInterval: 30,
    gridLineWidth: 1,
    gridLineDashStyle: 'dash',
    gridLineColor: 'rgba(34, 128, 191, .2)',
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
      return '<div class="round-tooltip" style="background-color:' + this.series.color + '"> ' + this.y +
        '</div><div class="round-tooltip-arrow" style="border-color: ' + this.series.color +
        ' transparent transparent transparent;"></div>';
    }
  },
  colors: ['#2280bf'],
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
    name: 'ค่าใช้จ่ายอื่นๆ',
    data: [120, 150, 170, 180, 200, 160, 150],
    color: '#a2dbe5',
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
        return '<div class="round-tooltip" style="background-color:' + this.series.color + '"> ' + this.y +
          '</div><div class="round-tooltip-arrow" style="border-color: ' + this.series.color +
          ' transparent transparent transparent;"></div>';
      },
      padding: 0,
      y: -8
    },
    marker: {
      symbol: 'square',
      radius: 5
    },
    tooltip: {
      backgroundColor: '#a2dbe5'
    }
  }, {
    name: 'ค่าน้ำ',
    data: [80, 90, 110, 90, 100, 130, 70],
    color: '#51c6e5',
    dataLabels: {
      align: 'center',
      color: '#51c6e5',
      enabled: true,
      align: 'center',
      style: {
        fontSize: '14px',
        textOutline: '0px',
        fontWeight: 'normal',
        lineHeight: '1',
        letterSpacing: '0.5px',
        zIndex: '7'
      },
      useHTML: true,
      formatter: function () {
        return '<div class="round-tooltip" style="background-color:' + this.series.color + '"> ' + this.y +
          '</div><div class="round-tooltip-arrow" style="border-color: ' + this.series.color +
          ' transparent transparent transparent;"></div>';
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
    name: 'ค่าไฟของสถานี',
    data: [110, 110, 130, 170, 200, 150, 100],
    color: '#ffabaf',
    dataLabels: {
      align: 'center',
      color: '#ffabaf',
      enabled: true,
      align: 'center',
      style: {
        fontSize: '14px',
        textOutline: '0px',
        fontWeight: 'normal',
        lineHeight: '1',
        letterSpacing: '0.5px',
        zIndex: '8'
      },
      useHTML: true,
      formatter: function () {
        return '<div class="round-tooltip" style="background-color:' + this.series.color + '"> ' + this.y +
          '</div><div class="round-tooltip-arrow" style="border-color: ' + this.series.color +
          ' transparent transparent transparent;"></div>';
      },
      padding: 0,
      y: -8
    },
    marker: {
      symbol: 'circle',
      radius: 5
    },
    tooltip: {
      backgroundColor: '#ffb8bb'
    }
  }, {
    name: 'ค่าไฟเพื่อการชาร์จ',
    data: [100, 140, 120, 180, 160, 230, 210],
    color: '#258bb7',
    dataLabels: {
      align: 'center',
      color: '#258bb7',
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
        return '<div class="round-tooltip" style="background-color:' + this.series.color + '"> ' + this.y +
          '</div><div class="round-tooltip-arrow" style="border-color: ' + this.series.color +
          ' transparent transparent transparent;"></div>';
      },
      padding: 0,
      y: -8,
      zIndex: 7
    },
    marker: {
      //symbol: 'square',
      radius: 0
    },
    tooltip: {
      backgroundColor: '#459cc2'
    }
  }]
}

const opt1 = {
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
    symbolHeight: 13,
    squareSymbol: true,
    symbolRadius: 0,
    itemStyle: {
      color: '#2280bf',
      fontWeight: 'normal',
      fontSize: '18px'
    },
    margin: 0,
  },

  xAxis: {
    categories: ['1 ม.ค.', '2 ม.ค.', '3 ม.ค.', '4 ม.ค.', '5 ม.ค.', '6 ม.ค.', '7 ม.ค.'],
    gridLineWidth: 0,
    gridLineDashStyle: 'dash',
    gridLineColor: 'rgba(34, 128, 191, .2)',
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
    max: 250,
    tickInterval: 30,
    minorTicks: true,
    minorGridLineDashStyle: 'dash',
    minorGridLineColor: 'rgba(34, 128, 191, .2)',
    minorTickInterval: 30,
    gridLineWidth: 1,
    gridLineDashStyle: 'dash',
    gridLineColor: 'rgba(34, 128, 191, .2)',
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
      return '<div class="round-tooltip" style="background-color:' + this.series.color + '"> ' + this.y +
        '</div><div class="round-tooltip-arrow" style="border-color: ' + this.series.color +
        ' transparent transparent transparent;"></div>';
    }
  },
  colors: ['#2280bf'],
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
    name: 'รายได้จากส่วนอื่นๆ',
    data: [120, 150, 170, 180, 200, 160, 150],
    color: '#51c6e5',
    dataLabels: {
      align: 'center',
      color: '#51c6e5',
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
        return '<div class="round-tooltip" style="background-color:' + this.series.color + '"> ' + this.y +
          '</div><div class="round-tooltip-arrow" style="border-color: ' + this.series.color +
          ' transparent transparent transparent;"></div>';
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
    name: 'รายได้จากค่าทำเนียม',
    data: [80, 90, 110, 90, 100, 130, 70],
    color: '#ffabaf',
    dataLabels: {
      align: 'center',
      color: '#ffabaf',
      enabled: true,
      align: 'center',
      style: {
        fontSize: '14px',
        textOutline: '0px',
        fontWeight: 'normal',
        lineHeight: '1',
        letterSpacing: '0.5px',
        zIndex: '7'
      },
      useHTML: true,
      formatter: function () {
        return '<div class="round-tooltip" style="background-color:' + this.series.color + '"> ' + this.y +
          '</div><div class="round-tooltip-arrow" style="border-color: ' + this.series.color +
          ' transparent transparent transparent;"></div>';
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
    name: 'รายได้จากค่าบริการ',
    data: [110, 110, 130, 170, 200, 150, 100],
    color: '#258bb7',
    dataLabels: {
      align: 'center',
      color: '#258bb7',
      enabled: true,
      align: 'center',
      style: {
        fontSize: '14px',
        textOutline: '0px',
        fontWeight: 'normal',
        lineHeight: '1',
        letterSpacing: '0.5px',
        zIndex: '8'
      },
      useHTML: true,
      formatter: function () {
        return '<div class="round-tooltip" style="background-color:' + this.series.color + '"> ' + this.y +
          '</div><div class="round-tooltip-arrow" style="border-color: ' + this.series.color +
          ' transparent transparent transparent;"></div>';
      },
      padding: 0,
      y: -8
    },
    marker: {
      symbol: 'circle',
      radius: 5
    },
    tooltip: {
      backgroundColor: '#ffb8bb'
    }
  }]
}



export default class Headstationexpensereport extends Component {
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
                          <a href="">ข้อมูลตู้ชาร์จของสถานี</a>
                        </li>
                        <li>
                          <a href="/HeadStationAnalysis">ผลวิเคราะห์ของสถานี</a>
                        </li>
                        {/* <li class="is-active">
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

                <div class="pc-title">รายงานค่าใช้จ่ายของสถานี</div>

                <div class="pc-stat has-2-item">
                  <div class="pc-wrapper">
                    <div class="pc-row">
                      <div class="pc-col-md-6 pc-col-sm-6">
                        <div class="pc-stat--item">
                          <i class="pc-ic_exp-income"></i>
                          <p>รายรับทั้งหมด</p>
                          <p>
                            <b>180,567</b> บาท</p>
                        </div>
                      </div>

                      <div class="pc-col-md-6 pc-col-sm-6">
                        <div class="pc-stat--item">
                          <i class="pc-ic_exp-outcome"></i>
                          <p>รายจ่ายทั้งหมด</p>
                          <p>
                            <b>80,567</b> บาท</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pc-content">
                  <div class="pc-wrapper">

                    <div class="pc-panel pc-panel--reportkw">
                      <div class="pc-panel--heading">รายงานค่าใช้จ่ายอื่นๆในสถานี</div>
                      <div class="pc-panel--body">
                        <div class="pc-panel--content">
                          <div class="pc-row">
                            <div class="pc-col-md-4 pc-col-sm-5 pc-col-xs-7">
                              <div class="pc-field pc-field--search has-autocomplete">
                                <select>
                                  <option data-display="เลือกเดือน">กรุณาเลือก</option>
                                  <option selected>สัปดาห์ที่ 1 เดือนสิงหาคม 2017</option>
                                  <option>สัปดาห์ที่ 2 เดือนมกราคม 2017</option>
                                  <option>สัปดาห์ที่ 3 เดือนมกราคม 2017</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div class="pc-row">
                            <div class="pc-col-md-8">
                              <div class="pc-label">รายจ่าย (80,567)</div>

                              <HighchartsReact
                                highcharts={Highcharts}
                                options={opt} 
                              />
                            </div>
                            {/* <div class="pc-col-md-4"> */}
                              <button class="pc-btn pc-btn--export pc-ic_export pc-pull--r" style={{marginTop:"-10px"}}></button>
                            {/* </div> */}
                            
                          </div>

                          <div class="pc-row" style={{marginTop:"40px"}}>
                            <div class="pc-col-md-8">
                              <div class="pc-label">รายรับ (180,567)</div>
                              <HighchartsReact
                                highcharts={Highcharts}
                                options={opt1} 
                              />
                            </div>
                            {/* <div class="pc-col-md-4"> */}
                              <button class="pc-btn pc-btn--export pc-ic_export pc-pull--r" style={{marginTop:"-10px"}} ></button>
                            {/* </div> */}
                            {/* <div class="pc-col-md-12">
                              <div class="nano" style={{minWidth:"280px",height:"279px"}}>
                                <div class="content">
                                  <div class="pc-panel--content">
                                    <div id="income" class="pc-tabscontent--chart"></div>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="pc-panel pc-panel--dailyaccount">
                      <div class="pc-panel--heading">บัญชีรายรับประจำวัน</div>
                      <div class="pc-panel--body">
                        <div class="pc-panel--content">
                          <div class="pc-row">
                            <div class="pc-col-md-4 pc-col-sm-5 pc-col-xs-6">
                              <div class="pc-field pc-field--search has-autocomplete">
                                <select>
                                  <option data-display="เลือกเดือน">กรุณาเลือก</option>
                                  <option selected>ประจำวันที่ 25 / 02 / 2017</option>
                                  <option>ตัวเลือก</option>
                                  <option>ตัวเลือก</option>
                                </select>
                              </div>
                            </div>
                            <div class="pc-col-md-4 pc-col-sm-5 pc-col-xs-6">
                            </div>
                            <div class="pc-col-md-4 pc-col-sm-2">
                              <button class="pc-btn pc-btn--export pc-ic_export pc-pull--r"></button>
                            </div>
                          </div>

                          <div class="nano has-scrollbar-y pc-pickingyear--list" style={{minHeight:"400px"}}>
                            <div class="content">
                              <div class="pc-table pc-table--nobordered" style={{minWidth:"700px"}} >
                                <table>
                                  <thead class="pc-text--c">
                                    <tr>
                                      <td style={{width:"20%"}} >
                                        <a>
                                          <span>เลขที่</span>
                                          <i class="pc-ic_sort-desc"></i>
                                        </a>
                                      </td>
                                      <td style={{width:"20%"}}>
                                        เวลา
                                      </td>
                                      <td style={{width:"20%"}}>
                                        จำนวนเงิน (บาท)
                                      </td>
                                      <td style={{width:"25%"}}>
                                        <a>
                                          <span>ผู้รับผิดชอบ</span>
                                          <i class="pc-ic_sort-desc"></i>
                                        </a>
                                      </td>
                                      <td style={{width:"15%"}} >
                                        <a>
                                          <span>สถานะ</span>
                                          <i class="pc-ic_sort-desc"></i>
                                        </a>
                                      </td>
                                    </tr>
                                  </thead>
                                  <tbody class="pc-text--c">
                                    <tr>
                                      <td>WA3456
                                      </td>
                                      <td>05.30 am</td>
                                      <td>500
                                        <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_1"
                                        aria-expanded="false" aria-controls="collapse_1"></button></td>
                                      <td>นายไฟฟ้า แรงสูง</td>
                                      <td>เงินสด</td>
                                    </tr>
                                    <tr class="pc-table--collapse">
                                      <td colspan="7">
                                        <div class="collapse" id="collapse_1">
                                          <div>
                                            <table>
                                              <thead>
                                                <tr>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เลขที่</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เวลา</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>จำนวนเงิน (บาท)</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"25%"}}>
                                                    <a>
                                                      <span>ผู้รับผิดชอบ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"15%"}}>
                                                    <a>
                                                      <span>สถานะ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>รุ่นรถ</b> NISSAN LEAF 2017</td>
                                                  <td>
                                                    <b>ตู้ชาร์จ</b> ตู้ที่ 2</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>WA3456
                                      </td>
                                      <td>05.30 am</td>
                                      <td>500
                                        <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_1"
                                        aria-expanded="false" aria-controls="collapse_1"></button></td>
                                      <td>นายไฟฟ้า แรงสูง</td>
                                      <td>เงินสด</td>
                                    </tr>
                                    <tr class="pc-table--collapse">
                                      <td colspan="7">
                                        <div class="collapse" id="collapse_1">
                                          <div>
                                            <table>
                                              <thead>
                                                <tr>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เลขที่</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เวลา</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>จำนวนเงิน (บาท)</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"25%"}}>
                                                    <a>
                                                      <span>ผู้รับผิดชอบ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"15%"}}>
                                                    <a>
                                                      <span>สถานะ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>รุ่นรถ</b> NISSAN LEAF 2017</td>
                                                  <td>
                                                    <b>ตู้ชาร์จ</b> ตู้ที่ 2</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>WA3456
                                      </td>
                                      <td>05.30 am</td>
                                      <td>500
                                        <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_1"
                                        aria-expanded="false" aria-controls="collapse_1"></button></td>
                                      <td>นายไฟฟ้า แรงสูง</td>
                                      <td>เงินสด</td>
                                    </tr>
                                    <tr class="pc-table--collapse">
                                      <td colspan="7">
                                        <div class="collapse" id="collapse_1">
                                          <div>
                                            <table>
                                              <thead>
                                                <tr>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เลขที่</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เวลา</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>จำนวนเงิน (บาท)</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"25%"}}>
                                                    <a>
                                                      <span>ผู้รับผิดชอบ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"15%"}}>
                                                    <a>
                                                      <span>สถานะ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>รุ่นรถ</b> NISSAN LEAF 2017</td>
                                                  <td>
                                                    <b>ตู้ชาร์จ</b> ตู้ที่ 2</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>WA3456
                                      </td>
                                      <td>05.30 am</td>
                                      <td>500
                                        <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_1"
                                        aria-expanded="false" aria-controls="collapse_1"></button></td>
                                      <td>นายไฟฟ้า แรงสูง</td>
                                      <td>เงินสด</td>
                                    </tr>
                                    <tr class="pc-table--collapse">
                                      <td colspan="7">
                                        <div class="collapse" id="collapse_1">
                                          <div>
                                            <table>
                                              <thead>
                                                <tr>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เลขที่</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เวลา</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>จำนวนเงิน (บาท)</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"25%"}}>
                                                    <a>
                                                      <span>ผู้รับผิดชอบ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"15%"}}>
                                                    <a>
                                                      <span>สถานะ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>รุ่นรถ</b> NISSAN LEAF 2017</td>
                                                  <td>
                                                    <b>ตู้ชาร์จ</b> ตู้ที่ 2</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>WA3456
                                      </td>
                                      <td>05.30 am</td>
                                      <td>500
                                        <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_1"
                                        aria-expanded="false" aria-controls="collapse_1"></button></td>
                                      <td>นายไฟฟ้า แรงสูง</td>
                                      <td>เงินสด</td>
                                    </tr>
                                    <tr class="pc-table--collapse">
                                      <td colspan="7">
                                        <div class="collapse" id="collapse_1">
                                          <div>
                                            <table>
                                              <thead>
                                                <tr>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เลขที่</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เวลา</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>จำนวนเงิน (บาท)</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"25%"}}>
                                                    <a>
                                                      <span>ผู้รับผิดชอบ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"15%"}}>
                                                    <a>
                                                      <span>สถานะ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>รุ่นรถ</b> NISSAN LEAF 2017</td>
                                                  <td>
                                                    <b>ตู้ชาร์จ</b> ตู้ที่ 2</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>WA3456
                                      </td>
                                      <td>05.30 am</td>
                                      <td>500
                                        <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_1"
                                        aria-expanded="false" aria-controls="collapse_1"></button></td>
                                      <td>นายไฟฟ้า แรงสูง</td>
                                      <td>เงินสด</td>
                                    </tr>
                                    <tr class="pc-table--collapse">
                                      <td colspan="7">
                                        <div class="collapse" id="collapse_1">
                                          <div>
                                            <table>
                                              <thead>
                                                <tr>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เลขที่</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เวลา</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>จำนวนเงิน (บาท)</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"25%"}}>
                                                    <a>
                                                      <span>ผู้รับผิดชอบ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"15%"}}>
                                                    <a>
                                                      <span>สถานะ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>รุ่นรถ</b> NISSAN LEAF 2017</td>
                                                  <td>
                                                    <b>ตู้ชาร์จ</b> ตู้ที่ 2</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>WA3456
                                      </td>
                                      <td>05.30 am</td>
                                      <td>500
                                        <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_1"
                                        aria-expanded="false" aria-controls="collapse_1"></button></td>
                                      <td>นายไฟฟ้า แรงสูง</td>
                                      <td>เงินสด</td>
                                    </tr>
                                    <tr class="pc-table--collapse">
                                      <td colspan="7">
                                        <div class="collapse" id="collapse_1">
                                          <div>
                                            <table>
                                              <thead>
                                                <tr>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เลขที่</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เวลา</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>จำนวนเงิน (บาท)</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"25%"}}>
                                                    <a>
                                                      <span>ผู้รับผิดชอบ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"15%"}}>
                                                    <a>
                                                      <span>สถานะ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>รุ่นรถ</b> NISSAN LEAF 2017</td>
                                                  <td>
                                                    <b>ตู้ชาร์จ</b> ตู้ที่ 2</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>WA3456
                                      </td>
                                      <td>05.30 am</td>
                                      <td>500
                                        <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_1"
                                        aria-expanded="false" aria-controls="collapse_1"></button></td>
                                      <td>นายไฟฟ้า แรงสูง</td>
                                      <td>เงินสด</td>
                                    </tr>
                                    <tr class="pc-table--collapse">
                                      <td colspan="7">
                                        <div class="collapse" id="collapse_1">
                                          <div>
                                            <table>
                                              <thead>
                                                <tr>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เลขที่</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เวลา</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>จำนวนเงิน (บาท)</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"25%"}}>
                                                    <a>
                                                      <span>ผู้รับผิดชอบ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"15%"}}>
                                                    <a>
                                                      <span>สถานะ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>รุ่นรถ</b> NISSAN LEAF 2017</td>
                                                  <td>
                                                    <b>ตู้ชาร์จ</b> ตู้ที่ 2</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>WA3456
                                      </td>
                                      <td>05.30 am</td>
                                      <td>500
                                        <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_1"
                                        aria-expanded="false" aria-controls="collapse_1"></button></td>
                                      <td>นายไฟฟ้า แรงสูง</td>
                                      <td>เงินสด</td>
                                    </tr>
                                    <tr class="pc-table--collapse">
                                      <td colspan="7">
                                        <div class="collapse" id="collapse_1">
                                          <div>
                                            <table>
                                              <thead>
                                                <tr>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เลขที่</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เวลา</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>จำนวนเงิน (บาท)</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"25%"}}>
                                                    <a>
                                                      <span>ผู้รับผิดชอบ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"15%"}}>
                                                    <a>
                                                      <span>สถานะ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>รุ่นรถ</b> NISSAN LEAF 2017</td>
                                                  <td>
                                                    <b>ตู้ชาร์จ</b> ตู้ที่ 2</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>WA3456
                                      </td>
                                      <td>05.30 am</td>
                                      <td>500
                                        <button class="pc-btn pc-btn--lightblue pc-ic_arrow-down pc-btn--collapse" data-toggle="collapse" data-target="#collapse_1"
                                        aria-expanded="false" aria-controls="collapse_1"></button></td>
                                      <td>นายไฟฟ้า แรงสูง</td>
                                      <td>เงินสด</td>
                                    </tr>
                                    <tr class="pc-table--collapse">
                                      <td colspan="7">
                                        <div class="collapse" id="collapse_1">
                                          <div>
                                            <table>
                                              <thead>
                                                <tr>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เลขที่</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>เวลา</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"20%"}}>
                                                    <a>
                                                      <span>จำนวนเงิน (บาท)</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"25%"}}>
                                                    <a>
                                                      <span>ผู้รับผิดชอบ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                  <td style={{width:"15%"}}>
                                                    <a>
                                                      <span>สถานะ</span>
                                                      <i class="pc-ic_sort-desc"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>รุ่นรถ</b> NISSAN LEAF 2017</td>
                                                  <td>
                                                    <b>ตู้ชาร์จ</b> ตู้ที่ 2</td>
                                                  <td></td>
                                                </tr>
                                                <tr>
                                                  <td></td>
                                                  <td colspan="2">
                                                    <b>ผู้ทำการใช้งาน</b> นางสาวณัฐวรา ปรัชญกุล</td>
                                                  <td>
                                                    <b>หัวชาร์จ</b> หัวชาร์จ SAE J1772</td>
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