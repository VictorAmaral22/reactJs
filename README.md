# Estudos de ReactJs

### Primeiros passos
A primeira coisa que precisamos fazer é digitar o comando

`npx create-react-app <nomedoprojeto>`

Isso irá instalar o ReactJs. Depois basta digitar o comando

`npm start`

E a sua aplicação começará a funcionar em http://localhost:3000
  
### Importando o React
O `import React from 'react'` é necessário quando usamos Jsx e é essencial para trabalharmos com React. Sempre ao início de seus arquivos .js insira o seguinte:
```
import React from 'react'
import ReactDOM from 'react-dom'
```

### Componentes e como exportá-los
Podemos utilizar componentes, frações do código que podem ser reutilizadas em várias partes diferentes da aplicação. Primeiro criamos uma pasta chamada `components` e nela adicionamos arquivos .jsx ou .js com os nossos componentes.

Um exemplo de componente seria assim:
```
function Primeiro() {
    return (    
        <div>        
            <h1>Primeiro Componente</h1>
            <h2>Exemplo de um componente</h2>
        </div>
    )    
}

export default Primeiro
```

### JSX e simplificando a sintaxe
Quando usamos elementos JSX com React, devemos enviá-los ao navegador dentro de um único objeto JSX

```
<div>        
    <h1>Primeiro Componente</h1>
    <h2>Exemplo de um componente</h2>
</div>
```

Se não quiseres usar divs, uma alternativa é utilizar as tags vazias `<></>` ou utilizando `<React.Fragment></React.Fragment>` e podemos utilizar Arrow functions para deixar o código ainda mais clean.

```
export default () =>
        <React.Fragment>
            <h1>Primeiro Componente</h1>
            <h2>Exemplo de um componente</h2>
        </React.Fragment>
```
