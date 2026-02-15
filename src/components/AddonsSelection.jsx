import { useSelector, useDispatch } from 'react-redux';
import { incrementAddon, decrementAddon } from '../store/expenseSlice';
import './Selection.css';

const AddonsSelection = () => {
const addons = useSelector((state) => state.expense.addons);
const dispatch = useDispatch();

const totalCost = addons.reduce((sum, addon) => sum + (addon.price * addon.quantity), 0);

return (
  <section id="addons" className="selection-section">
    <h2 className="section-title">Add-ons Selection</h2>
    <p className="section-subtitle">Audio/Visual Equipment</p>
    <div className="items-grid">
      {addons.map((addon) => (
        <div key={addon.id} className="item-card">
          <div className="item-header">
            <h3>{addon.name}</h3>
          </div>
          <div className="item-price">${addon.price}</div>
          <div className="item-controls">
            <button 
              className="control-btn decrement"
              onClick={() => dispatch(decrementAddon(addon.id))}
              disabled={addon.quantity === 0}
            >
              −
            </button>
            <span className="quantity">{addon.quantity}</span>
            <button 
              className="control-btn increment"
              onClick={() => dispatch(incrementAddon(addon.id))}
            >
              +
            </button>
          </div>
          <div className="item-subtotal">
            Subtotal: ${(addon.price * addon.quantity).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
    <div className="section-total">
      <strong>Add-ons Total: ${totalCost.toLocaleString()}</strong>
    </div>
  </section>
);
};

export default AddonsSelection;