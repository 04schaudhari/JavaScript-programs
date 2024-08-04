function  stringHandsOn()
{
  console.log("===============Step 1=====================");

    var strn= "  Hey  you are doing  good,keep it up        ";
    console.log(`Given string is :${strn}`);
    console.log("==================Step 2===================");

    var strnLength = strn.length;
    console.log("Before  trim string length is: ", strnLength);
    console.log("======================Step 3=================");

    var strnAfterTrim =strn.trim();
    var strnAfterTrimLength= strnAfterTrim.length;
    console.log("After  trim string length is: ", strnAfterTrimLength);
    console.log(strnAfterTrim);
    console.log("=====================Step 4===================");

    console.log("Total number of spaces are:",strnLength- strnAfterTrimLength);
    console.log("====================Step 5=======================");

   var charAt0 =strnAfterTrim.charAt(0);
   var charAt =strnAfterTrim.charAt(strnAfterTrimLength-1);
    console.log(`The first and last charter is: ${charAt0}${charAt}`); 
    console.log("=======================Step 6====================");

   var resultsplit =strnAfterTrim.split(" ");
   var result =resultsplit.length;
  console.log(`The total words available in string are: ${result}`);
  console.log("=========================Step 7================");

  var result =strnAfterTrim.indexOf("good");
  console.log(`Index of  charater good is: ${result}`);
  console.log("=========================Step 8==================");

 var substringresult= strnAfterTrim.substring(22);
 console.log( `Substracting staring from index 22: ${substringresult}`);
 console.log("=========================Step 9====================");

 var resultend=strnAfterTrim.endsWith("up");
console.log(` Is string ends with up: ${resultend}`);
console.log("===========================Step 10====================");

var resultstart=strnAfterTrim.startsWith("Hey");
console.log(`Is string start with up: ${resultstart}`);


}
   stringHandsOn();