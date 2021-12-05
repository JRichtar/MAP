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
	    "comments": null,
		"load": function() {
		   fetch("rooms.json").then((response) => {
			   return response.json();
		    }).then((json) => {
			   app.rooms = json;
		    }
		   nodes : null
		  "loadNodes": function() {
		   fetch("nodes.json").then((response) => {
			   return response.json();
		    }).then((json) => {
			   app.nodes = json;
		    }

}
window.addEventListener("load", app.load);
window.addEventListener("loadNodes", app.load);
var virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);
virtualTour.setNodes(nodes)		    
