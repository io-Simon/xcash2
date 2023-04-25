import { Component, OnInit } from '@angular/core';
import { ClipboardModule, ClipboardService } from 'ngx-clipboard';
import { NgModule } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  options: AnimationOptions = {
    path: '../assets/documents/jumbotron_dark_nogrid_nodownman_colors.json',
  };


  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  // toggle : boolean = true;
  // onClickToggle(){
  //   this.toggle = !this.toggle;
  // }
  text1: string = '';
  text2: string = '';
  textModal: string = '';
  isCopied1: boolean = false;
  isCopied2: boolean = false;
  isCopied3: boolean = false;
  basic = false;

  divTab = 'winWallet';
  divToggle(index:any){
    if(index == this.divTab) {
      this.divTab = '';
    }else{
      this.divTab =index;
    }
    console.log("index", index);
    console.log("divTab", this.divTab);
  }

  divTab2 = 'Android';
  divToggle2 (index:any){
    if(index == this.divTab2) {
      this.divTab2 = '';
    }else{
      this.divTab2 =index;
    }
  }

  constructor(private _clipboardService: ClipboardService) {}

  ngOnInit(): void {
    // Handle copy response globally https://github.com/maxisam/ngx-clipboard#handle-copy-response-globally
    this._clipboardService.copyResponse$.subscribe((res:any) => {
        if (res.isSuccess) {
            alert('Copy success!');
        }
    });
  }

  onCopyFailure() {
      alert('copy fail!');
  }

}
