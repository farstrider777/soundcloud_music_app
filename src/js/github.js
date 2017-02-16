import $ from 'jquery';

import { token } from './token';

var info;

function getData (callback) {
    info = $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: callback
    });
}

function test(){
  console.log("is it in there?");
}

getData (test);

export { info };
