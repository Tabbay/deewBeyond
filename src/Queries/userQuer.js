import db from '/Users/cerigoff/deew-beyond/src/Firebase';
function ordersForUser(){

    var usersRef = db.collection("Users");

    usersRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

}