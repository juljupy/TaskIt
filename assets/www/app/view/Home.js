Ext.define("TaskIt.view.Home",{
	extend : 'Ext.Panel',
	xtype  : 'homepanel',
	
	config : {
		title            : 'Inicio',
		iconCls          : 'home',
		cls              : 'home',
		scrollable       : true,
		styleHtmlContent : true,
		items            : [{
            xtype : 'toolbar',
            docked: 'top',
            items : [
                {
                	text    : 'Operador',
                	action  : 'opera'/*
                	handler : function(){
                		alert('Mi Operador: '+window.MyCls.getTelephoneNumber()); //Ejecución del método getTelephoneNumber de objeto MyCls creado en Java
                	}*/
                },{
                	text    : 'Alarma',
                	action  : 'alarm'/*,
                	handler : function(){
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
                	}*/
                }
            ]
        }],
		html             : [
           '<img src="http://staging.sencha.com/img/sencha.png" />',
           '<h1>Prueba de Sencha Touch 2 con Phonegap</h1>',
           "<p>Al hacer tap en el bot&oacute;n Operador muestra un alert con el Operador de tu dispositivo M&oacute;vil </p>",
           '<h2>Sencha Touch (2.0.0), PhoneGap(cordova) 1.5.0</h2>',
           '<h3>Julio de Hoyos - @juljupy </h3>'
        ].join("")
	}
});