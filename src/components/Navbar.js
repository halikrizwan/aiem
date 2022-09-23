import React from 'react'

const Navbar = ({title}) => {
  return (
    <nav class="navbar bg-light">
        <div class="navbar-brand p-3">
            {title}
        </div>
    </nav>

  )
}

export default Navbar