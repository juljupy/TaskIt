Ext.define("TaskIt.controller.Position",{
	extend : 'Ext.app.Controller',
	
	config : {
		refs : {
			map     : 'positionmap'
		},
		control : {
			map : {
				maprender : 'showMap'
			}
		}
	},
	
	showMap: function(cmp,map) {
		var lat, lon;
    	navigator.geolocation.getCurrentPosition(function(position){
			lat = position.coords.latitude;
			lon = position.coords.longitude;
			var position = new google.maps.LatLng(lat, lon),  //Sencha HQ

	        infowindow = new google.maps.InfoWindow({
	            content: 'SafeTech'
	        }),

	        //Tracking Marker Image
	        image = new google.maps.MarkerImage(
	            'lib/touch/resources/images/point.png',
	            new google.maps.Size(32, 31),
	            new google.maps.Point(0, 0),
	            new google.maps.Point(16, 31)
	        ),

	        shadow = new google.maps.MarkerImage(
	            'lib/touch/resources/images/shadow.png',
	            new google.maps.Size(64, 52),
	            new google.maps.Point(0, 0),
	            new google.maps.Point(-5, 42)
	        );
	    	var marker = new google.maps.Marker({
	            position: position,
	            title: 'Mi Posicion actual',
	            shadow: shadow,
	            icon: image,
	            map : map
	        });
	    	google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
	    	setTimeout(function() {
                map.setCenter(position);
            }, 1000);
	    	//map.setCenter(position);
		}, function(error){
			alert('code: '+ error.code+ '\n' + 'message: '+ error.message + '\n');
		});
    	
        //map.panTo(position);
        //marker.setMap(cmp.getMap());
    }
});