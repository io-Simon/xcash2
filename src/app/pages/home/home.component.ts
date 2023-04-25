//import { Component, OnInit } from '@angular/core';
import {Component, AfterViewInit} from '@angular/core';
import {httpdataservice} from '../../services/http-request.service';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent  {

  options: AnimationOptions = {
    path: '../assets/documents/jumbotron_dark_nogrid_nodownman_colors.json',
  };

  BLOCKS_PER_DAY:number = 288; //1440;

  blockchain_algorithm!: string; 
  block_height!: string| []; 
  block_reward!: number;  
  generated_supply!: string;  
  circulating_supply!: string;
  private_tx_count!: number; 
  public_tx_count!: number; 

  constructor(private httpdataservice: httpdataservice ) { } //private changeRef: ChangeDetectorRef

  rocket_flag:boolean = true

  ngOnInit() {
    clearInterval(this.httpdataservice.Timer);

    this.httpdataservice.get_request(this.httpdataservice.SERVER_HOSTNAME_AND_PORT_GET_BLOCKCHAIN_DATA).subscribe(
      (res:any) =>
        {
          if (JSON.stringify(res).indexOf("Error") !== -1 || JSON.stringify(res) === undefined || null )
            {
              this.blockchain_algorithm = "Error";
              this.block_height = "Error";

              this.generated_supply = "Error";
              this.circulating_supply = "Error";

              this.public_tx_count = 0;
              this.private_tx_count = 0;
            }
          else
            {
              this.blockchain_algorithm = "DPOPS/CryptoNote"; //+ res["blockchain_algorithm"];
              this.block_height = res['block_height'];

              this.generated_supply = res['generated_supply'];
              this.circulating_supply = res['circulating_supply'];
              //this.changeRef.detectChanges();

              this.public_tx_count = res['public_tx_count'];
              //this.changeRef.detectChanges();
              this.private_tx_count = res['private_tx_count'];
              //this.changeRef.detectChanges();
            }
        },
      (error) =>
        {
          this.blockchain_algorithm = "Error";
          this.block_height = "Error";

          this.generated_supply = "Error";
          this.circulating_supply = "Error";

          this.public_tx_count = 0;
          this.private_tx_count = 0;
        }
      );
//end of subscribe

    this.httpdataservice.get_request(this.httpdataservice.SERVER_HOSTNAME_AND_PORT_GET_LAST_BLOCK_DATA).subscribe(
      (res:any) =>
      {
        if (JSON.stringify(res).indexOf("Error") !== -1)
        {
          this.block_reward = 0;
        }
        else
        {
          this.block_reward = Math.round(res['block_reward']);
        }
      },
      (error) =>
      {
        this.block_reward = 0;
      }
    );

//end of subscribe
  }

}
function id(id: any) {
  throw new Error('Function not implemented.');
}

