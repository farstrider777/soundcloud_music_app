import $ from 'jquery';

function buildSearchResultBox(artistPictureUrl, songTitle, artistName, count){
  $(".searchContainer").append(`
    <div class="search-results-container">
      <img id="select-${count}" src="${artistPictureUrl}"></img>
      <div class="song-title">${songTitle}</div>
      <div class="artist-name">${artistName}</div>
    </div>
    `);
  }

  export { buildSearchResultBox };
