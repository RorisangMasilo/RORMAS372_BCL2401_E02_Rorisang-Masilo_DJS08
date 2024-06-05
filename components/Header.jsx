import React from "react"

export default function Header() {
  return (
    <header>
    <Link className="site-logo" to="/">
        #VANLIFE
    </Link>
    <nav>
        <Link to="/about">About</Link>
    </nav>
</header>;  
  )
}

