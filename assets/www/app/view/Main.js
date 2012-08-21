Ext.define("TaskIt.view.Main",{
	extend   : 'Ext.tab.Panel',
	requires : ['Ext.TitleBar'],
	config   : {
		fullscreen     : true,
		tabBarPosition : 'bottom',
		items          : [{
			xtype : 'homepanel'
		},{
			xtype : 'contactlist'
		},{
			xtype : 'positionmap'
		}]
	}
});