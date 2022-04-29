let a
    let time
    setInterval(() => {
      a = new Date();
      time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
      document.getElementById('sideNote').innerHTML = time;
    }, 1000)