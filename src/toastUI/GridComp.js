import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import React,{useEffect, useRef, useState} from 'react';

function GridComp (props) {
    /**
    * props러 넘어오는 데이터를 그리드 데이터로 사용
    * gridData : 그리드에 보여질 데이터 항목, json타입
    * columnData : 컬럼헤더 데이터 및 컬럼옵션설정
    * gridStyle : grid style css
    * buttonOption : 행추가,삭제 버튼 status 관리 
    * ㄴ add: 추가버튼 delete 삭제버튼 상태
    * ㄴ true 보임 fasle 안보임
    * 
    */
    let {gridData, columnData, gridStyle ,buttonOption} =props; 

    const gridRef = useRef();
    const [selectedRowCnt, setSelectedRowCnt] = useState(20);


      /**
       * data    : gridData
       * columns : 그리드 헤더및 셀옵션 설정
       */
      const [data, setData] = useState(gridData);
      const [columns ,setColumns] = useState(columnData);
      
      /**
       *  handleAppendRow
       *  row 추가
       */
      const handleAppendRow =()=> {
        const rowCount = gridRef.current.getInstance().getRowCount();
        const rowData = { id: rowCount + 1, text: "Chart" };
        const options = { focus: true };
        gridRef.current.getInstance().appendRow(rowData, options);
      }
      /**
       *  handleDeleteRow
       *  row 삭제
       */
      const handleDeleteRow =()=> {
        const selectedRows = gridRef.current.getInstance().getCheckedRows();
        console.log(selectedRows);
        for (let i = 0; i < selectedRows.length; i++) {
          const selectedRow = selectedRows[i];
          gridRef.current.getInstance().removeRow(selectedRow.rowKey);
        }
      }
      /**
       *  Gridcomp
       *  Grid Component
       *  필수 props : ref,data,columns
       *  선택 props : rowHeight,rowHeaders,pageOptions 외 다수
       * 
       * pageOptions > 한페이지에 몇로우의 데이터를 표기할 지 설정하는 옵션
       * perPage: selectedRows 로 한화면에 표기될 데이터가 반영되어 화면에 표기 됨
       * 
       * rowHeaders > 그리드에 체크박스, rownum등을 추가하는 옵션
       *     ㄴtype: checkbox, radio, rowNum
       */
      const Gridcomp =() =>{
        return <Grid
                    ref ={gridRef}
                    data={data}
                    columns={columns} 
                    rowHeight={25}
                    rowHeaders={[{ type: "checkbox" }, { type: "rowNum" }]}
                    pageOptions= {
                      {useClient:true,perPage: selectedRowCnt}
                    }/>
      }
      const SelectComp =()=>{
        const item =[20,50,100,200,500,1000];
        return <>
           <select onChange={(e)=>setSelectedRowCnt(e.target.value)} 
                   defaultValue={selectedRowCnt}>
                     {/* <option value={20}>20개</option>
                     <option value={50}> 50 개</option>
                     <option value={100}>100개</option>
                     <option value={200}>200개</option>
                     <option value={500}>500개</option>
                     <option value={1000}>1000개</option> */}
              {item.map(itm =><option value={itm}>{itm}개</option>)}
            </select>
        </>
    }
    return <>
            <div className="gridArea" style={gridStyle}>
              <div className="buttonArea" >
                  {buttonOption.add    && <button onClick={handleAppendRow}>행추가</button>}
                  {buttonOption.delete && <button onClick={handleDeleteRow}>행삭제</button>}
              </div>
              <Gridcomp  />
              <SelectComp />
            </div>
          </>

}

export default GridComp;