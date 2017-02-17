/* eslint-disable */

import $ from "jquery";
import { getData } from "./soundcloud";
import { buildSearchResultBox } from "./templates";
import { token } from "./token"

var songPick = [];


function writePlayer(song){
  $("section").html(`<audio controls="controls" src="${song}?client_id=${token}"></audio>`);
}


$("section").after(`
  <div>
    <input type="text" placeholder="Search for Artist"></input>
    <div class="search">Search</div>
  </div>
  <div class="searchContainer"></div>
`);

$(".search").click(click1)

function print(data){
  console.log(data);
  for(var count = 0; count < data.length; count++){
    buildSearchResultBox(data[count].artwork_url, data[count].user.username, data[count].title, count)
    songPick.push(data[count].stream_url);
  }
  writePlayer(songPick[0])
  for(var count = 0; count < songPick.length; count++){
    $(`#select-${count}`).click(test)
    console.log(songPick[count])
  }
}

function test(event){
  //var silly = event.clientX -  55 185    210 340   365 495
  //writePlayer(songPick[1]);

  console.log(event.target.id)
  var split = event.target.id.split("-");
  writePlayer(songPick[split[1]])
  //writePlayer(songPick[Math.floor((event.clientX - 55)/130)])
  //console.log(event.clientX)
}

/*
hhh
var whichImage;

function setUpQS(){
    whichImage = document.querySelectorAll("img");
    for(var count = 0; count < whichImage.length; count++){
      $(whichImage[count]).click(test(count));
      console.log(whichImage[count]);
    }
}

function test(whichSong){
  writePlayer(songPick[whichSong])
}

*/

function click1(){
  console.log($("input").val());
  getData($("input").val()).then(print);
}
