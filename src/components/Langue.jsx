import { LanguageOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Langue() {
  const { t } = useTranslation();
  return (
    <T>
      <LanguageOutlined />
      <select
        name=""
        id=""
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">English (English)</option>
        <option value="ar">العربية (Arabic)</option>
        <option value="fr">Français (French)</option>
      </select>
    </T>
  );
}
const T = styled.div`
  display: flex;
  background-color: #0001;
  padding: 5px 10px;
  border-radius: 5px;
`;
export default Langue;
