
function 결제하기(){
    const 단위요금=1500
    let 이용시간=document.querySelector(".타이머박스").innerHTML
    let 기본요금=요금계산(이용시간,단위요금)
    let 요금방식 = ['일반요금','경로우대','현금할인']  //팝업띄워서 요금방식 확인후 결제 하개 하는 기능 만들기
    let 체크박스 = 
}
 
//후에 반올림 요금 계산 혹은 올림 요금, 내림 요금 기능 추가하기

function 요금계산 (이용시간,단위요금){
    let 요금 = 이용시간.split(':')
    return((요금[0]*6*단위요금)+((요금[1]%10)*단위요금))
}
