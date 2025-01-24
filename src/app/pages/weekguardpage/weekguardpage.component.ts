import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-weekguardpage',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './weekguardpage.component.html',
  styleUrl: './weekguardpage.component.css'
})
export class WeekguardpageComponent {
  router: Router = inject(Router);
}
