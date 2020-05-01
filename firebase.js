import app from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAIspb6kBsmR9a4YqmwyC4pyI6eSkAo2F8',
  authDomain: 'colorgame-4cfa6.firebaseapp.com',
  databaseURL: 'https://colorgame-4cfa6.firebaseio.com',
  projectId: 'colorgame-4cfa6',
  storageBucket: 'colorgame-4cfa6.appspot.com',
  messagingSenderId: '876969312547',
  appId: '1:876969312547:web:f779d52167f7781a348c96',
};
app.initializeApp(config);
const firestore = app.firestore();

export default firestore;
