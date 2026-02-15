import { createSlice } from '@reduxjs/toolkit';

const initialState = {
rooms: [
  { id: 1, name: 'Auditorium Hall', capacity: 200, price: 5500, quantity: 0 },
  { id: 2, name: 'Conference Room', capacity: 15, price: 3500, quantity: 0 },
  { id: 3, name: 'Presentation Room', capacity: 50, price: 700, quantity: 0 },
  { id: 4, name: 'Large Meeting Room', capacity: 10, price: 900, quantity: 0 },
  { id: 5, name: 'Small Meeting Room', capacity: 5, price: 1100, quantity: 0 },
],
addons: [
  { id: 1, name: 'Speakers', price: 35, quantity: 0 },
  { id: 2, name: 'Microphones', price: 45, quantity: 0 },
  { id: 3, name: 'Whiteboards', price: 80, quantity: 0 },
  { id: 4, name: 'Projectors', price: 200, quantity: 0 },
  { id: 5, name: 'Signage', price: 80, quantity: 0 },
],
meals: [
  { id: 1, name: 'Breakfast', price: 50, people: 0 },
  { id: 2, name: 'Lunch', price: 60, people: 0 },
  { id: 3, name: 'High Tea', price: 25, people: 0 },
  { id: 4, name: 'Dinner', price: 70, people: 0 },
],
};

const expenseSlice = createSlice({
name: 'expense',
initialState,
reducers: {
  incrementRoom: (state, action) => {
    const room = state.rooms.find(r => r.id === action.payload);
    if (room) room.quantity += 1;
  },
  decrementRoom: (state, action) => {
    const room = state.rooms.find(r => r.id === action.payload);
    if (room && room.quantity > 0) room.quantity -= 1;
  },
  incrementAddon: (state, action) => {
    const addon = state.addons.find(a => a.id === action.payload);
    if (addon) addon.quantity += 1;
  },
  decrementAddon: (state, action) => {
    const addon = state.addons.find(a => a.id === action.payload);
    if (addon && addon.quantity > 0) addon.quantity -= 1;
  },
  updateMealPeople: (state, action) => {
    const { id, people } = action.payload;
    const meal = state.meals.find(m => m.id === id);
    if (meal) meal.people = Math.max(0, parseInt(people) || 0);
  },
  resetAll: (state) => {
    state.rooms.forEach(room => room.quantity = 0);
    state.addons.forEach(addon => addon.quantity = 0);
    state.meals.forEach(meal => meal.people = 0);
  },
},
});

export const {
incrementRoom,
decrementRoom,
incrementAddon,
decrementAddon,
updateMealPeople,
resetAll,
} = expenseSlice.actions;

export default expenseSlice.reducer;