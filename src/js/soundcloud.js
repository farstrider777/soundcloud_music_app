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



function print(data){
    console.log(data);
    for(var count = 0; count < data.length; count++){
      console.log(data[count].artwork_url)
    }
  }

export { info, getData, print};
