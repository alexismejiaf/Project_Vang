import React, { Component } from "react";
import ReactDOM from "react-dom";
import { GiftedChat } from "react-web-gifted-chat";
import firebase from "firebase";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';

const config = {
  apiKey: "AIzaSyAUKHmmzRQhpH78dkgLN4vkttPaBlcuDuM",
  authDomain: "battlechat-33023.firebaseapp.com",
  databaseURL: "https://battlechat-33023.firebaseio.com",
  projectId: "battlechat-33023",
  storageBucket: "battlechat-33023.appspot.com",
  messagingSenderId: "154606618801",
  appId: "1:154606618801:web:07c09c667819573c86fa90",
  measurementId: "G-0VB69STL5Z"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: {},
      isAuthenticated: false,
    };
  }

  async signIn() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(googleProvider);
    } catch (error) {
      console.error(error);
    }
  }

  signOut() {
    firebase.auth().signOut();
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isAuthenticated: true, user });
        this.loadMessages();
      } else {
        this.setState({ isAuthenticated: false, user: {}, messages: [] });
      }
    });
  }

  loadMessages() {
    const callback = snap => {
      const message = snap.val();
      message.id = snap.key;
      const { messages } = this.state;
      messages.push(message);
      this.setState({ messages });
    };
    firebase
      .database()
      .ref("/messages/")
      .limitToLast(12)
      .on("child_added", callback);
  }

  renderPopup() {
    return (
      <Dialog open={!this.state.isAuthenticated}>
        <DialogTitle id="simple-dialog-title">Sign in</DialogTitle>
        <div>
          <List>
            <ListItem button onClick={() => this.signIn()}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: "#eee" }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    height="30"
                    alt="G"
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Sign in with Google" />
            </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }

  onSend(messages) {
    for (const message of messages) {
      this.saveMessage(message);
    }
  }

  saveMessage(message) {
    return firebase
      .database()
      .ref("/messages/")
      .push(message)
      .catch(function (error) {
        console.error("Error saving message to Database:", error);
      });
  }

  renderSignOutButton() {
    if (this.state.isAuthenticated) {
      return <Button onClick={() => this.signOut()}>Sign out</Button>;
    }
    return null;
  }

  renderChat() {
    return (
      <GiftedChat
        user={this.chatUser}
        messages={this.state.messages.slice().reverse()}
        onSend={messages => this.onSend(messages)}
      />
    );
  }

  
  renderChatHeader() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            BattleChat
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
  renderSettingsHeader() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Settings
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }

  renderProgressBar() {
    return (
      <AppBar position="static" color="default">
        
          <BorderLinearProgress
            variant="determinate"
            color="secondary"
            value={20}
          />
        
      </AppBar>
    );
  }

  render() {

    return (
      <div style={styles.container}>
        {this.renderPopup()}
        
        <div style={styles.chat}>
          {this.renderChatHeader()}
          {this.renderProgressBar()}
          {this.renderChat()}
        </div>
        <div style={styles.settings}>
          {this.renderSettingsHeader()}
          {this.renderSignOutButton()}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  channelList: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  chat: {
    display: "flex",
    flex: 3,
    flexDirection: "column",
    borderWidth: "1px",
    borderColor: "#ccc",
    borderRightStyle: "solid",
    borderLeftStyle: "solid",
  },
  settings: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
};

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#ffffff', 0.8),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#18ffff',
  },
})(LinearProgress);

export default App;
