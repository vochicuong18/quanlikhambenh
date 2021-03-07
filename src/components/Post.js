import React,{ Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>
                <div className="services__title">
                    <h1>Bài viết y khoa nổi bật</h1>
                </div>
                <div className="post__card">
                    <div className='post__card postitem'>
                        <div className='postitem__title'>
                            Tiêu đề
                        </div>
                        <div className='postitem__noidung'>
                            Nội dung
                        </div>
                    </div>
                    <div className='post__card postitem'>
                        <div className='postitem__title'>
                            Tiêu đề
                        </div>
                        <div className='postitem__noidung'>
                            Nội dung
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Post