const txt1 = document.getElementById("multiliner");
const btn1 = document.getElementById("submit");

function fun1(event){
// txt1.value = "asdasdasdasd";
let arr = txt1.value.split("\n")
let arr2 = arr[2];
let arr5 = arr[5];
let arr8 = arr[8];
let arr11 = arr[11];
let time2 = arr2.split(/:| /);
let time5 = arr5.split(/:| /);
let time8 = arr8.split(/:| /);
let time11 = arr11.split(/:| /);
let time_final = [time2,time5, time8, time11];
for (var i = 0; i < time_final.length; i++) {
    if (time_final[i][3]=="PM" && time_final[i][0]<12) {
    time_final[i][0]=parseInt(time_final[i][0])+12;
    }else{
    time_final[i][0]=parseInt(time_final[i][0]);
    }    
    time_final[i][1]=parseInt(time_final[i][1])
    time_final[i][2]=parseInt(time_final[i][2])
    // console.log(time_final[i]);
}
for (var i = 0; i < time_final.length; i++) {
    time_final[i][0] = ((time_final[i][0]*60)+time_final[i][1])*60+time_final[i][2];
    // console.log(time_final[i]);
}
let res = time_final[0][0]-time_final[3][0]-(time_final[1][0]-time_final[2][0]);
let final_second = Math.round(((res/60)-Math.floor(res/60))*60);
let final_minute = Math.round(((Math.floor(res/60)/60)-Math.floor(Math.floor(res/60)/60))*60);
let final_hour = Math.round(Math.floor(Math.floor(res/60)/60));

let final_minute_percent = ((final_minute*60)+final_second)/3600;
final_minute_percent=Math.round((final_minute_percent+final_hour) * 100) / 100;
txt1.value = final_hour+":"+final_minute+":"+final_second+"\n"+final_minute_percent;
}
try {
btn1.addEventListener('click',fun1);
}catch(err) {
txt1.value = "ERROR";
}

