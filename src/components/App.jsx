import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main.jsx";
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';

import React from 'react';

function App(props) {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({})
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  return (
    <div className="page">
      <Header/>
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
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
        titleButton="Да">
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}>
      </ImagePopup>
    </div>
  );
}

export default App;
