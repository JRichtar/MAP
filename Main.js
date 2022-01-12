var app = {
	nodes: null,
	viewer: null,
	tour: null,

	init: function() {
		app.viewer = new PhotoSphereViewer.Viewer({
			container: document.querySelector('#viewer'),
			panorama: '001.rec.jpg',
			plugins: [
				PhotoSphereViewer.MarkersPlugin,
				[PhotoSphereViewer.VirtualTourPlugin, {
					positionMode: PhotoSphereViewer.VirtualTourPlugin.MODE_MANUAL,
					renderMode: PhotoSphereViewer.VirtualTourPlugin.MODE_MARKERS,
				}],
			],
		});

		app.tour = app.viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);
		app.loadNodes();
	},
	loadNodes: function() {
        fetch("nodes.json").then((response) => {
            return response.json();
        }).then((json) => {
            for (let i = 0; i<json.length; i++) {
                for (let j = 0; j<json[i].links.length; j++) {
                    json[i].links[j].latitude = json[i].links[j].latitude*(Math.PI/180);
                    json[i].links[j].longitude = json[i].links[j].longitude*(Math.PI/180);
                }
                for (let j = 0; j<json[i].markers.length; j++) {
                    json[i].markers[j].latitude = json[i].markers[j].latitude*(Math.PI/180);
                    json[i].markers[j].longitude = json[i].markers[j].longitude*(Math.PI/180);
                }
            }
            app.nodes = json;
            app.tour.setNodes(app.nodes);
        });
    }
}
window.addEventListener("load", app.init);