import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

const hotels = [
  {
    id: 1,
    name: 'The Cozy Studio',
    location: 'Bandra West, Mumbai',
    area: 'Bandra West',
    price: 2499,
    rating: 4.85,
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=85',
    description: 'A stylish studio for a comfortable city stay.',
  },
  {
    id: 2,
    name: 'Sea View Retreat',
    location: 'Bandra West, Mumbai',
    area: 'Bandra West',
    price: 3999,
    rating: 4.92,
    type: 'Sea view',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
    description: 'Relax in a beautiful, light-filled space.',
  },
  {
    id: 3,
    name: 'Modern City Apartment',
    location: 'Bandra East, Mumbai',
    area: 'Bandra East',
    price: 2999,
    rating: 4.78,
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=85',
    description: 'A modern stay with everything close by.',
  },
  {
    id: 4,
    name: 'Minimalist Comfort Home',
    location: 'Khar West, Mumbai',
    area: 'Khar West',
    price: 2199,
    rating: 4.81,
    type: 'Guest favourite',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85',
    description: 'A peaceful home with a warm minimalist design.',
  },
  {
    id: 5,
    name: 'Luxury Urban Escape',
    location: 'Bandra East, Mumbai',
    area: 'Bandra East',
    price: 4499,
    rating: 4.95,
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
    description: 'A premium escape for a special stay.',
  },
  {
    id: 6,
    name: 'Charming Khar Hideaway',
    location: 'Khar West, Mumbai',
    area: 'Khar West',
    price: 2699,
    rating: 4.75,
    type: 'Guest favourite',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85',
    description: 'A comfortable hideaway in a lively neighbourhood.',
  },
]

const workPlaces = [
  {
    id: 101,
    name: 'Modern Coworking Studio',
    location: 'Bandra West, Mumbai',
    area: 'Bandra West',
    price: 799,
    rating: 4.8,
    type: 'Office space',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85',
    description: 'A modern workspace for focused and productive work.',
  },
  {
    id: 102,
    name: 'Creative Work Lounge',
    location: 'Khar West, Mumbai',
    area: 'Khar West',
    price: 599,
    rating: 4.7,
    type: 'Community space',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85',
    description: 'A comfortable space for work and collaboration.',
  },
  {
    id: 103,
    name: 'Private Office Space',
    location: 'Bandra East, Mumbai',
    area: 'Bandra East',
    price: 999,
    rating: 4.9,
    type: 'Office space',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85',
    description: 'A quiet, professional setting for your workday.',
  },
]

const experiences = [
  {
    id: 201,
    name: 'Bandra Food Walk',
    location: 'Bandra West, Mumbai',
    area: 'Bandra West',
    price: 999,
    rating: 4.9,
    type: 'Dining',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=85',
    description: 'Discover local flavours and favourite food spots.',
  },
  {
    id: 202,
    name: 'Mumbai Art & Culture Walk',
    location: 'Bandra West, Mumbai',
    area: 'Bandra West',
    price: 799,
    rating: 4.8,
    type: 'Exhibition',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85',
    description: 'Explore local art, culture and creative spaces.',
  },
  {
    id: 203,
    name: 'Sunset Photography Walk',
    location: 'Bandra East, Mumbai',
    area: 'Bandra East',
    price: 699,
    rating: 4.7,
    type: 'Adventure',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85',
    description: 'Enjoy a relaxed photo walk and capture memorable views.',
  },
{
  id: 204,
  name: 'Mumbai Creative Workshop',
  location: 'Bandra West, Mumbai',
  area: 'Bandra West',
  price: 1199,
  rating: 4.8,
  type: 'Workshop',
  image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85',
  description: 'Join a creative workshop and learn something new.',
},
{
  id: 205,
  name: 'Live Music Performance',
  location: 'Bandra East, Mumbai',
  area: 'Bandra East',
  price: 1499,
  rating: 4.9,
  type: 'Performance',
  image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85',
  description: 'Enjoy an exciting live music and entertainment experience.',
},
]

const destinations = [
  'Bandra West, Mumbai',
  'Bandra East, Mumbai',
  'Khar West, Mumbai',
  'Mumbai, Maharashtra',
]

const emptyGuests = { adults: 0, children: 0, infants: 0 }

