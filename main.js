let a
    let time
    setInterval(() => {
      a = new Date();
      time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
      document.getElementById('sideNote').innerHTML = time;
    }, 1000)

    document.getElementById('aboutLink').addEventListener('click', showAbout)
    
    let aboutSection = document.querySelector('.tvAbout')
    

    function showAbout(){
        
        aboutSection.classList.toggle('hidden')
    }