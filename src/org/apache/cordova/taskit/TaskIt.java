package org.apache.cordova.taskit;

import android.os.Bundle;
import org.apache.cordova.*;
import org.apache.cordova.taskit.PhoneNumber;

public class TaskIt extends DroidGap
{
	private PhoneNumber mc;
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.init();
        
        mc = new PhoneNumber(this, appView); //Objeto PhoneNumber
        appView.addJavascriptInterface(mc, "MyCls"); //exposición del objeto mc como objeto del DOM en el webview, lo que hace posible acceder a sus métodos desde javascript
        
        super.loadUrl("file:///android_asset/www/index.html");
    }
}