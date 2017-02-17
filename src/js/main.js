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
    buildSearchResultBox(data[count].artwork_url, data[count].user.username, data[count].title)
    songPick.push(data[count].stream_url);
    console.log(songPick);
  }

  var elementList = document.querySelectorAll("img");
  writePlayer(songPick[0])
}

function click1(){
  console.log($("input").val());
  getData($("input").val()).then(print);
}
