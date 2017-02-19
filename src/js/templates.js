/* eslint-disable */

import $ from 'jquery';

function buildSearchResultBox(artistPictureUrl, songTitle, artistName, count){

  if(artistPictureUrl === null){
    artistPictureUrl = "http://placekitten.com/130/130"
  }


  $(".search-container").append(`
    <div class="search-results-container">
      <img id="select-${count}"src="${artistPictureUrl}"></img>
      <div class="song-title">${songTitle}</div>
      <div class="artist-name">${artistName}</div>
    </div>
    `);
  }

  //${if (artistPictureUrl = null){console.log("yes")}}

  export { buildSearchResultBox };
