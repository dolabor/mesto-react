import React from "react";
import trashDeleteIcon from "../images/Trash.svg";
import likeIcon from "../images/like.svg";

function Card(props) {
  //const cardIsLiked =  props._likes.find(user => user._id === props._id)

  return (
    <template id="element-template">
      <div className="element">
        <img className="element-image" id="element-image"
             src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt=""/>
        <button className="element-delete-button button">
          <img id="trash-delete-icon" src={trashDeleteIcon} alt="Удалить карточку"/>
        </button>
        <div className="element-caption">
          <h2 className="element-name" id="element-name"></h2>
          <div className="element-like-section">
            <button className="button" type="button" aria-label="Мне нравится">
              <img className="element-like-button" src={likeIcon} alt="Нравится"/>
            </button>
            <span className="element-like-count"></span>
          </div>
        </div>
      </div>
    </template>
  );
}

export default Card;
