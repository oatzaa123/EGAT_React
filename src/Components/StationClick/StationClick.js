import { Component } from 'react'

import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import Mapgoogle from '../map/Mapgoogle'
import axios from 'axios'
import { uniqBy } from 'lodash'

export default class StationUse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            charger: [
                {
                    id: 1,
                    numbercherger: '1 : EGAT00001239-123',
                    parking: 1,
                    caretaker: 'นายเสาไฟฟ้า แรงสูง',
                },
                {
                    id: 2,
                    numbercherger: '2 : EGAT00001239-123',
                    parking: 3,
                    caretaker: 'นายเสาไฟฟ้า แรงสูง',
                },
            ],
            totalCharger: 0,
            address:
                '24 หมู่ 13 ถนนสุวินทวงศ์ แขวงแสนเสบ เขตมีนบุรี กทม. 10510',
            noticepoint:
                'ตรงข้ามโชว์รูมโตโยต้า ถนนสุวินทวงศ์เส้นทางไปฉะเชิงเทรา',
            lat: 0,
            long: 0,
            businesshours: '04.00am – 12.00am',
            weekend: '24 hours.',
            caretaker: 'นายกมล ดวงใจ',
            contact: '02-4456792 ต่อ 213',
        }

        this.getData = this.getData.bind(this)
    }

    getData() {
        let currentComponent = this
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('result')}`,
            },
        }
        const api = 'http://localhost:3100/private/station/getStation'
        axios
            .get(api, config)
            .then(function (res) {
                console.log(res.data.result)
                const {
                    address,
                    coordinate,
                    contact_tel,
                    contact_person,
                    open_houer_weekday,
                    open_houer_weekend,
                    landmark,
                    chargers,
                } = res.data.result
                const array = []
                chargers.forEach((item) => {
                    item.connector_status.forEach((_, index) => {
                        array.push({
                            id: item._id,
                            numbercherger: `${item.charger_no} : ${item.charger_models}`,
                            parking: index + 1,
                            caretaker: 'นายเสาไฟฟ้า แรงสูง',
                            headCharger: item.connector_status,
                        })
                    })
                })
                const newArr = uniqBy(array, 'numbercherger')
                currentComponent.setState({
                    address: address,
                    lat: coordinate.lattitude,
                    long: coordinate.longitude,
                    noticepoint: landmark,
                    businesshours: open_houer_weekday,
                    weekend: open_houer_weekend,
                    caretaker: contact_person,
                    contact: contact_tel,
                    charger: array,
                    totalCharger: newArr.length,
                })
                console.log('charger', currentComponent.state.charger)
            })
            .catch((err) => {
                alert('Error!!')
                console.log(err)
                // window.location.assign("/")
            })
    }

    componentWillMount() {
        this.getData()
    }

    render() {
        const charger = this.state.charger
        const tblparkingcharger = charger.map((item) => (
            <tr key={item.id}>
                <td> ตู้ที่ : {item.numbercherger} </td>
                <td> ช่องจอดที่ : {item.parking} </td>
                <td> ผู้ดูแล : {item.caretaker} </td>
            </tr>
        ))

        const token = localStorage.getItem('result')

        if (token) {
            return (
                <div>
                    <Nav />
                    <div className="pc-body nano pc-role--owner">
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
                                                                <span>
                                                                    สถานีของคุณ
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/Analysis">
                                                                <i className="pc-ic_menu2"></i>
                                                                <span>
                                                                    ผลวิเคราะห์
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/Expensereport">
                                                                <i className="pc-ic_menu3"></i>
                                                                <span>
                                                                    รายงานค่าใช้จ่าย
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/Accout">
                                                                <i className="pc-ic_menu4"></i>
                                                                <span>
                                                                    บัญชีผู้ใช้
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/cctv">
                                                                <i className="pc-ic_menu5"></i>
                                                                <span>
                                                                    กล้องวงจรปิด
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pc-subnav">
                                            <ul>
                                                <li className="is-active">
                                                    <a href="">
                                                        ข้อมูลของสถานี
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/stationcharger">
                                                        ข้อมูลตู้ชาร์จของสถานี
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/HeadStationAnalysis">
                                                        ผลวิเคราะห์ของสถานี
                                                    </a>
                                                </li>
                                                {/* <li>
                        <a href="/Headstationexpensereport">รายงานค่าใช้จ่ายของสถานี</a>
                      </li>
                      <li>
                        <a href="/Headstationpickingreport">รายงานเบิกของสถานี</a>
                      </li> */}
                                                <li>
                                                    <a href="/headcctv">
                                                        กล้องวงจรปิดของสถานี
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="pc-subnav--content">
                                            <img
                                                class="pc-station--logo"
                                                src="icon/Asset 1000@3xW.png"
                                                alt=""
                                            />
                                            <h2 className="pc-station--name">
                                                EGAT Station ท103
                                            </h2>
                                            <p className="pc-station--info">
                                                เครื่อข่าย : การไฟฟ้าส่วนภูมิภาค
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pc-title">ข้อมูลสถานี</div>

                                <div className="pc-content">
                                    <div className="pc-map">
                                        <Mapgoogle />
                                        {/* <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=forum%20tower&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>  */}
                                    </div>

                                    <div className="pc-wrapper">
                                        <div className="pc-panel">
                                            <div className="pc-panel--body">
                                                <div className="pc-panel--content">
                                                    <div className="pc-row">
                                                        <div className="pc-col-md-8 pc-col-sm-12 pc-col-xs-12 pc-col-xxs-12">
                                                            <div className="pc-label">
                                                                ข้อมูล
                                                            </div>
                                                            <p>
                                                                ที่อยู่ :{' '}
                                                                {
                                                                    this.state
                                                                        .address
                                                                }{' '}
                                                            </p>
                                                            <p>
                                                                จุดสังเกต :{' '}
                                                                {
                                                                    this.state
                                                                        .noticepoint
                                                                }{' '}
                                                            </p>
                                                            <p>
                                                                พิกัด lat/long :{' '}
                                                                {this.state.lat}
                                                                /
                                                                {
                                                                    this.state
                                                                        .long
                                                                }{' '}
                                                            </p>
                                                        </div>
                                                        <div className="pc-col-md-8 pc-col-sm-12 pc-col-xs-12 pc-col-xxs-12">
                                                            <div className="pc-label">
                                                                วันเวลาทำการ
                                                            </div>
                                                            <p>
                                                                <span>
                                                                    Weekdays
                                                                </span>
                                                                {
                                                                    this.state
                                                                        .businesshours
                                                                }
                                                            </p>
                                                            <p>
                                                                <span>
                                                                    Weekends
                                                                </span>
                                                                {
                                                                    this.state
                                                                        .weekend
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="pc-row">
                                                        <div className="pc-col-md-8 pc-col-sm-12 pc-col-xs-12 pc-col-xxs-12">
                                                            <div className="pc-label">
                                                                การติดต่อ
                                                            </div>
                                                            <ul className="pc-contactlink">
                                                                <li>
                                                                    <i className="pc-ic_o-map">
                                                                        <img
                                                                            src=""
                                                                            alt=""
                                                                        />
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i className="pc-ic_o-web"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="pc-ic_o-phone"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="pc-ic_o-fax"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="pc-ic_o-mail"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="pc-ic_o-fb"></i>
                                                                </li>
                                                                <li className="is-inactive">
                                                                    <i className="pc-ic_o-ig"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="pc-ic_o-twitter"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="pc-ic_o-line"></i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="pc-col-md-4 pc-col-sm-12 pc-col-xs-12 pc-col-xxs-12">
                                                            <div className="pc-label">
                                                                ผู้ดูแล
                                                            </div>
                                                            <p>
                                                                ผู้ดูแล :{' '}
                                                                {
                                                                    this.state
                                                                        .caretaker
                                                                }{' '}
                                                            </p>
                                                            <p>
                                                                ติดต่อ :{' '}
                                                                {
                                                                    this.state
                                                                        .contact
                                                                }{' '}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pc-panel">
                                            <div className="pc-panel--heading">
                                                ตู้ชาร์จในสถานี
                                            </div>
                                            <div className="pc-panel--body">
                                                <div
                                                    className="nano"
                                                    style={{ height: '200px' }}
                                                >
                                                    <div className="content">
                                                        <div className="pc-panel--content">
                                                            <div className="pc-row">
                                                                <div className="pc-col-md-12 pc-col-sm-12 pc-col-xs-12 pc-text--l">
                                                                    <div className="pc-label">
                                                                        จำนวนตู้ชาร์จทั้งหมด
                                                                        (
                                                                        {
                                                                            this
                                                                                .state
                                                                                .totalCharger
                                                                        }
                                                                        )
                                                                    </div>
                                                                    <div className="pc-table pc-table--noheader pc-table--nobordered">
                                                                        <table
                                                                            style={{
                                                                                minWidth:
                                                                                    '500px',
                                                                            }}
                                                                        >
                                                                            <tbody>
                                                                                {
                                                                                    tblparkingcharger
                                                                                }
                                                                                {/* <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                      </tr> */}
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

                                        <div className="pc-panel pc-panel--adapter">
                                            <div className="pc-panel--heading">
                                                หัวชาร์จในสถานี
                                            </div>
                                            <div className="pc-panel--body">
                                                <div
                                                    className="nano"
                                                    style={{ height: '270px' }}
                                                >
                                                    <div className="content">
                                                        <div className="pc-panel--content">
                                                            <div className="pc-row1">
                                                                <div className="pc-col-md-12 pc-text--l">
                                                                    <div className="pc-label">
                                                                        จำนวนหัวชาร์จทั้งหมด{' '}
                                                                        (
                                                                        {
                                                                            this
                                                                                .state
                                                                                .charger
                                                                                .length
                                                                        }
                                                                        )
                                                                    </div>
                                                                </div>

                                                                <div className="pc-col-md-12">
                                                                    <ul>
                                                                        {this.state.charger.map(
                                                                            (
                                                                                item,
                                                                                index
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                >
                                                                                    <div className="pc-row">
                                                                                        <div className="pc-col-md-12">
                                                                                            <div className="pc-adapter--no">
                                                                                                {
                                                                                                    item
                                                                                                        .connector_status
                                                                                                        .length
                                                                                                }
                                                                                            </div>
                                                                                            <div className="pc-adapter--status status-inactive">
                                                                                                <i className="pc-ic_charge-inactive"></i>
                                                                                            </div>
                                                                                            <div className="pc-adapter--ico">
                                                                                                <i className="pc-ic_adapter1"></i>
                                                                                            </div>
                                                                                            <div className="pc-adapter--slot">
                                                                                                ว่าง
                                                                                                {
                                                                                                    (item.connector_status.reduce(
                                                                                                        (
                                                                                                            sum,
                                                                                                            result
                                                                                                        ) =>
                                                                                                            result.current_status ===
                                                                                                                'Available' &&
                                                                                                            sum +
                                                                                                                1
                                                                                                    ),
                                                                                                    0)
                                                                                                }
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                            )
                                                                        )}
                                                                        {/* <li>
                                                                            <div className="pc-row">
                                                                                <div className="pc-col-md-12">
                                                                                    <div className="pc-adapter--no">
                                                                                        3
                                                                                    </div>
                                                                                    <div className="pc-adapter--status status-inactive">
                                                                                        <i className="pc-ic_charge-inactive"></i>
                                                                                    </div>
                                                                                    <div className="pc-adapter--ico">
                                                                                        <i className="pc-ic_adapter1"></i>
                                                                                    </div>
                                                                                    <div className="pc-adapter--slot">
                                                                                        ว่าง
                                                                                        3
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li> */}
                                                                        {/* <li>
                                                                            <div className="pc-row">
                                                                                <div className="pc-col-md-12">
                                                                                    <div className="pc-adapter--no">
                                                                                        3
                                                                                    </div>
                                                                                    <div className="pc-adapter--status status-active">
                                                                                        <i className="pc-ic_charge-active"></i>
                                                                                    </div>
                                                                                    <div className="pc-adapter--ico">
                                                                                        <i className="pc-ic_adapter2"></i>
                                                                                    </div>
                                                                                    <div className="pc-adapter--slot">
                                                                                        ว่าง
                                                                                        3
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="pc-row">
                                                                                <div className="pc-col-md-12">
                                                                                    <div className="pc-adapter--no">
                                                                                        3
                                                                                    </div>
                                                                                    <div className="pc-adapter--status status-active">
                                                                                        <i className="pc-ic_charge-active"></i>
                                                                                    </div>
                                                                                    <div className="pc-adapter--ico">
                                                                                        <i className="pc-ic_adapter3"></i>
                                                                                    </div>
                                                                                    <div className="pc-adapter--slot">
                                                                                        ว่าง
                                                                                        3
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="pc-row">
                                                                                <div className="pc-col-md-12">
                                                                                    <div className="pc-adapter--no">
                                                                                        3
                                                                                    </div>
                                                                                    <div className="pc-adapter--status status-repair">
                                                                                        <i className="pc-ic_charge-repair"></i>
                                                                                    </div>
                                                                                    <div className="pc-adapter--ico">
                                                                                        <i className="pc-ic_adapter4"></i>
                                                                                    </div>
                                                                                    <div className="pc-adapter--slot">
                                                                                        ว่าง
                                                                                        3
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="pc-row">
                                                                                <div className="pc-col-md-12">
                                                                                    <div className="pc-adapter--no">
                                                                                        3
                                                                                    </div>
                                                                                    <div className="pc-adapter--status status-no">
                                                                                        <i className="pc-ic_charge-no"></i>
                                                                                    </div>
                                                                                    <div className="pc-adapter--ico">
                                                                                        <i className="pc-ic_adapter5"></i>
                                                                                    </div>
                                                                                    <div className="pc-adapter--slot">
                                                                                        ว่าง
                                                                                        3
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="pc-row">
                                                                                <div className="pc-col-md-12">
                                                                                    <div className="pc-adapter--no">
                                                                                        3
                                                                                    </div>
                                                                                    <div className="pc-adapter--status status-no">
                                                                                        <i className="pc-ic_charge-no"></i>
                                                                                    </div>
                                                                                    <div className="pc-adapter--ico">
                                                                                        <i className="pc-ic_adapter6"></i>
                                                                                    </div>
                                                                                    <div className="pc-adapter--slot">
                                                                                        ว่าง
                                                                                        3
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="pc-row">
                                                                                <div className="pc-col-md-12">
                                                                                    <div className="pc-adapter--no">
                                                                                        3
                                                                                    </div>
                                                                                    <div className="pc-adapter--status status-inactive">
                                                                                        <i className="pc-ic_charge-inactive"></i>
                                                                                    </div>
                                                                                    <div className="pc-adapter--ico">
                                                                                        <i className="pc-ic_adapter7"></i>
                                                                                    </div>
                                                                                    <div className="pc-adapter--slot">
                                                                                        ว่าง
                                                                                        3
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li> */}
                                                                        {/* <div className="pc-row">
                                                                                <div className="pc-col-md-12">
                                                                                    <div className="pc-adapter--no">
                                                                                        3
                                                                                    </div>
                                                                                    <div className="pc-adapter--status status-active">
                                                                                        <i className="pc-ic_charge-active"></i>
                                                                                    </div>
                                                                                    <div className="pc-adapter--ico">
                                                                                        <i className="pc-ic_adapter8"></i>
                                                                                    </div>
                                                                                    <div className="pc-adapter--slot">
                                                                                        ว่าง
                                                                                        3
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li> */}
                                                                    </ul>
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
        return <div>กรุณา login</div>
    }
}
