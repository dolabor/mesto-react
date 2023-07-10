import React from "react";
import trashDeleteIcon from "../images/Trash.svg";
import likeIcon from "../images/like.svg";

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  //const cardIsLiked =  props._likes.find(user => user._id === props._id)

  return (
    <div className="element">
      <img className="element__image" id="element__image"
           src={card.link} alt={`Фотография ${card.name}`}/>
      <button className="element__delete-button button">
        <img id="trash__delete-icon" src={trashDeleteIcon} alt="Удалить карточку"/>
      </button>
      <div className="element__caption">
        <h2 className="element__name" id="element__name">{card.name}</h2>
        <div className="element__like-section">
          <button className="button" type="button" aria-label="Мне нравится">
            <img className="element__like-button" src={likeIcon} alt="Нравится"/>
          </button>
          <span className="element__like-count"></span>
        </div>
      </div>
    </div>
  );
}

export default Card;
