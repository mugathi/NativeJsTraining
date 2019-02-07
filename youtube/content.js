
let documentFrag = document.createDocumentFragment();
let videoContent = document.createElement('div');
let template = document.createElement('template');
let videoCard = document.createElement('div');
let videoImage = document.createElement('img');
let linkTag = aTag.cloneNode();
linkTag.target='_blank';
let title = spanTag.cloneNode();
let description = spanTag.cloneNode();
let authorIcon = spanTag.cloneNode();
let author = spanTag.cloneNode();
let viewsIcon = spanTag.cloneNode();
 let views = spanTag.cloneNode();
 let calendarIcon = spanTag.cloneNode();
 let publishedDate = spanTag.cloneNode();
videoCard.appendChild(videoImage);
title.classList.add('title');
linkTag.appendChild(title);
videoCard.appendChild(linkTag);
description.classList.add('description');
videoCard.appendChild(description);
authorIcon.innerHTML='<i class="far fa-check-circle"></i>';
authorIcon.classList.add('author');
videoCard.appendChild(authorIcon);
author.classList.add('author');
videoCard.appendChild(author);
viewsIcon.innerHTML='<i class="fas fa-eye"></i>';
viewsIcon.classList.add('views');
videoCard.appendChild(viewsIcon);
views.classList.add('views');
videoCard.appendChild(views);
calendarIcon.innerHTML='<i class="far fa-calendar"></i>';
calendarIcon.classList.add('publishedDate');
videoCard.appendChild(calendarIcon);
publishedDate.classList.add('publishedDate');
videoCard.appendChild(publishedDate)
template.appendChild(videoCard);
videoContent.appendChild(template);
videoContent.classList.add('videoContent');

function attachData(start, end){
    videoContent.innerHTML='';
    for(let i=start;i<end;i++){
        let videoCards = template.cloneNode(true);
        videoCards.querySelector('img').src=responseData[i].snippet.thumbnails.medium.url;
        videoCards.querySelector('.title').textContent=responseData[i].snippet.title;
        videoCards.querySelector('a').href='https://www.youtube.com/watch?v='+responseData[i].id.videoId;
        videoCards.querySelector('.description').textContent=responseData[i].snippet.description;
        videoCards.querySelectorAll('.author')[1].textContent = statisticsData[i].snippet.channelTitle.substring(0,9);
        let views = statisticsData[i].statistics.viewCount;
        videoCards.querySelectorAll('.views')[1].textContent = views>1000000?parseInt(views/1000000, 10)+'M':views;
        videoCards.querySelectorAll('.publishedDate')[1].textContent = statisticsData[i].snippet.publishedAt.substring(0,10);
        videoCards.classList.add('videoCard');
        documentFrag.appendChild(videoCards);
    }
    videoContent.appendChild(documentFrag);
    body.appendChild(videoContent);
}

