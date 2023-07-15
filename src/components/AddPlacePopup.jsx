import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handlePlaceTitleChange(evt) {
    setName(evt.target.value);
  }

  function handlePlaceLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({name, link});
  }

  return (
    <PopupWithForm
      id="add-place-form"
      title="Новое место"
      titleButton="Cоздать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        id="title"
        className="popup__input"
        type="text"
        minLength={2}
        maxLength={40}
        placeholder="Название"
        name="title"
        onChange={handlePlaceTitleChange}
        required
      />
      <span className="popup__input-error popup__input-error_type_title">Вы пропустили это поле.</span>
      <label htmlFor="title"/>
      <input
        id="image-ref"
        className="popup__occupation popup__input"
        type="url"
        placeholder="Ссылка на картинку"
        name="image-ref"
        onChange={handlePlaceLinkChange}
        required
      />
      <span className="popup__input-error popup__input-error_type_image-ref">Введите адрес сайта.</span>
      <label htmlFor="image-ref"/>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
