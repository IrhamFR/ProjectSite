let myblogs = []

function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image")

    image = URL.createObjectURL(image.files[0])

    let myblog = {
        title,
        content,
        image
    }

    myblogs.push(myblog)
    rendermyblogs()
}

function rendermyblogs() {
    console.log(myblogs);

    let containerBlogs = document.getElementById("contents")

    containerBlogs.innerHTML = ""

    for (let i = 0; i < myblogs.length; i++) {
        containerBlogs.innerHTML += `
        <div style="flex-direction: row;
        padding: 10px;
        width: 59%;
        display: block;
        margin: 3%;
        border: none;
        padding: 40px 0px 40px 50px;
        border-radius: 10px;
        background-color: white;">
            <div style="width: 100%;
            display: block;">
                <img src="${myblogs[i].image}" alt="" />
            </div>
            <div>
                <div>
                    <button style="background-color: black;
                    color: white;
                    border: none;
                    padding: 8px 30px;
                    border-radius: 30px;
                    cursor: pointer;">Edit Post</button>
                    <button style="background-color: black;
                    color: white;
                    border: none;
                    padding: 8px 30px;
                    border-radius: 30px;
                    cursor: pointer;">Post Blog</button>
                </div>
                <h1>
                    <a href="myblog-detail.html" target="_blank">${myblogs[i].title}</a>
                </h1>
                <div>
                    11 Jul 2022 10:00 WIB | Irham Fatriyandas Rufdo
                </div>
                <p>
                    ${myblogs[i].content}
                </p>
                <div style="text-align: right;
                margin: 20px">
                    <span style="font-size: 15px; color: grey;">0 minutes ago</span>
                </div>
            </div>
        </div>
        `
    }
}