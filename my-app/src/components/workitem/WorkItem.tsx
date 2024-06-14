import './workitem.scss'
import { useParams } from "react-router-dom";
import { tasks } from "../../data/project-data";
import { NotFound } from '../../pages/NotFound/Notfound';

export const WorkItem = () => {
    const { projectnumber } = useParams();
    const project = tasks.find(project => project.id === projectnumber);

    if (!project) {
        return <NotFound/>
    }

    return (
        <div className='work-container'>
        <div className='controller'>
        {((+project.id) !== 1) ? <a className="left-arrow" href={'/projects/' + (+project.id - 1)}>🢀</a> : null}
        </div>
        <div className="work-box">
            <div className='work-title'><span className='sup-span'>Название:</span>{project.title}</div>
            <div className="work-info">
                <span className='sup-span'>Статус:</span>
                <div className="work-status">В разработке⚠️</div> 
                <a className='watch-live' href='#' target='_blank'>Попробовать</a>
                <a className='watch-live' href='#' target='_blank'>Смотреть код</a>
            </div>
            <div className="work-article">
                <span className='sup-span'>Описание:</span> 
                {project.subtitle}</div>
            <div className="project-images">
                <img className='project-image' src='/project-pics/mac-pic.png' alt="Tech logo"/>
                <img className='project-image' src='/project-pics/phone-pic.png' alt="Tech logo"/>
            </div>
            <div className='worklist-tech'>Ключевые технологии:
            {project.techStack.map(function(photoUrl, index) {
                return (
                        <div className='worklist-tech__logo-wrapper' key={index}>
                            <img src={photoUrl} className='worklist-tech__logo' alt="Tech logo"/>
                        </div>
                        );
            })}
            </div>
            <div className="project-article">
                {project.article}
            </div>
        </div>
        <div className='controller'>
            {((+project.id) !== 4) ? <a className="right-arrow" href={'/projects/' + (+project.id + 1)}>🢂</a> : null}
        </div>
        </div>
    )
}