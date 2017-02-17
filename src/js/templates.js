import $ from 'jquery';

function buildSearchResultBox(artistPictureUrl, songTitle, artistName){
  $(".searchContainer").append(`
    <img src="${artistPictureUrl}"><img>
    <div class="s-title">${songTitle}</div>
    <div class="a-name">${artistName}</div>
    `);
  }

  export { buildSearchResultBox };
