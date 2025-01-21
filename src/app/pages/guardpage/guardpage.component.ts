import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-guardpage',
  standalone: true,
  imports: [ButtonComponent, ButtonComponent, RouterLink],
  templateUrl: './guardpage.component.html',
  styleUrl: './guardpage.component.css'
})
export class GuardpageComponent {
  router: Router = inject(Router);

}
