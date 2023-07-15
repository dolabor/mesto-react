import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const inputEditAvatar = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({avatar: inputEditAvatar.current.value});
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
        ref={inputEditAvatar}
        required
      />
      <span className="popup__input-error popup__input-error_type_avatar-ref">Введите URL.</span>
      <label htmlFor="avatar-ref"/>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
