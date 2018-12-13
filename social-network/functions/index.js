const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotification = ((notification) => {
    return admin.firestore().collection('notifications').add(notification).then((doc) => {
        console.log("Notification added", doc);
    })
})

exports.postCreated = functions.firestore.document('posts/{postId}').onCreate(doc => {

    const post = doc.data();
    const notification = {
        user: `${post.authorFirstName} ${post.authorLastName}`,
        content: post.title,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification); // we have to return something becouse the function expects that

})