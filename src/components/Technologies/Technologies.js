import React from 'react';
import { DiBitbucket, DiCss3Full, DiDocker, DiFirebase, DiHtml5, DiHtml5Multimedia, DiJava, DiMongodb, DiMsqlServer, DiMysql, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <br />
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies, and 
      am eager to learn more as I grow as a software developer.
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
          <DiMysql size="3rem"></DiMysql>
        </div>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Microsoft SQL Server<br />
            SQL/MySQL <br />
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
            Python<br />
            C#         
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiDocker size="3rem"></DiDocker> 
          <DiMongodb size="3rem"></DiMongodb>
        </div>
        <ListContainer>
          <ListTitle>Technology to Learn</ListTitle>
          <ListParagraph>
            Docker/Kubernetes<br />
            MongoDB<br />
            C++         
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem style="skillsToLearn">
        <ListContainer>
          <ListTitle>Skills to Learn</ListTitle>
          <ListParagraph>
            AI/Machine Learning<br />
            Blockchain<br />
            Algorithmic Trading         
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>  
          <DiMsqlServer size="3rem"></DiMsqlServer>
        </div>
        <ListContainer>
          <ListTitle>Currently Learning</ListTitle>
          <ListParagraph>
            Microsoft SQL Server<br />
            ASP.Net<br />
            Options Trading         
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
