import PropTypes from "prop-types";
import './Statistics.css';

export const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}
            <ul className="stat-list">
                {stats.map(st => (
                    <li key={st.id} className="item" >
                        <span className="label">{st.label}</span>
                        <span className="percentage">{st.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
};

