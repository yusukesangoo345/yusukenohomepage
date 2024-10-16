// ナビゲーションバーのハンバーガーメニュー制御
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    // バーのアニメーション
    burger.classList.toggle('toggle');
});
// 複数の画像データ
const images = [
    { src: "https://via.placeholder.com/200x150?text=記事1", link: "https://example.com/article1" },
    { src: "https://via.placeholder.com/200x150?text=記事2", link: "https://example.com/article2" },
    { src: "https://via.placeholder.com/200x150?text=記事3", link: "https://example.com/article3" },
    { src: "https://via.placeholder.com/200x150?text=記事4", link: "https://example.com/article4" },
    { src: "https://via.placeholder.com/200x150?text=記事5", link: "https://example.com/article5" },
    { src: "https://via.placeholder.com/200x150?text=記事6", link: "https://example.com/article6" },
    { src: "https://via.placeholder.com/200x150?text=記事7", link: "https://example.com/article7" },
    { src: "https://via.placeholder.com/200x150?text=記事8", link: "https://example.com/article8" },
    { src: "https://via.placeholder.com/200x150?text=記事9", link: "https://example.com/article9" }
];

// 画像一覧を表示する関数
function displayImages() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // 既存の画像をクリア

    // 画像を6つずつ表示
    images.forEach((image, index) => {
        if (index < 6) { // 最初の6つの画像を表示
            const articleElement = document.createElement('div');
            articleElement.className = 'article';

            const imgElement = document.createElement('img');
            imgElement.src = image.src;

            imgElement.addEventListener('click', () => {
                window.location.href = image.link; // 画像クリックでリンクへ遷移
            });

            const titleElement = document.createElement('p');
            titleElement.textContent = image.link; // 記事タイトルを表示（リンクのURLを使用）

            articleElement.appendChild(imgElement);
            articleElement.appendChild(titleElement);
            gallery.appendChild(articleElement);
        }
    });
}

// ページが読み込まれたときに画像を表示
document.addEventListener('DOMContentLoaded', displayImages);
