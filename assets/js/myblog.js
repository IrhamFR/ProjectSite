let myblogs = []

let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

function addBlog(event) { 
    event.preventDefault()

    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image")

    image = URL.createObjectURL(image.files[0])

    let myblog = {
        title,
        content,
        image,
        postedAt: new Date()
    }

    myblogs.push(myblog)
    rendermyblogs()
}

function rendermyblogs() {

    let containerBlogs = document.getElementById("contents")

    containerBlogs.innerHTML = ""

    for (let i = 0; i < myblogs.length; i++) {
        containerBlogs.innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${myblogs[i].image}" alt="" />
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
                <h1>
                    <a href="myblog-detail.html" target="_blank">${myblogs[i].title}</a>
                </h1>
                <div class="detail-blog-content">
                    ${getFullTime(myblogs[i].postedAt)} | Irham Fatriyandas Rufdo
                </div>
                <p>
                    ${myblogs[i].content}
                </p>
                <br>
                <br>
                <br>
                <div style="text-align: right;
                margin: 20px">
                    <span style="font-size: 15px; color: grey;">${getDistanceTime(myblogs[i].postedAt)}</span>
                </div>
            </div>
        </div>  
        `
    }
}

function getFullTime(time) {
    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()

    let hour = time.getHours()
    let minute = time.getMinutes()

    return `${date} ${month[monthIndex]} ${year} ${hour}:${minute} WIB`
}

function getDistanceTime(time) {
    let distance = new Date() - new Date(time)

    let miliseconds = 1000
    let secondInMinutes = 60
    let minuteInHour = 60
    let secondInHour = secondInMinutes * minuteInHour
    let hourInDay = 23

    let dayDistance = distance / (miliseconds * secondInHour * hourInDay)

    if (dayDistance >= 1) {
        const dayDate = Math.floor(dayDistance) + ' day ago'
        return dayDate
    } else {
        let hourDistance = Math.floor(distance / (miliseconds * secondInHour))
        if (hourDistance > 0) {
            return hourDistance + ' hour ago'
        } else {
            let minuteDistance = Math.floor(distance / (miliseconds * secondInMinutes))
            return minuteDistance + ' minute ago'
        }
    }

}

setInterval(function () {
    rendermyblogs()
}, 2000)