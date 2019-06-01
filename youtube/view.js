
let responseData;
let statisticsData;
let aTag = document.createElement('a');
aTag.href = '#';
let spanTag = document.createElement('span');
let body = document.getElementById('body');
let header = document.createElement('div');
let searchDiv = document.createElement('div');
let inputData = document.createElement('input');
let searchButton = document.createElement('button');
searchButton.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='60%' height='60%' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path></svg>";
searchButton.classList.add('searchButton');
inputData.type = 'text';
inputData.placeholder = "Type to search";
inputData.classList.add('inputData');
searchDiv.appendChild(inputData);
searchDiv.appendChild(searchButton);
searchDiv.classList.add('searchDiv');
header.appendChild(searchDiv);
header.classList.add('header');
body.appendChild(header);

searchButton.addEventListener('click', () => {
    fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=' + inputData.value).then((response) => {
        response.json().then(function (data) {
            responseData = data.items;
            let idToFetch = responseData.reduce((acc, cur) => {
                return acc + ',' + cur.id.videoId;
            }, '').substr(1);
            fetch('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=' + idToFetch + '&part=snippet,statistics').then((response) => {
                response.json().then((data) => {
                    statisticsData = data.items;
                    let length = responseData.length;
                    changePages.fixPages(length);
                    changePages.changeContent();
                    if (length == 0) {
                        alert('no records found');
                    }
                });
            })
        });
    });
});