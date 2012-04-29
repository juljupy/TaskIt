package org.apache.cordova.taskit;

import android.content.BroadcastReceiver;
import android.widget.Toast;
import android.content.Context;
import android.content.Intent;

public class TimerBroadcastReceiver extends BroadcastReceiver {

	@Override
	public void onReceive(Context context, Intent intent) {
		
		Toast.makeText(context, "Notificacion de alarma", Toast.LENGTH_LONG).show();

	}

}
