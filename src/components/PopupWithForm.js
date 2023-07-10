import React from "react";

function PopupWithForm() {
  return (
    <section className="popup">
      <form className="popup-container" name="Информация о пользователе" noValidate>
        <button className="button popup-close-button" type="button" aria-label="Закрыть всплывающее окно">
          <img className="popup-close-button-image" src='../images/Close-icon.svg' alt="Закрыть">
        </button>
        <h2 className="popup-title">Редактировать профиль</h2>
        <input
          minLength="2" maxLength="200"
          required>
          <span className="popup-input-error popup-input-error_type_name">Вы пропустили это поле.</span>
          <label htmlFor="name"></label>
          <input
            minLength="2" maxLength="200"
            required>
            <span className="popup-input-error popup-input-error_type_occupation">Вы пропустили это поле.</span>
            <label htmlFor="occupation"></label>
            <button className="popup-submit-button button" type="submit" aria-label="Сохранить">Сохранить</button>
      </form>
    </section>
);
}

export default PopupWithForm;
