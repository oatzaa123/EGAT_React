import { Component } from "react";




export default class Nav extends Component {

  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }



  handleLogout = () => {

      localStorage.clear()
      alert("ออกจากระบบเรียบร้อยแล้ว")
          
          window.location.assign("http://localhost:3000")  
      
}


  render(){
    return(
      <div>
        <div className="pc-navbar">
              <div className="pc-container">
                <div className="pc-clearfix">
                  <div className="pc-pull--l pc-navbar--social">
                    <ul>
                      <li>
                        <a href="">
                          <img src="icon/Asset 3@2x.png" alt=""/>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="icon/Asset 4@2x.png" alt=""/>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="icon/Asset 5@2x.png" alt=""/>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="icon/Asset 2@2x.png" alt=""/>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="txt-navv">
                  <h2>EV SMART CHARGING STATION MANAGEMENT SYSTEM (EVSCSMS)</h2>
                  </div>

                  <a className="pc-pull--r pc-navbar--gridwhiz">
                    <ul>
                      <li className="logo-egat">
                      <img src="icon2/Asset 24.png" ale="" />
                      </li>
                      <li className="dropdown">

                        
                        <select className="logout" onChange={this.handleLogout}>
                          <option>  </option>
                          <option>ออกจากระบบ</option>
                        </select>
                      </li>
                    </ul>
                  </a>
                </div>
              </div>
              
            </div>
            
      </div>
    )
  }
}