self.addEventListener("fetch", (e) => {
    if((new URL(e.request.url)).hostname == "www.kongregate.com") {
        console.log("kongregate");
        e.respondWith(fetch("./API_AS3_Local.swf"));
    }
})