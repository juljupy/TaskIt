var task = function(){
	//Ext.Loader.setConfig({ enabled: true });
	
	Ext.application({
	    name        : 'TaskIt',
	    requires    : ['Ext.MessageBox'],
	    views       : ['Main','Home','Contacts','ContactList'],
	    stores      : ['Contacts'],
	    controllers : ['Home','Contacts'],
	    models      : ['Contacts'],
	    launch      : function() {
	    	Ext.Viewport.add(Ext.create('TaskIt.view.Main'));
	    }
	});
}
document.addEventListener("deviceready", task, true);