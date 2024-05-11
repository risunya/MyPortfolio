import { tasks } from "../../data/project-data"
import './projects.scss'

export const Projects = () => {
    return (
        <div className="worklist">
            {tasks.map(function(data) {
                return (
                    <div className="worklist-item">
                        <div className="number">{data.id}</div>
                        <div className="title">Name of work: {data.title}</div>
                        <div className="subtitle">Title {data.subtitle}</div>
                    </div>
                )
                })}
        </div>
    )
}