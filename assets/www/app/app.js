var task = function(){
	//Ext.Loader.setConfig({ enabled: true });
	
	Ext.application({
	    name        : 'TaskIt',
	    requires    : ['Ext.MessageBox'],
	    views       : ['Main','Home','Contacts','ContactList','Position'],
	    stores      : ['Contacts'],
	    controllers : ['Home','Contacts','Position'],
	    models      : ['Contacts'],
	    launch      : function() {
	    	Ext.Viewport.add(Ext.create('TaskIt.view.Main'));
	    }
	});
}

document.addEventListener("deviceready", task, true);