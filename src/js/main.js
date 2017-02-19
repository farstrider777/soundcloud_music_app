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
  <div class="search-container"></div>
`);

$(".search").click(click1)

function print(data){
  console.log(data);
  for(var count = 0; count < data.length; count++){
    buildSearchResultBox(data[count].artwork_url, data[count].user.username, data[count].title, count)
    songPick.push(data[count].stream_url);
  }
  //writePlayer(songPick[0])
  for(var count = 0; count < songPick.length; count++){
    $(`#select-${count}`).click(test)
    console.log(songPick[count])
  }
}

function test(event){
  var split = event.target.id.split("-");
  writePlayer(songPick[split[1]])
}

function click1(){
  $(".search-container").empty();
  songPick = [];
  console.log($("input").val());
  getData($("input").val()).then(print);
}
