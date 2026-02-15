import { useSelector, useDispatch } from 'react-redux';
import { updateMealPeople } from '../store/expenseSlice';
import './Selection.css';

const MealsSelection = () => {
const meals = useSelector((state) => state.expense.meals);
const dispatch = useDispatch();

const totalCost = meals.reduce((sum, meal) => sum + (meal.price * meal.people), 0);

const handlePeopleChange = (id, value) => {
  dispatch(updateMealPeople({ id, people: value }));
};

return (
  <section id="meals" className="selection-section">
    <h2 className="section-title">Meals Selection</h2>
    <p className="section-subtitle">Catering Options</p>
    <div className="items-grid">
      {meals.map((meal) => (
        <div key={meal.id} className="item-card">
          <div className="item-header">
            <h3>{meal.name}</h3>
          </div>
          <div className="item-price">${meal.price} per person</div>
          <div className="meal-input-group">
            <label htmlFor={`meal-${meal.id}`}>Number of people:</label>
            <input
              id={`meal-${meal.id}`}
              type="number"
              min="0"
              value={meal.people}
              onChange={(e) => handlePeopleChange(meal.id, e.target.value)}
              className="meal-input"
              placeholder="0"
            />
          </div>
          <div className="item-subtotal">
            Subtotal: ${(meal.price * meal.people).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
    <div className="section-total">
      <strong>Meals Total: ${totalCost.toLocaleString()}</strong>
    </div>
  </section>
);
};

export default MealsSelection;