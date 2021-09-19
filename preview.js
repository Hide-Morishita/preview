window.addEventListener("DOMContentLoaded", () => {
  const preview = document.getElementById("preview");
  preview.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const blob = window.URL.createObjectURL(file);
    // 表示されているimgタグを取得、取得できた場合は表示されているimgタグを削除する
    const imageList = document.querySelector(".preview-img")
    if (imageList) {
      imageList.remove();
    }
    const previewImage = document.createElement("img");
    previewImage.setAttribute("src", blob);
    previewImage.setAttribute("class", "preview-img");
    const previewBox = document.getElementById("preview-box")
    previewBox.appendChild(previewImage);
  })
});