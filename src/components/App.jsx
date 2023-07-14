import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main.jsx";
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import {api} from "../utils/api.js";

import React from 'react';

function App(props) {
  const [currentUser, setCurrentUser] = React.useState({});

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [cards, setCards] = React.useState([]);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleDeleteCardClick() {
    setIsDeleteCardPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard({})
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  // function handleCardLike(card) {
  //   const isLiked = card.likes.some(i => i._id === currentUser._id);
  //
  //   api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
  //     setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  //   });
  // }

  // function handleCardDelete(evt) {
  //   evt.preventDefault();
  //   api.deleteCard(cardToDelete._id).then(() => {
  //     const newCards = cards.filter((item) => item !== cardToDelete);
  //     setCards(newCards);
  //     closeAllPopups();
  //   },
  //     (err) => {
  //     console.log((err))
  //     }
  //   )
  // }

  React.useEffect(() => {
    api.getProfile()
      .then((profileData) => {
        setCurrentUser(profileData)
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    api.getInitialCards(cards)
      .then((cardList) => {
        setCards(cardList);
      })
      .catch((err) => console.log(err))
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header/>
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardDelete={handleDeleteCardClick}
          cards={cards}
          // onCardLike={}
        />
        <Footer/>

        <PopupWithForm
          id="edit-profile-form"
          title="Редактировать профиль"
          titleButton="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
          <input
            id="name"
            className="popup__input"
            type="text"
            placeholder="Имя"
            name="name"
            defaultValue="Жак-Ив Кусто"
            minLength={2}
            maxLength={40}
            required=""
          />
          <span className="popup__input-error popup__input-error_type_name">Вы пропустили это поле.</span>
          <label htmlFor="name"/>
          <input
            id="occupation"
            className="popup__occupation popup__input"
            type="text"
            placeholder="О себе"
            name="occupation"
            defaultValue="Исследователь океана"
            minLength={2}
            maxLength={200}
            required=""
          />
          <span className="popup__input-error popup__input-error_type_occupation">Вы пропустили это поле.</span>
          <label htmlFor="occupation"/>
        </PopupWithForm>

        <PopupWithForm
          id="add-place-form"
          title="Новое место"
          titleButton="Cоздать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
          <input
            id="title"
            className="popup__input"
            type="text"
            minLength={2}
            maxLength={40}
            placeholder="Название"
            name="title"
            required=""
          />
          <span className="popup__input-error popup__input-error_type_title">Вы пропустили это поле.</span>
          <label htmlFor="title"/>
          <input
            id="image-ref"
            className="popup__occupation popup__input"
            type="url"
            placeholder="Ссылка на картинку"
            name="image-ref"
            required=""
          />
          <span className="popup__input-error popup__input-error_type_image-ref">Введите адрес сайта.</span>
          <label htmlFor="image-ref"/>
        </PopupWithForm>

        <PopupWithForm
          id="popup-change-avatar"
          title="Обновить аватар"
          titleButton="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
          <input
            id="avatar-ref"
            className="popup__input"
            type="url"
            placeholder="Ссылка на аватар"
            name="avatar-ref"
            required=""
          />
          <span className="popup__input-error popup__input-error_type_avatar-ref">Введите URL.</span>
          <label htmlFor="avatar-ref"/>
        </PopupWithForm>

        <PopupWithForm
          id="popup-confirm-delete"
          title="Вы уверены?"
          titleButton="Да"
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}>
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}>
        </ImagePopup>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
