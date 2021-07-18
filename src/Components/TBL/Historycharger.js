import { Component } from "react";

import "./Tbl.css"

export default class ParentComponent extends Component {
  constructor() {
      super();
      
      this.state = {
          data : [
              {id : "WA3456", 
              time : "05.30 am", 
              stoptime : "07.30 am",
              many : 500,
              points: "นายเสาไฟฟ้า แรงสูง",
              namecus:"นายเสาไฟฟ้า แรงสูง",
              card:"1234566789012" ,
              cherger:"หัวชาร์จ SAE J1772",
              numcherger:"ตู้ที่ 1" },

              // {id : "WA3457", 
              // date : "05.50 am", 
              // total : 1500,
              // station : "MEA Station ลาดกระบัง",
              // name : "นายไฟฟ้า แรงสูง	",
              // points: "บัตรเคดิต",
              // namecus:"นางสาวณัฐวรา ปรัชญกุล",
              // car:"NISSAN LEAF 2010" ,
              // cherger:"หัวชาร์จ SAE J1732",
              // numcherger:"ตู้ที่ 1" },
              
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
        <td style={{width:"15%",textAlign:"center",cursor:"pointer"  }}>{item.time}</td>
        <td style={{width:"15%",textAlign:"center",cursor:"pointer"  }}>{item.stoptime}</td>
        <td style={{width:"20%",textAlign:"center",cursor:"pointer"  }}>{item.many}</td>			
        <td style={{width:"20%",textAlign:"center",cursor:"pointer"  }}>{item.namecus}</td>
        <td style={{width:"15%",textAlign:"center",cursor:"pointer"  }}>{item.points}</td>
    </tr>
      ];
      
      if(this.state.expandedRows.includes(item.id)) {
          itemRows.push(
            <tbody key={"row-expanded-" + item.id} style={{backgroundColor: "rgb(254,248,217)"}}>
            <tr>
              <td></td>
              <td colSpan="2">
                <p>
                  <b>รหัสการ์ด</b> {item.card} </p>
              </td>
              <td colSpan="2">
                <p>
                  <b>หัวชาร์จ</b> {item.cherger} </p>
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
                <span>เวลาเริ่ม</span>
                <i className="pc-ic_sort-desc"></i>
                </a>
              </td>
              <td style={{width:"15%"}}>
                <a>
                <span>เวลาหยุด</span>
                <i className="pc-ic_sort-desc"></i>
                </a>
              </td>
              <td style={{width:"20%"}}>
                <a>
                <span>พลังงาน (กิโลวัตต์) </span>
                <i className="pc-ic_sort-desc"></i>
                </a>
              </td>
              <td style={{width:"20%"}}>
                <a>
                <span>ผู้ใช้งาน</span>
                <i className="pc-ic_sort-desc"></i>
                </a>
              </td>
              <td style={{width:"15%"}}>
                <a>
                <span>หยุดชาร์จโดย</span>
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