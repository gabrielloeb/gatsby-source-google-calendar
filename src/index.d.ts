import { Credentials } from "google-auth-library";
import "./temporary-types";

export namespace GatsbySourceGoogleCalendar {
  export interface PluginOptions {
    calendarId?: string;
    credentials?: any;
    credentialsPath?: string;
    credentialsPromise?: Promise<any>;
    tokenPromise?: Promise<Credentials>;
    token?: Credentials;
    tokenPath?: string;
    limit?: number;
    startDate?: Date;
  }

  export interface GoogleCalendarEvent {
    kind: string;
    etag: string;
    id: string;
    status: string;
    htmlLink: string;
    created: Date;
    updated: Date;
    summary: string;
    description: string;
    colorId: string;
    creator: {
      id: string;
      email: string;
      displayName: string;
      self: true;
    };
    organizer: {
      id: string;
      email: string;
      displayName: string;
      self: true;
    };
    start: {
      date: Date;
      dateTime: string;
      timeZone: string;
    };
    end: {
      date: Date;
      dateTime: string;
      timeZone: string;
    };
    endTimeUnspecified: boolean;
    recurringEventId?: string;
    originalStartTime: {
      date: Date;
      dateTime: string;
      timeZone: string;
    };
    transparency: string;
    visibility: string;
    iCalUID: string;
    sequence: number;
    attendees: any;
    attendeesOmitted: boolean;
    extendedProperties: any;
    hangoutLink: string;
    conferenceData: any;
    anyoneCanAddSelf: boolean;
    guestsCanInviteOthers: boolean;
    guestsCanModify: boolean;
    guestsCanSeeOtherGuests: boolean;
    privateCopy: boolean;
    locked: boolean;
    reminders: any;
    source: {
      url: string;
      title: string;
    }
    attachments: any;
  }
}
