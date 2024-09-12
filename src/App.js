import "./styles.css";

const Header = () => {
  return (
    <div>
      <header>
        <div className="button-container">
          <button>Menu</button>
          <button>Hakkında</button>
          <button>Saatler & Lokasyon</button>
        </div>
      </header>
      <main>
        <h1 className="logo-container">Basit Yemekler Restoranı</h1>
        <p className="info-container">
          Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz?
          Tamamdır. Goralı? Hemen geliyor. Ateşte kavrulmuş kuşkonmaz börekleri
          ile yerel kaynaklı balla sırlanmış haşlanmış somon yumurtası? Hadi
          oradan. Caddenin karşısındaki Fantezi Yemek Kafe'yi deneyin.
        </p>
      </main>
      <div className="image-container">
        <div className="image-wrapper">
          <img className="hot-dog" src="images/hotdogs.jpg" alt="Hot Dog"/>
        </div>
        <div className="image-wrapper">
          <img src="images/sandwich.jpg" alt="Sandwich"/>
        </div>
        <div className="image-wrapper">
          <img src="images/hamburger.jpg"  alt="Hamburger"/>
        </div>
      </div>
      <footer>
        <p>
          Made by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Coding Company
          </a>
        </p>
      </footer>
    </div>
  );
};
export default Header;
