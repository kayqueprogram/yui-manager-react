

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input type="text" placeholder="Insira o nome do projeto" text="Nome do projeto" name="name"/>
            <Input type="number" placeholder="Insira o orçamento do projeto" text="Orçamento" name="budget"/>
            <Select name="category_id" text="Selecione a categoria" />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm