import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBm7FCQCAhKk4-PgjxG2qfoLi1ChF5TK8c',
  authDomain: 'rn-todo-61b04.firebaseapp.com',
  projectId: 'rn-todo-61b04',
  storageBucket: 'rn-todo-61b04.appspot.com',
  messagingSenderId: '419028966650',
  appId: '1:419028966650:web:7fb16812367c1da2d8fd43'
};

const app = initializeApp(firebaseConfig);

export default app;
