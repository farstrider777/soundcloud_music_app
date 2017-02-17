import $ from 'jquery';

import { token } from './token';

var info = []

function getData (search) {
   return $.ajax({
      url: `https://api.soundcloud.com/tracks?client_id=${token}`,
      dataType: 'json',
      data: {
        q: search
      }
  });
}

export { getData};
