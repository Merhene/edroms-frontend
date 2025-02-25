import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './orderpage.component.html',
  styleUrl: './orderpage.component.css'
})
export class OrderpageComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridDay',
    plugins: [timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridDay,timeGridWeek'
    }
  };
}
