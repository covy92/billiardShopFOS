

function 조회(){
    const 조회기준 = document.querySelector(".매출")
    if(조회기준.innerHTML ==='년도별'){
        let 년도별조회= document.createElement('select')
        년도별조회.setAttribute('class','년도별')
        조회기준.appendChild(년도별조회)
        for (let year = 2018; year <= 2022; year++){
            const 년도 = document.querySelector(".년도별")
            const 년도옵션=document.createElement('option')
            년도옵션.setAttribute('value',year)
            년도옵션.innerHTML=year
            년도.appendChild(년도옵션)
        }
    }else if(조회기준.innerHTML ==='월별'){
        let 월별조회= document.createElement('select')
        월별조회.setAttribute('class','월별')
        조회기준.appendChild(월별조회)
        for (let month = 1; month <= 12; month++){
            const 당월 = document.querySelector(".월별")
            const 월별옵션=document.createElement('option')
            월별옵션.setAttribute('value',month)
            월별옵션.innerHTML=month
            당월.appendChild(월별옵션)
        }

    }else if(조회기준.innerHTML ==='일별'){
        let 일별조회= document.createElement('select')
        일별조회.setAttribute('class','일별')
        조회기준.appendChild(일별조회)
        for (let day = 1; day <= 31; day++){
            const 일별 = document.querySelector(".일별")
            const 일별옵션=document.createElement('option')
            일별옵션.setAttribute('value',day)
            일별옵션.innerHTML=day
            일별.appendChild(일별옵션)
        }


}
}