var a = "Silent";
var b = "Listen";

var str1 = a.toUpperCase();
var str2 = b.toUpperCase();

function isAnagram(a, b) {
  
  var arr1 = a.split('');
  var arr2 = b.split('');
  
  var m = arr1.length;
  var n = arr2.length;
  
  if(m!=n) {
    return false;
  }

  arr1.sort();
  arr2.sort();
  
  for (var i=0; i<n; i++) {
    if(arr1[i]==arr2[i]) {
      return true;
    } else{
      return false;
    }
  }
}


if(isAnagram(str1, str2)){
  console.log("Are Anagram");
} else {
  console.log("Not Anagram")
}