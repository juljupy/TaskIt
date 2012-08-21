Ext.define("TaskIt.controller.Home",{
	extend : 'Ext.app.Controller',
	
	config : {
		refs    : {
			alarmBtn : 'homepanel toolbar button[action=alarm]',
			operaBtn : 'homepanel toolbar button[action=opera]',
			positBtn : 'homepanel toolbar button[action=geopos]'
		},
		control : {
			alarmBtn : {
				tap : 'setAlarm'
			},
			operaBtn : {
				tap : 'getOperator'
			},
			positBtn: {
				tap : 'getPosition'
			}
		}
	},
	
	setAlarm : function(){
		Ext.Msg.show({
			title   : 'Alarma',
			message : 'Indique el tiempo en segundos:',
			prompt  : {
			    xtype   : 'numberfield',
                minValue: 10
			},
			fn      : function(btn,num) {
				window.MyCls.showToast("Alarma!!!!",num);
			}
		});
	},
	
	getOperator : function(){
		alert('Mi Operador: '+window.MyCls.getTelephoneNumber()); //Ejecución del método getTelephoneNumber de objeto MyCls creado en Java
	},
	
	getPosition : function(){
		alert('Cargar Geoposition');
		navigator.geolocation.getCurrentPosition(function(position){
			alert('Latitude: '+ position.coords.latitude+'- Longitude: '+ position.coords.longitude+'- Altitude: '+ position.coords.altitude+'- Timestamp: '+ new Date(position.timestamp));
		}, function(error){
			alert('code: '+ error.code+ '\n' + 'message: '+ error.message + '\n');
		});
	}
	
});