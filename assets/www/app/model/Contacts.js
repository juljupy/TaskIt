Ext.define('TaskIt.model.Contacts',{
	extend : 'Ext.data.Model',
	
	config : {
		fields : ['id','displayName','name','nickname','phoneNumbers','emails','addresses','ims','organizations','birthday','note','photos','categories','urls','numbers']
	}
});