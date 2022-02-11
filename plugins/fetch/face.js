fetch(
  "https://opensheet.elk.sh/1vkEHHOS4LG7K8jQpYBxA2sJJYfuP07nuku0tvdh-B10/4"
)
  .then((res) => res.json())

  .then((data) => {
      let output = ' ';
    data.forEach((row) => {

        output += `
        <div class="card card-style mx-0 my-2 col-12">
        <div class="m-4">
            <p class="color-highlight mb-n1 font-600">Facials
            </p>
            <h1>${row.serviceName}</h1>
                <i class="fa fa-user-clock color-highlight icon-10 text-center ms-2 me-2"> ${row.serviceNote}</i>
                <span class="mt-3 badge border color-green-dark border-green-dark">ALL SKIN TYPES</span>
            <p class="description-left">
                ${row.serviceD}
            </p>
            <a data-bs-toggle="collapse" class="no-effect btn-sm bg-highlight" href="#express">
                <span class="text-end">Details</span>
                <i class="fa fa-angle-down"></i>
            </a>  
        </div>
        <div id="express" class="bg-highlight pattern-horizontal-stripes-md pt-2 collapse">
            <div class="card card-style pl-5 pt-3">
                <ul class="">
                            <li><h5 class="mt-2"><i class="fa fa-check color-green-dark pr-2"></i> Double Cleanse.</h5></li>
                            <li><h5 class="mt-2"><i class="fa fa-check color-green-dark pr-2"></i> Personel Skin Evaluation.</h5></li>
                            <li><h5 class="mt-2"><i class="fa fa-check color-green-dark pr-2"></i> Custom Enzyme/Acid Exfoliation.</h5></li>
                            <li><h5 class="mt-2"><i class="fa fa-check color-green-dark pr-2"></i> Custom Enzyme/Acid Exfoliation Featuring the Skin Script Resurfacing Collection.</h5></li>
                            <li><h5 class="mt-2"><i class="fa fa-check color-green-dark pr-2"></i> Includes skin appropriate moisturizer and sunscreen from SkinScript Botanical/Phameceudical fusion line and Luminewal Hylauronic Acid serum.</h5></li>
                          </ul>
                        <span class="badge price-badge-facial bg-highlight col-2 ms-3 font-22">${row.servicePrice}</span>
                    <picture class="p-3">
                    <source srcset="images/pictures/skin-script-skin-care-sm.png" media="(max-width: 700px)"> <img src="images/pictures/skin-script-skin-care.png" class="skin-script col-6 ms-3" alt="Skin Script's pareben free skin care products.">
            </picture>
            <div class="card-bottom text-end">
                <a href="https://square.site/book/B7XJ5944N8D2T/wax-and-skin-care-sandpoint-id"><div class="mb-3 me-3 bg-highlight btn">
                    Book Now
                    
                </div></a>
            </div>
        </div>
        </div>
    </div>
        `;
    });

        document.getElementById('face').innerHTML = output;
 
  
});
