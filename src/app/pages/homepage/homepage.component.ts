import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { OrderpageComponent } from '../orderpage/orderpage.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ButtonComponent, ButtonComponent, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  router: Router = inject(Router);

  goToOrderpage() {
    this.router.navigate(['/ordres']);
  }

}
