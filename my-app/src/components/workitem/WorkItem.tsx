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
        <div className="work-container">
            <div className='work-title'>{project.title}</div>
            <div className="work-info">
                <a className="work-date">some info</a> 
            </div>
            <div className="work-article">{project.subtitle}</div>
        </div>
    )
}