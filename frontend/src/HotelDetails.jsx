import { useState } from 'react'
import './HotelDetails.css'

function HotelDetails({ hotel, onBack }) {
    const [showBooking, setShowBooking] = useState(false)
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [guests, setGuests] = useState('1')
    const [bookingConfirmed, setBookingConfirmed] = useState(false)
    const [savedBooking, setSavedBooking] = useState(false)

const nights =
  checkIn && checkOut
    ? Math.max(
        0,
        Math.ceil(
          (new Date(checkOut) - new Date(checkIn)) /
            (1000 * 60 * 60 * 24)
        )
      )
    : 0

const totalPrice = nights * hotel.price

const saveBooking = () => {
  const newBooking = {
    id: Date.now(),
    hotelName: hotel.name,
    location: hotel.location,
    pricePerNight: hotel.price,
    checkIn,
    checkOut,
    nights,
    guests,
    totalPrice,
  }

  const existingBookings = JSON.parse(
    localStorage.getItem('tecotelsBookings') || '[]'
  )

  localStorage.setItem(
    'tecotelsBookings',
    JSON.stringify([...existingBookings, newBooking])
  )

  setSavedBooking(true)
}

  if (!hotel) return null

  if (bookingConfirmed) {
  return (
    <div className="hotel-details-page">
      <div className="booking-confirmation">
        <h1>🎉 Booking Confirmed!</h1>
        <p>Your booking details are ready.</p>

        <h2>{hotel.name}</h2>
        <p>📍 {hotel.location}</p>
        <p>Check-in: {checkIn}</p>
        <p>Check-out: {checkOut}</p>
        <p>Guests: {guests}</p>
        <h2>Total Price: ₹{totalPrice.toLocaleString('en-IN')}</h2>

        <button
          className="reserve-button"
          onClick={() => {
            setBookingConfirmed(false)
            setShowBooking(false)
            onBack()
          }}
        >
          Back to stays
        </button>
      </div>
    </div>
  )
}

  return (
    <div className="hotel-details-page">
      <button className="back-button" onClick={onBack}>
        ← Back to stays
      </button>

      <h1>{hotel.name}</h1>
      <p className="details-location">
        ★ {hotel.rating} · {hotel.location}
      </p>

      <img
        className="details-image"
        src={`https://images.unsplash.com/${hotel.image}?auto=format&fit=crop&w=1400&q=85`}
        alt={hotel.name}
      />


        {showBooking && (
  <div className="booking-form">
    <h2>Complete your booking</h2>
    <p>Stay: {hotel.name}</p>
    <p>Price per night: ₹{hotel.price.toLocaleString('en-IN')}</p>

    <label>Check-in date</label>
    <input
  type="date"
  id="bookingCheckIn"
  value={checkIn}
  min={new Date().toLocaleDateString('en-CA')}
  onChange={(event) => setCheckIn(event.target.value)}
/>

    <label>Check-out date</label>
    <input
  type="date"
  id="bookingCheckOut"
  value={checkOut}
  min={checkIn || new Date().toLocaleDateString('en-CA')}
  onChange={(event) => setCheckOut(event.target.value)}
/>

{nights > 0 && (
  <div className="booking-total">
    <p>Price per night: ₹{hotel.price.toLocaleString('en-IN')}</p>
    <p>Number of nights: {nights}</p>
    <p>Guests: {guests}</p>
    <h3>Total price: ₹{totalPrice.toLocaleString('en-IN')}</h3>
  </div>
)}

    <label>Number of guests</label>
    <select
  id="bookingGuests"
  value={guests}
  onChange={(event) => setGuests(event.target.value)}
>
      <option value="1">1 guest</option>
      <option value="2">2 guests</option>
      <option value="3">3 guests</option>
      <option value="4">4 guests</option>
      <option value="5">5 guests</option>
      <option value="6">6 guests</option>
    </select>

    <button
  className="reserve-button"
  onClick={() => {
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates.')
    } else if (new Date(checkOut) <= new Date(checkIn)) {
      alert('Check-out date must be after check-in date.')
    } else {
      saveBooking()
      setBookingConfirmed(true)
    }
  }}
>
  Continue
</button>

    <button
      className="back-button"
      onClick={() => setShowBooking(false)}
    >
      Cancel
    </button>
  </div>
)}

      <div className="details-content">
        <div>
          <h2>About this stay</h2>
          <p>
            Enjoy a comfortable stay in a convenient Mumbai location.
            Discover nearby places and make your trip memorable.
          </p>

          <h3>What this place offers</h3>
          <ul>
            <li>Comfortable accommodation</li>
            <li>Convenient city location</li>
            <li>Modern interiors</li>
            <li>Suitable for your next getaway</li>
          </ul>
        </div>

        <div className="details-price-card">
          <h2>
            ₹{hotel.price.toLocaleString('en-IN')}
            <span> / night</span>
          </h2>

          <p>Price shown is a sample listing price.</p>

          <button
            className="reserve-button"
            onClick={() => setShowBooking(true)
            }
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  )
}

export default HotelDetails