import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid'

@Component({
  selector: 'app-weekguardpage',
  standalone: true,
  imports: [ RouterLink, CommonModule, FullCalendarModule ],
  templateUrl: './weekguardpage.component.html',
  styleUrl: './weekguardpage.component.css'
})
export class WeekguardpageComponent {
  router: Router = inject(Router);
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [timeGridPlugin, listPlugin, dayGridPlugin],
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek'
    }
  };
}
