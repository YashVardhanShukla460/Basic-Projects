function maker(title, name, views, timeago, duration, thumbnail) {
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" />
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${name} • ${views}views • ${timeago}</p>
            </div>
        </div>`
        document.querySelector(".container").innerHTML+=html

}
maker("Hello", "code with harry", 183923, "2 Months ago", "32:25", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg");
maker("Introduction to Backend | Sigma Web Dev video #2", "code with harry", 183923, "2 Months ago", "32:25", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg");