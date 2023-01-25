import { useTeam } from '../../hooks/useTeam';
import { UserTag } from '../UserTag';
import { ReactComponent as MediumPriorityIcon } from '../../icons/medium_priority.svg';
import { ReactComponent as HighPriorityIcon } from '../../icons/high_priority.svg';
import './style.scss';

export const Task = ({ task }) => {
    const team = useTeam().value
    const date = new Date(task.date)
    
    return (
        <div className='Task-Component' >
            <div className="top">
                <div className="task-data">
                    <input type="radio" name="" id="teste" />
                    <p>{task.title}</p>
                    { !task.priority ? null 
                        : task.priority == 1 ? <MediumPriorityIcon /> 
                        : <HighPriorityIcon />
                    }
                    <p className="task-date">{date.toLocaleDateString('pt-BR', { weekday: 'long' }).split('-')[0]}, {date.toLocaleDateString()}</p>
                </div>
                <hr />
                <div className="tasked-person">
                    <p>Responsável</p>
                    {task.planner.split(',').map(planner => {
                        return (
                            <UserTag user={team.filter(user => user.id == planner)[0]} />
                        )
                    })}
                </div>
                <hr />
                <div className="tasked-person">
                    <p>Desenvolvedor</p>
                    {task.worker.split(',').map(worker => {
                        return (
                            <UserTag key={worker.id} user={team.filter(user => user.id == worker)[0]} />
                        )
                    })}
                </div>
            </div>
            <hr className="h-hr" />
            <div className="bottom">

            </div>
        </div>
    )
}