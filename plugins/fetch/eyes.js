
fetch(
    "https://opensheet.elk.sh/1vkEHHOS4LG7K8jQpYBxA2sJJYfuP07nuku0tvdh-B10/2"
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
  
          document.getElementById('eye1').innerHTML = output;
   
    
  });
  let freeBeer = output.replace(/Free/gi, '<span class="badge bg-highlight font-14">Free</span>')
  fetch(
    "https://opensheet.elk.sh/1vkEHHOS4LG7K8jQpYBxA2sJJYfuP07nuku0tvdh-B10/3"
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
      let freeBeer = output.replace(/Free/gi, '<span class="badge bg-highlight font-14">Free</span>')
          document.getElementById('eye2').innerHTML = freeBeer;
   
    
  });