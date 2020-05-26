let t;
let a;
let d;
time = setInterval(timer=()=>{
    t = new Date();
    document.getElementById('h2').innerText = t;
    //"Time:- "+t.getHours() +" : "+t.getMinutes() +" : "+t.setHours();
},1000);

