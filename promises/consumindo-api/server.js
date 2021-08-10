const axios = require('axios')

const api = axios.create({
    //baseURL : "http://files.cod3r.com.br/curso-js/funcionarios.json"
    baseURL :  "https://servicodados.ibge.gov.br/api/v2/censos/nomes/"
})

/*api.get()
    .then(data => {
        console.log(data)
    })
    .catch(erro => {
        console.log(erro)
    })*/

var nome = "antonio"

const pegaPessoas = async () => {
    try {
        const {data} = await api.get(`/${nome}`)
        return data
        console.log(data)
    } catch(err) {
        return err
    }
}

const filtraPessoas =  async(frequencia) => {
    try {
        const pessoas = await pegaPessoas()

        const pessoasPorPais = pessoas.map(element => {
            return element
        })

        const pessoaFrequencia = pessoasPorPais.filter(pessoa => {
            pessoa.frequencia <= 100
        });
        console.log(pessoaFrequencia)
    } catch (error) {
        console.error(error)
    }
}

filtraPessoas('Angola')
//pegaPessoas()