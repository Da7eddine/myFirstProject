$("#add-btn").on("click",function(){
    var imgUrl = document.getElementById("input-url")
    var placeDesc = document.getElementById("input-desc")
    $(".image-blocks").append(`
    <div class="place-element">
        <img src="${imgUrl.value}">
        <h2>${placeDesc.value}</h2>
    </div>
    `
    )
})

var removebtns = document.getElementsByClassName("remove")
for (var i = 0; i < removebtns.length; i++) {
    removebtns[i].addEventListener("click",function (e) {
        e.target.
            console.log(e.target)
    })
}
