import React, {useState} from 'react';
import axios from 'axios';
import './NewsList.css'
import { useNavigate} from 'react-router-dom';


export default function NewsList ()  {
    const [value, setValue] = useState([]);
    const navigate = useNavigate();
    const [id, setId] = useState();
    const  getNews = async (limit = 100) =>{
        try {
            let {data: ids} = await axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`);
            ids = ids.slice(0 , limit);
            const news = [];
            for (const id of ids  ) {
                const {data} = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
                news.push(data);
            }
            return news;

        } catch (e) {
            throw e
        }
    }

    const news = Promise.resolve(getNews(100));
    news
        .then((value) => {
            setValue(value)
        })
        .catch((err) => {
            console.log(err);
        });

        return (
            <div className='card-wrapper'>
                    {
                        value?.map((val) =>  <div  className="card">
                            <button onClick={(e)=>{ navigate(`/news/${val.id}`)}}  key={val.id}>
                                <h4>{val.title}</h4>
                                <h6> {val.by}</h6>
                                <p>Счетчик: {val.descendants}</p>
                                <p className='card-url'> {val.url}</p>
                            </button>
                        </div>)
                    }
            </div>
        )
}