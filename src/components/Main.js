import React from "react";
import profileAvatar from "../images/profile-avatar.jpg";
import editButtonLarge from "../images/edit-button-large.svg";
import addButtonLarge from "../images/add-button-large.svg";
import Card from "./Card.js";

function Main(props) {
  return (
    <main>
      <section className="profile">
        <div className="profile-info">
          <div className="profile-avatar">
            <img className="profile-avatar-image" src={profileAvatar} alt=""/>
          </div>
          <div className="profile-heading">
            <div className="profile-username">
              <h1 className="profile-title" id="user-name"></h1>
              <button className="button profile-edit-button" type="button" aria-label="Редактировать профиль">
                <img className="profile-edit-icon" src={editButtonLarge} alt="Кнопка редактирования"/>
              </button>
            </div>
            <p id="user-occupation" className="profile-subtitle"></p>
          </div>
        </div>

        <button className="button" type="button" aria-label="Добавить">
          <img className="profile-add-button" src={addButtonLarge} alt="Кнопка 'Добавить'"/>
        </button>
      </section>
      <section className="destinations" aria-label="Пункты назначения">
        <Card />
      </section>
    </main>
  )
}

export default Main;
