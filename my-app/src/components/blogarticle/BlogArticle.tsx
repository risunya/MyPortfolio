import './blogarticle.scss';
import { useParams } from "react-router-dom";
import { articles } from "../../data/blog-data";
import { NotFound } from '../../pages/NotFound/Notfound';

export const BlogArticle = () => {
    const { articlenumber } = useParams();
    const article = articles.find(article => article.id === articlenumber);

    if (!article) {
        return <NotFound/>;
    }

    return (
        <div className="article-wrapper">
            <div className="article-container">
            <div className="article-info">
                <a className="article-date">{article.date}</a> 
                <div className="article-spec">
                        {article.frontend ? <div className="article-item">фронтенд</div> : null}
                        {article.backend ? <div className="article-item">бэкенд</div> : null}
                </div>
            </div>
            <div className="article-title">{article.title}</div>
            <div className='article-box'>
                {article.contentTextOne ? <div className="article-content">{article.contentTextOne}</div> : null}
                {article.contentPictureOne ? <img className="article-picture" src={article.contentPictureOne}/> : null}
                {article.contentTextTwo ? <div className="article-content">{article.contentTextTwo}</div> : null}
                {article.contentPictureTwo ? <img className="article-picture" src={article.contentPictureTwo}/> : null}
                {article.contentTextThree ? <div className="article-content">{article.contentTextThree}</div> : null}
                {article.contentPictureThree ? <img className="article-picture" src={article.contentPictureThree}/> : null}
            </div>
        </div>
        </div>
    );
};