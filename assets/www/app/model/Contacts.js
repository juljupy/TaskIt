Ext.define('TaskIt.model.Contacts',{
	extend : 'Ext.data.Model',
	requires : ['TaskIt.proxy.Contacts'],
	config : {
		fields : ['id','displayName','name','nickname','phoneNumbers','emails','addresses','ims','organizations','birthday','note','photos','categories','urls','numbers'],
		proxy: {
			type : 'contatsproxy'
		}
	}
});