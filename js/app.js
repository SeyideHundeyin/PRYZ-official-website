
// circulating supply

function getCirculatingSupply(){

    fetch('https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=0x6130aaaffdd8f39dc8ec00c6af0681df0cbb2eef&apikey=MD3WGTFIRQ3EYE4HRMZDVMSW9Z3KM6XJVM')
    .then(function(res){
      const response = res.json();
      response.then((res) => {
          document.getElementById('roadmaps').innerHTML = res.result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").slice(0, 14);
                   
      })
    })
}

document.getElementById('roadmaps').innerHTML = getCirculatingSupply();