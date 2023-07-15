import PopupWithForm from "./PopupWithForm";
import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext.js";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const [name, setName] = React.useState("");
  const [about, setAbout] = React.useState("");

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleAboutChange(evt) {
    setAbout(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({name, about});
  }

  return (
    <PopupWithForm
      id="edit-profile-form"
      title="Редактировать профиль"
      titleButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        id="name"
        className="popup__input"
        type="text"
        placeholder="Имя"
        name="name"
        value={name}
        minLength={2}
        maxLength={40}
        required
        onChange={handleNameChange}
      />
      <span className="popup__input-error popup__input-error_type_name">
        Вы пропустили это поле.
      </span>
      <label htmlFor="name"/>
      <input
        id="occupation"
        className="popup__occupation popup__input"
        type="text"
        placeholder="О себе"
        name="occupation"
        value={about}
        minLength={2}
        maxLength={200}
        required
        onChange={handleAboutChange}
      />
      <span className="popup__input-error popup__input-error_type_occupation"/>
      <label htmlFor="occupation"/>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
