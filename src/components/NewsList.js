import React from 'react';
import axios from 'axios';

export default class NewsList extends React.Component {
    state = {
        news: []
    }

    componentDidMount() {
        axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty` )
            .then(res => {
                const news = res.data;
                this.setState({ news });
                console.log(news , "qqqqqqqqqqqqqqqqqqq")
            })
        axios.get(`https://hacker-news.firebaseio.com/v0/item/9093.json?print=pretty`)
            .then(res => {
                const newItem = res.data;
                this.setState({ newItem });
                console.log(newItem, "sssssssssssssssssssssss")
            })
    }

    render() {
        return (
            <ul>
                {
                    this.state.news
                        .map(newNew =>

                            <li key={newNew.index}>{
                                newNew
                            }</li>
                        )
                }
            </ul>
        )
    }
}