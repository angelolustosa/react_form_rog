import React, { useState } from 'react'

export const UsuarioForm = () => {

    const [nome, setNome] = useState('')

    const  submitForm = (event) => {
        event.preventDefault()
        console.log('submit', nome)
    }

    const atualizarValor = (event) => {
        console.log(event.target.value);

        setNome(event.target.value)

    }
    return (
        <div className='container'>

            <h2>Cadastro de Usuário</h2>

            <form className="row g-3" onSubmit={submitForm}>
                <div className="col-12">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="nome" placeholder="Digite o nome" 
                    value={nome} onChange={atualizarValor}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="senha" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="senha" />
                </div>


                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    )
}
