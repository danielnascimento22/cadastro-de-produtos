class Produto{
    constructor(){
        this.Id = 1;
        this.arrayProdutos = [];
    }

    Adicionar(){
       let produto = this.lerDados()
       if(this.Validar(produto) == true) {
        this.Salvar(produto)
       }
       this.listar()
       this.Cancelar()

       
    }

    lerDados(){
       let produto = {}

       produto.Id = this.Id;
       produto.nomeProduto = document.getElementById('pdnome').value
       produto.precoProduto = document.getElementById('pdpreco').value

       return produto
    }

    Validar(produto){
        let msg = '';

        if(produto.nomeProduto == ''){
            msg += "Por Favor digite o nome do produto! \n"
        }

        if(produto.precoProduto == ''){
            msg += "Por favor digite o preço do produto!"
        }

        if(msg != ''){
            alert(msg)
            return false
        }
        return true
    }

    Salvar(produto){
        this.arrayProdutos.push(produto)
        this.Id++;
    }

    listar(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = '';
        for(let i = 0; i < this.arrayProdutos.length; i++){

            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nomeProduto = tr.insertCell();
            let td_precoProduto = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].Id;
            td_nomeProduto .innerText = this.arrayProdutos[i].nomeProduto;
            td_precoProduto.innerText = this.arrayProdutos[i].precoProduto;
            let imagem = document.createElement('img')
            imagem.src = 'imagens/del.svg'
            imagem.style.cursor ='pointer';

            imagem.setAttribute("onclick", "produto.Deletar("+this.arrayProdutos[i].Id+")");

            
            td_del.appendChild(imagem)
    }
    }

    Cancelar(){
        document.getElementById('pdnome').value = ''
        document.getElementById('pdpreco').value = ''
    }

    Deletar(Id){
        let tbody = document.getElementById('tbody')
        for (let i =0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].Id == Id){
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i)
            }
        }
        alert('O produto foi apagado com sucesso!')
    }


  
    }
    


var produto = new Produto();