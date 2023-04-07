import React from 'react'
import './HomeNewsList.scss'
import { CalendarFilled, CommentOutlined } from '@ant-design/icons';

function HomeNewsList() {
    return (
        <div className='listnews'>
            <div className='listnews__info'>
                <h3><a to="">Lorem ipsum dolor sit amet, consectetur adidis.</a></h3>
                <span className="listnews__date"><i><CalendarFilled /></i>23rd Jan 2022</span>
                <span className="listnews__date"><a to=""><i><CommentOutlined /></i>33 Comments</a></span>
            </div>
            <div className='listnews__info'>
                <h3><a to="">Lorem ipsum dolor sit amet, consectetur adidis.</a></h3>
                <span className="listnews__date"><i><CalendarFilled /></i>23rd Jan 2022</span>
                <span className="listnews__date"><a to=""><i><CommentOutlined /></i>33 Comments</a></span>
            </div>
            <div className='listnews__infolast'>
                <h3><a to="">Lorem ipsum dolor sit amet, consectetur adidis.</a></h3>
                <span className="listnews__date"><i><CalendarFilled /></i>23rd Jan 2022</span>
                <span className="listnews__date"><a to=""><i><CommentOutlined /></i>33 Comments</a></span>
            </div>
        </div>
    )
}

export default HomeNewsList