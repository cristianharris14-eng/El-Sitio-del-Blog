function FriendsList() {
    this.list = [];
}

const myFriends = new FriendsList();
const count = parseInt(process.argv[3]);

for (let i = 0; i < count; i++) {
    let nameElement = process.argv[4 + i];
    if (nameElement) {
        myFriends.list.push(nameElement);
    }
}

console.log(myFriends.list);