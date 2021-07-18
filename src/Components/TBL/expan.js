import { Component } from "react";

import "./Tbl.css"

export default class ParentComponent extends Component {
  constructor() {
      super();
      
      this.state = {
          data : [
              {id : "WA3456", 
              date : "05.30 am", 
              total : 500,
              station : "MEA Station ลาดกระบัง",
              name : "นายไฟฟ้า แรงสูง	",
              points: "เงินสด",
              namecus:"นางสาวณัฐวรา ปรัชญกุล",
              car:"NISSAN LEAF 2017" ,
              cherger:"หัวชาร์จ SAE J1772",
              numcherger:"ตู้ที่ 2" },

              {id : "WA3457", 
              date : "05.50 am", 
              total : 1500,
              station : "MEA Station ลาดกระบัง",
              name : "นายไฟฟ้า แรงสูง	",
              points: "บัตรเคดิต",
              namecus:"นางสาวณัฐวรา ปรัชญกุล",
              car:"NISSAN LEAF 2010" ,
              cherger:"หัวชาร์จ SAE J1732",
              numcherger:"ตู้ที่ 1" },
              // {id : 2, date : "2014-04-21", total : 121.0, station : "Not Shipped", name : "B", points: 10, percent: 60},
          ],
          expandedRows : []
      };
  }

  handleRowClick(rowId) {
      const currentExpandedRows = this.state.expandedRows;
      const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);
      
      const newExpandedRows = isRowCurrentlyExpanded ? 
    currentExpandedRows.filter(id => id !== rowId) : 
    currentExpandedRows.concat(rowId);
      
      this.setState({expandedRows : newExpandedRows});
  }
  
  renderItem(item) {
      const clickCallback = () => this.handleRowClick(item.id);
      const itemRows = [
    <tr onClick={clickCallback} key={"row-data-" + item.id}>
        <td style={{width:"15%",textAlign:"center",cursor:"pointer"  }}>{item.id}</td>
        <td style={{width:"15%",textAlign:"center",cursor:"pointer"  }}>{item.date}</td>
        <td style={{width:"15%",textAlign:"center",cursor:"pointer"  }}>{item.total}</td>
        <td style={{width:"20%",textAlign:"center",cursor:"pointer"  }}>{item.station}</td>			
        <td style={{width:"20%",textAlign:"center",cursor:"pointer"  }}>{item.name}</td>
        <td style={{width:"15%",textAlign:"center",cursor:"pointer"  }}>{item.points}</td>
    </tr>
      ];
      
      if(this.state.expandedRows.includes(item.id)) {
          itemRows.push(
            <tbody key={"row-expanded-" + item.id}>
            <tr>
              <td></td>
              <td colSpan="2">
                <p>
                  <b>ผู้ทำการใช้งาน</b> {item.namecus} </p>
              </td>
              <td colSpan="2">
                <p>
                  <b>หัวชาร์จ</b> {item.cherger} </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td colSpan="2">
                <p>
                  <b>รุ่นรถ</b> {item.car}</p>
              </td>
              <td colSpan="2">
                <p>
                  <b>ตู้ชาร์จ</b> {item.numcherger} </p>
              </td>
              <td></td>
            </tr>
            
          </tbody>

          );
      }
      
      return itemRows;    
  }
  
  render() {
      let allItemRows = [];
      
      this.state.data.forEach(item => {
          const perItemRows = this.renderItem(item);
          allItemRows = allItemRows.concat(perItemRows);
      });
      
      return (

         <table >
          <thead className="pc-text--c">
            <tr>
              <td style={{width:"15%"}}>
                <a>
                  <span>เลขที่</span>
                  <i className="pc-ic_sort-desc"></i>
                </a>
              </td>
              <td style={{width:"15%"}}>
                <a>
                <span>เวลา</span>
                <i className="pc-ic_sort-desc"></i>
                </a>
              </td>
              <td style={{width:"15%"}}>
                <a>
                <span>จำนวนเงิน (บาท)</span>
                <i className="pc-ic_sort-desc"></i>
                </a>
              </td>
              <td style={{width:"20%"}}>
                <a>
                <span>สถานี</span>
                <i className="pc-ic_sort-desc"></i>
                </a>
              </td>
              <td style={{width:"20%"}}>
                <a>
                <span>ผู้รับผิดชอบ</span>
                <i className="pc-ic_sort-desc"></i>
                </a>
              </td>
              <td style={{width:"15%"}}>
                <a>
                <span>สถานะ</span>
                <i className="pc-ic_sort-desc"></i>
                </a>
              </td>
              </tr>
            </thead>
            
              {allItemRows}
           {/* {allItemRows} */}
          </table>
      );
  }
}