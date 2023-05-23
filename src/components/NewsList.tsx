import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './NewsList.css';
import { INews } from '../App';

const NewsList: FC<any> = ({ setSelectedNews }) => {
  const navigate = useNavigate();
  const [ value, setValue ] = useState<INews[]>([]);

  const getNews = async (limit = 100) => {
    try {
      let { data: ids } = await axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json`);
      ids = ids.slice(0, limit);

      const request = async (id: number) => {
        const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${ id }.json`);
        return response.data;
      }

      const promises = ids.map((id: number) => request(id));

      const news: INews[] = await Promise.all(promises);

      setValue(news);
    } catch (e) {
      if (axios.isAxiosError(e)) console.error(e.message);
    }
  }

  useEffect(() => {
    getNews().then();
  }, []);

  return (
    <div className="card-wrapper">
      {
        value.map((val) => (
            <div key={ val.id } className="card">
              <button onClick={ () => {
                navigate(`/news/${ val.id }`);
                setSelectedNews(val);
              }
              }>
                <h4>{ val.title }</h4>
                <h6> { val.by }</h6>
                <p>Счетчик: { val.descendants }</p>
                <p className="card-url"> { val.url }</p>
              </button>
            </div>
          )
        )
      }
    </div>
  );
}

export default NewsList;
