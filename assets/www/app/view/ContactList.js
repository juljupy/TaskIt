Ext.define('TaskIt.view.ContactList', {
    extend  : 'Ext.NavigationView',
    xtype   : 'contactlist',
    requires: [
        'TaskIt.view.Contacts',
        'TaskIt.view.ContactsDetail'
    ],
    
    config: {
    	useTitleForBackButtonText : true,
    	fullscreen: true,
    	title     : 'Contactos',
		iconCls   : 'user',
        items: [{
            xtype: 'contacts'
        }]
    }
});