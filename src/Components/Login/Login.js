import { Component } from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css'

import './Login.css'
import axios from 'axios'

const api = 'http://localhost:3100/public/login'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.handleAlert = this.handleAlert.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.state = {
            username: '',
            password: '',
        }
    }

    handleLogin = (e) => {
        e.preventDefault()
        console.log('Login')
        const con = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const data = {
            username: this.username,
            password: this.password,
            // status : true
        }
        console.log('data', data)

        axios
            .post(api, data, con)
            .then(function (res) {
                console.log('con', data)
                localStorage.setItem('result', res.data.result)

                console.log(res.data.username)
                console.log(res.data.password)

                alert('เข้าสู่ระบบ')
                window.location.assign('http://localhost:3000/Stationstat')
            })
            .catch((err) => {
                alert('Error!!')
                console.log(err)
                // window.location.assign("/")
            })
    }

    handleAlert() {
        console.log('Alert')
    }
    submit = () => {
        confirmAlert({
            title: 'Title',
            message: 'Message',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => alert('Click Yes'),
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No'),
                },
            ],
            childrenElement: () => <div />,
            customUI: ({}) => (
                <form onSubmit={this.handleLogin}>
                    {' '}
                    <div className="alert-login">
                        <div className="user">
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                onChange={(e) =>
                                    (this.username = e.target.value)
                                }
                                required
                            />
                        </div>
                        <div className="pass">
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={(e) =>
                                    (this.password = e.target.value)
                                }
                                required
                            />
                        </div>
                        {/* <input type="submit" value="Login" /> */}
                        <div className="btn-singin">
                            <input
                                type="submit"
                                value="ลงชื่อเข้าใช้"
                                style={{
                                    height: '38px',
                                    width: '90px',
                                    backgroundColor: 'rgb(22,65,147)',
                                    borderRadius: '5px',
                                    color: '#fff',
                                    border: 'none',
                                    fontFamily: 'ThaiSansNeue-SemiBold',
                                    fontSize: '19px',
                                }}
                            />
                        </div>
                    </div>
                </form>
            ),
        })
    }

    render() {
        return (
            <div>
                <div className="home">
                    <div className="eg-navbar--social">
                        <div className="icon-log">
                            <ul>
                                <li>
                                    <a href="">
                                        <img src="icon/Asset 3@2x.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src="icon/Asset 4@2x.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src="icon/Asset 5@2x.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src="icon/Asset 2@2x.png" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="eg-home">
                        <img src="icon2/Asset 23.png" ale="" />
                    </div>

                    <div className="txt-eg-home">
                        <strong>
                            โครงการวิจัยและพัฒนาระบบบริหารจัดการสถานีชาร์จไฟฟ้าอันชาญฉลาด
                            และโปรแกรมการตอบสนองด้านโหลดอย่างอัตโนมัติ
                            ภายใต้โปรโตคอลการสื่อสาร รูปแบบเปิด
                            พร้อมการเชื่อมต่อข้อมูลสู่คลังข้อมูลขนาดใหญ่ของ กฟผ.
                        </strong>
                    </div>

                    <div className="btn-signin">
                        <button onClick={this.submit}>SIGN IN</button>
                    </div>

                    <div className="tab-txt">
                        <div className="total-user">
                            <p>TOTAL STATIONS</p>
                            <h1>670,587</h1>
                        </div>
                        <div className="eg"></div>
                        <div className="today-user">
                            <p>TOTAL UERS</p>
                            <h1>35,000</h1>
                        </div>
                        <div className="eg"></div>
                        <div className="today-user">
                            <p>TODAY UERS</p>
                            <h1>35,000</h1>
                        </div>
                        <div className="eg"></div>
                        <div className="today-user">
                            <p>ACTIVE UERS</p>
                            <h1>35,000</h1>
                        </div>
                    </div>
                    <div className="owners-operators">
                        <div className="for-owners">
                            <h1>FOR OWNERS</h1>
                            <div className="br"></div>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit amet, consetetur .
                            </p>
                        </div>
                    </div>
                    <div className="owners-operators">
                        <div className="for-owners">
                            <h1>FOR OPERATORS</h1>
                            <div className="ar"></div>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit amet, consetetur .
                            </p>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }
}
