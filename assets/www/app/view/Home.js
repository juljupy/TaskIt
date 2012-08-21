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
                	action  : 'opera'
                },{
                	text    : 'Alarma',
                	action  : 'alarm'
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