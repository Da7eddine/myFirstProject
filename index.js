$("#add-btn").on("click", function () {
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
console.log(removebtns);
var content = document.getElementsByClassName("place-element")
console.log(content);


for (var i = 0; i < removebtns.length; i++) {
    removebtns[i].addEventListener("click", function (event) {
        content[1].remove()
        // event.target.content.remove()
    })
}