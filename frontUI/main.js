

function 다이추가(){

    let 타겟=document.querySelector(".프레임")
    let 다이= document.createElement('div');
    let 다이수찾기=document.querySelectorAll(".다이")
    let 다이수 = 다이수찾기.length+1
    다이.setAttribute('class','다이')
    let 타이머 = document.createElement('button')
    타이머.setAttribute('id','타이머')
    타이머.onclick=function(){타이머()}
    다이.innerHTML = 다이수+"번 다이"
    다이.appendChild(타이머)
    
    타겟.append(다이);
}

function 다이삭제(){
    let 타겟=document.querySelector(".프레임")
    let 타겟다이=document.querySelectorAll(".다이")
    let 마지막 = 타겟다이.length-1
    타겟.removeChild(타겟다이[마지막]);
}

let time = 0;

function 타이머(){
    let 타이머상태 = 'off'

    if (타이머상태==='off') {
        // 온으로 바뀌고 켜지게 만들기
        타이머상태 = 'on'
        let 다이=document.querySelector(".다이")
        let 타이머박스= document.createElement('div');
        타이머박스.setAttribute('class','타이머박스')
        다이.appendChild(타이머박스)
        시간표시=setInterval(업데이트,1000)
        
    } else if (타이머상태 ==='on'){
        타이머상태 = 'off'
        clearInterval(시간표시)
    }
} 


function 업데이트(){
    const hours = Math.floor(time/3600);
    const checkMinute = Math.floor(time/60);
    const seconds = time%60;
    const minute = checkMinute%60;

    let 타이머박스=document.querySelector(".타이머박스")
    타이머박스.innerHTML = `${hours}:${minute}:${seconds}`
}


function 결제하기(){
    let 요금방식 = 
    let 타이머박스=document.querySelector(".타이머박스")
    let 시간=타이머박스.time
    if (요금방식 ='카드할인')
    
    alert()
    타이머박스.innerHTML = `${hours}:${minute}:${seconds}`
}
