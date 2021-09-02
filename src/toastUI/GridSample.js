import React from 'react';
import GridComp from "./GridComp";

function GridSample (){

    /**
     * 그리드에 표기될 임의 테스트 데이터 
     */
    const gridTestData =()=>{
      let result=[];
      for(let i=0;i<100;i++){
        result.push({id:i+1,name:`testdata ${i+1}`,name2:`name2`,name3:`name3`})
      }
      return result;
    }
     /**
     * 그리드 컬럼 정의
     * -name:데이터에서 가져올 항목
     * -header: 화면에서 보여줄 컬럼타이틀
     * -sortable: true/false 정렬사용유무
     * -sortingType: desc/asc 정렬타입
     * -editor: 셀더블클릭하여 수정할 수 있는 옵션
     *     ㄴ type : checkbox, text , radio 등
     *     ㄴ options : listItems  로 항목 추가 가능
     * -resizable : true/false 컬럼 크기조절 옵션
     * 
     * columnOptions (전체컬럼에 적용되는 옵션)
     *  frozenCount :셀 고정개수
     *  minWidth: 셀쇠초넓이
     *  resizable: true/false 컬럼 크기조절 옵션
     * 
     * 그리드에 표기될 컬럼정의
     */
    const column = [
        {name: 'id'
        , header: 'ID'
        , sortingType: 'desc'
        , sortable: true
        , editor: {
          type: 'checkbox',
          options: {
            listItems: [
              { text: 'Pop', value: '1' },
              { text: 'Rock', value: '2' },
              { text: 'R&B', value: '3' },
              { text: 'Electronic', value: '4' },
              { text: 'etc.', value: '5' }
            ]}}},
            {name: 'name'
            , header: 'Name'
            , editor: 'text'
            , sortingType: 'desc'
            , sortable: true},
            {name: 'name3'
            , header: 'Name3'
            , editor: 'text'
            , sortingType: 'desc'
            , sortable: true},
            {name: 'name2'
            , header: 'Name2'
            , editor: 'text'
            , sortingType: 'desc'
            , sortable: true
          }
        ];
        const gridStyle ={width:"70%", height:"50%"}
    return <GridComp 
                    gridData={gridTestData}
                    columnData={column}
                    gridStyle={gridStyle}
                    buttonOption={{add:true,delete:true}}
            />
}

export default GridSample;