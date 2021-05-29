import firebase from 'firebase/app'

import 'firebase/firestore';

const firestore = firebase.firestore()
firestore.collection('users').doc('SHNkiOfbPb1M3I0j8esc').collection('cartItems').doc('Eva6nRIckZCtVcoOXD3b')
firestore.doc('/users/SHNkiOfbPb1M3I0j8esc/cartItems/Eva6nRIckZCtVcoOXD3b');
firestore.collection('/users/SHNkiOfbPb1M3I0j8esc/cartItems')