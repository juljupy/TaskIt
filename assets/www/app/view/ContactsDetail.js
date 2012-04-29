Ext.define('TaskIt.view.ContactsDetail',{
	extend : 'Ext.Panel',
	xtype  : 'contactsdetail',
	config: {
        title           : 'Detalles',
        styleHtmlContent: true,
        scrollable      : 'vertical',
        tpl: [
            '<h1>Hello {displayName}!</h1>',
            '<h2>Detalles:</h2>',
            '<hr />',
            '<tpl for="numbers">Tipo: {type}<br />Valor: {phone}</tpl>'
        ]
    }
});