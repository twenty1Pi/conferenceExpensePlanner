import { useSelector, useDispatch } from 'react-redux';
import { incrementRoom, decrementRoom } from '../store/expenseSlice';
import './Selection.css';

const RoomSelection = () => {
const rooms = useSelector((state) => state.expense.rooms);
const dispatch = useDispatch();

const totalCost = rooms.reduce((sum, room) => sum + (room.price * room.quantity), 0);

return (
  <section id="rooms" className="selection-section">
    <h2 className="section-title">Room Selection</h2>
    <div className="items-grid">
      {rooms.map((room) => (
        <div key={room.id} className="item-card">
          <div className="item-header">
            <h3>{room.name}</h3>
            <p className="capacity">Capacity: {room.capacity} people</p>
          </div>
          <div className="item-price">${room.price.toLocaleString()}</div>
          <div className="item-controls">
            <button 
              className="control-btn decrement"
              onClick={() => dispatch(decrementRoom(room.id))}
              disabled={room.quantity === 0}
            >
              −
            </button>
            <span className="quantity">{room.quantity}</span>
            <button 
              className="control-btn increment"
              onClick={() => dispatch(incrementRoom(room.id))}
            >
              +
            </button>
          </div>
          <div className="item-subtotal">
            Subtotal: ${(room.price * room.quantity).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
    <div className="section-total">
      <strong>Rooms Total: ${totalCost.toLocaleString()}</strong>
    </div>
  </section>
);
};

export default RoomSelection;