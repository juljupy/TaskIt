Ext.define("TaskIt.controller.Contacts",{
	extend : 'Ext.app.Controller',
	
	config : {
		refs : {
			main     : 'contactlist',
			contList : 'contacts'
		},
		control : {
			contList : {
				disclose : 'showDetail'
			}
		}
	},
	
	showDetail: function(list, record) {
        this.getMain().push({
            xtype: 'contactsdetail',
            title: record.getData().displayName,
            data : record.getData()
        });
    }
});