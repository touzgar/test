import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  ngOnInit() {
    this.authService.loadToken();
    if(this.authService.getToken()==null || this.authService.isTokenExpired())
    this.router.navigate(['login']);
    
  }
  private timeoutId: any; // Variable to store the timeout ID

  // Inject the necessary services
  constructor(private el: ElementRef, private renderer: Renderer2,public authService:AuthService,private router:Router) {}

  ngAfterViewInit() {
    // Enable hover for dropdowns
    const dropdownItems = this.el.nativeElement.querySelectorAll('.navbar-nav .nav-item.dropdown');

    dropdownItems.forEach((item: any) => {
      this.renderer.listen(item, 'mouseenter', () => {
        this.showDropdownMenu(item);
      });

      this.renderer.listen(item, 'mouseleave', () => {
        this.hideDropdownMenuWithDelay(item, 2000); // Set delay to 2000 milliseconds (2 seconds)
      });
    });
  }

  private showDropdownMenu(item: any) {
    const dropdownMenu = item.querySelector('.dropdown-menu');
    this.renderer.addClass(dropdownMenu, 'show');
  }

  private hideDropdownMenu(item: any) {
    const dropdownMenu = item.querySelector('.dropdown-menu');
    this.renderer.removeClass(dropdownMenu, 'show');
  }

  private hideDropdownMenuWithDelay(item: any, delay: number) {
    this.timeoutId = setTimeout(() => {
      this.hideDropdownMenu(item);
    }, delay);
  }

  // Clear the timeout when the component is destroyed
  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }
  onLogout(){
    this.authService.logout();
  }
}
