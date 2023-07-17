import React from "react";
import './Style.css';

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <div className="content">
        <div className="text-content">
          <h1 id="heroTitle">Antique Adventures: Uncovering Legends and Defending History</h1>
          <p className="text_contenr-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.</p>
        </div>
        <div className="button-group">
          <button className="btn-hero-1">Explore now!</button>
          <button  className="btn-hero-2">Create</button>
        </div>
        <div className="stats">
          <div className="stat">
            <span>100+</span>
            <span className="brand">Brands</span>
          </div>
          <div className="stat">
            <span>20k+</span>
            <span className="brand">Fashion Designers</span>
          </div>
          <div className="stat">
            <span>60k+</span>
            <span className="brand">Fashion Shows</span>
          </div>
        </div>
      </div>
      <div className="image-group">
       
        <img id="img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG3-hpK86Tdh99o7lRZcinZTDiEzMakvq5MpjMTRL177UOqFrQl-JjIGxN-6ofPLterTY&usqp=CAU" alt="Antique Camera" />
        <img id="img3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--IDxs4ZWC7FT4nNEmS8akCACx3FlwPaKVg&usqp=CAU" alt="Cash Register" />
        <img id="img4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTMZC8o0SU3MlxvWnIZtSshcguveala3fMBgZFAvIuDdfc-Pb4H1isOrLQkPMBqUlAPwA&usqp=CAU" alt="Old Clock" />
        <img id="img5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6yXCV2wj0HoHRV7gCC1nurdrnUe94-O0Hv4Q7UJW1fFMhlJJxioxdB4mdedf_Che_JM&usqp=CAU" alt="Compass" />
        <img id="img6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnm60b5K0eIOpfd4OUgiM5tjPdA7PxMyTWQ&usqp=CAU" alt="Lighter" />
      </div>
    </div>
  );
};

export default HeroSection;