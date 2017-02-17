import $ from 'jquery';

import { token } from './token';

var info = []

function getData (search) {
   return $.ajax({
      url: `https://api.soundcloud.com/tracks?client_id=${token}`,
      dataType: 'json',
      data: {
        q: search
      }
  });
}


//function test(){
//  console.log("is it in there?");
//}



function print(data, fun, wun){
    console.log(data)
    console.log(fun)
    console.log(wun)
  }

export { info, getData, print};
