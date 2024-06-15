import { tasks } from "../../data/project-data"
import './projects.scss'

export const Projects = () => {
    return (
        <div className="projects-list">
            {tasks.map(function(data) {
                return (
                    <a className="projects-item" href={'projects/' + data.id}>
                        <div className='projects-img_wrapper'>
                          <img src='/project-pics/mac-pic.png' className='projects-img' alt="article logo"/>
                        </div>            
                        <div className="text-container">
                            <div className="projects-title">{data.title}</div>
                            <div className="projects-subtitle">{data.subtitle}</div>
                        </div>
                    </a>
                )
                })}
        </div>
    )
}