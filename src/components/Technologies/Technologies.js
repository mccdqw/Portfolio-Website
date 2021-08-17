import React from 'react';
import { DiBitbucket, DiCss3Full, DiFirebase, DiHtml5, DiHtml5Multimedia, DiJava, DiMsqlServer, DiMysql, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies 
    </SectionText>
    <List>
      <ListItem>
        <div>
          <DiReact size="3rem"></DiReact>
          <DiHtml5 size="3rem"></DiHtml5>
          <DiCss3Full size="3rem"></DiCss3Full>
        </div>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js<br />
            HTML<br />
            CSS          
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiMsqlServer size="3rem"></DiMsqlServer>  
          <DiMysql size="3rem"></DiMysql>
        </div>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Microsoft SQL Server<br />
            MySQL <br />
            ASP.Net         
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiJava size="3rem"></DiJava> 
          <DiPython size="3rem"></DiPython>
        </div>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Java<br />
            C#<br />
            Python         
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
