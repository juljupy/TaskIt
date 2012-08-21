Ext.define('TaskIt.proxy.Contacts', {
    extend: 'Ext.data.proxy.Proxy',
    alias : 'proxy.contatsproxy',
    
    create: function(operation, callback, scope) {
        
    },
    
    read: function(operation, callback, scope) {
    	var thisProxy = this;
    	var options = new ContactFindOptions();
        options.filter="";
        options.multiple=true;
        var filter = ['id','displayName','name','nickname','phoneNumbers','emails','addresses','ims','organizations','birthday','note','photos','categories','urls'];
        navigator.contacts.find(filter, function(deviceContacts) {
            //loop over deviceContacts and create Contact model instances
            var contacts = [];
            for (var i = 0; i < deviceContacts.length; i++) {
                var deviceContact = deviceContacts[ i ];
                if(deviceContact.displayName != null){
                	var contact = Ext.create('TaskIt.model.Contacts',{
                        id: deviceContact.id,
                        displayName : deviceContact.displayName,
                        givenName: deviceContact.name.givenName,
                        familyName: deviceContact.name.familyName,
                        emails: deviceContact.emails,
                        phoneNumbers: deviceContact.phoneNumbers
                    });
                    contact.deviceContact = deviceContact;
                    contacts.push(contact);
                }
            }
            //return model instances in a result set
            operation.setResultSet(Ext.create('Ext.data.ResultSet',{
                records: contacts,
                total  : contacts.length,
                loaded : true
            }));
            //announce success
            operation.setSuccessful();
            operation.setCompleted();
            //finish with callback
            if (typeof callback == "function") {
                callback.call(scope || thisProxy, operation);
            }
        }, function(){
        	alert('Error!!');
        }, options);
    },
    
    update: function(operation, callback, scope) {

    },
    
    destroy: function(operation, callback, scope) {
    
    }
});