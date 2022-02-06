

fetch(
  "https://opensheet.elk.sh/1vkEHHOS4LG7K8jQpYBxA2sJJYfuP07nuku0tvdh-B10/1"
)
  .then((res) => res.json())

  .then((data) => {
      let output = ' ';
    data.forEach((row) => {

        output += `
        <tr class="border-bottom border-highlight">
        <td class="p-1 font-700 color-theme">${row.serviceName}</td>
        <td class="p-1 color-highlight">${row.serviceNote}</td>
        <td class="p-1 color-theme">${row.servicePrice}</td>
        </tr>
        `;
    });

        document.getElementById('menu').innerHTML = output;
 
  
});

// 3 fetch requests for 3 endpints
// and converting to JSON using the json() method
const fetchReq1 = fetch(
  `https://opensheet.elk.sh/1vkEHHOS4LG7K8jQpYBxA2sJJYfuP07nuku0tvdh-B10/1`
).then((res) => res.json());
const fetchReq2 = fetch(
  `https://opensheet.elk.sh/1vkEHHOS4LG7K8jQpYBxA2sJJYfuP07nuku0tvdh-B10/2`
).then((res) => res.json());
const fetchReq3 = fetch(
  `https://opensheet.elk.sh/1vkEHHOS4LG7K8jQpYBxA2sJJYfuP07nuku0tvdh-B10/3`
).then((res) => res.json());

// do fetch requests in parallel
// using the Promise.all() method
const output1 = Promise.all([fetchReq1]);
const output2 = Promise.all([fetchReq2]);
const output3 = Promise.all([fetchReq3]);


// attach then() handler to the output Promise


  let output = ' ';
  output1.forEach((row) => {

      output += `
      <tr class="border-bottom border-highlight">
      <td class="p-1 font-700 color-theme">${row.serviceName}</td>
      <td class="p-1 color-highlight">${row.serviceNote}</td>
      <td class="p-1 color-theme">${row.servicePrice}</td>
      </tr>
      `;
  });

      document.getElementById('wax').innerHTML = output;




  //   let wax = ' ';

//   data.forEach((row) => {

//     wax += `
//     <tr class="border-bottom border-highlight">
//     <td class="p-1 font-700 color-theme">${row.serviceName}</td>
//     <td class="p-1 color-highlight">${row.serviceNote}</td>
//     <td class="p-1 color-theme">${row.servicePrice}</td>
//     </tr>
//     `;
// });

// document.getElementById('wax').innerHTML = wax;

// })


