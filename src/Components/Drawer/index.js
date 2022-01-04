import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button key="nfts">
                    <NavLink className="nav-link" to="/nfts">
                        NFTS
                    </NavLink>
                </ListItem>
                <ListItem button key="explore">
                    <NavLink className="nav-link" to="/explore">
                        EXPLORE
                    </NavLink>
                </ListItem>
                <ListItem button key="roadmap">
                    <NavLink className="nav-link" to="/">
                        ROADMAP
                    </NavLink>
                </ListItem>
                <ListItem button key="faqs">
                    <NavLink className="nav-link" to="/">
                        FAQS
                    </NavLink>
                </ListItem>
            </List>
            <Divider />
        </div>
    );

    return (
        <div>
        {['top'].map((anchor) => (
            <React.Fragment key={anchor}>
                <Button className="menu-toggler" onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                </Drawer>
            </React.Fragment>
        ))}
        </div>
    );
}