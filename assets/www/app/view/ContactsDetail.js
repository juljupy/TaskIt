Ext.define('TaskIt.view.ContactsDetail',{
	extend : 'Ext.Panel',
	xtype  : 'contactsdetail',
	config: {
        title           : 'Detalles',
        styleHtmlContent: true,
        scrollable      : 'vertical',
        
        tpl: [
			'<h4>Phone</h4>',
			'<tpl for="phoneNumbers">',
			    '<div class="field"><span class="label">{type}: </span><a href="tel:{value}">{value}</a></div>',
			'</tpl>',
			'<h4>Email</h4>',
		    '<tpl for="emails">',
		        '<div class="field"><span class="label">{type}: </span><a href="mailto:{value}">{value}</a></div>',
		    '</tpl>'
        ]
    }
});
