import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  public screenWidth: number = screen.width
  constructor(private service: CommonService ) { }

  coreStars: number = 0;
  coreForks: number = 0;

  dpopsStars: number = 0;
  dpopsForks: number = 0;

  delegatesExplorerStars: number = 0;
  delegatesExplorerForks: number = 0;

  delegatesPoolStars: number = 0;
  delegatesPoolForks: number = 0;

  AndroidWalletStars: number = 0;
  AndroidWalletForks: number = 0;

  DelegateSupervisorStars: number = 0;
  DelegateSupervisorForks: number = 0;

  ngOnInit(): void {
    this.service.getXCashCoreInfo().subscribe((data: any) => {
      this.coreStars = data.stargazers_count;
      this.coreForks = data.forks_count;
    });

    this.service.getXCashDpopsInfo().subscribe((data: any) => {
      this.dpopsStars = data.stargazers_count;
      this.dpopsForks = data.forks_count;
    });

    this.service.getXCashDelegatesExplorerInfo().subscribe((data: any) => {
      this.delegatesExplorerStars = data.stargazers_count;
      this.delegatesExplorerForks = data.forks_count;
    });

    this.service.getXCashDelegatesPoolInfo().subscribe((data: any) => {
      this.delegatesPoolStars = data.stargazers_count;
      this.delegatesPoolForks = data.forks_count;
    });

    this.service.getXCashAndroidWalletInfo().subscribe((data: any) => {
      this.AndroidWalletStars = data.stargazers_count;
      this.AndroidWalletForks = data.forks_count;
    });

    this.service.getXCashDelegatesStatusInfo().subscribe((data: any) => {
      this.DelegateSupervisorStars = data.stargazers_count;
      this.DelegateSupervisorForks = data.forks_count;
    });


  }

}
