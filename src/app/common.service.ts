import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private http: HttpClient) { }

  xcashOfficialGh = 'X%2DCASH%2Dofficial';
  xcashCoreRepo = 'xcash%2Dcore';
  xcashDpopsRepo = 'xcash%2Ddpops';
  xcashDelegatesExplorerRepo = 'delegates%2Dexplorer';
  xcashDelegatesPoolWebsiteRepo = 'delegates%2Dpool%2Dwebsite';
  xcashAndroidWalletRepo= 'android%2Dwallet';
  xcashDelegatesStatusRepo = 'delegates%2Dsupervisor';


  getXCashCoreInfo() {
    return this.http.get(`https://api.github.com/repos/${this.xcashOfficialGh}/${this.xcashCoreRepo}`);
  }

  getXCashDpopsInfo() {
    return this.http.get(`https://api.github.com/repos/${this.xcashOfficialGh}/${this.xcashDpopsRepo}`);
  }

  getXCashDelegatesExplorerInfo() {
    return this.http.get(`https://api.github.com/repos/${this.xcashOfficialGh}/${this.xcashDelegatesExplorerRepo}`);
  }

  getXCashDelegatesPoolInfo() {
    return this.http.get(`https://api.github.com/repos/${this.xcashOfficialGh}/${this.xcashDelegatesPoolWebsiteRepo}`);
  }

  getXCashAndroidWalletInfo() {
    return this.http.get(`https://api.github.com/repos/${this.xcashOfficialGh}/${this.xcashAndroidWalletRepo}`);
  }

  getXCashDelegatesStatusInfo() {
    return this.http.get(`https://api.github.com/repos/${this.xcashOfficialGh}/${this.xcashDelegatesStatusRepo}`);
  }

  private navBoolObservable = new BehaviorSubject(false);
  navBoolObservable$ = this.navBoolObservable.asObservable()

  changeBool(bool: any) {
    this.navBoolObservable.next(bool); 
  }

  shouldLoaderBool = true

  private shouldLoader = new BehaviorSubject(this.shouldLoaderBool);
  shouldLoader$ = this.shouldLoader.asObservable()

  shouldLoaderMethod(bool: any) {
    this.shouldLoader.next(bool);
    this.shouldLoaderBool = bool 
  }

}
