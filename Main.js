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
					positionMode: PhotoSphereViewer.VirtualTourPlugin.MODE_GPS,
					renderMode: PhotoSphereViewer.VirtualTourPlugin.MODE_3D,
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
			app.nodes = json;
			app.tour.setNodes(app.nodes);
		});
	}
}
window.addEventListener("load", app.init);