import React, { useEffect, useState } from 'react'
import './HomeNewsList.scss'
import { CalendarFilled, CommentOutlined } from '@ant-design/icons';
import axios from 'axios';
import end_point_url from '../../API';

function HomeNewsList() {

    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        axios.get(end_point_url)
        .then((res) => setNewsList(res.data[0]["new-detail"]))
    })
    return (
        <div className='listnews'>
            {newsList.map((item, index) => (
                <div className='listnews__info' key={index}>
                <h3><a to="/">{item.title}</a></h3>
                <span className="listnews__date"><i><CalendarFilled /></i>{item.date}</span>
                <span className="listnews__date"><a to="/"><i><CommentOutlined /></i>{item.comment} Comments</a></span>
            </div>
            ))}
        </div>
    )
}

export default HomeNewsList