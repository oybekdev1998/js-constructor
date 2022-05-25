require("./main.css");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $f91ffe41502983f9$exports = {};
$f91ffe41502983f9$exports = new URL("image1.beee7c73.png", "file:" + __filename).toString();


const $2851715840c7c23f$export$39a8f6bed6e94390 = [
    {
        type: 'title',
        value: 'Hello world from JS'
    },
    {
        type: 'text',
        value: 'here i have read something'
    },
    {
        type: 'columns',
        value: [
            '111111',
            '222222',
            '333333'
        ]
    },
    {
        type: 'image',
        value: (/*@__PURE__*/$parcel$interopDefault($f91ffe41502983f9$exports))
    }
];


function $865adbf0d517600a$export$fb184b623420d9be(block) {
    return `
         <div class="row">
           <div class="col-sm">
              <h1>${block.value}</h1>
           </div>
         </div>
      `;
}
function $865adbf0d517600a$export$6f093cfa640b7166(block) {
    return `
        <div class="row">
          <div class="col-sm">
            <p>${block.value}</p>
          </div>
        </div> 
      `;
}
function $865adbf0d517600a$export$53b3c91859018cd4(block) {
    const html = block.value.map((item)=>`<div class="col-sm">${item}</div>`
    );
    return `
          <div class="row">
            ${html.join('')}
          </div>
      `;
}
function $865adbf0d517600a$export$5c452ff88e35e47d(block) {
    return `
    <div class="row">
    <img src="${block.value}"/>
</divclas>
  `;
}



const $d3928351bb4a0237$var$$site = document.getElementById('site');
console.log($2851715840c7c23f$export$39a8f6bed6e94390);
$2851715840c7c23f$export$39a8f6bed6e94390.forEach((block)=>{
    let html = '';
    if (block.type === 'title') html = $865adbf0d517600a$export$fb184b623420d9be(block);
    else if (block.type === 'text') html = $865adbf0d517600a$export$6f093cfa640b7166(block);
    else if (block.type === 'columns') html = $865adbf0d517600a$export$53b3c91859018cd4(block);
    else if (block.type === 'image') html = $865adbf0d517600a$export$5c452ff88e35e47d(block);
    $d3928351bb4a0237$var$$site.insertAdjacentHTML('beforeend', html);
});


