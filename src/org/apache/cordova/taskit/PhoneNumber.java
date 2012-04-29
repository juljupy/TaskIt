package org.apache.cordova.taskit;

import org.apache.cordova.DroidGap;

import org.apache.cordova.taskit.TimerBroadcastReceiver;

import android.app.Activity;
import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.telephony.TelephonyManager;
import android.view.View;
import android.webkit.WebView;
import android.widget.Toast;

public class PhoneNumber extends Activity{
	private WebView mAppView; //webview que renderiza el html
    private DroidGap mGap; //Objeto phonegap


    /****inicialización de los componentes*****/
    public PhoneNumber(DroidGap gap, WebView view)
    {
        mAppView = view;
        mGap = gap;
    }
    
    
    /***método para acceder al operador de la red móvil****/
    public String getTelephoneNumber(){
        TelephonyManager tm = (TelephonyManager) mGap.getSystemService(Context.TELEPHONY_SERVICE);
        String number = tm.getNetworkOperatorName();
        return number;
    }
    
    public void showToast(String toast, int num) {
    	//int i = Integer.parseInt(num);
        Intent timerIntent = new Intent(mGap.getContext(),TimerBroadcastReceiver.class);
    	
    	PendingIntent myPendingIntent = PendingIntent.getBroadcast(mGap.getApplicationContext(),0,timerIntent, 0);
    	
    	AlarmManager myAlarmManager = (AlarmManager) mGap.getSystemService(ALARM_SERVICE);
    	myAlarmManager.set(AlarmManager.RTC_WAKEUP, System.currentTimeMillis()+(num*1000), myPendingIntent);
        Toast.makeText(mGap.getContext(), toast+" en "+num+" segundos", Toast.LENGTH_SHORT).show();
    }
}
