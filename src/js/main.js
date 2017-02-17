import $ from 'jquery';
import { getData } from './soundcloud';
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

  function print(data){
      console.log(data);
      for(var count = 0; count < data.length; count++){
        console.log(data[count].artwork_url)
        console.log(data[count].title)
        console.log(data[count].user.username)
        buildSearchResultBox(data[count].artwork_url, data[count].user.username, data[count].title)
      }
    }


function click2(){
  console.log($("input").val());
  getData($("input").val()).then(print);
}
