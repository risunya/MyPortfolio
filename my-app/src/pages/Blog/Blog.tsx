import { articles } from "../../data/blog-data"
import './blog.scss'

export const Blog = () => {
    return (
        <div className="blog-list">
            {articles.map(function(data) {
                return (
                    <div className="blog-item" >           
                        <div className="text-container">
                            <div className="spec-info">
                                {data.frontend ? <div className="spec-item">фронтенд</div> : null}
                                {data.backend ? <div className="spec-item">бэкенд</div> : null}
                            </div>
                            <div className="blog-title">{data.title}</div>
                        </div>
                        <div className='blog-img_wrapper'>
                          <img src={data.picUrl} className='blog-img' alt="article logo"/>
                        </div> 
                        <div className="blog-subtitle">{data.subtitle}</div>
                        <a className='read-button' href={data.href}>Читать далее</a>
                    </div>
                )
                })}
        </div>
    )
}