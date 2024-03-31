import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageBoxComponent } from 'src/app/DialogBox/message-box/message-box.component';
import { CommunicationService } from 'src/app/Service/communication.service';
import { ShopServiceService } from 'src/app/Service/shop-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit{
  shops: any = [];
  showLogOutBtn: boolean = false;

  constructor(
    private _shopService: ShopServiceService,
    private _router: Router,
    private _dialog: MatDialog,
    private _commService: CommunicationService,
    private cdr: ChangeDetectorRef
  ) {
    _shopService.getShopsForLandingPage().subscribe((res) => {
      this.shops = res;
    });
  }

  ngOnInit(): void {
    this._commService.dataChangedEvent.subscribe(res => {
      this.emitFunctionToChangeLoginClick();
    });
  }

  // This method will call when user click on Wish List Icon
  WishListIconClick() {
    const token = localStorage.getItem('access_token');
    // Check if token exists and is not null or empty
    if (!token || token.trim() === '') {
      alert('Login to see wishlist!!');
      this._router.navigateByUrl('Login');
    } else {
      this._router.navigateByUrl('wishlist');
    }
  }

  // This method will call when user click on Cart Icon
  CartIconClick() {
    const token = localStorage.getItem('access_token');
    // Check if token exists and is not null or empty
    if (!token || token.trim() === '') {
      alert('Login to see Cart!!');
      this._router.navigateByUrl('Login');
    } else {
      this._router.navigateByUrl('cart');
    }
  }

  // LogOut Function
  logOutClick(){
    localStorage.removeItem("access_token");

    const dialogData: MessageBoxComponent['data'] = {
      title: 'Congratulations!!',
      message: `Successfully Logged Out`
    };

    const dialogRef = this._dialog.open(MessageBoxComponent, {
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(res => {
      this._router.navigateByUrl('/home');
    })
  }

  // This function will call when User successfully login to the application and
  // its a time to show logout icon onthe navbar
  emitFunctionToChangeLoginClick(){
    this.showLogOutBtn = true;
  }
}
