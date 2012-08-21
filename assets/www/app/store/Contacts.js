Ext.define('TaskIt.store.Contacts',{
	extend   : 'Ext.data.Store',
	
	config   : {
		model  : 'TaskIt.model.Contacts',
		sorters: 'displayName',

	    grouper: {
	       groupFn: function(record) {
	           return record.get('displayName')[0];
	       }
	    },
		autoLoad : true
	}
})