<h1>Selamlar Ebru Hocam </h1>

public/: Statik dosyalar (örneğin, index.html, favicon) burada yer alır.

src/: Uygulamanın kaynak kodları burada yer alır.

components/: Uygulama genelinde tekrar kullanılan bileşenler.
- kartlarimi olusturmak icin kullandigim CreateCart.js
- sepetimi goruntulemek icin kullandigim DrawerBasket.jsx
- ve layoutum, suan ana sayfam banner, sonrasinda ise header sidebar ve shopping content olarak ayriliyor.
- herhangi bir urune tiklandiginda detay sayfama yonlendirmek icin kullandigim ProductDetail.jsx
- farkli sayfalardaki datalari birbirine baglamak icin context kullandim, her sayfa arasi props kullanmak,
 kod fazlaligina yol acabiliyor ve/veya bazi durumlarda kullanissiz olabiliyor.
- icons-images-products uygulamami develop ederken bana ihtiyacim olan bilgileri
 ve araclari sunan dosyalarim.Tum urunlerimi products/data.js de bulabilirsiniz.
- styles farkli farkli sayfalardaki uygulanan css dosyalarimi barindiriyor.
- Index.js main, app.js de route mekanizmasini kurdum ki sayfalar arasi gecisleri yapabileyim.


Fazla yer kaplamamasi acisindan nodenode_modules silinip ziplenmis ve bu sekilde
drive'a yuklenmistir.Unzip edildikten sonra npm i ile module tekrar eklenmeli
ve sonrasinda npm start ile proje acilmalidir.
