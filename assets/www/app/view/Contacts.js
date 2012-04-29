Ext.define('TaskIt.view.Contacts',{
	extend  : 'Ext.List',
	xtype   : 'contacts',
	requires: ['TaskIt.store.Contacts'],
	
	config : {
		fullscreen: true,
		itemTpl   : '{displayName}',
		store     : 'Contacts',
		title     : 'Contactos',
        grouped         : true,
        onItemDisclosure: true,
        indexBar        : true
	}
});