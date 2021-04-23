import React from "react";
import { useTranslation } from "react-i18next"

const LanguageSelector = () => {

  const { i18n } = useTranslation();

  return (<select className="form-control" onChange={e => i18n.changeLanguage(e.target.value)}>
    <option value="en">Angol</option>
    <option value="hu">Magyar</option>
  </select >)
}


export default LanguageSelector;