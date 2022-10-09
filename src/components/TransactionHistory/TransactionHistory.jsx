import PropTypes from "prop-types";
import './TransactionHistory.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>{items.map(it => (
                <tr key={it.id}>
                    <td>{it.type}</td>
                    <td>{it.amount}</td>
                    <td>{it.currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    type: PropTypes.string,
    amout: PropTypes.number,
    currency: PropTypes.string
}