// import { Avatar, Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const imgDefault = (
    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.9508 0H27.0492C12.1103 0 0 12.1103 0 27.0492V27.9508C0 42.8897 12.1103 55 27.0492 55H27.9508C42.8897 55 55 42.8897 55 27.9508V27.0492C55 12.1103 42.8897 0 27.9508 0Z" fill="#C8C8C8" />
    </svg>
)

function AvatarHeader() {
    const auth = useAuth()
    const navigate = useNavigate()
    console.log(auth?.dataInfo)

    return (
        <div className='avatar'>
            <img src={"https://dealmintr.com/img/author_single/author_thumbnail.jpg"} className="img-avatar" />
            <div className='info-user'>
                <div className='name'>{auth?.dataInfo?.data?.name}</div>
                <div className='department'>{auth?.dataInfo?.data?.email}</div>
            </div>
        </div>
    );
}

export default AvatarHeader;
