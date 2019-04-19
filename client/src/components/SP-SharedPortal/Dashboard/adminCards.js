const adminCards = [
    {
      id: 1,
      title: 'Create An Event',
      description: 'Create new NNMTA events here. Event details such as festival chairman email, '
      + 'the event name, event start date, event end date, event location, and more are required to create an event.',
      link: '/admin/create-an-event',
      buttonName: 'Create An Event',
      icon: 'create',
    },
    {
      id: 2,
      title: 'Schedule An Event',
      description: 'Schedule events here after they have been created. Scheduling an event requires the date(s) '
      + 'of the event to be known, the number of timeblocks, the length of each time block, etc.',
      link: '/admin/schedule-an-event',
      buttonName: 'Schedule An Event',
      icon: 'schedule',
    },
    {
      id: 3,
      title: 'View/Modify An Event',
      description: 'Events that have been successfully scheduled appear here. These events can be accessed, '
      + 'and if necessary, modified by an administrator.',
      link: '/admin/edit-an-event',
      buttonName: 'View/Modify An Event',
      icon: 'event_note',
    },
    {
      id: 4,
      title: 'Schedule Command Performance',
      description: 'Similar to \'Schedule An Event\', this feature allows new NNMTA command performance '
      + 'events to be created. Once again, scheduling a command performance event requires the date(s) of the'
      + 'event to be known, the number of timeblocks, the length of each time block, etc.',
      link: '/admin/schedule-command-performance',
      buttonName: 'Schedule Command Performance',
      icon: 'schedule',
    },
    {
      id: 5,
      title: 'View/Modify Command Performance',
      description: 'Command performance events that have been successfully schedule appear here. These events can be accessed, '
      + 'and if necessary, modified by an administrator.',
      link: '/admin/edit-command-performance',
      buttonName: 'View/Modify Command Performance',
      icon: 'event_note',
    },
    {
      id: 6,
      title: 'Add A Teacher',
      description: 'Manually add a new teacher using this feature. The teacher\'s first and last name, email, '
      + 'and phone number will need be be entered for a successful addition.',
      link: '/admin/add-a-teacher',
      buttonName: 'Add A Teacher',
      icon: 'person_add',
    },
    {
      id: 7,
      title: 'Generate Documents',
      description: 'Generate adjudication forms, results sheets, room schedules, teacher lists, master schedules, '
      + 'session files, and many more documents through this feature.',
      link: '/admin/generate-documents',
      buttonName: 'Generate Documents',
      icon: 'note_add',
    },
    {
      id: 8,
      title: 'Print Documents',
      description: 'NNMTA documents can be printed here such as adjudication forms, results sheets, '
      + 'announcing sheets, room schedules, theory scores, etc.',
      link: '/admin/print-documents',
      buttonName: 'Print Documents',
      icon: 'print',
    },
    {
      id: 9,
      title: 'Upload Documents',
      description: 'Upload documents to the server as backups to local files.',
      link: '/admin/upload-documents',
      buttonName: 'Upload Documents',
      icon: 'cloud_upload',
    },
    {
      id: 10,
      title: 'Upload Music',
      description: 'Upload the NNMTA music library here in .CSV format.',
      link: '/admin/upload-music',
      buttonName: 'Upload Music',
      icon: 'cloud_upload',
    },
    {
      id: 11,
      title: 'Events',
      description: 'View active, published events here. This feature will display details such as the event name, '
      + 'facilitator email, event date(s), event location(s), and options.',
      link: '/admin/events',
      buttonName: 'Events',
      icon: 'event',
    },
    {
      id: 12,
      title: 'Teachers',
      description: 'View all teachers currently registered with NNMTA. This feature will display every listed teacher\'s '
      + 'first name, last name, contact information (phone number and email), and the number of students registered '
      + 'with that teacher.',
      link: '/admin/teachers',
      buttonName: 'Teachers',
      icon: 'school',
    },
    {
      id: 13,
      title: 'Students',
      description: 'View all students currently registered with NNMTA. This feature will display ever listed student\'s '
      + 'first name, last name, level, teacher (includes their full name, email address, and phone number), payment status '
      + 'and registration status.',
      link: '/admin/students',
      buttonName: 'Students',
      icon: 'people',
    },
    {
      id: 14,
      title: 'View/Modify Events Calendar',
      description: 'Allows the Google Calendar for NNMTA which appears in the Customer and Teacher portals to be viewed, '
      + 'and if necessary, modified by an administrator.',
      link: '/admin/edit-events-calendar',
      buttonName: 'View/Modify Events Calendar',
      icon: 'calendar_today',
    },
    {
      id: 15,
      title: 'View/Modify FAQ',
      description: 'Allows the Frequently Asked Questions page which appears in the Customer and Teacher portals to be viewed, '
      + 'and if necessary, modified by an administrator.',
      link: '/admin/edit-faq',
      buttonName: 'View/Modify FAQ',
      icon: 'help_outline',
    },
    {
      id: 16,
      title: 'View/Modify About Us ',
      description: 'Allows the About Us page which appears in the Customer and Teacher portals to be viewed, and if necessary, '
      + 'modified by an administrator.',
      link: '/admin/edit-about-us',
      buttonName: 'View/Modify About Us',
      icon: 'music_note',
    },
    {
      id: 17,
      title: 'Create/Send A Notification',
      description: 'Allows an administrator to send notifications to customers and/or teachers through the portal directly. This feature '
      + ' is meant to provide a second means of communication from NNMTA staff regarding important events.',
      link: '/admin/notifications',
      buttonName: 'Create/Send A Notification',
      icon: 'notification_important',
    },
    {
      id: 18,
      title: 'View/Modify News',
      description: 'Allows an administrator to publish news about upcoming events to customers and teachers through the portal.',
      link: '/admin/news',
      buttonName: 'View/Modify News',
      icon: 'subtitles',
    },
  ];

  export default adminCards;
