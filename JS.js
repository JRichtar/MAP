// JavaScript Document

import { Viewer } from 'photo-sphere-viewer';
var app = {
	const viewer = new Viewer({
             container: document.querySelector('#viewer'),
             panorama: 'path/to/panorama.jpg',
              plugins    : [
                        PhotoSphereViewer.MarkersPlugin,
                        [PhotoSphereViewer.VirtualTourPlugin, {
                        positionMode: PhotoSphereViewer.VirtualTourPlugin.MODE_GPS,
                        renderMode  : PhotoSphereViewer.VirtualTourPlugin.MODE_3D,
                        }],
             });
	    "rooms": null,
		"load": function() {
		   fetch("test.json").then((response) => {
			   return response.json();
		    }).then((json) => {
			   app.rooms = json;
		    })
}

window.addEventListener("load", app.load);