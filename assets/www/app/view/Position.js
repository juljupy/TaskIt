Ext.define('TaskIt.view.Position',{
	extend  : 'Ext.Map',
	xtype   : 'positionmap',
	
	config : {
		title     : 'Mapa',
		fullscreen: true,
		//useCurrentLocation: true,
		iconCls : 'maps',
		mapOptions : {
            zoom : 12
        }
	}
});