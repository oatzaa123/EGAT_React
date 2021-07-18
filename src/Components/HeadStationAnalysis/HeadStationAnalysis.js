import { Component } from "react";

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default class HeadStationAnalysis extends Component {

  constructor(props){
    super(props)

    this.state={
      totaluserm:0,
      totaluserd:0,
      maxtotaleil:0,
      maxpowerelt:0,
      problem:0,


      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      data: [358, 390, 296, 435, 356, 445, 376, 300, 354, 287, 321, 251, 300, 435, 332, 431, 324, 293, 213, 324, 346, 234, 456, 346, 389, 235, 386, 342, 224, 320, 288],

      categories1: ['1 ม.ค.', '2  ม.ค.', '3  ม.ค.', '4  ม.ค.', '5  ม.ค.', '6  ม.ค.', '7  ม.ค.'],
      datai: [280, 340, 320, 260, 400, 380, 200],
      dataii: [160, 320, 120, 240, 180, 360, 150],
      dataiii: [240, 180, 300, 160, 380, 150, 130],

      categories3: ['1 ม.ค.', '2  ม.ค.', '3  ม.ค.', '4  ม.ค.', '5  ม.ค.', '6  ม.ค.', '7  ม.ค.'],
      datai1: [55, 25, 45, 15, 75, 20, 10],
      dataii1: [20, 55, 10, 35, 25, 55, 15],

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



    var chart, merge = Highcharts.merge;
	var perShapeGradient = {
		x1: 0,
		y1: 1,
		x2: 0,
		y2: 0
	};
	var colors = Highcharts.getOptions().colors;
	colors = ['#37AAD3', 'rgb(254,225,170)', {
		linearGradient: merge(perShapeGradient),
		stops: [
			[0, 'rgba(255,255,255,0)'],
			[0.1, 'rgba(34, 128, 191,0.1)'],
			[1, 'rgba(34, 128, 191,0.5)']
		]
	}, '#2280bf'];

const opt = {
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
    //layout: 'vertical',
    //align: 'center',
    //verticalAlign: 'bottom',
    backgroundColor: null,
    borderWidth: 0,
    //x: 0,
    //y: 0,
    //floating: true,
    //padding: 0,
    symbolHeight: 10,
    itemStyle: {
      color: '#2280BF',
      fontWeight: 'normal',
      fontSize: '18px'
    },
    margin: 0,
  },

  xAxis: {
    categories: this.state.categories,
    gridLineWidth: 2,
    gridLineDashStyle: 'dash',
    gridLineColor: 'rgba(34, 128, 191, .4)',
    gridZIndex: 0,
    labels: {
      style: {
        fontSize: '16px',
        letterSpacing: '0.5px',
        color: '#2280BF'
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
  colors: ['#2280BF'],
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
          [0, 'rgba(34,128,191,0.8)'],
          [0.8, 'rgba(81,198,229,0.5)'],
          [0.8, 'rgba(81,198,229,0.5)']
        ]
      },
      marker: {
        fillColor: '#2280BF',
        radius: 4
      },
      lineWidth: 3,
      lineColor: '#2280BF',
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
      color: '#2280BF',
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

const opt1 = {
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
    categories: this.state.categories1,
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
    reversed: true,
    itemStyle: {
      fontSize: '16px',
      textOutline: '0px',
      fontWeight: 'normal',
      letterSpacing: '0',
      color: '#2280bf'
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
    data: this.state.datai,
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
    data: this.state.datai,
    color: colors[3],
    lineWidth: 3,
    marker: {
      radius: 10,
      symbol: 'circle'
    }
  }, {
    type: 'spline',
    name: 'กำลังไฟฟ้าที่ใช้',
    data: this.state.dataii,
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
    data: this.state.dataiii,
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

const opt2 = {
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
    //layout: 'vertical',
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
      color: '#2280bf',
      fontWeight: 'normal',
      fontSize: '16px'
    },
    margin: 0
  },

  xAxis: {
    categories: ['1 ม.ค.', '2  ม.ค.', '3  ม.ค.', '4  ม.ค.', '5  ม.ค.', '6  ม.ค.', '7  ม.ค.'],
    gridLineWidth: 1,
    gridLineDashStyle: 'dash',
    gridLineColor: 'rgba(34, 128, 191,0.5)',
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
      style: {
        fontSize: '16px',
        letterSpacing: '0.5px',
        color: '#2280bf'
      }
    },
    tickAmount: 10,
    gridLineWidth: 1,
    gridLineDashStyle: 'dash',
    gridLineColor: 'rgba(34, 128, 191,0.5)',
  },
  tooltip: {
    
    enabled: false
  },
  colors: ['#FFFFFF'],
  plotOptions: {
    areaspline: {
      
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
  colors: ['#37AAD3', 'rgb(225,232,246)'],
  series: [{
    name: 'xxxxxxxxxx',
    data: this.state.datai1,
    
    fillOpacity: 0.6,
    dataLabels: {
      enabled: false
    }
  }, {
    name: 'xxxxxxxxxx',
    data: this.state.dataii1,
    
    fillOpacity: 0.6,
    dataLabels: {
      enabled: false
    }
  }]
}



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
                        <li >
                          <a href="/stationcharger">ข้อมูลตู้ชาร์จของสถานี</a>
                        </li>
                        <li class="is-active">
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
                  ผลวิเคราะห์ของสถานี
                </div>

                <div class="pc-stat has-5-item">
                  <div class="pc-wrapper">
                    <div class="pc-row">
                      <div class="pc-col-md-3">
                        <div class="pc-stat--item">
                          <i class="pc-ic_analyze-month"></i>
                          <p>จำนวนผู้ใช้ประจำเดือน</p>
                          <p>
                            <b> {this.state.totaluserm} </b> คน</p>
                        </div>
                      </div>

                      <div class="pc-col-md-3">
                        <div class="pc-stat--item">
                          <i class="pc-ic_analyze-today"></i>
                          <p>จำนวนผู้ใช้ประจำวัน</p>
                          <p>
                            <b> {this.state.totaluserd} </b> คน</p>
                        </div>
                      </div>

                      <div class="pc-col-md-3">
                        <div class="pc-stat--item">
                          <i class="pc-ic_analyze-kw"></i>
                          <p>กำลังไฟฟ้ารวมสูงสุด</p>
                          <p>
                            <b> {this.state.maxtotaleil} </b> kW</p>
                        </div>
                      </div>

                      <div class="pc-col-md-3">
                        <div class="pc-stat--item">
                          <i class="pc-ic_analyze-kwh"></i>
                          <p>พลังงานไฟฟ้ารวมสูงสุด</p>
                          <p>
                            <b> {this.state.maxpowerelt} </b> kWh</p>
                        </div>
                      </div>

                      <div class="pc-col-md-3">
                        <div class="pc-stat--item">
                          <i class="pc-ic_analyze-problem"></i>
                          <p>การเกิดปัญหาทั้งหมด</p>
                          <p>
                            <b> {this.state.problem} </b> ครั้ง</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pc-content">
                  <div class="pc-wrapper">
                    <div class="pc-panel pc-panel--reportuser">
                      <div class="pc-panel--heading">รายงานจำนวนผู้ใช้ทั้งหมด</div>
                      <div class="pc-panel--body">
                        <div class="pc-panel--content">
                          <div class="pc-row">
                            <div class="pc-col-md-5 pc-col-sm-5 pc-col-xs-10 pc-col-xxs-10">
                              <div class="pc-field pc-field--search has-autocomplete">

                                {/* <select>
                                  <option data-display="เลือกเดือน">กรุณาเลือก</option>
                                  <option selected>เดือนสิงหาคม 2017</option>
                                  <option>เดือนกันยายน 2017</option>
                                  <option>เดือนตุลาคม 2017</option>
                                </select> */}

                              </div>
                            </div>
                            <div class="pc-col-md-7 pc-col-sm-7 pc-col-xs-2 pc-col-xxs-2">
                              <button class="pc-btn pc-btn--export pc-ic_export pc-pull--r"></button>
                            </div>
                          </div>
                          <div class="nano" style={{height:"400px"}}>
                            <div class="content">
                              <div class="pc-panel--content" style={{minWidth:"480px",padding:"0"}}>
                                <div id="container" class="pc-tabscontent--chart">
                                <HighchartsReact
                                  highcharts={Highcharts}
                                  options={opt} 
                                />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="pc-panel pc-panel--reportkw">
                      <div class="pc-panel--heading">รายงานข้อมูลทางไฟฟ้า</div>
                      <div class="pc-panel--body">
                        <div class="pc-panel--content">
                          <div class="pc-row">
                            <div class="pc-col-md-5">
                              <div class="pc-field pc-field--search has-autocomplete">
                                {/* <select>
                                  <option data-display="เลือกเดือน">กรุณาเลือก</option>
                                  <option selected>สัปดาห์ที่ 1 เดือนสิงหาคม 2017</option>
                                  <option>สัปดาห์ที่ 2 เดือนมกราคม 2017</option>
                                  <option>สัปดาห์ที่ 3 เดือนมกราคม 2017</option>
                                </select> */}
                              </div>
                            </div>
                          </div>

                          <div class="pc-row">
                            <div class="pc-col-md-8 pc-col-sm-8 pc-col-xs-10 pc-col-xxs-10">
                              <div class="pc-label">รายงานการใช้พลังงานไฟฟ้า กำลังไฟฟ้า และค่าไฟฟ้า</div>
                              <HighchartsReact
                                      highcharts={Highcharts}
                                      options={opt1} 
                                    />
                            </div>
                            
                            {/* <div class="pc-col-md-4 pc-col-sm-4 pc-col-xs-2 pc-col-xxs-2"> */}
                              <button class="pc-btn pc-btn--export pc-ic_export pc-pull--r" style={{marginTop:"-420px"}}></button>
                              
                            {/* </div> */}
                            {/* <div class="pc-col-md-12">
                              <div class="nano" style={{height:"280px"}}>
                                <div class="content">
                                  <div class="pc-panel--content" style={{minWidth:"400px",padding:"0"}}>
                                    <div id="reportkWh" class="pc-tabscontent--chart">
                                    
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </div>

                          <div class="pc-row" style={{marginTop:"40px"}}>
                            <div class="pc-col-md-8 pc-col-sm-8 pc-col-xs-10 pc-col-xxs-10">
                              <div class="pc-label">รายงานสรุปข้อมูลทางไฟฟ้าอื่นๆ</div>
                              <HighchartsReact
                                      highcharts={Highcharts}
                                      options={opt2} 
                                    />
                            </div>
                            
                            
                              <button class="pc-btn pc-btn--export pc-ic_export pc-pull--r" style={{marginTop:"-420px"}}></button>
                            
                            {/* <div class="pc-col-md-12">
                              <div class="nano" style={{height:"280px"}}>
                                <div class="content">
                                  <div class="pc-panel--content" style={{minWidth:"400px",padding:"0"}}>
                                    <div id="reportothers" class="pc-tabscontent--chart"></div>
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