Ext.define('TaskIt.store.Contacts',{
	extend : 'Ext.data.Store',
	
	config : {
		model  : 'TaskIt.model.Contacts',
		sorters: 'displayName',

	    grouper: {
	       groupFn: function(record) {
	           return record.get('displayName')[0];
	       }
	    },
	    
		listeners : {
			load : function(store){
				var options = new ContactFindOptions();
		        options.filter="";
		        options.multiple=true;
		        var filter = ['id','displayName','name','nickname','phoneNumbers','emails','addresses','ims','organizations','birthday','note','photos','categories','urls'];
		        navigator.contacts.find(filter, function(contact){
		        	for(var i = 0 ; i < contact.length ; i++){
		        		var phoneNumbers = [];
		        		for (var j = 0 ; j < contact[i].phoneNumbers.length ; j++){
		        			phoneNumbers.push({
		        				type  : contact[i].phoneNumbers[j].type,
		        				phone : contact[i].phoneNumbers[j].value
		        			});
		        		}
		        		store.add({displayName : contact[i].displayName, numbers : phoneNumbers});
		        	}
		        }, function(){
		        	alert('Error!!');
		        }, options);
			}
		},
		autoLoad : true
	}
})