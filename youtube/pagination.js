let changePages = (function () {
    let numberOfRecords = 0;
    let totalNumberOfPages = 0;
    let currentPageNumber = 0;

    return {
        getLeftPage: function () {
            let pageNumber = 0;
            if (numberOfRecords !== 0) {
                pageNumber = currentPageNumber === 1 ? 1 : --currentPageNumber;
            }
            return pageNumber;
        },
        getRightPage: function () {
            let pageNumber = 0;
            if (numberOfRecords !== 0) {
                pageNumber = currentPageNumber === totalNumberOfPages ? totalNumberOfPages : ++currentPageNumber;
            }
            return pageNumber;
        },
        getLeftEndPage: function () {
            return numberOfRecords !== 0 ? currentPageNumber = 1 : 0;
        },
        getRightEndPage: function () {
            return numberOfRecords !== 0 ? currentPageNumber = totalNumberOfPages : 0;
        },
        fixPages(givenNumber) {
            if (givenNumber === 0) {
                currentPageNumber = 0;
                totalNumberOfPages = 0;
                numberOfRecords = 0;
            } else {
                numberOfRecords = givenNumber;
                currentPageNumber = 1;
                totalNumberOfPages = parseInt(numberOfRecords / 4, 10) + (numberOfRecords % 4 != 0 ? 1 : 0);
            }
            totalPages.textContent = totalNumberOfPages;
            currentPage.textContent = currentPageNumber;
        },
        changeContent() {
            let startValue = 0;
            let endValue = 0;
            attachData(startValue, endValue);
            if (numberOfRecords !== 0) {
                startValue = currentPageNumber * 4 - 4;
                endValue = currentPageNumber * 4 > numberOfRecords ? numberOfRecords : currentPageNumber * 4;
                attachData(startValue, endValue);
            }
        }
    };
})();

let pagination = document.createElement('div');


let leftEnd = aTag.cloneNode();
let moveLeft = aTag.cloneNode();
let moveRight = aTag.cloneNode();
let rightEnd = aTag.cloneNode();
let pageInfo = pagination.cloneNode();
let currentPage = spanTag.cloneNode();
let off = spanTag.cloneNode();
let totalPages = spanTag.cloneNode();

currentPage.textContent = '0';
off.innerHTML = '&nbsp; of &nbsp;';
totalPages.textContent = '0';
pageInfo.classList.add('pageInfo');

pageInfo.appendChild(currentPage);
pageInfo.appendChild(off);
pageInfo.appendChild(totalPages);

moveRight.innerHTML = "<i class='fas fa-chevron-right'></i>";
moveRight.addEventListener('click', (event) => {
    event.preventDefault();
    currentPage.textContent = changePages.getRightPage();
    changePages.changeContent();
});

moveLeft.innerHTML = "<i class='fas fa-chevron-left'></i>";
moveLeft.addEventListener('click', (event) => {
    event.preventDefault();
    currentPage.textContent = changePages.getLeftPage();
    changePages.changeContent();
});

rightEnd.innerHTML = "<i class='fas fa-chevron-right'></i><i class='fas fa-chevron-right'></i>";
rightEnd.addEventListener('click', (event) => {
    event.preventDefault();
    currentPage.textContent = changePages.getRightEndPage();
    changePages.changeContent();
});

leftEnd.innerHTML = "<i class='fas fa-chevron-left'></i><i class='fas fa-chevron-left'></i>";
leftEnd.addEventListener('click', (event) => {
    event.preventDefault();
    currentPage.textContent = changePages.getLeftEndPage();
    changePages.changeContent();
});

pagination.appendChild(leftEnd);
pagination.appendChild(moveLeft);
pagination.appendChild(pageInfo);
pagination.appendChild(moveRight);
pagination.appendChild(rightEnd);
pagination.classList.add('pagination');
body.appendChild(pagination);