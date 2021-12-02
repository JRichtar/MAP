// JavaScript Document

import { Viewer } from 'photo-sphere-viewer';
var app = {
	const viewer = new Viewer({
             container: document.querySelector('#viewer'),
             panorama: 'path/to/panorama.jpg',
             });
	fetch("test.json").then((response) => {
			return response.json();
		}).then((json) => {
			app.rooms = json;
		})
}
const viewers = JSON.parse(text);