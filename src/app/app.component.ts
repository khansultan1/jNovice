import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Dashboard', component: HomePage, icon: 'home'},
      {title: 'Products', component: HomePage, icon: 'basket'},
      {title: 'Client', component: HomePage, icon: 'contacts'},
      {title: 'Trader', component: HomePage, icon: 'create'},
      {title: 'Invoice', component: HomePage, icon: 'document'},
      {title: 'Challan', component: HomePage, icon: 'grid'},
      {title: 'Payment', component: HomePage, icon: 'checkmark-circle'},
      {title: 'Ledger', component: HomePage, icon: 'clipboard'},
      {title: 'Purchase', component: HomePage, icon: 'cube'},
      {title: 'Purchase Payments', component: HomePage, icon: 'done-all'},
     
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
