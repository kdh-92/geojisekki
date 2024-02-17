import { Outlet } from "react-router-dom";

import styled from "styled-components";

import MainHeader from "@/components/molecules/MainHeader/MainHeader";
import NotificationModal from "@/components/molecules/Modal/NotificationModal";

export default function GeneralTemplate() {
  return (
    <GeneralTemplateStyle>
      <MainHeader />
      <div className="container">
        <NotificationModal />
        <Outlet />
      </div>
    </GeneralTemplateStyle>
  );
}

const GeneralTemplateStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme: { color } }) => color.bluishGray[50].value};
`;
