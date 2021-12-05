// JavaScript Document

import { Viewer } from 'photo-sphere-viewer';
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
var app = {
	
	    "comments": null,
		"load": function() {
		   fetch("comments.json").then((response) => {
			   return response.json();
		    }).then((json) => {
			   app.comments = json;
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
window.addEventListener("load", app.loadNodes);
var virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);
virtualTour.setNodes(nodes),