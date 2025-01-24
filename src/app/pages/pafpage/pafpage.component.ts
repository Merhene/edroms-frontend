import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pafpage',
  standalone: true,
  imports: [],
  templateUrl: './pafpage.component.html',
  styleUrl: './pafpage.component.css'
})
export class PafpageComponent {
  router: Router = inject(Router);
}
