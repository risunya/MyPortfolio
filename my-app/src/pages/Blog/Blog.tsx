import { articles } from "../../data/blog-data"
import './blog.scss'

export const Projects = () => {
    return (
        <div className="blog-list">
            {articles.map(function(data) {
                return (
                    <a className="blog-item" href={data.href}>
                        <div className='blog-img_wrapper'>
                          <img src={data.picUrl} className='blog-img' alt="article logo"/>
                        </div>            
                        <div className="text-container">
                            <div className="blog-title">{data.title}</div>
                            <div className="blog-subtitle">{data.subtitle}</div>
                            <div className="spec-info">
                                {data.frontend ? <div className="spec-item">фронтенд</div> : null}
                                {data.backend ? <div className="spec-item">бэкенд</div> : null}
                            </div>
                        </div>
                    </a>
                )
                })}
        </div>
    )
}