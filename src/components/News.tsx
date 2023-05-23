import { useNavigate } from 'react-router-dom';
import React, { FC } from 'react';

const News: FC<any> = ({ selectedNews }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>News</h2>
      <button onClick={ () => navigate(-1) }>Go Back</button>
      <div key={ selectedNews.id } className="cardNews">
        <h4>{ selectedNews.title }</h4>
        <h6> { selectedNews.by }</h6>
        <p>Счетчик: { selectedNews.descendants }</p>
        <p className="card-url"> { selectedNews.url }</p>
      </div>
    </div>
  );
}

export default News;
