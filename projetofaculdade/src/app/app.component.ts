import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home2",
        icon  : "home"
      },
      {
        title : "Loja",
        url   : "/chat",
        icon  : "chatboxes"
      },
      {
        title : "Mensagem",
        url   : "/mensagem",
        icon  : "chatboxes"
      },
      {
        title : "Perfil",
        url   : "/dashboard",
        icon  : "chatboxes"
      },
      {
        title : "Assitencia",
        url   : "/contacts",
        icon  : "contacts"
      },
      
    ]
  }
}

