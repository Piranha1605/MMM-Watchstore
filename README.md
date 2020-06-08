# Module: MMM-Watchstore

Module for changing the time of the css. 
It is possible to set one css for the day and one for the night.

## Installation

* Clone this repo into `~/MagicMirror/modules` directory.
* Configure your `~/MagicMirror/config/config.js`:

* Entry in the config:


		{
			module: "MMM-Watchstore",
			position: "top_center",
				config: {
					url: "modules/MMM-Watchstore/clocks/clock1/index.html",     // To change the clock, change the entry clock1 / clock2 ........:
					width: "500px",
					height: "120px",
			}
		},
		
		
* Here are the basic settings with the height and width of the iFrame:

		{
			module: "MMM-Watchstore",
			position: "top_center",
				config: {
					url: "modules/MMM-Watchstore/clocks/clock1/index.html",
					width: "500px",
					height: "120px",
			}
		},
		{
			module: "MMM-Watchstore",
			position: "top_center",
				config: {
					url: "modules/MMM-Watchstore/clocks/clock2/index.html",
					width: "500px",
					height: "500px",
			}
		},
		{
			module: "MMM-Watchstore",
			position: "top_right",
				config: {
					url: "modules/MMM-Watchstore/clocks/clock3/index.html",
					width: "500px",
					height: "150px",
			}
		},
		{
			module: "MMM-Watchstore",
			position: "top_left",
				config: {
					url: "modules/MMM-Watchstore/clocks/clock4/index.html",
					width: "500px",
					height: "170px",
			}
		},
		{
			module: "MMM-Watchstore",
			position: "top_left",
				config: {
					url: "modules/MMM-Watchstore/clocks/clock5/index.html",
					width: "500px",
					height: "350px",
			}
		},
		{
			module: "MMM-Watchstore",
			position: "top_left",
				config: {
					url: "modules/MMM-Watchstore/clocks/clock6/index.html",
					width: "500px",
					height: "300px",
			}
		},
		{
			module: "MMM-Watchstore",
			position: "top_right",
				config: {
					url: "modules/MMM-Watchstore/clocks/clock7/index.html",
					width: "500px",
					height: "300px",
			}
		},
		
