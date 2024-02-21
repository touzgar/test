// calender.component.ts

import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventContentArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatDialog } from '@angular/material/dialog';
import { NewEventDialogComponent } from '../dialog/new-event-dialog/new-event-dialog.component';
import { Event } from '../model/Event.model';
import { CalenderServiceService } from '../calender-service.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  event = new Event();
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay,newEventButton'
    },
    customButtons: {
      newEventButton: {
        text: 'New Event',
        click: () => this.openNewEventDialog()
      }
    },
    // Add the eventContent function to customize the event display
    eventContent: this.handleEventContent.bind(this),
  };

  constructor(private dialog: MatDialog, private service: CalenderServiceService) {}

 // calender.component.ts

// ...

openNewEventDialog() {
  const dialogRef = this.dialog.open(NewEventDialogComponent, {
    width: '400px',
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 'saved') {
      this.service.listeEvent().subscribe(events => {
        // Store events in localStorage
        localStorage.setItem('calendarEvents', JSON.stringify(events));

        // Update the calendarOptions with the retrieved events
        this.calendarOptions.events = events.map(event => ({
          title: event.title,
          location: event.location,
          start: event.startTime,
          end: event.endTime,
          allDay: false,
        }));
      });
    }
  });
}

// ...

handleEventContent(arg: EventContentArg) {
  const eventTitle = arg.event.title;
  const eventLocation = arg.event.extendedProps['location'];
  const eventTime = arg.timeText;

  // Get the current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split('T')[0];

  // Check if the event and event.start are not null
  const isEventOnCurrentDate =
    arg.event.start && arg.event.start.toISOString().split('T')[0] === currentDate;

  const eventContent = `Event: ${eventTitle}
  , Location: ${eventLocation},
   Time: ${eventTime}`;

  const contentElement = document.createElement('div');
  contentElement.className = 'fc-content';
  contentElement.textContent = eventContent;

  // If the event is not on the current date, make the content transparent
  if (!isEventOnCurrentDate) {
    contentElement.style.opacity = '0.3'; // Adjust the opacity as needed
  }

  const container = document.createElement('div');
  container.appendChild(contentElement);

  return { domNodes: [container] };
}

// ...
// calender.component.ts

// ...

// ...

ngOnInit(): void {
  // Retrieve events from localStorage
  const storedEvents = localStorage.getItem('calendarEvents');

  if (storedEvents) {
    const parsedEvents: Event[] = JSON.parse(storedEvents);

    this.calendarOptions.events = parsedEvents.map(event => ({
      title: event.title,
      location: event.location,
      start: event.startTime,
      end: event.endTime,
      allDay: false,
    }));
  }
}

// ...

// ...

}
