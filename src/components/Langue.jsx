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
        <option value="en">{t("langue.en")}</option>
        <option value="ar">{t("langue.ar")}</option>
        <option value="fr">{t("langue.fr")}</option>
      </select>
    </T>
  );
}
const T = styled.div`
  display: flex;
  padding: 5px 10px;
  border-radius: 5px;
  transition: 200ms ease-in-out;
  select{
    cursor: pointer;
  }
  &:hover {
    background-color: #0001;
  }
`;
export default Langue;
