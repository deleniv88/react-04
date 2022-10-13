import PropTypes from "prop-types";
import css from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statlist}>
                {stats.map(st => (
                    <li key={st.id} className={css.item} >
                        <span className={css.label}>{st.label}</span>
                        <span className={css.percentage}>{st.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    )
};

