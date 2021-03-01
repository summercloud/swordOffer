var p = /(width="[1-9]+)(\")/g;
var text = 'width="123", kldsf, width="666px", width="999"';
let aa = text.replace(p, '$1px"');
console.log(aa);
