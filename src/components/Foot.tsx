import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import constants from "../common/constants";

const FootWrapper = styled.div`
  padding: 24px 50px;
  text-align: center;
`;

interface ContactInfo {
  id: string;
  domain: string;
  icon: React.FC;
}

const contacts: ContactInfo[] = [
  {
    id: "github",
    domain: constants.GITHUB_URL,
    icon: GithubOutlined,
  },
  {
    id: "linkedin",
    domain: constants.LINKEDIN_URL,
    icon: LinkedinOutlined,
  },
];

const Foot = () => {
  const Icons = () => (
    <div>
      {contacts.map((contact) => (
        <Button
          key={contact.id}
          type="text"
          href={contact.domain}
          icon={<contact.icon />}
          size="large"
        />
      ))}
    </div>
  );
  return (
    <FootWrapper>
      <Icons />
    </FootWrapper>
  );
};

export default Foot;
