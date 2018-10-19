import React from 'react';
import { Icon } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Icon>account_box</Icon>
      </ListItemIcon>
      <ListItemText primary="My account" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>group_add</Icon>
      </ListItemIcon>
      <ListItemText primary="Registered participants" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>calendar_today</Icon>
      </ListItemIcon>
      <ListItemText primary="Events calendar" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>event_available</Icon>
      </ListItemIcon>
      <ListItemText primary="Register for an event" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>event</Icon>
      </ListItemIcon>
      <ListItemText primary="Active registrations" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>payment</Icon>
      </ListItemIcon>
      <ListItemText primary="Payment history" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Icon>inbox</Icon>
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>star</Icon>
      </ListItemIcon>
      <ListItemText primary="Starred" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>send</Icon>
      </ListItemIcon>
      <ListItemText primary="Send mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>drafts</Icon>
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>mail_outline</Icon>
      </ListItemIcon>
      <ListItemText primary="All mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>delete</Icon>
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>report</Icon>
      </ListItemIcon>
      <ListItemText primary="Spam" />
    </ListItem>
  </div>
);

export const helperItems = (
    <div>
    <ListItem button>
      <ListItemIcon>
        <Icon>help_outline</Icon>
      </ListItemIcon>
      <ListItemText primary="Frequently asked questions" />
    </ListItem>
    </div>
);
