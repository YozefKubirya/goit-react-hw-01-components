import PropTypes from 'prop-types'
import css from './Statistics.module.css';
import { getRandomHexColor } from 'components/helpers/getRandomHexColor';

export const Statistics = ({ stats ,title}) => {
   return <section className={css.statistics}>
      {title && <h2 className={css.title } >{ title}</h2>}
      <ul className={css.statList}>
         {stats.map((list =>
            <li className={css.item} key={list.id}
             style={{backgroundColor: `${getRandomHexColor()}`}} 
            >
               <span className="label">{list.label}</span>
               <span className="percentage">{list.percentage}%</span>
            </li>))}
      </ul>
 
   </section>
};

Statistics.propTypes = {
   stats: PropTypes.arrayOf(
     PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number
    }), 
   ).isRequired, 
   title:PropTypes.string,
}