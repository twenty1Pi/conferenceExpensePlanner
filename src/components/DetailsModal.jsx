import { useSelector } from 'react-redux';
import './DetailsModal.css';

const DetailsModal = ({ onClose }) => {
const { rooms, addons, meals } = useSelector((state) => state.expense);

const selectedRooms = rooms.filter(room => room.quantity > 0);
const selectedAddons = addons.filter(addon => addon.quantity > 0);
const selectedMeals = meals.filter(meal => meal.people > 0);

const roomsTotal = rooms.reduce((sum, room) => sum + (room.price * room.quantity), 0);
const addonsTotal = addons.reduce((sum, addon) => sum + (addon.price * addon.quantity), 0);
const mealsTotal = meals.reduce((sum, meal) => sum + (meal.price * meal.people), 0);
const grandTotal = roomsTotal + addonsTotal + mealsTotal;

return (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header">
        <h2>Conference Expense Details</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <div className="modal-body">
        {selectedRooms.length === 0 && selectedAddons.length === 0 && selectedMeals.length === 0 ? (
          <p className="no-selection">No items selected yet. Start planning your conference!</p>
        ) : (
          <table className="details-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Unit Cost</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {selectedRooms.length > 0 && (
                <>
                  <tr className="category-row">
                    <td colSpan="4"><strong>Rooms</strong></td>
                  </tr>
                  {selectedRooms.map((room) => (
                    <tr key={`room-${room.id}`}>
                      <td>{room.name}</td>
                      <td>${room.price.toLocaleString()}</td>
                      <td>{room.quantity}</td>
                      <td>${(room.price * room.quantity).toLocaleString()}</td>
                    </tr>
                  ))}
                </>
              )}

              {selectedAddons.length > 0 && (
                <>
                  <tr className="category-row">
                    <td colSpan="4"><strong>Add-ons</strong></td>
                  </tr>
                  {selectedAddons.map((addon) => (
                    <tr key={`addon-${addon.id}`}>
                      <td>{addon.name}</td>
                      <td>${addon.price}</td>
                      <td>{addon.quantity}</td>
                      <td>${(addon.price * addon.quantity).toLocaleString()}</td>
                    </tr>
                  ))}
                </>
              )}

              {selectedMeals.length > 0 && (
                <>
                  <tr className="category-row">
                    <td colSpan="4"><strong>Meals</strong></td>
                  </tr>
                  {selectedMeals.map((meal) => (
                    <tr key={`meal-${meal.id}`}>
                      <td>{meal.name}</td>
                      <td>${meal.price} per person</td>
                      <td>{meal.people} people</td>
                      <td>${(meal.price * meal.people).toLocaleString()}</td>
                    </tr>
                  ))}
                </>
              )}

              <tr className="total-row">
                <td colSpan="3"><strong>Grand Total</strong></td>
                <td><strong>${grandTotal.toLocaleString()}</strong></td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <div className="modal-footer">
        <button className="close-modal-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  </div>
);
};

export default DetailsModal;