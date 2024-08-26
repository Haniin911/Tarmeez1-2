let left = document.getElementById('left');
let right = document.getElementById('right');
let request = new XMLHttpRequest();
let arr = [];

// function getResource() {
//     request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
//     request.responseType = "json";
//     request.send();
//     request.onload = function () {
//         if (request.status >= 200 && request.status < 300) {
//             arr = request.response;
//             console.log(arr);
//         } else {
//             console.error('Failed to load resource:', request.status, request.statusText);
//         }
//     };
// }
// getResource();
// let names = ['leanne Graham', 'Erivin Howel', 'climentine Baush', 'patricia libak', 'chelsey dietrich', 'dennis schulist', 'jhon doe', 'leonardo Decabrio', 'Edrian Darlo', 'furat leon'];

// for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     let newElem = document.createElement("div");
//     newElem.textContent = name;
//     newElem.setAttribute("id", `div${i}`);
//     newElem.style.cssText = "width: 229px;background-color: white;border-radius: 32px;padding: 18px;margin: 5px;font-size: 20px;text-align: center;";
//     newElem.addEventListener('click', function() {
//         displayPosts(i + 1);  
//     });
//     left.appendChild(newElem);
// }

// function displayPosts(userId) {
//     right.innerHTML = '';  
//     for(let post of arr){
//         if(post.userId === userId){
//             let content = `
//             <div style="width: 229px;background-color: white;border-radius: 32px;margin-bottom: 10px;padding: 10px;">
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </div>`;
//             right.innerHTML += content;
//         }
//     }
// }
function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => {
            left.innerHTML = "";
            for (let user of users) {
                let content = `<div id="user" style="width: 209px;background-color: white;border-radius: 32px;padding: 9px;margin: 5px;font-size: 13px;text-align: center;height: 66px;" onClick="getPosts(${user.id})">
                <h3>${user.name}</h3>
                <h5>${user.email}</h5>
                </div>`;
                left.innerHTML += content;
            }
        })
        .catch((error) => console.error('Failed to load users:', error));
}

function getPosts(userId) {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
        .then((response) => response.json())
        .then((posts) => {
            right.innerHTML = ''; // Clear previous posts
            for (let post of posts) {
                let content = `
                <div style="width: 229px;background-color: white;border-radius: 32px;margin-bottom: 10px;padding: 10px;">
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </div>`;
                right.innerHTML += content;
            }
        })
        .catch((error) => console.error('Failed to load posts:', error));
}

getUsers();
