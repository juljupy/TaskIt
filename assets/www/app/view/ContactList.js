Ext.define('TaskIt.view.ContactList', {
    extend  : 'Ext.navigation.View',
    xtype   : 'contactlist',
    requires: [
        'TaskIt.view.Contacts',
        'TaskIt.view.ContactsDetail'
    ],

    config: {
    	fullscreen: true,
    	title     : 'Contactos',
		iconCls   : 'user',
        items: [{
            xtype: 'contacts'
        }]
    }
});