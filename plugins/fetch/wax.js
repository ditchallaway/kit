fetch(
    "https://opensheet.elk.sh/1vkEHHOS4LG7K8jQpYBxA2sJJYfuP07nuku0tvdh-B10/1"
  )
    .then((res) => res.json())
  
    .then((data) => {
        let output = ' ';
      data.forEach((row) => {
  
          output += `
          <tr class="border-bottom border-highlight">
          <td class="p-1 ps-3 font-700 color-theme">${row.serviceName}</td>
          <td class="p-1 color-highlight">${row.serviceNote}</td>
          <td class="p-1 color-theme">${row.servicePrice}</td>
          </tr>
          `;
      });
      const freeBeer = output.replace(/Free/gi, '<span class="badge bg-highlight font-14">Free</span>')
          document.getElementById('wax').innerHTML = freeBeer;
   
  });
