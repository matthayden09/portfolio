import React, { Component } from 'react'
import Container from '../components/container'
import Row from '../components/row'
import Column from '../components/container'
import Project from '../components/project'
import projects from '../projects.json'



class Home extends Component {
    state = { projects };
    render() {
        return (
            <Container>
                <Row>
                    <Column className="col">
                        {this.state.projects.map(project =>(
                        <Project 
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        deployed={project.deployed}
                        github={project.github}
                        />
                        ))}
                    </Column>
                    <Column className="col">
                        <Project />
                    </Column>
                </Row>
            </Container>
        )
    }
}


export default Home