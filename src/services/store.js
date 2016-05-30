import firebase from 'firebase';
 var config = {
    apiKey: "AIzaSyBEfBXsSmfFxu-pqU4Myut354NK84c6msw",
    authDomain: "fitnesstracker-32232.firebaseapp.com",
    databaseURL: "https://fitnesstracker-32232.firebaseio.com",
    storageBucket: "fitnesstracker-32232.appspot.com",
  };
  firebase.initializeApp(config);
  
function writeNewEntity(entityName,data) {
  // the object being saved can't be blank, it must have at least one property
  // Get a key for a new Post.
  var key = data.id || firebase.database().ref().child(entityName).push().key;
  data.dateCreated = firebase.database.ServerValue.TIMESTAMP;
  var updates = {};
  updates['/' + entityName + '/' + key] = data;
  //you can update multiple things at the same time
  //need to figure out a way to manage this
  //updates['/user-session/' + uid + '/' + key] = session;
  firebase.database().ref().update(updates);
  data.id = key;
  return data;
}

function get(entity,cb){
  firebase.database().ref(entity).on('value', function(snap){
    var entities = [];
    snap.forEach((e)=>{
      var entity= e.val();
      entity.id = e.getKey();
      entities.push(entity);
    });
    cb(entities);
  });
}
function save(entityName,data){
    return writeNewEntity(entityName,data);
}
export {get};
export {save};