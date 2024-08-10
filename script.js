var hour=document.getElementById("hour")
var min=document.getElementById("min")
var sec=document.getElementById("sec")
var day=document.getElementById("day")
var month=document.getElementById("month")
var year=document.getElementById("year")

function currentdate(){
var date=new Date()

    hour.innerHTML=date.getHours()+":"
    min.innerHTML=date.getMinutes()
    sec.innerHTML=date.getSeconds()
    day.innerHTML=date.getDate()+"/"
    month.innerHTML=date.getMonth()+"/"
    year.innerHTML=date.getFullYear()


}


setInterval(currentdate,1000)
