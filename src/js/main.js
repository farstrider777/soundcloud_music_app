import $ from 'jquery';

import { info, getData, print} from './soundcloud'


$("h1").after('<audio controls="controls" src=""></audio>');

var info2;

getData("adele").then(print)


console.log(info);
