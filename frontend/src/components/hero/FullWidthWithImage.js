import React, { useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import imgs from "../../images/HomePage.jpg";
import Header, {
  LogoLink,
  NavLinks,
  NavLink as NavLinkBase,
} from "../headers/light.js";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { getsearch } from "store/searchSlice";
import { useState } from "react";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;
// const RightColumn = styled.div`
//   background-image: url("https://www.google.com/search?q=urban+company+jpg+image&tbm=isch&ved=2ahUKEwiCpKPt_aX7AhUqLrcAHc_UAeIQ2-cCegQIABAA&oq=urban+company+jpg+image&gs_lcp=CgNpbWcQAzoECCMQJzoFCAAQgAQ6BAgAEEM6BggAEAgQHjoHCAAQgAQQGFDEAVjGH2CbImgAcAB4AIAB6gGIAdoMkgEGMC4xMC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=cSxuY8KnJqrc3LUPz6mHkA4&bih=753&biw=1440#imgrc=ZOZqmztUudKN-M");
//   ${tw`bg-green-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
// `;

const RightColumn = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-green-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`,
]);

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

const Actions = styled.div`
  ${tw`mb-8 lg:mb-0`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-primary-500 text-gray-100 hover:bg-primary-700`}
  }
  .secondaryAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800`}
  }
`;

export default ({
  navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">Home</NavLink>
      <NavLink href="#">Blog</NavLink>
      <NavLink href="/login">Login/Signup</NavLink>
    </NavLinks>,
  ],
  heading = (
    <>
      Home services, on demand.
      <wbr />
      <br />
    </>
  ),
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  primaryActionUrl = "#",
  primaryActionText = "Sign Up",
  secondaryActionUrl = "#",
  secondaryActionText = "Search",
}) => {
  const dispatch = useDispatch();
  const [drawer, setDrawer] = useState(false);
  const data = useSelector((state) => state?.search?.getdata);
  useEffect(() => {
    dispatch(getsearch());
  }, []);
  
  const newdata = data?.map((item,index)=>item?.region);
  console.log("Data", newdata)
  
  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <a href={primaryActionUrl} className="action primaryAction">
                {primaryActionText}
              </a>
              <Autocomplete
                disablePortal
                 key={Math.random()}
                id="combo-box-demo"
                options={newdata}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                    label="Movie"
                  />
                )}
              />
              {/* <a href={secondaryActionUrl} className="action secondaryAction">
                {secondaryActionText}
              </a> */}
            </Actions>
          </Content>
        </LeftColumn>
        <RightColumn imageSrc={imgs}></RightColumn>
      </TwoColumn>
    </Container>
  );
};
