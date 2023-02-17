import styles from './Project.module.css';
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

function Project() {

    const { id } = useParams()
    const [ project, setProject ] = useState([])
    const [ showProjectForm, setShowProjectForm ] = useState(false)
 
    useEffect(() => {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json()).then((data) => {
            setProject(data)
        }).catch(err => console.log(err))

    }, [id])

    function editPost(project) {
        if (project.budget < project.yui) {
            
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(project),
        }).then(resp => resp.json()).then((data) => {})
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        <div>
                            <h1>Projeto: {project.name}</h1>
                            <button onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.form}>
                                    <p>
                                        <span>Categoria: </span>  {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de orçamento: </span> R$ {project.budget}
                                    </p>
                                    <p>
                                        <span>Total de orçamento: </span> R$ {project.yui}
                                    </p>
                                </div>
                            ) : (
                                <div>Detalhes do projeto</div>
                            )}
                        </div>
                    </Container>
                </div>
            ): (
                <Loading />
            )}
        </>
    )
}

export default Project