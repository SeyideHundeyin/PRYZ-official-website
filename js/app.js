// fetch('https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&apikey=MD3WGTFIRQ3EYE4HRMZDVMSW9Z3KM6XJVM')
// .then(Response=>{
//   console.log(Response)
// })

  // fetch('https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=0x6130aaaffdd8f39dc8ec00c6af0681df0cbb2eef&apikey=MD3WGTFIRQ3EYE4HRMZDVMSW9Z3KM6XJVM')
  // .then(function(res){
  //   return res.text();
  // })
  // .then(function(data){
  //   console.log(data.slice(39, 68).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  // });

  // fetch('https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=0x6130aaaffdd8f39dc8ec00c6af0681df0cbb2eef&apikey=MD3WGTFIRQ3EYE4HRMZDVMSW9Z3KM6XJVM')
  // .then((res) => res.text())
  // .then((data) => {
  //   document.getElementById('roadmap').innerHTML = `${data.status}`;
  // })

  // fetch('https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=0x6130aaaffdd8f39dc8ec00c6af0681df0cbb2eef&apikey=MD3WGTFIRQ3EYE4HRMZDVMSW9Z3KM6XJVM')
  // .then((res) => res)
  // .then((data) => {
  //   let output = '<p>max supply</p>';
  //   data.forEach(function(supply){
  //     output += `
  //     <ul>
  //     <li> Maxsupply: ${supply.result} </li>
  //     </ul>
  //     `;
  //   });
  //   document.getElementById('roadmap').innerHTML = output;
  // })



  // the fetch


// document.getElementById('roadmap').addEventListener('click', getText);

// function getText(){

//     fetch('https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=0x6130aaaffdd8f39dc8ec00c6af0681df0cbb2eef&apikey=MD3WGTFIRQ3EYE4HRMZDVMSW9Z3KM6XJVM')
//     .then(function(res){
//       const response = res.json();
//       response.then((res) => {
//           // console.log(res.result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
//           document.getElementById('roadmap').innerHTML = res.result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//       })
//     })
// }