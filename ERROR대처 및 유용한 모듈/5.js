function setThumbnail(event) {
    var reader = new FileReader();

    reader.onload = function(event) {
      var img = document.createElement("img");
      img.setAttribute("src", event.target.result);
      document.querySelector("div#image_container").appendChild(img);
    };

    reader.readAsDataURL(event.target.files[0]);
  }
출처: https://sinna94.tistory.com/entry/JavaScript-이미지-업로드-미리보기-만들기 [Chungs:티스토리]