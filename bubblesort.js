var arr = [5, 11, 6, 9, 22, 15];

for (var i=0; i<arr.length; i++) {
	for(var j=i; j<arr.length; j++) {
		if(arr[i]>arr[j]) {
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
}

console.log(arr);

