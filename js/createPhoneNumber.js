function createPhoneNumber(numbers){
var phone = "(";

    for (var i = 0; i < numbers.length; i++) {
      if (i == 3) {
        phone += ") "
        phone += numbers[i];
      } else if (i == 6) {
        phone += "-";
        phone += numbers[i];
      } else {
        phone += numbers[i];
      }
      console.log(phone);
    }




return phone;
}




createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// (123) 456-7890
