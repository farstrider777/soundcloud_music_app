import $ from 'jquery';
import { info, getData, print } from './soundcloud';
import { buildSearchResultBox } from "./templates";


$("h1").after('<audio controls="controls" src=""></audio>');

$("audio").after(`
  <div>
    <input type="text" placeholder="Search for Artist"></input>
    <div class="search">Search</div>
  </div>
  <div class="searchContainer"></div>
  `);

  $(".search").click(click2)


function click2(){
  console.log($("input").val());
  getData($("input").val()).then(print);
}
