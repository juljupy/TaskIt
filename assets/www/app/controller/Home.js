Ext.define("TaskIt.controller.Home",{
	extend : 'Ext.app.Controller',
	
	config : {
		refs    : {
			alarmBtn : 'homepanel toolbar button[action=alarm]',
			operaBtn : 'homepanel toolbar button[action=opera]'
		},
		control : {
			alarmBtn : {
				tap : 'setAlarm'
			},
			operaBtn : {
				tap : 'getOperator'
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
		alert('Mi Operador: '+window.MyCls.getTelephoneNumber()); //Ejecuci�n del m�todo getTelephoneNumber de objeto MyCls creado en Java
	}
	
});