function mostFrequentItemCount(collection) {
  var max = 1;
  if (collection.length == 0) {return 0;}
  else if (collection.length == 1) {return 1;} else {

  for (var i = 0; i < collection.length; i++) {
    var item = collection[i];
    console.log("ITEM " + i + ": " + collection[i] + ", max = " + max);
    var temp = 1;
    for (var j = i+1; j < collection.length; j++) {

      console.log("j" + j + ". Thing = "+ collection[j] + ". temp = " + temp);

      if (collection[j] == collection[i]) {
        temp++;
        console.log("Thing = item, increasing temp. temp = " + temp);

        if (temp > max) {
          max = temp;
          console.log("temp > max, increasing max. max = " + max);
        // break;
        }
      } else { console.log("Not more frequent."); }
    }


  }

}
  return max;
}
// mostFrequentItemCount([3, -1, -1]);
mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]);
// mostFrequentItemCount([3]);
