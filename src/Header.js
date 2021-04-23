import React from "react";
import LanguageSelector from "./LanguageSelector"

const Header = () => (
  <header className="m-2 d-flex justify-content-end">
    <div className="w-25">
      <LanguageSelector />
    </div>
  </header>
)

export default Header;