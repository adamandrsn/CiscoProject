function CISCO() {
  alert('anda akan menuju link berikut -> https://www.cisco.com/c/en_id/index.html');
  window.location.href='https://www.cisco.com/c/en_id/index.html';
}

function NETACAD() {
  alert('anda akan menuju link berikut -> https://www.netacad.com/');
  window.location.href='https://www.netacad.com/';
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }