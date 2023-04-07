# api-petShop
api para cadastro de petShop desenvolvida durante bootcamp de nodejs 
# rotas
__GET /proprietario__  
retorna todos os proprietários cadastrados  
__GET /proprietario/:id__  
retorna um proprietário com base no id  
__DELETE /proprietario/:id__  
deleta o proprietário com base no id  
__PUT /proprietario__  
atualiza dados do proprietário com base no id
__POST /animal__  
cria um novo animal e vincula à um proprietário  
__GET /animal__  
retorna todos os animais cadastrados  
__GET /animal?proprietarioId=__  
retorna todos os animais vinculados a um proprietário  
__GET /animal/:id__  
retorna dados do animal com base no id  
__DELETE /animal/:id__  
deleta um animal cadastrado com base no id  
__PUT /animal__  
atualiza cadastro de um animal com base no id  
__POST /servico__  
cadastra serviço para determinado animal  
__GET /servico__  
retorna todos os serviços cadastrados  
__GET /servico?proprietarioId=__  
retorna todos os serviços cadastrados para determinado proprietário  
__GET /servico/:id__  
retorna um serviço com base no id  
__DEL /servico/:id__  
deleta um serviço com base no id  
__PUT /servico__  
atualiza um serviço com base no id  
