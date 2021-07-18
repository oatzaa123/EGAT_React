import React, { Component } from 'react'

// import './Footer.css'

export default class Footer extends Component {
  render() {
    return(
      <div>
       <div className="pc-footer">
					<div className="pc-footer--top" style={{position:"relative" , backgroundColor:"#fee152"}}>

						<div className="pc-footer--img">
							
							<div className="pc-footer--top_img"></div>
							<div className="pc-footer--top_tab">&nbsp;</div>
						</div>
						<div className="pc-wrapper">
							<div className="pc-row">
								<div className="pc-col-md-12 pc-footer_top--cloud">
									<img src="img/cloud.svg" alt=""/>
									<img src="img/cloud.svg" alt=""/>
									<img src="img/cloud.svg" alt=""/>
									<img src="img/cloud.svg" alt=""/>
								</div>
							</div>
						</div>
					</div>
					<div className="pc-footer--content">
						<div className="pc-wrapper">
							<ul>
								<li>สถานีของคุณ</li>
								<li>
									<a href="">ข้อมูลของสถานี</a>
								</li>
								<li>
									<a href="">ข้อมูลตู้ชาร์จของสถานี</a>
								</li>
								<li>
									<a href="">ผลวิเคราห์ของสถานี</a>
								</li>
								<li>
									<a href="">รายงานค่าใช้จ่ายของสถานี</a>
								</li>
								<li>
									<a href="">รายงานเบิกของของสถานี</a>
								</li>
								<li>
									<a href="">กล้องวงจรปิดของสถานี</a>
								</li>
							</ul>
							<ul>
								<li>ผลวิเคราะห์</li>
								<li>
									<a href="">RETURN ON INVESTMENT</a>
								</li>
								<li>
									<a href="">จำนวนผู้ใช้ทัั้งหมด</a>
								</li>
								<li>
									<a href="">ข้อมูลทางไฟฟ้า</a>
								</li>
								<li>
									<a href="">ข้อมูลปัญหาที่เกิดขึ้น</a>
								</li>
							</ul>
							<ul>
								<li>รายงานค่าใช้จ่าย</li>
								<li>
									<a href="">รายงานผลประกอบการ</a>
								</li>
								<li>
									<a href="">รายงานค่าใช้จ่ายในส่วนต่างๆ</a>
								</li>
								<li>
									<a href="">บัญชีรายรับประจำวัน</a>
								</li>
							</ul>
							<ul>
								<li>บัญชีผู้ใช้</li>
								<li>
									<a href="">บัญชีผู้ใช้ระดับ OPERATOR</a>
								</li>
								<li>
									<a href="">บัญชีผู้ใช้ระดับ STAFF</a>
								</li>
							</ul>
							<ul>
								<li>กล้องวงจรปิด</li>
								<li>
									<a href="">กล้องวงจรปิด</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="pc-footer--bottom">
						<div className="pc-wrapper">
							<div className="pc-pull--r pc-footer_bottom--language">
							พัฒนาโดย ห้องปฏิบัติการประยุกต์ใช้พลังงานทดแทน สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง พ.ศ. 2564
								{/* <ul>
									<li>
										<a href="">ไทย</a>
									</li>
									<li>
										<a>|</a>
									</li>
									<li>
										<a href="">EN</a>
									</li>
								</ul> */}
							</div>

							<div className="pc-pull--r pc-footer_bottom--copyright">
							{/* โครงการวิจัยและพัฒนาระบบบริหารจัดการสถานีชาร์จไฟฟ้าอันชาญฉลาด 
							และโปรแกรมการตอบสนองด้านโหลดอย่างอัตโนมัติ ภายใต้โปรโตคอลการสื่อสาร
							รูปแบบเปิด พร้อมการเชื่อมต่อข้อมูลสู่คลังข้อมูลขนาดใหญ่ของ กฟผ. */}
							</div>
						</div>
					</div>
				</div>
      </div>
    )
  }
}
