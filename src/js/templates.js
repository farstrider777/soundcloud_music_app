import $ from 'jquery';

function buildSearchResultBox(artistPictureUrl, songTitle, artistName){
  $(".searchContainer").append(`
    <div class="search-results-container">
      <img src="${artistPictureUrl}"></img>
      <div class="song-title">${songTitle}</div>
      <div class="artist-name">${artistName}</div>
    </div>
    `);
  }

  export { buildSearchResultBox };
