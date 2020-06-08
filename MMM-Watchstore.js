Module.register("MMM-Watchstore", {

		defaults: {
					url: "modules/MMM-Watchstore/clocks/clock7/index.html",
					width: "500px",
					height: "300px",
		},

	start: function() {
        Log.info("Starting module: " + this.name);
	},

	getStyles: function() {
		return ['MMM-Watchstore.css'];
	},
	
	getScripts: function() {
		return [];
	},
	
	getDom: function() {
		var iframe = document.createElement("iframe");
		iframe.style = "border:0";
		iframe.name = "iframe";
		iframe.className = this.config.cssClass;
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		iframe.src =  this.config.url;
		return iframe;
	}
});