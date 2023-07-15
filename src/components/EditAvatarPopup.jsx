import PopupWithForm from "./PopupWithForm";
import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext.js";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const [avatar, setAvatar] = React.useState("");
  const input = React.useRef();

  const currentUser = React.useContext(CurrentUserContext);

  function handleAvatarChange(evt) {
    setAvatar(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({avatar: input.current.value});
  }

  return (
    <PopupWithForm
      id="popup-change-avatar"
      title="Обновить аватар"
      titleButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        id="avatar-ref"
        className="popup__input"
        type="url"
        placeholder="Ссылка на аватар"
        name="avatar-ref"
        onChange={handleAvatarChange}
        ref={input}
        required
      />
      <span className="popup__input-error popup__input-error_type_avatar-ref">Введите URL.</span>
      <label htmlFor="avatar-ref"/>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
