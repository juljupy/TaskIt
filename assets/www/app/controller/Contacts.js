Ext.define("TaskIt.controller.Contacts",{
	extend : 'Ext.app.Controller',
	
	config : {
		refs : {
			main     : 'contactlist',
			contList : 'contacts'
		},
		control : {
			contList : {
				show : 'contactsData',
				disclose : 'showDetail'
			}
		}
	},
	
	contactsData : function(cmp){
		cmp.getStore().load();
	},
	
	showDetail: function(list, record) {
        this.getMain().push({
            xtype: 'contactsdetail',
            title: record.getData().displayName,
            data : record.getData()
        })
    }
});