import editButtonLarge from "../images/edit-button-large.svg";
import addButtonLarge from "../images/add-button-large.svg";
import Card from "./Card.jsx";
import React from "react";
import {api} from "../utils/api.js";

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {

    api.getProfile()
      .then((profileData) => {
        setUserName(profileData.name);
        setUserDescription(profileData.about);
        setUserAvatar(profileData.avatar);
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
    <main>
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar" onClick={onEditAvatar}>
            <img className="profile__avatar-image" src={userAvatar} alt=""/>
          </div>
          <div className="profile__heading">
            <div className="profile__username">
              <h1 className="profile__title" id="user__name">{userName}</h1>
              <button className="button profile__edit-button"
                      type="button"
                      aria-label="Редактировать профиль"
                      onClick={onEditProfile}>
                <img className="profile__edit-icon" src={editButtonLarge} alt="Кнопка редактирования"/>
              </button>
            </div>
            <p id="user__occupation" className="profile__subtitle">{userDescription}</p>
          </div>
        </div>

        <button className="button" type="button" aria-label="Добавить" onClick={onAddPlace}>
          <img className="profile__add-button" src={addButtonLarge} alt="Кнопка 'Добавить'"/>
        </button>
      </section>
      <section className="destinations" aria-label="Пункты назначения">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              // onCardClick = {onCardClick}
              // onCardLike = {onCardLike}
              // onCardDelete = {onCardDelete}
            />
          )
        })}
      </section>
    </main>
  )
}

export default Main;
