var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
        console.log (images[i].src);
    }
}

preload(
/*Argentina - 0 */    "https://wallpaper.forfun.com/fetch/c5/c55765dd0a538ab646280d2cf4c1923b.jpeg?download=earth-cerro_torre-argentina-cerro_chalt%C3%A9n-glacier-mount_fitzroy-patagonia-1522961.jpeg",
/*Cuba - 1 */         "https://s1.picswalls.com/wallpapers/2014/07/25/awesome-cuba-wallpaper_043232386_107.jpg",
/*Indonesia - 2 */    "https://s1.picswalls.com/wallpapers/2014/08/08/indonesia-desktop-background_020529203_164.jpg",
/*Italia - 3 */       "https://wallpapercat.com/w/full/d/2/7/31660-3840x2160-desktop-4k-italy-wallpaper.jpg",
/*França - 4 */       "https://wallpapercave.com/wp/wp1856659.jpg",
/*Padrão - 5 */       "https://www.ticasino.com/uploads/_2000xAUTO_crop_center-center_none/Bus_Tours_Midpage_2400X1200.jpg",
)