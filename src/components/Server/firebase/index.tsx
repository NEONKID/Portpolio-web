import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/storage';

import config from './config.json';

const fb = firebase.initializeApp(config);

export default fb;
