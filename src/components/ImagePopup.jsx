function ImagePopup({ card, onClose }) {
  return (
    <section className= {`popup popup_zoom ${card && "popup_opened"}`} id="enlarged-image">
      <div className="popup__image-container">
        <button className="button popup__close-button" type="button" aria-label="Закрыть всплывающее окно">
          <img className="popup__close-button-image" src="../images/Close-icon.svg" alt="Закрыть" />
        </button>
        <img className="popup__enlarged-photo" src={card ? card.link : ''} alt="#" />
          <p className="popup__capture" id="popup-capture"></p>
      </div>
    </section>
  );
}

export default ImagePopup;