function formatDate(date) {
  if (!date) return ''
  return new Date(`${date}T12:00:00`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
  })
}

function CalendarMonth({ month, selectedDate, onSelect, minDate }) {
  const year = month.getFullYear()
  const monthIndex = month.getMonth()
  const firstDay = new Date(year, monthIndex, 1).getDay()
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const cells = Array.from({ length: firstDay + daysInMonth }, (_, index) =>
    index < firstDay ? null : index - firstDay + 1
  )

  function dateValue(day) {
    return `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  }

  return (
    <div className="calendar-month">
      <h3>{month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3>
      <div className="calendar-grid calendar-weekdays">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="calendar-grid">
        {cells.map((day, index) => {
          if (!day) return <span className="calendar-empty" key={`empty-${index}`} />

          const value = dateValue(day)
          const date = new Date(year, monthIndex, day)
          const disabled = date < today || (minDate && value < minDate)

          return (
            <button
              key={value}
              type="button"
              className={`calendar-day ${selectedDate === value ? 'selected-day' : ''}`}
              disabled={disabled}
              onClick={() => onSelect(value)}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function DatePicker({ checkIn, checkOut, setCheckIn, setCheckOut, onClose }) {
  const [viewMonth, setViewMonth] = useState(() => {
    const date = new Date()
    date.setDate(1)
    return date
  })

  function changeMonth(amount) {
    setViewMonth((current) =>
      new Date(current.getFullYear(), current.getMonth() + amount, 1)
    )
  }

  function chooseDate(value) {
    if (!checkIn || checkOut || value < checkIn) {
      setCheckIn(value)
      setCheckOut('')
    } else {
      setCheckOut(value)
    }
  }

  const secondMonth = new Date(
    viewMonth.getFullYear(),
    viewMonth.getMonth() + 1,
    1
  )

  return (
    <div className="search-popover date-popover">
      <div className="calendar-navigation">
        <button type="button" aria-label="Previous month" onClick={() => changeMonth(-1)}>‹</button>
        <span>Select your dates</span>
        <button type="button" aria-label="Next month" onClick={() => changeMonth(1)}>›</button>
      </div>

      <div className="calendar-months">
        <CalendarMonth
          month={viewMonth}
          selectedDate={checkIn}
          minDate={null}
          onSelect={chooseDate}
        />
        <CalendarMonth
          month={secondMonth}
          selectedDate={checkOut}
          minDate={checkIn || null}
          onSelect={chooseDate}
        />
      </div>

      <div className="popover-footer">
        <button
          type="button"
          className="text-button"
          onClick={() => {
            setCheckIn('')
            setCheckOut('')
          }}
        >
          Clear dates
        </button>
        <button type="button" className="dark-button" onClick={onClose}>Done</button>
      </div>
    </div>
  )
}

function GuestPicker({ guestCounts, setGuestCounts, onClose }) {
  const guestTypes = [
    { key: 'adults', label: 'Adults', detail: 'Age 13 or above' },
    { key: 'children', label: 'Children', detail: 'Ages 2–12' },
    { key: 'infants', label: 'Infants', detail: 'Under 2' },
  ]

  function updateCount(key, amount) {
    setGuestCounts((current) => ({
      ...current,
      [key]: Math.max(key === 'adults' ? 0 : 0, current[key] + amount),
    }))
  }

  return (
    <div className="search-popover guest-popover">
      {guestTypes.map((type) => (
        <div className="guest-row" key={type.key}>
          <div>
            <strong>{type.label}</strong>
            <span>{type.detail}</span>
          </div>
          <div className="guest-controls">
            <button
              type="button"
              aria-label={`Remove ${type.label}`}
              disabled={guestCounts[type.key] <= (type.key === 'adults' ? 0 : 0)}
              onClick={() => updateCount(type.key, -1)}
            >
              −
            </button>
            <span>{guestCounts[type.key]}</span>
            <button
              type="button"
              aria-label={`Add ${type.label}`}
              onClick={() => updateCount(type.key, 1)}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="popover-footer">
        <button type="button" className="text-button" onClick={() => setGuestCounts(emptyGuests)}>
          Reset
        </button>
        <button type="button" className="dark-button" onClick={onClose}>Done</button>
      </div>
    </div>
  )
}


function CartoonRoom({ variant = 1, onClick }) {
  const palettes = [
    { wall: '#F7DCC5', floor: '#DDA477', accent: '#D97955', bed: '#FFF3E5', sky: '#9BDDF5' },
    { wall: '#F2D5CB', floor: '#C99172', accent: '#668CA9', bed: '#F8F2EA', sky: '#8ED7EF' },
    { wall: '#E9DFC9', floor: '#C79A6B', accent: '#75866A', bed: '#FFF7E8', sky: '#A7DDF2' },
    { wall: '#F5CDB2', floor: '#D99B70', accent: '#B85F45', bed: '#FFF1DF', sky: '#B6DFF5' },
    { wall: '#EAC6A5', floor: '#BD855C', accent: '#536B83', bed: '#FFF5E9', sky: '#9EDAF0' },
    { wall: '#D8DCC1', floor: '#BC936F', accent: '#D77D59', bed: '#FFF0DF', sky: '#A5D9ED' },
  ]

  const c = palettes[(Math.abs(variant) - 1) % palettes.length]

  return (
  <svg
    className="hotel-image cartoon-room"
    viewBox="0 0 600 360"
    role="button"
    tabIndex={0}
    aria-label="View listing - Coming Soon"
    onClick={onClick}
    onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        onClick?.()
      }
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
      <rect width="600" height="360" fill={c.wall} />
      <path d="M0 290 L600 265 L600 360 L0 360Z" fill={c.floor} />

      {/* Window and city view */}
      <rect x="365" y="28" width="190" height="175" rx="5" fill="#FFF1DA" />
      <rect x="374" y="37" width="172" height="157" fill={c.sky} />
      <circle cx="510" cy="65" r="18" fill="#FFE7A0" />
      <path d="M374 155 L405 120 L430 145 L466 105 L500 145 L546 115 L546 194 L374 194Z" fill="#83B8C7" />
      <path d="M395 150h18v44h-18 M435 135h22v59h-22 M478 157h17v37h-17" fill="#E6F0E9" />
      <path d="M460 37V194 M374 116H546" stroke="#FFF7EB" strokeWidth="7" />

      {/* Wall art */}
      <rect x="38" y="42" width="82" height="100" rx="3" fill="#FFF4E4" />
      <rect x="45" y="49" width="68" height="86" fill="#E7B49A" />
      <circle cx="79" cy="78" r="19" fill={c.accent} />
      <path d="M48 125 Q75 85 110 125Z" fill="#E8D7A7" />

      {/* Plant */}
      <path d="M515 290 Q500 220 520 165 M518 247 Q478 220 485 194 Q516 204 518 247 M519 224 Q553 190 548 173 Q517 184 519 224 M517 205 Q491 173 500 151 Q521 174 517 205" fill="#648D65" />
      <path d="M500 284 L540 284 L534 322 L506 322Z" fill="#C97C59" />
      <path d="M506 286H534" stroke="#F5D2B0" strokeWidth="5" />

      {/* Bed */}
      <rect x="90" y="196" width="325" height="106" rx="14" fill="#B87954" />
      <rect x="102" y="185" width="300" height="88" rx="12" fill={c.bed} />
      <rect x="113" y="177" width="108" height="51" rx="10" fill="#FFF9F0" />
      <rect x="230" y="177" width="108" height="51" rx="10" fill="#FFF9F0" />
      <path d="M103 238 Q250 263 402 236 L402 275 L103 275Z" fill={c.accent} />
      <path d="M258 239 L306 239 L320 275 L244 275Z" fill="#F3D4AF" />
      <rect x="111" y="298" width="12" height="43" rx="4" fill="#87583F" />
      <rect x="382" y="298" width="12" height="43" rx="4" fill="#87583F" />

      {/* Bedside table and lamp */}
      <rect x="28" y="254" width="61" height="53" rx="4" fill="#B87954" />
      <rect x="23" y="249" width="71" height="9" rx="3" fill="#D79A6C" />
      <path d="M47 220 L72 220 L81 244 L38 244Z" fill="#FFF0CE" />
      <rect x="57" y="244" width="6" height="9" fill="#B87954" />
      <circle cx="60" cy="278" r="4" fill="#F5D6B3" />

      {/* Rug */}
      <ellipse cx="290" cy="329" rx="205" ry="20" fill="#F1CBA5" opacity=".8" />
      <path d="M150 327 Q290 345 430 327" stroke="#FFF0D9" strokeWidth="3" fill="none" />
    </svg>
  )
}


function App() {
  const [activeTab, setActiveTab] = useState('Stays')
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [activePanel, setActivePanel] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
const [searchExpanded, setSearchExpanded] = useState(false)
  const [destinationQuery, setDestinationQuery] = useState('')
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guestCounts, setGuestCounts] = useState(emptyGuests)
  const [guestSelectionMade, setGuestSelectionMade] = useState(false)
  const [searchSubmitted, setSearchSubmitted] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('All stays')
  const [favorites, setFavorites] = useState([])
  const [page, setPage] = useState('home')
  const [bookings, setBookings] = useState([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileImage, setProfileImage] = useState(
  () => localStorage.getItem('tecotelsProfileImage') || ''
)
  const profileImageInputRef = useRef(null)
  const searchRef = useRef(null)

  const whenRef = useRef(null)

useEffect(() => {
  if (activePanel === 'when') {
    whenRef.current?.focus()
  }
}, [activePanel])

  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 130)
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()

  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  const totalGuests = guestCounts.adults + guestCounts.children
  const guestLabel = `${totalGuests} ${totalGuests === 1 ? 'Guest' : 'Guests'}${guestCounts.infants ? `, ${guestCounts.infants} Infant${guestCounts.infants > 1 ? 's' : ''}` : ''}`
  const filteredDestinations = destinations.filter((item) =>
    item.toLowerCase().includes(destinationQuery.toLowerCase())
  )

  const visibleHotels = useMemo(() => {
  let result =
    activeTab === 'WorkPlaces'
      ? workPlaces
      : activeTab === 'Experiences'
        ? experiences
        : hotels

  if (searchSubmitted && destination) {
    const query = destination.toLowerCase().split(',')[0].trim()

    result = result.filter((item) =>
      item.location.toLowerCase().includes(query) ||
      query === 'mumbai'
    )
  }

  if (activeTab === 'Stays') {
    if (selectedFilter === 'Guest favourites') {
      result = result.filter((item) => item.rating >= 4.8)
    } else if (selectedFilter === 'Under ₹3,000') {
      result = result.filter((item) => item.price < 3000)
    } else if (selectedFilter === 'Luxury') {
      result = result.filter((item) => item.price >= 4000)
    }
  } else {
    result = result.filter((item) => item.type === selectedFilter)
  }

  return result
}, [activeTab, destination, searchSubmitted, selectedFilter])

  function closePanels() {
  setActivePanel(null)
  setSearchExpanded(false)
}

  function submitSearch() {
    setSearchSubmitted(true)
    setPage('home')
    closePanels()
  }

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    )
  }

  function bookStay(hotel) {
    setBookings((current) => [
      ...current,
      {
        ...hotel,
        bookingId: `${Date.now()}-${hotel.id}`,
        checkIn,
        checkOut,
        guests: guestLabel,
      },
    ])
    setPage('bookings')
    closePanels()
  }

  function goHome() {
    setPage('home')
    setMobileMenuOpen(false)
  }

  return (
   <div
  className="app"
  onClick={(event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      closePanels()
    }

    if (
      mobileMenuOpen &&
      !event.target.closest('.account-menu') &&
      !event.target.closest('.profile-menu')
    ) {
      setMobileMenuOpen(false)
    }
  }}
>
      <div className="coming-soon-banner">
        <span className="coming-soon-dot"></span>
        WE’RE GETTING READY
        <span className="coming-soon-divider">|</span>
        TECOTELS — COMING SOON
      </div>

      <header className="site-header">
        <div className="header-top">
          <button type="button" className="brand-logo" onClick={goHome}>
  <img src="/tecotels-logo.png.jpeg" alt="Tecotels" />
</button>

          <nav className="header-center" aria-label="Main navigation">
            {['Stays', 'WorkPlaces', 'Experiences'].map((tab) => (
              <button
                type="button"
                key={tab}
                className={`nav-category ${activeTab === tab ? 'active' : ''}`}
                onClick={() => {
  setActiveTab(tab)

  if (tab === 'WorkPlaces') {
    setSelectedFilter('Office space')
  } else if (tab === 'Experiences') {
    setSelectedFilter('Adventure')
  } else {
    setSelectedFilter('All stays')
  }

  goHome()
}}
              >
                <span className={`nav-category-icon icon-${tab.toLowerCase()}`}>
  {tab === 'Stays' ? '🏡' : tab === 'WorkPlaces' ? '🏢' : '🌟'}
</span>
                {tab}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <button type="button" className="property-link" onClick={() => alert('Property listing will be available soon.')}>
              List your property
            </button>
            <button type="button" className="round-icon" aria-label="Language">◎</button>
            <button
  type="button"
  className="profile-menu"
  aria-label="Open menu"
  onClick={() => setMobileMenuOpen((open) => !open)}
>
  {profileImage ? (
    <img
      src={profileImage}
      alt="User profile"
      className="header-profile-image"
    />
  ) : (
    <svg
  className="profile-placeholder-icon"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path
    fill="currentColor"
    d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v3h16v-3c0-2.76-3.58-5-8-5Z"
  />
</svg>
  )}
  <span className="menu-lines">☰</span>
</button>

<input
  ref={profileImageInputRef}
  type="file"
  accept="image/*"
  hidden
  onChange={(event) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.')
      event.target.value = ''
      return
    }

    if (file.size > 2 * 1024 * 1024) {
      alert('Please select an image smaller than 2 MB.')
      event.target.value = ''
      return
    }

    const reader = new FileReader()

    reader.onload = () => {
      const imageData = reader.result
      setProfileImage(imageData)
      localStorage.setItem('tecotelsProfileImage', imageData)
    }

    reader.readAsDataURL(file)
    event.target.value = ''
  }}
/>
            {mobileMenuOpen && (
  <div className="account-menu airbnb-menu">
    <button
  type="button"
  onClick={() => profileImageInputRef.current?.click()}
>
  <span>📷</span>
  {profileImage ? 'Change profile photo' : 'Upload profile photo'}
</button>
    <button type="button" onClick={() => { setPage('favorites'); setMobileMenuOpen(false) }}>
      <span>♡</span> Wishlists
    </button>

    <button type="button" onClick={() => { setPage('bookings'); setMobileMenuOpen(false) }}>
      <span>♧</span> Trips
    </button>

    <button type="button" onClick={() => { setMobileMenuOpen(false); alert('Messages will be available soon.') }}>
      <span>▢</span> Messages
    </button>


    <div className="menu-divider" />

    <button type="button" onClick={() => { setMobileMenuOpen(false); alert('Notifications will be available soon.') }}>
      <span>♧</span> Notifications
    </button>

    <button type="button" onClick={() => { setMobileMenuOpen(false); alert('Account settings will be available soon.') }}>
      <span>⚙</span> Account settings
    </button>

    <button type="button" onClick={() => { setMobileMenuOpen(false); alert('Language and currency settings will be available soon.') }}>
      <span>◎</span> Languages &amp; currency
    </button>

    <button type="button" onClick={() => { setMobileMenuOpen(false); alert('Help Centre will be available soon.') }}>
      <span>ⓘ</span> Help Centre
    </button>

    <div className="menu-divider" />

    <button type="button" className="hosting-option" onClick={() => { setMobileMenuOpen(false); alert('Hosting will be available soon.') }}>
      <span className="hosting-icon">⌂</span>
      <span className="hosting-text">
        <strong>Become a host</strong>
        <small>It’s easy to start hosting and earn extra income.</small>
      </span>
    </button>

    <div className="menu-divider" />

    <button type="button" onClick={() => { setMobileMenuOpen(false); alert('Refer a host will be available soon.') }}>Refer a host</button>
    <button type="button" onClick={() => { setMobileMenuOpen(false); alert('Refer a friend will be available soon.') }}>Refer a friend</button>
    <button type="button" onClick={() => { setMobileMenuOpen(false); alert('Find a co-host will be available soon.') }}>Find a co-host</button>

    <div className="menu-divider" />

    <button type="button" onClick={() => { setMobileMenuOpen(false); alert('Logout will be available after login is connected.') }}>
      Log out
    </button>
  </div>
)}
          </div>
        </div>
        </header>
        {isScrolled && (
  <div className="scrolled-header">
    <button className="brand-logo" type="button" onClick={goHome}>
<img src="/tecotels-logo.png.jpeg" alt="Tecotels" />
    </button>

    {!searchExpanded && !activePanel && (
      <button
        type="button"
        className="compact-search"
        onClick={() => setSearchExpanded(true)}
      >
        <span>{destination || 'Anywhere'}</span>
        <span className="compact-divider"></span>
        <span>{checkIn ? formatDate(checkIn) : 'Anytime'}</span>
        <span className="compact-divider"></span>
        <span>{guestSelectionMade ? guestLabel : 'Add guests'}</span>
        <span className="compact-search-icon">⌕</span>
      </button>
    )}

    <div className="scrolled-header-actions">
      <button
        type="button"
        className="property-link"
        onClick={() => alert('Property listing will be available soon.')}
      >
        Become a host
      </button>

      <button type="button" className="round-icon">◎</button>

      <button
        type="button"
        className="profile-menu"
        onClick={() => setMobileMenuOpen(open => !open)}
      >
        {profileImage ? (
  <img
    src={profileImage}
    alt="User profile"
    className="header-profile-image"
  />
) : (
  <span className="profile-placeholder">👤</span>
)}
        <span className="menu-lines">☰</span>
      </button>
    </div>
  </div>
)}
       <div
  className={`search-row ${
    isScrolled && !searchExpanded && !activePanel ? 'is-compact' : ''
  }`}
  ref={searchRef}
  onClick={(event) => event.stopPropagation()}
>

  {isScrolled && !searchExpanded && !activePanel && (
  <button
    type="button"
    className="compact-search"
    onClick={() => setSearchExpanded(true)}
  >
    <span>{destination || 'Anywhere'}</span>
    <span className="compact-divider"></span>
    <span>
      {checkIn ? formatDate(checkIn) : 'Anytime'}
    </span>
    <span className="compact-divider"></span>
    <span>
      {guestSelectionMade ? guestLabel : 'Add guests'}
    </span>
    <span className="compact-search-icon">⌕</span>
  </button>
)}
          <div className="search-bar">
            <button
              type="button"
              className={`search-segment where-segment ${activePanel === 'where' ? 'segment-active' : ''}`}
              onClick={() => setActivePanel(activePanel === 'where' ? null : 'where')}
            >
              <span className="segment-label">Where</span>
             
<input
  className={destination ? 'has-selection' : ''}
  value={destinationQuery}
  onChange={event => {
    setDestinationQuery(event.target.value)
    setDestination(event.target.value)
    setActivePanel('where')
  }}
  onFocus={() => {
  setActivePanel('where')
  if (destination) {
    setDestinationQuery('')
  }
}}
  onClick={event => event.stopPropagation()}
  placeholder="Search destinations"
  aria-label="Search destinations"
/>

            </button>

            <button
               ref={whenRef}
              type="button"
              className={`search-segment when-segment ${activePanel === 'when' ? 'segment-active' : ''}`}
              onClick={() => setActivePanel(activePanel === 'when' ? null : 'when')}
            >
              <span className="segment-label">When</span>
              <span className={`segment-value ${checkIn ? 'has-selection' : ''}`}>
  {checkIn ? `${formatDate(checkIn)}${checkOut ? ` – ${formatDate(checkOut)}` : ''}` : 'Add dates'}
</span>
            </button>

            <button
              type="button"
              className={`search-segment who-segment ${activePanel === 'who' ? 'segment-active' : ''}`}
              onClick={() => setActivePanel(activePanel === 'who' ? null : 'who')}
            >
              <span className="segment-label">Who</span>
              <span className={`segment-value ${
  guestCounts.adults !== 0 ||
  guestCounts.children !== 0 ||
  guestCounts.infants !== 0
    ? 'has-selection'
    : ''
}`}>
  {guestSelectionMade ? guestLabel : 'Add guest'}
</span>
            </button>

           <button type="button" className="header-search-button" aria-label="Search stays" onClick={submitSearch}>
  <svg
    className="search-icon"
    viewBox="0 0 24 24"
    width="23"
    height="23"
    fill="none"
    stroke="black"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="10.8" cy="10.8" r="6.5" />
    <path d="M16 16 L21 21" />
  </svg>
</button>
          </div>

          {activePanel === 'where' && (
            <div className="search-popover destination-popover">
              <p className="popover-heading">Search by area</p>
              {filteredDestinations.length ? filteredDestinations.map((place) => (
                <button
                  type="button"
                  className="destination-option"
                  key={place}
                  onClick={() => {
  setDestination(place)
  setDestinationQuery(place)
  setActivePanel('when')
}}
                >
                  <span className="destination-pin">⌖</span>
                  <span>{place}</span>
                </button>
              )) : (
                <p className="no-destinations">No matching areas. Try Mumbai or Bandra.</p>
              )}
            </div>
          )}

          {activePanel === 'when' && (
            <DatePicker
              checkIn={checkIn}
              checkOut={checkOut}
              setCheckIn={setCheckIn}
              setCheckOut={setCheckOut}
              onClose={closePanels}
            />
          )}

          {activePanel === 'who' && (
            <GuestPicker
  guestCounts={guestCounts}
  setGuestCounts={(value) => {
    setGuestCounts(value)
    setGuestSelectionMade(true)
  }}
  onClose={closePanels}
/>
          )}
        </div>
  

      <main className="main-content">
        {page === 'home' && (
          <>
            <div className="listing-heading">
              <div>
                <h1>
  {activeTab === 'Stays'
    ? searchSubmitted && destination
      ? `Stays in ${destination.split(',')[0]}`
     : 'Stays in Mumbai'
    : activeTab === 'WorkPlaces'
      ? `WorkPlaces in ${destination ? destination.split(',')[0] : 'Mumbai'}`
      : `Experiences in ${destination ? destination.split(',')[0] : 'Mumbai'}`}
</h1>
                <p className="heading-subtitle">Comfortable places for wherever life takes you.</p>
              </div>
              <span className="result-count">
  {visibleHotels.length} {
    activeTab === 'Stays'
      ? 'places to stay'
      : activeTab === 'WorkPlaces'
        ? 'workspaces'
        : 'experiences'
  }
</span>
            </div>

           <div className="filter-row">
  {(activeTab === 'WorkPlaces'
    ? ['Office space', 'Community space']
    : activeTab === 'Experiences'
      ? ['Adventure', 'Exhibition', 'Dining', 'Workshop', 'Performance']
      : ['Urban', 'Escapes', 'Coliving', 'Backpacking']
  ).map((filter) => (
    <button
      type="button"
      key={filter}
     className={`filter-chip ${
  activeTab === 'Stays' ? 'stays-filter' : ''
} ${selectedFilter === filter ? 'filter-selected' : ''}`}
      onClick={() => setSelectedFilter(filter)}
    >
      {filter}
    </button>
  ))}
</div>

            {visibleHotels.length ? (
              <section className="hotel-grid" aria-label="Available stays">
                {visibleHotels.map((hotel) => (
                  <article className="hotel-card" key={hotel.id}>
                    <div className="hotel-image-wrap">
                    
                      <CartoonRoom
  variant={hotel.id}
  onClick={() => setShowComingSoon(true)}
/>
                      
                      <button
                        type="button"
                        className={`favorite-button ${favorites.includes(hotel.id) ? 'is-favorite' : ''}`}
                        aria-label={favorites.includes(hotel.id) ? 'Remove from favourites' : 'Add to favourites'}
                        onClick={() => toggleFavorite(hotel.id)}
                      >
                        {favorites.includes(hotel.id) ? '♥' : '♡'}
                      </button>
                    </div>
                    <button type="button" className="hotel-card-content" onClick={() => bookStay(hotel)}>
                      <div className="hotel-title-row">
                        <h2>{hotel.name}</h2>
                        <span className="hotel-rating">★ {hotel.rating}</span>
                      </div>
                      <p className="hotel-location">{hotel.location}</p>
                      <p className="hotel-description">{hotel.description}</p>
                      <p className="hotel-price"><strong>₹{hotel.price.toLocaleString('en-IN')}</strong> <span>/ night</span></p>
                      <span className="view-stay-link">View stay & book ↗</span>
                    </button>
                  </article>
                ))}
              </section>
            ) : (
              <div className="empty-state">
                <span>⌖</span>
                <h2>No stays found</h2>
                <p>Try another area or clear your filters to see more stays.</p>
                <button type="button" className="dark-button" onClick={() => {
                  setDestination('')
                  setDestinationQuery('')
                  setSearchSubmitted(false)
                  setSelectedFilter('All stays')
                }}>
                  Clear search
                </button>
              </div>
            )}
          </>
        )}

        {page === 'bookings' && (
          <section className="secondary-page">
            <p className="eyebrow">YOUR TRIPS</p>
            <h1>My Bookings</h1>
            <p className="heading-subtitle">Your selected stays in one place.</p>
            {bookings.length ? (
              <div className="booking-list">
                {bookings.map((booking) => (
                  <article className="booking-card" key={booking.bookingId}>
                    <img src={booking.image} alt={booking.name} />
                    <div>
                      <h2>{booking.name}</h2>
                      <p>{booking.location}</p>
                      <p>Check-in: {formatDate(booking.checkIn) || 'Not selected'}</p>
                      <p>Check-out: {formatDate(booking.checkOut) || 'Not selected'}</p>
                      <p>{booking.guests}</p>
                      <strong>₹{booking.price.toLocaleString('en-IN')} / night</strong>
                      <p className="booking-note">Demo booking saved in this page only. Payment is not processed.</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <span>⌂</span>
                <h2>No bookings yet</h2>
                <p>Choose a stay to add it to your bookings list.</p>
                <button type="button" className="dark-button" onClick={goHome}>Explore stays</button>
              </div>
            )}
          </section>
        )}

        {page === 'favorites' && (
          <section className="secondary-page">
            <p className="eyebrow">SAVED PLACES</p>
            <h1>My Favourites</h1>
            <p className="heading-subtitle">Places you have saved for later.</p>
            <section className="hotel-grid">
              {hotels.filter((hotel) => favorites.includes(hotel.id)).map((hotel) => (
                <article className="hotel-card" key={hotel.id}>
                  <div className="hotel-image-wrap">
                    <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                    <button type="button" className="favorite-button is-favorite" onClick={() => toggleFavorite(hotel.id)}>♥</button>
                  </div>
                  <button type="button" className="hotel-card-content" onClick={() => bookStay(hotel)}>
                    <h2>{hotel.name}</h2>
                    <p className="hotel-location">{hotel.location}</p>
                    <p className="hotel-price"><strong>₹{hotel.price.toLocaleString('en-IN')}</strong> / night</p>
                    <span className="view-stay-link">View stay & book ↗</span>
                  </button>
                </article>
              ))}
            </section>
            {favorites.length === 0 && (
              <div className="empty-state">
                <span>♡</span><h2>No favourites saved</h2>
                <p>Tap the heart on any stay to save it here.</p>
                <button type="button" className="dark-button" onClick={goHome}>Explore stays</button>
              </div>
            )}
          </section>
        )}

        {page === 'about' && (
          <section className="secondary-page about-page">
            <p className="eyebrow">WELCOME TO TECOTELS</p>
            <h1>Stay somewhere that feels right.</h1>
            <p className="about-copy">Tecotels helps you explore comfortable places to stay, compare options and keep track of the places you like.</p>
            <button type="button" className="dark-button" onClick={goHome}>Explore stays</button>
          </section>
        )}

        {showComingSoon && (
  <div
    className="coming-soon-overlay"
    onClick={() => setShowComingSoon(false)}
  >
    <div
      className="coming-soon-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="coming-soon-title"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="coming-soon-icon">✨</div>

      <h2 id="coming-soon-title">Coming Soon!</h2>

      <p>
        We're working on something exciting.
        This feature will be available soon.
      </p>

      <button
        type="button"
        className="dark-button"
        onClick={() => setShowComingSoon(false)}
      >
        Got it
      </button>
    </div>
  </div>
)}
      </main>

      <footer className="site-footer">
        <button type="button" className="footer-logo" onClick={goHome}>
  <img src="/tecotels-logo.png.jpeg" alt="Tecotels" />
</button>
        <p>Find your place. Make yourself at home.</p>
       
        <small>© {new Date().getFullYear()} Tecotels. All rights reserved.</small>
      </footer>
    </div>
  )
}

export default App