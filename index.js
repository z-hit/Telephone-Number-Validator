function telephoneCheck(str) {
var regex1 = /^\d{10}$/;
var regex2 = /^1?[ ]?\d{3}[ |-]\d{3}[ |-]\d{4}/;
var regex3 = /^1?[ ]?[(]\d{3}[)][ |-]?\d{3}[ |-]\d{4}/;

 return regex1.test(str) || regex2.test(str) || regex3.test(str) ? true : false;

  console.log(result);
}

telephoneCheck("1(555)555-5555");
