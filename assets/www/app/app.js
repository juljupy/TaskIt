var task = function(){
	//Ext.Loader.setConfig({ enabled: true });
	
	Ext.application({
	    name     : 'TaskIt',
	    requires : ['Ext.MessageBox'],
	    views    : ['Main','Home'],
	    launch   : function() {
	    	Ext.Viewport.add(Ext.create('TaskIt.view.Main'));
	    	/*var options = new ContactFindOptions();
	        options.filter=""; 
	        var filter = ["displayName","addresses"];
	        navigator.contacts.find(filter, function(contacts){
	            alert(contacts.length);
	        }, function(){
	        	alert('Error!!');
	        }, options);*/
	        
	    	//alert('cargado '+device.platform);
	    }
	});
}
document.addEventListener("deviceready", task, true);