// 建立地圖
var map = L.map('map').setView([23.7, 121], 7);

// 加入 OpenStreetMap 地圖
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// ===== 生物標記 =====

// 陽明山
L.marker([25.16,121.56]).addTo(map)
.bindPopup(`
<h3>🌋 陽明山國家公園</h3>
<b>代表生物：</b><br>
🦋 台灣紋白蝶
`);

// 阿里山
L.marker([23.51,120.80]).addTo(map)
.bindPopup(`
<h3>🌲 阿里山</h3>
<b>代表生物：</b><br>
🐦 帝雉
`);

// 玉山
L.marker([23.47,120.96]).addTo(map)
.bindPopup(`
<h3>🏔 玉山國家公園</h3>
<b>代表生物：</b><br>
🐻 台灣黑熊
`);

// 台江
L.marker([23.02,120.14]).addTo(map)
.bindPopup(`
<h3>🦆 台江國家公園</h3>
<b>代表生物：</b><br>
黑面琵鷺
`);

// 墾丁
L.marker([21.95,120.78]).addTo(map)
.bindPopup(`
<h3>🐢 墾丁國家公園</h3>
<b>代表生物：</b><br>
綠蠵龜
🪸 珊瑚礁
`);
