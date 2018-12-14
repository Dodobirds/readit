import {database, database_object} from './firebase.js';

function writePost(titleName, authorName) {
  let id = database.ref('posts/').push().getKey();
  database.ref('posts/').child(id).set({
    title: titleName,
    author: authorName,
    votes: 0,
    timestamp: database_object.ServerValue.TIMESTAMP,
    iD : id,
    comment: []
  });
  var aName = authorName.replace(/\./g, "");
  var re =  /[^@]+/;
  database.ref('Users/' + re.exec(aName) + "/Posted/").push(
    {id}
  );
}

function upVotePost(postID) {
  database.ref('posts/' + postID + /votes/).transaction(function(votes) {
    return (votes || 0) + 1;
  });
}

function downVotePost(postID) {
  database.ref('posts/' + postID + /votes/).transaction(function(votes) {
    return (votes || 0) - 1;
  });
}

function writeComment(type, parentID, message_body, authorName) {
  const id = database.ref('comments/').push().getKey();
  database.ref(type + '/' + parentID + "/comment/").push({id});
  database.ref('comments').child(id).set({
    message: message_body,
    author: authorName,
    votes: 0,
    timestamp: database_object.ServerValue.TIMESTAMP,
    iD: id
  });
}

function getComment(commentID) {
  database.ref('comments/' + commentID).once('value', function(snapshot) {
    var data = snapshot.val();
  });
}

var postRef = database.ref('/posts');
var commentRef = database.ref('comments');
export {postRef, writePost, upVotePost, downVotePost, writeComment, commentRef};
